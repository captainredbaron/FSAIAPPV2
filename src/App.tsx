import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertTriangle,
  Bell,
  Building2,
  Camera,
  ChevronRight,
  Clock3,
  CloudOff,
  FileCheck2,
  FileUp,
  History,
  ListChecks,
  MapPin,
  Mic,
  PlayCircle,
  Send,
  Square,
  Upload,
  Video,
  UserCheck,
  Wifi,
} from 'lucide-react'
import { demoAudit } from './data/demoAudit'
import { foodSafetyChecklist } from './data/foodSafetyChecklist'
import {
  createRemoteAudit,
  updateRemoteFindingStatus,
  uploadEvidenceAndInspect,
} from './lib/auditRepository'
import { isSupabaseConfigured } from './lib/supabase'
import { loadAuditDraft, saveAuditDraft } from './lib/storage'
import type { Audit, Finding, Severity } from './types'
import './App.css'

type View = 'assigned' | 'audit' | 'history'

type AssignedAudit = {
  id: string
  clientName: string
  siteName: string
  location: string
  due: string
  window: string
  type: string
  priority: 'High' | 'Normal'
  sections: number
  estimatedMinutes: number
}

type AuditHistoryItem = {
  id: string
  siteName: string
  date: string
  score: number
  findings: number
  submittedAt: string
  status: 'Submitted' | 'Accepted'
}

const assignedAudits: AssignedAudit[] = [
  {
    id: 'audit-demo-001',
    clientName: 'GWR Pilot Client',
    siteName: 'Al Safa Central Kitchen',
    location: 'Dubai Marina',
    due: 'Today',
    window: '2:00 PM - 4:00 PM',
    type: 'Food safety inspection',
    priority: 'High',
    sections: 12,
    estimatedMinutes: 55,
  },
  {
    id: 'audit-demo-002',
    clientName: 'GWR Pilot Client',
    siteName: 'Palm View Cafe',
    location: 'Jumeirah',
    due: 'Tomorrow',
    window: '10:00 AM - 12:00 PM',
    type: 'Opening hygiene audit',
    priority: 'Normal',
    sections: 9,
    estimatedMinutes: 40,
  },
  {
    id: 'audit-demo-003',
    clientName: 'GWR Pilot Client',
    siteName: 'Warehouse Dispatch Kitchen',
    location: 'Al Quoz',
    due: 'Monday',
    window: '9:00 AM - 11:00 AM',
    type: 'Supplier receiving audit',
    priority: 'Normal',
    sections: 8,
    estimatedMinutes: 35,
  },
]

const auditHistory: AuditHistoryItem[] = [
  {
    id: 'hist-001',
    siteName: 'Swiss Butter - JBR',
    date: '14 May 2026',
    score: 91,
    findings: 3,
    submittedAt: '4:42 PM',
    status: 'Accepted',
  },
  {
    id: 'hist-002',
    siteName: 'Central Production Unit',
    date: '12 May 2026',
    score: 86,
    findings: 6,
    submittedAt: '1:18 PM',
    status: 'Submitted',
  },
  {
    id: 'hist-003',
    siteName: 'Downtown Cafe',
    date: '9 May 2026',
    score: 94,
    findings: 2,
    submittedAt: '11:05 AM',
    status: 'Accepted',
  },
]

function severityClass(severity: Severity) {
  return severity.toLowerCase()
}

function recordingMimeType() {
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4']
  return candidates.find((candidate) => MediaRecorder.isTypeSupported(candidate)) ?? ''
}

function formatRecordingTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainder = seconds % 60
  return `${minutes}:${remainder.toString().padStart(2, '0')}`
}

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<BlobPart[]>([])
  const [activeView, setActiveView] = useState<View>('assigned')
  const [audit, setAudit] = useState<Audit>(() => loadAuditDraft(demoAudit))
  const [selectedAssignment, setSelectedAssignment] = useState(assignedAudits[0])
  const [isInspecting, setIsInspecting] = useState(false)
  const [syncError, setSyncError] = useState<string | null>(null)
  const [evidenceMode, setEvidenceMode] = useState<'camera' | 'voice' | 'video' | 'upload'>('camera')
  const [isRecordingVoice, setIsRecordingVoice] = useState(false)
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const [activeSectionId, setActiveSectionId] = useState(foodSafetyChecklist[0]?.id ?? '')

  const openFindings = audit.findings.filter((finding) => finding.status === 'open')
  const criticalCount = openFindings.filter((finding) => finding.severity === 'Critical').length
  const latestEvidence = audit.evidence.at(-1)
  const selectedSection =
    foodSafetyChecklist.find((section) => section.id === activeSectionId) ?? foodSafetyChecklist[0]
  const totalChecklistItems = foodSafetyChecklist.reduce((total, section) => total + section.items.length, 0)

  const syncLabel = useMemo(() => {
    if (!isSupabaseConfigured) return 'Local draft'
    return navigator.onLine ? 'Live sync' : 'Offline queue'
  }, [])

  useEffect(() => {
    saveAuditDraft(audit)
  }, [audit])

  useEffect(() => {
    if (!isRecordingVoice) return

    const timer = window.setInterval(() => {
      setRecordingSeconds((current) => current + 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isRecordingVoice])

  useEffect(() => {
    return () => {
      mediaRecorderRef.current?.stream.getTracks().forEach((track) => track.stop())
    }
  }, [])

  function startAssignment(assignment: AssignedAudit) {
    setSelectedAssignment(assignment)
    setAudit((current) => ({
      ...current,
      id: assignment.id,
      clientName: assignment.clientName,
      siteName: assignment.siteName,
      location: assignment.location,
      status: 'in_progress',
    }))
    setActiveView('audit')
  }

  async function handleFileArray(files: File[]) {
    if (!files.length) return

    setIsInspecting(true)
    setSyncError(null)

    try {
      let targetAuditId = audit.id

      if (isSupabaseConfigured && audit.id.startsWith('audit-demo')) {
        const remoteAuditId = await createRemoteAudit(audit)
        if (remoteAuditId) targetAuditId = remoteAuditId
      }

      const results = await Promise.all(
        files.map((file) => uploadEvidenceAndInspect(file, targetAuditId, selectedSection?.title)),
      )

      setAudit((current) => ({
        ...current,
        id: targetAuditId,
        score: Math.max(0, current.score - results.length * 2),
        evidence: [...current.evidence, ...results.map((result) => result.evidence)],
        findings: [...results.map((result) => result.finding), ...current.findings],
      }))
    } catch (error) {
      setSyncError(error instanceof Error ? error.message : 'Supabase sync failed')
    } finally {
      setIsInspecting(false)
    }
  }

  async function handleFiles(files: FileList | null) {
    await handleFileArray(Array.from(files ?? []))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function startVoiceRecording() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setSyncError('Voice recording is not supported in this browser.')
      return
    }

    try {
      setEvidenceMode('voice')
      setSyncError(null)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mimeType = recordingMimeType()
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined)
      audioChunksRef.current = []

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data)
      }

      recorder.onstop = () => {
        const audioType = recorder.mimeType || mimeType || 'audio/webm'
        const audioBlob = new Blob(audioChunksRef.current, { type: audioType })
        stream.getTracks().forEach((track) => track.stop())
        mediaRecorderRef.current = null
        setIsRecordingVoice(false)

        if (!audioBlob.size) return

        const extension = audioType.includes('mp4') ? 'm4a' : audioType.includes('ogg') ? 'ogg' : 'webm'
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const file = new File([audioBlob], `voice-note-${timestamp}.${extension}`, {
          type: audioType,
        })

        void handleFileArray([file])
      }

      mediaRecorderRef.current = recorder
      recorder.start()
      setRecordingSeconds(0)
      setIsRecordingVoice(true)
    } catch (error) {
      setIsRecordingVoice(false)
      setSyncError(error instanceof Error ? error.message : 'Microphone permission was not granted.')
    }
  }

  function stopVoiceRecording() {
    const recorder = mediaRecorderRef.current
    if (!recorder || recorder.state === 'inactive') return
    recorder.stop()
  }

  function updateFindingStatus(id: string, status: Finding['status']) {
    setAudit((current) => ({
      ...current,
      findings: current.findings.map((finding) =>
        finding.id === id ? { ...finding, status } : finding,
      ),
    }))

    void updateRemoteFindingStatus(id, status).catch((error) => {
      setSyncError(error instanceof Error ? error.message : 'Finding sync failed')
    })
  }

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Auditor navigation">
        <div className="brand-lockup">
          <img src="/brand/gwr-logo.png" alt="GWR Consulting" />
          <div>
            <strong>GWR Auditor</strong>
            <span>Food safety field app</span>
          </div>
        </div>

        <nav className="rail-nav">
          <button
            className={activeView === 'assigned' ? 'active' : ''}
            type="button"
            onClick={() => setActiveView('assigned')}
          >
            <ListChecks size={18} />
            Assigned
          </button>
          <button
            className={activeView === 'audit' ? 'active' : ''}
            type="button"
            onClick={() => setActiveView('audit')}
          >
            <Camera size={18} />
            Audit
          </button>
          <button
            className={activeView === 'history' ? 'active' : ''}
            type="button"
            onClick={() => setActiveView('history')}
          >
            <History size={18} />
            History
          </button>
        </nav>

        <div className="auditor-card">
          <UserCheck size={18} />
          <div>
            <strong>Assigned to me</strong>
            <span>3 open audits today</span>
          </div>
        </div>

        <div className="offline-panel">
          <CloudOff size={18} />
          <div>
            <strong>{isSupabaseConfigured ? 'Backend ready' : 'Local prototype'}</strong>
            <span>{syncLabel}</span>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Auditor PWA</p>
            <h1>{activeView === 'audit' ? audit.siteName : 'My food safety audits'}</h1>
            <div className="site-meta">
              <span>
                <MapPin size={15} />
                {activeView === 'audit' ? audit.location : 'Assigned route'}
              </span>
              <span>
                <Wifi size={15} />
                {syncLabel}
              </span>
              <span>
                <Clock3 size={15} />
                {selectedAssignment.window}
              </span>
            </div>
          </div>
          <button className="icon-button" type="button" aria-label="Open alerts">
            <Bell size={19} />
          </button>
        </header>

        {activeView === 'assigned' && (
          <section className="assigned-view" aria-label="Assigned audits">
            <div className="section-heading">
              <p className="eyebrow">Queue</p>
              <h2>Audits assigned to you</h2>
            </div>

            <div className="assignment-list">
              {assignedAudits.map((assignment) => (
                <article className="assignment-card" key={assignment.id}>
                  <div className="assignment-main">
                    <div className="assignment-icon">
                      <Building2 size={21} />
                    </div>
                    <div>
                      <div className="assignment-title">
                        <h3>{assignment.siteName}</h3>
                        <span className={`priority ${assignment.priority.toLowerCase()}`}>
                          {assignment.priority}
                        </span>
                      </div>
                      <p>{assignment.type}</p>
                      <div className="assignment-meta">
                        <span>{assignment.location}</span>
                        <span>{assignment.due}</span>
                        <span>{assignment.window}</span>
                        <span>{assignment.sections} sections</span>
                      </div>
                    </div>
                  </div>
                  <button className="primary compact" type="button" onClick={() => startAssignment(assignment)}>
                    <PlayCircle size={18} />
                    Start
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeView === 'audit' && (
          <>
            <section className="audit-summary">
              <div>
                <p className="eyebrow">Active audit</p>
                <h2>{selectedAssignment.type}</h2>
                <p className="muted">
                  {foodSafetyChecklist.length} checklist sections, {totalChecklistItems} checklist items.
                </p>
              </div>
              <div className="summary-metrics">
                <div>
                  <span>Score</span>
                  <strong>{audit.score}</strong>
                </div>
                <div>
                  <span>Open</span>
                  <strong>{openFindings.length}</strong>
                </div>
                <div>
                  <span>Critical</span>
                  <strong>{criticalCount}</strong>
                </div>
              </div>
            </section>

            <section className="audit-layout">
              <div className="capture-panel">
                <div className="section-heading compact">
                  <p className="eyebrow">Evidence</p>
                  <h2>Capture photos during the audit</h2>
                </div>

                <input
                  ref={fileInputRef}
                  className="hidden-input"
                  type="file"
                  accept={
                    evidenceMode === 'voice'
                      ? 'audio/*'
                      : evidenceMode === 'video'
                        ? 'video/*'
                        : evidenceMode === 'upload'
                          ? 'image/*,video/*,audio/*'
                          : 'image/*'
                  }
                  capture={evidenceMode === 'camera' || evidenceMode === 'video' ? 'environment' : undefined}
                  multiple
                  onChange={(event) => void handleFiles(event.currentTarget.files)}
                />

                <div className="camera-frame" aria-label="Photo capture preview">
                  {latestEvidence?.kind === 'image' ? (
                    <img
                      className="evidence-preview"
                      src={latestEvidence.previewUrl}
                      alt="Latest evidence"
                    />
                  ) : latestEvidence?.kind === 'video' ? (
                    <video className="evidence-preview" src={latestEvidence.previewUrl} muted controls />
                  ) : latestEvidence?.kind === 'audio' ? (
                    <div className="audio-preview">
                      <Mic size={42} />
                      <strong>{latestEvidence.fileName}</strong>
                      <audio src={latestEvidence.previewUrl} controls />
                    </div>
                  ) : (
                    <div className="placeholder-mark">
                      <Camera size={42} />
                      <span>Photo, video, or voice evidence preview</span>
                    </div>
                  )}
                  <div className="target-box">
                    <span>{latestEvidence?.area ?? selectedSection?.title ?? 'Current audit area'}</span>
                  </div>
                  <div className="risk-chip">
                    <AlertTriangle size={16} />
                    {isInspecting ? 'Analyzing evidence' : 'AI check ready'}
                  </div>
                  {isRecordingVoice && (
                    <div className="recording-strip" role="status">
                      <span />
                      Recording voice note {formatRecordingTime(recordingSeconds)}
                    </div>
                  )}
                </div>

                {syncError && <p className="sync-error">{syncError}</p>}

                <div className="capture-actions">
                  <button
                    className="primary"
                    type="button"
                    onClick={() => {
                      setEvidenceMode('camera')
                      requestAnimationFrame(() => fileInputRef.current?.click())
                    }}
                  >
                    <Camera size={18} />
                    Photo
                  </button>
                  <button
                    className="secondary"
                    type="button"
                    onClick={() => {
                      setEvidenceMode('video')
                      requestAnimationFrame(() => fileInputRef.current?.click())
                    }}
                  >
                    <Video size={18} />
                    Video
                  </button>
                  <button
                    className={isRecordingVoice ? 'recording-button' : 'secondary'}
                    type="button"
                    onClick={() => {
                      if (isRecordingVoice) {
                        stopVoiceRecording()
                      } else {
                        void startVoiceRecording()
                      }
                    }}
                  >
                    {isRecordingVoice ? <Square size={18} /> : <Mic size={18} />}
                    {isRecordingVoice ? 'Stop' : 'Voice'}
                  </button>
                  <button
                    className="secondary"
                    type="button"
                    onClick={() => {
                      setEvidenceMode('upload')
                      requestAnimationFrame(() => fileInputRef.current?.click())
                    }}
                  >
                    <Upload size={18} />
                    Upload
                  </button>
                </div>

                <div className="evidence-list" aria-label="Captured evidence">
                  {audit.evidence.length === 0 ? (
                    <p>No evidence attached yet.</p>
                  ) : (
                    audit.evidence.slice(-4).reverse().map((item) => {
                      const Icon = item.kind === 'video' ? Video : item.kind === 'audio' ? Mic : item.kind === 'image' ? Camera : FileUp
                      return (
                        <article className="evidence-row" key={item.id}>
                          <span>
                            <Icon size={17} />
                          </span>
                          <div>
                            <strong>{item.fileName}</strong>
                            <small>{item.kind} · {item.synced ? 'synced' : 'local draft'}</small>
                          </div>
                        </article>
                      )
                    })
                  )}
                </div>
              </div>

              <div className="checklist-panel">
                <div className="section-heading compact">
                  <p className="eyebrow">Checklist</p>
                  <h2>Reference sections</h2>
                </div>
                <div className="checklist-list">
                  {foodSafetyChecklist.map((section) => (
                    <button
                      className={`checklist-row ${section.id === selectedSection?.id ? 'active' : ''}`}
                      type="button"
                      key={section.id}
                      onClick={() => setActiveSectionId(section.id)}
                    >
                      <span className="check-icon">
                        <ListChecks size={18} />
                      </span>
                      <span>
                        <strong>{section.title}</strong>
                        <small>{section.items.length} checklist items</small>
                      </span>
                      <ChevronRight size={17} />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {selectedSection && (
              <section className="items-panel">
                <div className="section-heading compact">
                  <p className="eyebrow">Checklist items</p>
                  <h2>{selectedSection.title}</h2>
                  {selectedSection.titleAr && <p className="arabic-title">{selectedSection.titleAr}</p>}
                </div>
                <div className="item-list">
                  {selectedSection.items.map((item, index) => (
                    <article className="item-card" key={item.id}>
                      <div className="item-number">{index + 1}</div>
                      <div>
                        <h3>{item.question}</h3>
                        {item.questionAr && <p className="arabic-copy">{item.questionAr}</p>}
                        {item.guidance && <p className="guidance">{item.guidance}</p>}
                        <div className="answer-row">
                          {item.answers.length > 0 ? (
                            item.answers.map((answer) => (
                              <button type="button" key={answer.label}>
                                {answer.label}
                              </button>
                            ))
                          ) : (
                            <button type="button">Record</button>
                          )}
                          {item.requiresEvidence && <span>Evidence required</span>}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="findings-panel">
              <div className="section-heading compact">
                <p className="eyebrow">Findings</p>
                <h2>Issues captured in this audit</h2>
              </div>
              <div className="finding-list">
                {audit.findings.map((finding) => (
                  <article className="finding-card" key={finding.id}>
                    <div>
                      <span className={`severity ${severityClass(finding.severity)}`}>
                        {finding.severity}
                      </span>
                      <h3>{finding.area}</h3>
                      <p>{finding.issue}</p>
                      <small>{finding.code}</small>
                    </div>
                    <div className="finding-actions">
                      <button
                        className={finding.status === 'accepted' ? 'accepted' : ''}
                        type="button"
                        onClick={() => updateFindingStatus(finding.id, 'accepted')}
                      >
                        Accept
                      </button>
                      <button type="button" onClick={() => updateFindingStatus(finding.id, 'rejected')}>
                        Reject
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="submit-bar">
              <div>
                <strong>Ready when all sections are complete.</strong>
                <span>Submission sends the audit record, photos, and findings to the back office.</span>
              </div>
              <button className="primary" type="button">
                <Send size={18} />
                Submit audit
              </button>
            </section>
          </>
        )}

        {activeView === 'history' && (
          <section className="history-view" aria-label="Audit history">
            <div className="section-heading">
              <p className="eyebrow">History</p>
              <h2>Audits completed by you</h2>
            </div>
            <div className="history-list">
              {auditHistory.map((item) => (
                <article className="history-row" key={item.id}>
                  <div className="history-icon">
                    <FileCheck2 size={20} />
                  </div>
                  <div>
                    <h3>{item.siteName}</h3>
                    <p>{item.date} · submitted {item.submittedAt}</p>
                  </div>
                  <div className="history-score">
                    <strong>{item.score}</strong>
                    <span>{item.findings} findings</span>
                  </div>
                  <span className="status-pill">{item.status}</span>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  )
}

export default App
