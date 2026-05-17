import type { ChecklistSection } from '../types'

export const foodSafetyChecklist = [
  {
    "id": "fs-section-02",
    "title": "Fridges and Freezers",
    "titleAr": "البرادات والثلاجات",
    "items": [
      {
        "id": "fs-section-02-item-001",
        "question": "Fridges, freezers and cold display units are clean and free of mildew (rubber seals, shelves, doors, air vent, etc.)",
        "questionAr": "البرادات والثلاجات وبرادات العرض نظيفة وخالية من أي عفن (المقابض، الأبواب، مراوح التهوئ، الخ...)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Rubber seals should be thoroughly cleaned to prevent dirt accumulation that leads to mold growth and damage of the gaskets",
          "Handles of cooling units should be kept clean & sanitized frequently to avoid bacterial growth resulting in hands contamination",
          "Gaskets should be cleaned regularly to prevent their damage. A small soft brush can be used to allow an easier cleaning",
          "Shelves should be cleaned more often to avoid dirt accumulation that may promote mold growth and contamination of food",
          "Air vents should be cleaned more frequently to avoid dust accumulation on them and prevent its spreading onto stored food items",
          "Air vents should be kept clean to prevent dirt accumulation and contamination of food items placed in the cooling units"
        ]
      },
      {
        "id": "fs-section-02-item-002",
        "question": "Fridges and freezers are properly defrosted and have no ice formation",
        "questionAr": "يتمّ إذابة الجليد عن الثّلّاجات و البرّادات كما ينبغي ولا يتكون الجليد فيها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Whenever ice formation is noticed, cooling units should be defrosted in order to allow a proper air flow in them",
          "Freezers and fridges should be defrosted to prevent ice formation and ensure proper functioning",
          "Fridge should be regularly defrosted whenever ice formation is noticed to ensure proper functioning and cooling of food items"
        ]
      },
      {
        "id": "fs-section-02-item-003",
        "question": "All food in the fridge is below 5°C",
        "questionAr": "إن كافة المواد الغذائية الموجودة في البراد تتعرّض لدرجة حرارة تقل عن خمس درجات مئوية",
        "guidance": "Temperature between 6 and 8.9°C, question should be ticked as N/A and above 8.9°C, it should be ticked as NO",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "The temperature inside fridges should be maintained at 5°C or below to avoid bacterial growth in stored food"
        ]
      },
      {
        "id": "fs-section-02-item-004",
        "question": "All food in the freezer is below -18°C",
        "questionAr": "إن كافة المواد الغذائية الموجودة في الثلاجة تتعرّض لدرجة حرارة تقل عن 18 درجة مئوية تحت الصفر",
        "guidance": "Temperature between -17°C and -14.1°C, question should be ticked as N/A - when -14°C and above it should be ticked as NO / for the ice cream freezer put it as YES until -12°C inclusive (-11.9°C and above should be NO)",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "The temperature inside the freezer should be maintained at -18°C or below for proper storage conditions"
        ]
      },
      {
        "id": "fs-section-02-item-005",
        "question": "Food is stored in an organized manner that prevents cross-contamination (raw food below ready to eat food….)",
        "questionAr": "إن المواد الغذائية والأطعمة تُحفظ بطريقة منظمة تمنع من انتقال التلوث بين الأطعمة (الطعام الني تحت الطعام الجاهز للأكل...)",
        "guidance": "Minor Non-conformity; Deduct here in case of no evidence or no tangible proof of cross-contamination",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ready-to eat food should be stored above raw food to avoid any cross-contamination",
          "Food order should be respected from top to bottom: Ready to eat food, raw fish, raw meat, raw chicken & eggs at the bottom",
          "Raw eggs should be stored on the lowest shelf away from other items to prevent any cross contamination",
          "Employees should be instructed not to place non-sanitized vegetables/fruits above other food items to avoid contamination",
          "Ready to eat frozen food should be placed above frozen raw food inside the freezers to avoid contamination"
        ]
      }
    ]
  },
  {
    "id": "fs-section-03",
    "title": "Personal Hygiene",
    "titleAr": "النظافة الشخصية",
    "items": [
      {
        "id": "fs-section-03-item-001",
        "question": "All employees are in clean and hygienic uniform and hairy hands are covered or washed during the hand washing process",
        "questionAr": "يرتدي جميع الموظفين زياً نظيفاً وصحياً وتتم تغطية شعر اليدين أو يتمّ غسل الأيدي حتّى الكوع في حال عدم تغطية شعر الأيدي",
        "guidance": "Employees who have shaved forearms and/or are wearing sleeves are not required to wash their forearms. If hairy forearms are not washed during the hand washing process, deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Uniforms should be acquired immediately when a new staff is recruited in order not to access kitchen areas wearing daily clothes",
          "Employees should be instructed not to access food preparation areas wearing daily clothes that may bring hazards to food",
          "Management should acquire complete uniforms so that employees don't access kitchen areas wearing daily clothes",
          "Staff should reach for their forearms during hand washing to prevent any risk of physical contamination from hair loss",
          "Employees should be advised to cover their hairy forearms to avoid the risk of physical contamination"
        ]
      },
      {
        "id": "fs-section-03-item-002",
        "question": "No employees' belongings are present on food preparation and storage surfaces. And employees' food is stored separately from customers' food",
        "questionAr": "لا توجد ممتلكات للموظفين موجودة على إعداد الطعام وتخزين الأسطح. ويتم تخزين طعام الموظفين بشكل منفصل عن طعام العملاء",
        "guidance": "Deduct here, if employees are using pens with cap deduct. Don't mention it when employees's food is not labeled as so but the food is not served to clients",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be instructed to store their belongings away from food preparation & storage areas to avoid contamination",
          "Employees should be advised to store their belongings in a designated area away from food (i.e. lockers, boxes)",
          "Employees should not use pens with caps to prevent any physical contamination in case the cap accidentally fell into the food",
          "Staff food should be labeled as so in order to prevent any risk of confusion or misuse",
          "Staff food should be labeled and separated from customers food in order to prevent any confusion or misuse"
        ]
      },
      {
        "id": "fs-section-03-item-003",
        "question": "Staff do not eat, smoke or drink in the food storage or preparation areas",
        "questionAr": "لا يتناول الموظفون الأطعمة ولا يدخنون ولا يتناولون المشروبات داخل الأماكن المخصصة لحفظ المواد الغذائية أو لإعدادها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should not smoke in food preparation areas to prevent any risk of contamination from saliva or from ashes",
          "Employees should be advised not to smoke in food storage areas to prevent any physical or microbiological contamination",
          "Employees should be advised to not to eat & drink in food preparation areas to avoid any risk of contamination",
          "Employees should be advised not to eat & drink in food storage areas to prevent risks of physical or microbial contamination"
        ]
      },
      {
        "id": "fs-section-03-item-004",
        "question": "All male employees are well shaved",
        "questionAr": "يقوم الموظفون الذكور بالحلاقة بشكل جيد",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be well shaved to avoid physical contamination of food from hair falling/loss",
          "Employees should be well shaved to avoid any risk of contamination"
        ]
      },
      {
        "id": "fs-section-03-item-005",
        "question": "Employees are free from illness and do not work with open injuries such as cuts, sores or wounds. In case of injury, wound dressings are used and are clean and waterproof لا وجود للموظفين الذين يعانون من أعراض تشبه أعراض الرشح أو الانفلونزا أو إصابات مفتوحة مثل الجروح و القروح أو الجروح. في حالة الإصابة ، وتستخدم ضمادات الجروح و هي دليل النظيف والمياه",
        "questionAr": "",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Staff must inform the management when having contagious infections & must not be allowed to work with food",
          "When sick, employees should be advised not to handle food to prevent the risk of contamination",
          "Open injuries must be treated & covered with blue & waterproof bandages. Disposable gloves must be worn to prevent contamination"
        ]
      },
      {
        "id": "fs-section-03-item-006",
        "question": "Staff wash their hands in a correct manner",
        "questionAr": "يغسل الموظفين أيديهم بطريقة صحيحة",
        "guidance": "Major Non-Conformity. In case employees closed the tap with a paper towel, then used it for drying their hands, mention it as a comment and tick YES to this question. In case of foaming, do not consider it as wrong, if soap was applied before wetting the hands",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "Employees should wet their hands before applying soap to ensure a proper foaming; thus, to obtain adequate hand washing results",
          "After washing their hands, employees should close the water tap using disposable paper towels to avoid hands’ re-contamination",
          "Employees should thouroughly wash their hands for at least 20 seconds to reduce the bacterial count",
          "Employees should be familiar with the proper hand washing process: soap should be applied first instead of the sanitizer"
        ]
      }
    ]
  },
  {
    "id": "fs-section-04",
    "title": "Food Handling and Food Preparation",
    "titleAr": "معالجة المواد الغذائية وإعداد الأطعمة",
    "items": [
      {
        "id": "fs-section-04-item-001",
        "question": "Liquids and food are placed in food grade containers",
        "questionAr": "توضع السوائل والأطعمة في أوعية مخصصة للمواد الغذائية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Juices & sauces should be stored in thick plastic bottles to prevent any risk of chemical contamination",
          "Mineral water bottles are not intended for multiple uses; therefore, they should not be used to store food items",
          "All food items should be stored in food grade bottles in order to avoid any risk of chemical contamination",
          "Garbage bags are not intended for food storage. They should be replaced with food grade containers"
        ]
      },
      {
        "id": "fs-section-04-item-002",
        "question": "FEFO (First Expired First Out) is respected",
        "questionAr": "يُحترم مبدأ استهلاك المواد الغذائية والأطعمة على أساس الذي تاريخ إنتهاء صلاحيته أولا يُستهلك أولاً",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "FEFO policy should be followed to make sure that older stocks are placed in the front row to avoid the presence of expired food",
          "Staff should follow FEFO policy when storing/using food items to avoid the presence of expired food",
          "When new batches are received or produced, near expiry dates should be brought forward and far expiry dates stored backwards",
          "Supplier should be requested not to send products with different shelf lives in one delivery"
        ]
      },
      {
        "id": "fs-section-04-item-003",
        "question": "No expired food is available",
        "questionAr": "لا وجود للأطعمة المنتهية الصلاحية",
        "guidance": "Critical Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All food items should be regularly checked in order to directly discard expired items",
          "Management should apply a strict monitoring for date labeling to ensure that no expired food items are available",
          "All food items should be constantly checked to directly discard expired items",
          "When giving a secondary shelf life, staff should make sure that the shelf life they are giving does not exceed the original one"
        ]
      },
      {
        "id": "fs-section-04-item-004",
        "question": "Food that requires a shortening of the shelf life after opening is properly labeled and all perishable food and beverages (including ingredients) held for more than 6 hours are date coded within their expected shelf-life limit",
        "questionAr": "يتم وضع بطاقة على المواد الغذائية التي يجب تقصير فترة تخزينها بعد فتحها كما يتم وضع تاريخ صنع كافة المواد الغذائية والأطعمة والمشروبات القابلة للفساد بما في ذلك المكونات التي سوف يتم الاحتفاظ بها لفترة تزيد عن 6 ساعات و يتم تحديد الفترة الزمنية المتوقعة التي يمكن حفظها خلالها",
        "guidance": "Major Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "After opening, shelf-life of milk should be shortened as recommended by the manufacturer or can be labeled & used within 3 days",
          "After opening, shelf life of commercial mayonnaise should be shortened to 1 month",
          "After opening, food & beverages requiring a secondary shelf life should be labeled as so to avoid using spoiled items",
          "When frozen items are stored in the fridge for thawing, they should be labeled with a secondary shortened shelf life",
          "All food items should be date labeled with a production & an expiry date to ensure a proper shelf life monitoring",
          "All food items should be date labeled in order to keep track of their shelf lives and avoid the use of expired food"
        ]
      },
      {
        "id": "fs-section-04-item-005",
        "question": "Food is prepared and handled with clean utensils, gloves and hands",
        "questionAr": "يجري إعداد الأطعمة بواسطة أواني و قفازات وأيدي نظيفة",
        "guidance": "Deduct here if knife is placed between two tables at the bar. Deduct here if clean vegetables are wrapped with paper towels",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food should not come in direct contact with surfaces that are not subject to frequent sanitation to avoid its contamination",
          "Food should not come in direct contact with bottoms of containers to avoid its contamination",
          "After their use, all utensils should be sent for cleaning & should be stored on clean & sanitized surfaces",
          "Staplers should not be used in kitchen to avoid any risk of physical contamination. Sticky labels may be used instead",
          "Employees should be instructed not to sit on food contact surfaces to avoid their contamination",
          "Employees should wear a hairnet that covers all their hair and to cover their hairy forearms to avoid physical contamination"
        ]
      },
      {
        "id": "fs-section-04-item-006",
        "question": "No hot food that has been in Temperature Danger Zone for more than 2 hours is being used // - No cold food that has been in Temperature Danger Zone (TDZ >5°C) for more than 4 hours is being used / Potentially Hazardous Food in temperature danger zone (TDZ) is time monitored",
        "questionAr": "لا يتم استخدام الأطعمة والمواد الغذائية التي تعرّضت لدرجات الحرارة الخطرة لفترة تزيد على ساعتين للطعام الساخن و4 ساعات للطعام البارد / تجري مراقبة الأطعمة والمواد الغذائية التي من المحتمل أن تشكل خطراً لأنها تعرضت لدرجات الحرارة الخطرة من حيث الوقت",
        "guidance": "Critical Non-Conformity; if the quantity of food is relatively small (depending on the use) then put a comment and put this question as N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Potentially hazardous cold food should be time labeled for 4 hours when placed at room temperature to prevent bacterial growth",
          "Potentially hazardous hot food should be time labeled for 2 hours when placed at room temperature to prevent bacterial growth",
          "A small batch should be used to ensure the whole quantity is consumed within 4 (cold) hours or 2 hours (hot)",
          "Employees should be advised to store potentially hazardous food in the fridge when not in use",
          "Employees should be advised to store potentially hazardous food in hot cabinets when not in use"
        ]
      },
      {
        "id": "fs-section-04-item-007",
        "question": "No tangible proof of cross-contamination is available (dripping of raw items on ready to eat food, wrong use of gloves or cutting boards or direct contact of raw and ready to eat food)",
        "questionAr": "لا يوجد إثبات حِسّي على تلوّث إنتقالي (تنقيط أطعمة نيّئة على أطعمة جاهزة للتّقديم، إستعمال الكفوف أو ألواح التّقطيع بشكل خاطىئ أو إتّصال مباشر للأطعمة النّيّئة مع الجاهزة للتّقديم)",
        "guidance": "Critical Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be strictly advised to abide by the color code of cutting boards to prevent cross contamination",
          "An accurate color coding system for cutting boards should be followed and communicated to all employees to prevent contamination",
          "Cutting boards used for clean vegetables should be different from the ones used to cut dirty ones to avoid cross contamination",
          "Employees should be instructed to use different tongs when handling raw and cooked food to prevent cross contamination",
          "Employees should be instructed to use different knives to cut raw and ready to eat food to avoid any risk of cross-contamination",
          "The order inside fridges should be respected to avoid cross-contamination. Ready-to eat food should be stored above raw food"
        ]
      },
      {
        "id": "fs-section-04-item-008",
        "question": "All food is covered (containers in use on peak may be uncovered)",
        "questionAr": "تُغطى كافة الأطعمة والمواد الغذائية .يجوز عدم تغطية الحاويات التي تكون قيد الاستخدام خلال وقت الذروة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Off peak time, all food should be properly covered to prevent their contamination"
        ]
      },
      {
        "id": "fs-section-04-item-009",
        "question": "Ice scoop is stored not in contact with ice and not in a manner that might contaminate it",
        "questionAr": "تُحفظ ملعقة الثلج بعيداً عن الثلج وبطريقة تمنع تعرّضها للتلوث",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ice scoop should be properly stocked with its handle not touching the ice to prevent contaminating ice cubes",
          "Ice scoop should be placed out of the ice in a clean & sanitized container",
          "Ice scoop should not be stored on top of the ice machine to avoid its contamination; it can be stored in a sanitized container"
        ]
      },
      {
        "id": "fs-section-04-item-010",
        "question": "Ice cream scoop is properly stored",
        "questionAr": "تُحفظ ملعقة البوظة كما ينبغي",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Between uses, ice cream scoops should be stored under potable running water",
          "When ice cream scoop is kept in water, the scoop and solution should be changed every maximum 4 hours - preferably time labeled",
          "Ice cream scoops can be placed on a clean plate and stored inside the freezer between uses"
        ]
      },
      {
        "id": "fs-section-04-item-011",
        "question": "Utensils are placed with their handles out of the food so that employees don't touch the food with their hands",
        "questionAr": "توضع مقابض الأواني خارج الأطعمة والمواد الغذائية كي لا يلمس الموظفون الأطعمة والمواد الغذائية بواسطة أيديهم",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Scoops should not be kept inside food containers to prevent food contamination when reaching for the handle",
          "Scoops should be pricked with handle up to avoid contaminating food from hands when reaching for the handle",
          "Cups with no handles should not be used to portion food to prevent contamination"
        ]
      },
      {
        "id": "fs-section-04-item-012",
        "question": "No dented or damaged goods are present",
        "questionAr": "لا وجود للبضائع والسلع المنبعجة أو التالفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dented cans should be discarded upon receiving to avoid any risk of misuse",
          "Dented cans should be placed in a designated area for returned goods and labeled as so to avoid any risk of misuse",
          "Samples of cans should be checked upon receiving. Those that are dented must be rejected",
          "Items that are not intended to be served to clients should be clearly labeled as so to avoid any confusion"
        ]
      }
    ]
  },
  {
    "id": "fs-section-05",
    "title": "Cleaning",
    "titleAr": "التنظيف",
    "items": [
      {
        "id": "fs-section-05-item-001",
        "question": "All shelves and storage units (cupboards, drawers…) are clean",
        "questionAr": "إن كافة الرفوف ووحدات الحفظ والتخزين كالخزائن والدروج نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Shelves should be cleaned on a regular basis to prevent dirt accumulation & pests infestation",
          "All storage units should be cleaned on a regular basis to prevent dirt accumulation and pests infestation"
        ]
      },
      {
        "id": "fs-section-05-item-002",
        "question": "Clean utensils and containers are placed in a manner that prevents their contamination",
        "questionAr": "توضع أواني المطبخ والحاويات النظيفة بطريقة تمنع تلوثها",
        "guidance": "If blender has accumulated water inside deduct in here",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All clean deep containers should be stored inverted to properly drain from water & to avoid bacterial growth due to humidity",
          "Cleaned cutting boards should be stored on stainless steel stands to allow proper drying process and to prevent bacterial growth",
          "Clean cups and utensils should not come in contact with any unclean or dirty containers to avoid any risk of contamination",
          "Cutlery holder should be kept clean and free from foreign objects to avoid contaminating washed utensils",
          "Utensils should be stored in a clean perforated cutlery holder to avoid their contamination"
        ]
      },
      {
        "id": "fs-section-05-item-003",
        "question": "All work surfaces are clean and sanitized",
        "questionAr": "إن كافة أسطح العمل نظيفة ومعقمة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Work surfaces should be cleaned & sanitized every maximum 4 hrs of continuous use to prevent bacterial growth"
        ]
      },
      {
        "id": "fs-section-05-item-004",
        "question": "Hard to clean areas (exposed pipes, hidden corners…) are treated and cleaned correctly",
        "questionAr": "تتم معالجة الأماكن التي يصعب تنظيفها مثل الأنابيب المكشوفة، الزوايا المخفية بالشكل الصحيح",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Machines that are broken/unused should be either discarded or should be cleaned to avoid old food residues from attracting pests",
          "Stewards should be instructed to clean hard to reach areas to avoid dirt accumulation that may lead to pests infestation",
          "Attention should be given to hard to clean areas to prevent dirt accumulation & pests infestation"
        ]
      },
      {
        "id": "fs-section-05-item-005",
        "question": "Wiping towels (chamex) are soaked in sanitizing solution or soap when not in use",
        "questionAr": "ان فوطة مسح الطاولات يجب ان تنقع بمعقم بين الاستعمال",
        "guidance": "Minor Non-conformity, Wiping towels can be kept outside of solution to be changed every 4 hours. Time monitoring should be properly tracked (i.e. color coding by hours) | Sponges do not have to be kept soaked in soap solution, they should be reasonably well maintained and clean. Sponges can be squeezed then stored out of solution in a clean and/or dry place // If chemical containers are not labeled as so at the bar, please deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "After use, wiping towels should be cleaned then soaked in a sanitizing solution to decrease bacterial count",
          "Wiping towels, if kept out of solution should be time monitored and changed every 4 hours",
          "The solution should be changed when it gets murky to avoid bacterial growth",
          "Color-coded wiping towels may be used to ensure that they are replaced every 4 hours and sent for sanitation"
        ]
      },
      {
        "id": "fs-section-05-item-006",
        "question": "Ice machine is clean and free of mildew",
        "questionAr": "إن مكنات صنع الثلج نظيفة وخالية من العفن",
        "guidance": "Minor Non-conformity, Deduct here if scale is noticed inside the ice machine",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ice machines should be frequently cleaned and treated with a de-scaler in order to avoid scale formation",
          "Ice machines should be frequently cleaned to prevent mildew formation resulting in ice contamination"
        ]
      },
      {
        "id": "fs-section-05-item-007",
        "question": "Drink machines, cutting boards and other machines (whipped cream…) are cleaned and sanitized frequently enough",
        "questionAr": "إن مكنات المشروبات وغيرها من المكنات: الكريمة المخفوقة.. نظيفة ومعقمة تكراراً وبما فيه الكفاية",
        "guidance": "Minor Non-conformity; Including blenders and steamers",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Nozzles should be cleaned & sanitized regularly by soaking them in CO2 / hot water to avoid dirt accumulation & bacterial growth",
          "Blenders should be manually washed with soap and then sanitized every maximum 4 hours of their use to prevent bacterial growth",
          "Machines and blenders should be cleaned and sanitized after use to prevent residues accumulation and bacterial multiplication",
          "Milk steamer should be thoroughly cleaned to avoid the presence of residues that might contaminate drinks prepared afterwards"
        ]
      },
      {
        "id": "fs-section-05-item-008",
        "question": "Garnishes (lemon, mint, carrots…) are properly sanitized and properly stored",
        "questionAr": "يجري تنظيف وتعقيم الزينة (مثل الليمون والنعناع والجزر...) كما ينبغي ويتم حفظها بالطريقة المناسبة",
        "guidance": "Major Non-conformity, Answer by YES, if the fruits and vegetables are not rinsed with water after sanitation - even if the process requires it",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garnishes should be cleaned and sanitized to prevent food poisoning",
          "Sanitizer should be less diluted in water to obtain an appropriate concentration to reduce the presence of bacteria",
          "Sanitizer should be more diluted in water to avoid any risk of chemical contamination",
          "The dispenser should be fixed to pump a sanitizer concentration within the acceptable range to ensure proper sanitation process",
          "Employees should follow the manufacturer's instructions when mixing the sanitizer to ensure a proper sanitation",
          "Employees should follow the manufacturer's instructions for the sanitizer’s contact time to ensure a proper sanitation process"
        ]
      },
      {
        "id": "fs-section-05-item-009",
        "question": "Dishwashing sink is clean and is well stocked",
        "questionAr": "إن المكان المخصص لغسل الأطباق نظيف و مجهز بشكل جيد",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dishwashing sink should be kept clean to prevent dirt accumulation and insects infestation"
        ]
      },
      {
        "id": "fs-section-05-item-010",
        "question": "Hand washing station is well stocked (liquid soap, paper towels) and clean",
        "questionAr": "إن المكان المخصص لغسل اليدين مجهز بشكل جيد (بالصابون السائل والمناشف الورقية) ونظيف",
        "guidance": "Minor Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hand washing sinks should be always equipped with liquid soap and disposable paper towels to allow proper hand washing"
        ]
      },
      {
        "id": "fs-section-05-item-011",
        "question": "Garbage cans are clean and placed away from food, food contact surfaces and food containers",
        "questionAr": "إن سلات المهملات نظيفة و بعيدة عن الأطعمة والمواد الغذائية والأسطح التي تلامس الأطعمة والمواد الغذائية وحاويات الأطعمة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garbage bag should be changed whenever it is 3/4 full to avoid garbage from overflowing and to prevent the attraction of pests",
          "Garbage cans should be covered to avoid the attraction of insects and garbage falling out of the bin",
          "Garbage cans should always be equipped with disposable plastic bags to avoid dirt accumulation and the attraction of pests",
          "Garbage bins should be placed away from food contact surfaces to prevent the risk of cross-contamination"
        ]
      },
      {
        "id": "fs-section-05-item-012",
        "question": "Microwave is clean (off peak)",
        "questionAr": "إن الميكروويف نظيف (خارج أوقات الذروة)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The microwave should be thoroughly cleaned and employees should make sure to reach its internal top to avoid food contamination"
        ]
      }
    ]
  },
  {
    "id": "fs-section-06",
    "title": "Chicha Area",
    "titleAr": "منطقة الارغيلة",
    "items": [
      {
        "id": "fs-section-06-item-001",
        "question": "Chicha area (cupboards, walls, ​ shelves, exposed pipes,​ floors, etc…) is reasonably clean",
        "questionAr": "",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Chicha area should be kept clean to prevent the risk of pests infestation",
          "Shelves at the chicha area should be kept clean to prevent insects infestation",
          "Cupboards at the chicha area should be kept clean to prevent insects infestation",
          "Attention should be given to hard to clean areas during cleaning to avoid dirt accumulation and prevent pests infestation"
        ]
      },
      {
        "id": "fs-section-06-item-002",
        "question": "No Possible contaminant is stored next to chicha parts (food, chemicals, personal belongings…)",
        "questionAr": "لا يتم تخزين الملوثات المحتملة بالقرب من أجزاء الارغيلة كالمواد الغذائية و المنظفات و الأغراض الشخصيّة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Chemical bottles should be placed away from chicha parts and surfaces to prevent chemical hazards",
          "Employees should store their belongings away from chicha parts and surfaces to prevent any risk of contamination",
          "Food items should not be stored next to chicha parts and surfaces to avoid any contamination"
        ]
      },
      {
        "id": "fs-section-06-item-003",
        "question": "Wiping towels (chamex) and sponges are clean enough",
        "questionAr": "إن فوطة مسح الطاولات والإسفنج نظيفة بما فيه الكفاية",
        "guidance": "Deduct only if the towels, etc. are dirty",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Wiping towels should be kept clean to prevent insects infestation",
          "Sponges should be cleaned after use to prevent insects infestation"
        ]
      },
      {
        "id": "fs-section-06-item-004",
        "question": "All garbage cans are clean",
        "questionAr": "إن سلات المهملات نظيفة",
        "guidance": "It is OK for the garbage bin in the chicha section to be uncovered and non-foot activated",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garbage cans should be kept clean and covered to prevent insects infestation",
          "Garbage cans should be cleaned on a daily basis at closing time to prevent dirt accumulation & pests infestation"
        ]
      }
    ]
  },
  {
    "id": "fs-section-08",
    "title": "Storage Areas",
    "titleAr": "الأماكن المخصصة لحفظ الأطعمة والمواد الغذائية",
    "items": [
      {
        "id": "fs-section-08-item-001",
        "question": "Dry store is clean (clean floors and walls, no dust on shelves or goods, …)",
        "questionAr": "إن المخزن نظيف :الأرضيات والجدران نظيفة، لا يوجد غبار على الرفوف أو على السلع والبضائع",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The floor of the dry store should be kept clean to prevent the risk of pests infestation",
          "Shelves should be cleaned on a regular basis to avoid dirt accumulation and food contamination"
        ]
      },
      {
        "id": "fs-section-08-item-002",
        "question": "Dry store door and windows are closed",
        "questionAr": "إن أبواب ونوافذ المخزن مغلقة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The door of the dry store should be kept closed to prevent any risk of pests infestation",
          "Windows of the dry store should be closed or equipped with a mosquito net to prevent the risk of pests infestation"
        ]
      },
      {
        "id": "fs-section-08-item-003",
        "question": "Dry store's humidity is within the acceptable range (60 - 65%)",
        "questionAr": "60-65% تتراوح نسبة الرطوبة داخل المخزن ضمن النطاق المقبول ما بين",
        "guidance": "If it is between 65 and 67%, answer by N/A to this question. If it is more than 67% answer by NO to this question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Cause of humidity should be fixed to avoid mildew formation and spoilage of stored goods",
          "A dehumidifier can be installed to reduce the humidity and avoid food spoilage"
        ]
      },
      {
        "id": "fs-section-08-item-004",
        "question": "All food and all food containers are stored at least 15cm off the floor on rust proof racks and away from walls (if there is no space, items may be on the floor)",
        "questionAr": "تُحفظ كافة الأطعمة والمواد الغذائية وحاويات الأطعمة والمواد الغذائية فوق الأرض على ارتفاع لا يقل عن 15 سم على رفوف مقاومة للصدأ وبعيداً عن الجدران وفي حال لم يكن هناك أي مكان، يجوز وضع المواد على الأرض",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food items should be stored 15 cm off the floor on plastic racks to facilitate the cleaning process & avoid pests infestation",
          "Items should be stored 15 cm off the floor on plastic racks to facilitate the cleaning process & avoid pests infestation",
          "Items should be stored to a minimum of 15 cm off the floor on racks, shelves or pallets to allow an easier cleaning process",
          "Items should be stored 15 cm off the floor on plastic racks to avoid any hazard (e.g.: pests) from contaminating them"
        ]
      },
      {
        "id": "fs-section-08-item-005",
        "question": "FEFO (First Expired First Out) is respected",
        "questionAr": "يُحترم مبدأ استهلاك المواد الغذائية والأطعمة على أساس الذي تاريخ إنتهاء صلاحيته أولا يُستهلك أولاً",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "FEFO policy should be followed to ensure that older stocks are placed in the front row to prevent the presence of expired food",
          "Staff should follow FEFO policy when storing/using food items to avoid the presence of expired food",
          "When new batches are received or produced, near expiry dates should be brought forward and far expiry dates stored backwards",
          "Suppliers should be requested not to send products with different shelf lives in one delivery"
        ]
      },
      {
        "id": "fs-section-08-item-006",
        "question": "No dented or damaged goods are present (Clearly labeled area for returned goods or items are individually labeled)",
        "questionAr": "لا وجود لمعلّبات متضرّرة أو في حال وجودها يتمّ وضع إشارة تفيد بعدم استخدامها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dented cans should be discarded upon receiving to avoid any risk of misuse",
          "Dented cans should be placed in a designated area for returned goods and labeled as so to avoid any risk of misuse",
          "Samples of cans should be checked upon receiving. Those that are dented must be rejected",
          "Items that are not intended to be served to clients should be clearly labeled as so to avoid any confusion"
        ]
      },
      {
        "id": "fs-section-08-item-007",
        "question": "No possible contaminant is stored along with food (pesticides, detergents, chemicals, cleaning utensils…)",
        "questionAr": "لا وجود لأي مادة ممكن أن تكون مصدر تلوث للطعام :كيمائيات، مبيدات، مواد تنظيف، معدات التظيف",
        "guidance": "When a tangible risk of chemical contamination is noticed, deduct in the 'Tangible question'",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Chemicals should be stored in a closed cabinet, away from food to prevent any risk of contamination"
        ]
      }
    ]
  },
  {
    "id": "fs-section-09",
    "title": "Fridges and Freezers",
    "titleAr": "البرادات والثلاجات",
    "items": [
      {
        "id": "fs-section-09-item-001",
        "question": "Fridges, freezers and cold display units are clean and free of mildew (rubber seals, shelves, doors, air vent, etc.)",
        "questionAr": "البرادات والثلاجات وبرادات العرض نظيفة وخالية من أي عفن (المقابض، الأبواب، مراوح التهوئ، الخ...)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Rubber seals should be thoroughly cleaned to prevent dirt accumulation that leads to mold growth and damage of the gaskets",
          "Handles of cooling units should be kept clean & sanitized frequently to avoid bacterial growth resulting in hands contamination",
          "Gaskets should be cleaned regularly to prevent their damage. A small soft brush can be used to allow an easier cleaning",
          "Shelves should be cleaned more often to avoid dirt accumulation that may promote mold growth and contamination of food",
          "Air vents should be cleaned more frequently to avoid dust accumulation on them and prevent its spreading onto stored food items",
          "Air vents should be kept clean to prevent dirt accumulation and contamination of food items placed in the cooling units"
        ]
      },
      {
        "id": "fs-section-09-item-002",
        "question": "Fridges and freezers are properly defrosted and have no ice formation",
        "questionAr": "يتمّ إذابة الجليد عن الثّلّاجات و البرّادات كما ينبغي ولا يتكون الجليد فيها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Whenever ice formation is noticed, cooling units should be defrosted in order to allow a proper air flow in them",
          "Freezers and fridges should be defrosted to prevent ice formation and ensure proper functioning",
          "Fridge should be regularly defrosted whenever ice formation is noticed to ensure proper functioning and cooling of food items"
        ]
      },
      {
        "id": "fs-section-09-item-003",
        "question": "All food in the fridge is below 5°C",
        "questionAr": "تتعرّض كافة المواد الغذائية الموجودة في البرّاد إلى درجة حرارة ما دون 5 درجات مئوية",
        "guidance": "Temperature between 6 and 8.9°C, question should be ticked as N/A and above 8.9°C, it should be ticked as NO",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "The temperature inside the fridge should be maintained at 5°C or below to avoid any risk of bacterial growth"
        ]
      },
      {
        "id": "fs-section-09-item-004",
        "question": "All food in the freezer is below -18°C",
        "questionAr": "تتعرّض كافة المواد الغذائية الموجودة في الثلاجة إلى درجة حرارة ما دون 18 درجة مئوية تحت الصفر",
        "guidance": "Temperature between -17°C and -14.1°C, question should be ticked as N/A - when -14°C and above it should be ticked as NO / for the ice cream freezer put it as YES until -12°C inclusive (-11.9°C and above should be NO)",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "The temperature inside the freezer should be maintained at -18°C or below for proper storage conditions"
        ]
      },
      {
        "id": "fs-section-09-item-005",
        "question": "All food is covered (containers in use on peak may be uncovered)",
        "questionAr": "إن كافة المواد الغذائية والأطعمة مغطاة (يمكن كشف الحاويات التي تكون قيد الاستخدام في أوقات الذروة)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Off peak time, all food should be properly covered to prevent their contamination"
        ]
      },
      {
        "id": "fs-section-09-item-006",
        "question": "Floors and isolating curtains of the walk-in cooling units are clean",
        "questionAr": "إن الأرضيات و الستائر العازلة في وحدات التّبريد نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The floor of the walk-in cooling units should be cleaned on a regular basis to prevent dirt accumulation",
          "The floor of the walk-in cooling units should be cleaned on a regular basis to prevent dirt accumulation and promote safety",
          "Isolating curtains should be cleaned & sanitized on a regular basis to prevent the risk of cross-contamination"
        ]
      },
      {
        "id": "fs-section-09-item-007",
        "question": "Food is stored in an organized manner that prevents cross-contamination (raw food below ready to eat food….)",
        "questionAr": "إن المواد الغذائية والأطعمة تُحفظ بطريقة منظمة تمنع من انتقال التلوث بين الأطعمة (الطعام الني تحت الطعام الجاهز للأكل...)",
        "guidance": "Minor Non-conformity; Deduct here in case of no evidence or no tangible proof of cross-contamination",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ready-to eat food should be stored above raw food to avoid any cross-contamination",
          "Food order should be respected from top to bottom: Ready to eat food, raw fish, raw meat, raw chicken & eggs at the bottom",
          "Raw eggs should be stored on the lowest shelf away from other items to prevent any cross contamination",
          "Employees should be instructed not to place non-sanitized vegetables/fruits above other food items to avoid contamination",
          "Ready to eat frozen food should be placed above frozen raw food inside the freezers to avoid contamination"
        ]
      },
      {
        "id": "fs-section-09-item-008",
        "question": "Clearly labeled area for Returned Goods is determined, or items are individually labeled",
        "questionAr": "إن المساحة المخصصة بشكل واضح لوضع البطاقات على السلع المرتجعة متوفرة أو توضع البطاقات على كل سلعة على حدا",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dented cans should be placed in a designated area for returned goods and labeled as so to avoid any risk of misuse",
          "Items that are not intended to be served to clients should be clearly labeled as so to avoid any confusion"
        ]
      }
    ]
  },
  {
    "id": "fs-section-10",
    "title": "Display Fridges",
    "titleAr": "برادات العرض",
    "items": [
      {
        "id": "fs-section-10-item-001",
        "question": "Fridge and containers' surroundings are clean to prevent cross contamination",
        "questionAr": "إن محيط البرادات والحاويات نظيف وذلك لتفادي انتقال أي تلوث",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The surface of the display fridges should be cleaned & sanitized frequently to prevent the contamination of displayed food",
          "Surfaces and edges of display fridges should be cleaned and sanitized frequently to prevent the contamination of displayed food"
        ]
      },
      {
        "id": "fs-section-10-item-002",
        "question": "Food on display is below 5°C, or in TDZ (Temperature Danger Zone) but is time monitored and used only within the allowed time frame",
        "questionAr": "تتعرّض الأطعمة المعروضة لدرجة حرارة ما دون خمسة درجات مئوية أو لدرجات الحرارة الخطرة ولكن تتم مراقبتها زمنياً وتُستخدم فقط ضمن الإطار الزمني المسموح به",
        "guidance": "If the display fridge is clearly time monitored for 4 hours, answer this question by N/A, if the temperature is more than 8.9°C. If the temperature of the food in the display is >20°C and is not time monitored for 4 hours, answer this question by N/A and deduct in the TDZ question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The temperature inside the display fridge should be maintained at 5°C and below to avoid any risk of bacterial growth"
        ]
      },
      {
        "id": "fs-section-10-item-003",
        "question": "Containers are not overfilled (max 3/4 of the bin is filled)",
        "questionAr": "إن الحاويات غير معبأة بشكل مفرط :إن ثلاثة أرباع الحاوية كحد أقصى مملوء فقط",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food containers should not be overfilled to ensure that all portions of the food inside the container is maintained below 5°C",
          "Containers should be filled up to their cooling line to prevent the risk of time-temperature abuse"
        ]
      },
      {
        "id": "fs-section-10-item-004",
        "question": "Containers are not refilled before the previous batch has been completely used. New batch is placed in a clean container",
        "questionAr": "لا تتم إعادة تعبئة الحاويات قبل استخدام الدفعة السابقة بشكل كامل، وتوضع الدفعة الجديدة في حاوية نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Containers should be first washed before refilling them to prevent the risk of cross-contamination",
          "After their use, containers must be sanitized to avoid bacterial growth that will contaminate food stored in them later on"
        ]
      },
      {
        "id": "fs-section-10-item-005",
        "question": "Fridge cover is closed off peak",
        "questionAr": "إن غطاء البراد خارج أوقات الذروة مُقفل",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "When not in use, the display fridge should be covered to maintain a proper temperature inside it",
          "The display cover should be closed off-peak time to maintain cold temperatures inside and prevent the risk of food contamination",
          "When not in use, displayed food should be covered to keep it cold (below 5°C)",
          "When display fridge does not properly cool food, then food must be time labeled for 4 hours and discarded afterward"
        ]
      },
      {
        "id": "fs-section-10-item-006",
        "question": "Utensils are placed with their handles out of the food so that employees don't touch the food with their hands",
        "questionAr": "إن مقابض الأواني موضوعة خارج الأطعمة والمواد الغذائية كي لا يلمس الموظفون الطعام بواسطة أيديهم",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Scoops should not be kept inside food containers to prevent food contamination when reaching for the handle",
          "Scoops should be pricked with handle up to avoid contaminating food from hands when reaching for the handle",
          "Cups with no handles should not be used to portion food to prevent contamination"
        ]
      }
    ]
  },
  {
    "id": "fs-section-11",
    "title": "Dishwashing Area",
    "titleAr": "المكان المخصص لغسل الأطباق",
    "items": [
      {
        "id": "fs-section-11-item-001",
        "question": "Dishwashing area and the floors around it are clean",
        "questionAr": "إن المكان المخصص لغسل الأطباق نظيف وكذلك الأرضيات حوله",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dishwashing area should be kept clean. Attention should be given to hidden areas to prevent dirt accumulation & pest infestation",
          "Pot wash area should be kept clean & attention should be given to hidden areas to prevent dirt accumulation & pest infestation",
          "Pot and dish washing areas must be kept clean with special attention to hidden areas to avoid pests infestation"
        ]
      },
      {
        "id": "fs-section-11-item-002",
        "question": "Dishwasher is clean, free from food residues and scale",
        "questionAr": "إن جلاية الأطباق نظيفة وخالية من بقايا الطعام",
        "guidance": "Deduct here if scale is noticed inside the dishwasher",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Dishwasher should be treated using a descaler to prevent scale formation; thus, to ensure its proper functioning",
          "Plastic racks should be treated and/or cleaned inside the dishwasher using a scale remover and/or soap respectively",
          "Stewards should rinse plates before placing them in the dishwasher to avoid its clogging & allow a proper sanitation",
          "Stewards should not add pot wash-soap inside the dishwasher to prevent foam formation & allow a proper sanitation process",
          "Reason of foam formation should be investigated; the chemical supplier can be consulted to ensure proper washing process"
        ]
      },
      {
        "id": "fs-section-11-item-003",
        "question": "No steel wool pads are used (or are in good repair if being used)",
        "questionAr": "لا يتمّ استخدام السّيفة (أو يُمنع فسخها في حال استخدامها)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Broken and rusty steel wool pads should be replaced with new ones to prevent physical contamination",
          "Stewards should be instructed to replace rusty steel wool pads with new ones to prevent physical contamination from occurring",
          "Stewards should be instructed to replace detached steel wool pads with new ones to prevent physical contamination from occurring",
          "Stewards should be instructed to replace loofahs in kitchen with synthetic sponges to avoid physical contamination"
        ]
      },
      {
        "id": "fs-section-11-item-004",
        "question": "Manual dishwashing is done with warm water",
        "questionAr": "تُغسل الأواني يدوياً بواسطة المياه الساخنة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Warm water should be used to facilitate grease removal during the washing process"
        ]
      },
      {
        "id": "fs-section-11-item-005",
        "question": "The temperature of the dishwasher reaches at least 82°C or dishes are chemically sanitized",
        "questionAr": "تصل درجة حرارة جلاية الأطباق إلى 82 درجة مئوية أو يتم تنظيف وتعقيم الأطباق بواسطة المواد الكيمائية",
        "guidance": "Answer by N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          ">>",
          "~MULTIPLE~"
        ]
      },
      {
        "id": "fs-section-11-item-006",
        "question": "Drying shelves and storage shelves are free and isolated from of any foreign object that would cause contamination (employee clothing, cleaning equipment, garbage cans, dirty dishes, open windows, water splashes…)",
        "questionAr": "إن الرفوف المخصصة للتجفيف والتخزين خالية ولا توضع عليها أي أشياء غريبة من شانها أن تتسبب بتلوث :ملابس الموظفين، ومعدات التنظيف، وسلات المهملات، والأطباق الوسخة، والنوافذ المفتوحة، ورذاذ المياه",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Drying shelves should be free from any foreign object in order to avoid the contamination of clean containers and utensils",
          "Chemicals and cleaning tools should be placed in a designated area away from food items to avoid chemical contamination",
          "Chemical products should not be stored next to clean containers and utensils to avoid any risk of contamination",
          "Chemical products can be stored on the lowest shelf under clean items to avoid risk of contamination",
          "Food items should not be stored next to nor above clean containers and utensils to avoid any risk of contamination",
          "Garbage bin should be placed away from drying racks to prevent the risk of cross-contamination"
        ]
      },
      {
        "id": "fs-section-11-item-007",
        "question": "Kitchen utensils (knives, spatulas, etc.), food containers and dishes are properly washed and sanitized",
        "questionAr": "يتم غسل وتطهير أدوات المطبخ (السكاكين والملاعق وغيرها) وحاويات الطعام والأطباق بشكل صحيح",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Stewards should be instructed to thoroughly sanitize food containers and utensils to avoid bacterial growth",
          "Utensils and containers must be properly cleaned to avoid the presence of food residues resulting in bacterial growth on them",
          "Employees should be instructed to thoroughly clean the containers and remove old labels to prevent any risk of confusion"
        ]
      },
      {
        "id": "fs-section-11-item-008",
        "question": "Clean dishes are placed in a manner that prevents their contamination (garbage cans, dirty dishes, open windows, water splashes…)",
        "questionAr": "توضع الأطباق النظيفة بطريقة تمنع تلوثها :من سلة المهملات، والأطباق القذرة، والنوافذ المفتوحة، ورذاذ المياه",
        "guidance": "Deduct here if knife is placed between two tables IN THE DISHWASHING AREA",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Utensils should not be placed in hard to clean areas that are not subject to frequent sanitation to avoid their contamination",
          "Utensils & food containers should not come in contact with any unclean or dirty containers to avoid any risk of contamination",
          "Cleaned cutting boards should be stored on a clean rack to prevent their contamination",
          "Cleaned cutting boards should be stored away from one another to properly drain from water and avoid bacterial growth",
          "Cutting boards should be stored 15 cm off the floor on a clean rack to prevent their contamination",
          "Clean deep containers should be stored upside down to properly drain from water and avoid their contamination"
        ]
      },
      {
        "id": "fs-section-11-item-009",
        "question": "Garbage can in the dishwashing area is not overflowing (it may be uncovered)",
        "questionAr": "إن سلة المهملات الموجودة في المكان المخصص لغسل الأطباق غير ممتلئة بشكل فائض :يجوز تركها من دون غطاء",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garbage cans at the pot wash area should be kept clean to prevent the risk of pests infestation",
          "Garbage bags should be changed before they get over-filled to prevent food spillage on the floor & avoid pests infestation"
        ]
      },
      {
        "id": "fs-section-11-item-010",
        "question": "Dishwashing detergents are correctly used, properly stocked and correctly connected to the dishwasher (tubes are straight and unclogged)",
        "questionAr": "إن مواد التّنظيف الخاصّة بغسل الأطباق تُستخدم كما ينبغي ويتم تخزينها بالشكل الصحيح ويتم توصيلها بجلاية الأطباق (إن الأنابيب مستقيمة وغير مسدودة)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Staff should be advised to properly link the dishwashing chemicals to the dishwashing machine to allow a proper washing cycle",
          "Detergent gallons should be changed when needed to allow a proper cleaning process"
        ]
      }
    ]
  },
  {
    "id": "fs-section-12",
    "title": "Personal Hygiene",
    "titleAr": "النظافة الشخصية",
    "items": [
      {
        "id": "fs-section-12-item-001",
        "question": "Hairnets are available for visitors and employees at the door",
        "questionAr": "يوجد شبكات للشعر للزوار والموظفين عند الباب",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hairnets should be available at the entrance of the kitchen to avoid anyone's access without hairnets inside the premises"
        ]
      },
      {
        "id": "fs-section-12-item-002",
        "question": "All employees are in clean and hygienic uniform and hairy hands are covered or washed during the hand washing process",
        "questionAr": "يرتدي جميع الموظفين زياً نظيفاً وصحياً وتتم تغطية شعر اليدين أو يتمّ غسل الأيدي حتّى الكوع في حال عدم تغطية شعر الأيدي",
        "guidance": "Employees who have shaved forearms and/or are wearing sleeves are not required to wash their forearms. If hairy forearms are not washed during the hand washing process, deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Uniforms should be acquired immediately when a new staff is recruited in order not to access kitchen areas wearing daily clothes",
          "Employees should be instructed not to access food preparation areas wearing daily clothes that may bring hazards to food",
          "Management should acquire complete uniforms so that employees don't access kitchen areas wearing daily clothes",
          "Staff should reach for their forearms during hand washing to prevent any risk of physical contamination from hair loss",
          "Employees should be advised to cover their hairy forearms to avoid the risk of physical contamination"
        ]
      },
      {
        "id": "fs-section-12-item-003",
        "question": "All employees are wearing a hairnet or any kind of complete hair restraint",
        "questionAr": "يعتمر كافة الموظفين شبكة للشعر أو أي شيء لشدّ الشعر بشكل كامل",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be advised to wear a hair restraint that covers all their hair at all times to avoid the physical hazards",
          "A hairnet dispenser should be installed at the kitchen door and all employees and visitors should be advised to cover their hair",
          "Staff should be advised not to enter the kitchen without a hairnet to avoid the risk of contamination caused by hair loss",
          "Staff should be advised to wear a hair restraint that covers all the hair in order to avoid any risk of physical contamination"
        ]
      },
      {
        "id": "fs-section-12-item-004",
        "question": "Employees are free from illness and do not work with open injuries such as cuts, sores or wounds. In case of injury, wound dressings are used and are clean and waterproof",
        "questionAr": "لا وجود للموظفين الذين يعانون من أعراض تشبه أعراض الرشح أو الانفلونزا أو إصابات مفتوحة مثل الجروح و القروح أو الجروح. في حالة الإصابة ، وتستخدم ضمادات الجروح و هي دليل النظيف والمياه",
        "guidance": "Major Non-conformity. Please state the name of the employee having a non conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Staff must inform the management when having contagious infections & must not be allowed to work with food",
          "When sick, employees should be advised not to handle food to prevent the risk of contamination",
          "Open injuries must be treated & covered with blue & waterproof bandages. Disposable gloves must be worn to prevent contamination"
        ]
      },
      {
        "id": "fs-section-12-item-005",
        "question": "Staff hands are easily cleanable (no glue-on nails, no watches, no accessories...)",
        "questionAr": "يسهل تنظيف أيدي الموظفين: لا يضعون أظافر اصطناعية، ولا ساعات وأكسسوارات",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be advised to remove all their accessories when handling food items to prevent any source of contamination",
          "During working hours, employees should remove all their accessories to allow an easier hand washing process",
          "Employees should keep their fingernails short and clean to avoid any risk of physical or microbiological contamination",
          "All employees should follow personal hygiene rules. Nails should be kept short and clean",
          "Employees should be advised not to have nail polish to prevent any risk of contamination"
        ]
      },
      {
        "id": "fs-section-12-item-006",
        "question": "Staff do not eat, smoke or drink in the food storage or preparation areas",
        "questionAr": "لا يتناول الموظفون الأطعمة ولا يدخنون ولا يتناولون المشروبات داخل الأماكن المخصصة لحفظ المواد الغذائية أو لإعدادها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should not smoke in kitchen areas to prevent any risk of contamination from saliva or from ashes",
          "Employees should be strictly advised not to smoke at store area to prevent any physical or microbiological contamination",
          "Employees should be advised to not to eat & drink in the food preparation area to avoid any risk of contamination from saliva",
          "Employees should be strictly advised not to drink or eat in kitchen to prevent the risk of physical or microbial contamination"
        ]
      },
      {
        "id": "fs-section-12-item-007",
        "question": "Staff use gloves in the correct manner (no cross-contamination, not re-used, not torn, proper size and length…)",
        "questionAr": "يستخدم الموظفون القفازات بالطريقة الصحيحة: لا يوجد أي انتقال للتلوث، ولا تتم إعادة استخدام القفازات، ولا يتم استخدامها وهي ممزقة، ويُستخدم الحجم والطول المناسبَين",
        "guidance": "Major Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should change their gloves after 4 hours of continuous use or whenever needed to prevent contamination",
          "Employees need to change their gloves after handling raw food, before preparing ready to eat foods or when necessary",
          "Employees should be advised to wear the proper size gloves to prevent any risk of contamination"
        ]
      },
      {
        "id": "fs-section-12-item-008",
        "question": "Staff do not contact ready-to-eat food with bare hands",
        "questionAr": "لا يقوم الموظفون بملامسة الأطعمة الجاهزة للأكل بواسطة اليدين من دون قفازات",
        "guidance": "Major Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Staff should be strictly advised not to handle ready to eat food items with their bare hands to avoid any risk of contamination",
          "Employees should be instructed to wear gloves whenever handling ready to eat food to avoid any contamination",
          "Gloves should be worn when handling ready to eat food in order to avoid any risk of contamination"
        ]
      },
      {
        "id": "fs-section-12-item-009",
        "question": "All male employees are well shaved",
        "questionAr": "يقوم الموظفون الذكور بالحلاقة بشكل جيد",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be well shaved to avoid physical contamination of food from hair falling/loss"
        ]
      },
      {
        "id": "fs-section-12-item-010",
        "question": "Staff wash their hands in a correct manner",
        "questionAr": "يقوم الموظفون بغسل أيديهم بالشكل الصحيح",
        "guidance": "Major Non-Conformity. In case employees closed the tap with a paper towel, then used it for drying their hands, mention it as a comment and tick YES to this question. In case of foaming, do not consider it as wrong, if soap was applied before wetting the hands",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should wet their hands before applying soap to ensure a proper foaming; thus, to obtain adequate hand washing results",
          "After washing their hands, employees should close the water tap using disposable paper towels to avoid hands’ re-contamination",
          "Employees should thouroughly wash their hands for at least 20 seconds to reduce the bacterial count",
          "Employees should be familiar with the proper hand washing process: soap should be applied first instead of the sanitizer"
        ]
      },
      {
        "id": "fs-section-12-item-011",
        "question": "Hands are washed before starting duties and after activities that could promote product contamination",
        "questionAr": "يقوم الموظفون بغسل أيديهم قبل المباشرة بتأدية الواجبات وبعد القيام بأنشطة من شأنها أن تعزّز انتقال التلوث بين المنتجات",
        "guidance": "Major Non-conformity, If hair is found inside the food deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "Employees should wash their hands when changing gloves to avoid the contamination of the new pair of gloves when reaching for it",
          "Employees should be instructed to wash their hands before entering the kitchen and starting the food preparation",
          "Staff must wash their hands after touching their body/face to avoid food contamination",
          "Staff should open garbage bins using the foot pedals and wash their hands if garbage cans were accidentally touched",
          "Employees should be strictly advised to wash their hands after their break"
        ]
      },
      {
        "id": "fs-section-12-item-012",
        "question": "Hand washing stations are clean and not used for other purposes",
        "questionAr": "أحواض غسل اليدين نظيفة ولا تستخدم لأغراض أخرى",
        "guidance": "If no hand washing sink is available put this question as N/A and deduct in the maintenance section",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A sink should be allocated for the only purpose of hand washing to avoid contamination of clean hands after being washed",
          "Employees should strictly use the hand washing sink for the hand wash process only to maintain it in a hygienic condition",
          "Sinks assigned for hand washing should be used for the only purpose of washing hands to avoid any risk of cross-contamination",
          "Hand washing sink should not be used for other purposes to avoid the contamination of clean hands after being washed"
        ]
      },
      {
        "id": "fs-section-12-item-013",
        "question": "Hand washing sink is well stocked with soap and single use towels",
        "questionAr": "إن المغسلة المخصصة لغسل اليدين مزودة جيداً بالصابون والمناشف التي تستخدم لمرة واحدة",
        "guidance": "Minor Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hand washing sinks should be always equipped with liquid soap & disposable paper towels to allow a proper hand washing procedure"
        ]
      },
      {
        "id": "fs-section-12-item-014",
        "question": "Employees restrooms are well stocked (soap, paper towels….)",
        "questionAr": "إن حمامات الموظفين مزودة بشكل جيد بالصابون، والمناشف الورقية",
        "guidance": "Minor Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hand washing sinks should be always equipped with liquid soap & disposable paper towels to allow a proper hand washing procedure"
        ]
      },
      {
        "id": "fs-section-12-item-015",
        "question": "No employees' belongings are present on food preparation and storage surfaces. And employees' food is stored separately from customers' food",
        "questionAr": "لا توجد ممتلكات للموظفين موجودة على إعداد الطعام وتخزين الأسطح. ويتم تخزين طعام الموظفين بشكل منفصل عن طعام العملاء",
        "guidance": "Deduct here, if employees are using pens with cap deduct. Don't mention it when employees's food is not labeled as so but the food is not served to clients",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees should be instructed to store their belongings away from food preparation & storage areas to avoid contamination",
          "Employees should be advised to store their belongings in a designated area away from food (i.e. lockers, boxes)",
          "Employees should not use pens with caps to prevent any physical contamination in case the cap accidentally fell into the food",
          "Staff food should be labeled as so in order to prevent any risk of confusion or misuse",
          "Staff food should be labeled and separated from customers food in order to prevent any confusion or misuse"
        ]
      },
      {
        "id": "fs-section-12-item-016",
        "question": "Employees have good knowledge of the correct food safety practices",
        "questionAr": "الموظفين لديهم معرفة جيدة من ممارسات السلامة الغذائية الصحيحة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "Chilled food delivered at higher than 8°C should be rejected to avoid using unsafe food",
          "Temperature of pasteurized juice/milk carton bottles should be taken by placing a sanitized probe thermometer inside of them",
          "Product should be returned to the supplier or placed in a designated area for returned items and clearly labeled as so",
          "Staff should be trained to wash their hands before wearing new gloves to prevent contamination",
          "Gloves must be worn whenever handling ready to eat food without utensils to avoid contamination",
          "Temperature of cooked food should be measured at the core using a probe thermometer"
        ]
      }
    ]
  },
  {
    "id": "fs-section-13",
    "title": "Cleaning",
    "titleAr": "التنظيف",
    "items": [
      {
        "id": "fs-section-13-item-001",
        "question": "Employees restrooms are clean",
        "questionAr": "إن حمامات الموظفين نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Employees’ restrooms should be kept reasonably clean to avoid the contamination of food handlers’ uniforms",
          "Employees’ restrooms should be kept in a hygienic condition for easy and sanitary use by the staff",
          "Different paper towels dispensers should be allocated for hand drying and hygienic purposes"
        ]
      },
      {
        "id": "fs-section-13-item-002",
        "question": "Floors in all kitchen areas are clean",
        "questionAr": "إن الأرضيات في كافة الأماكن في المطبخ نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Kitchen's floor should be cleaned on a regular basis to prevent dirt accumulation & pests' infestation"
        ]
      },
      {
        "id": "fs-section-13-item-003",
        "question": "Hard to clean areas (exposed pipes, hidden corners, passage way of oven boards etc…) are treated and cleaned correctly",
        "questionAr": "تتم معالجة الأماكن التي يصعب تنظيفها مثل الأنابيب المكشوفة،ممر ألواح الفرن، الزوايا المخفية ويتم تنظيفها بالشكل الصحيح",
        "guidance": "If unused kitchen utensils are dirty, deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Machines that are broken/unused should be either discarded or should be cleaned to avoid old food residues from attracting pests",
          "Stewards should be instructed to clean hard to reach areas to avoid dirt accumulation that may lead to pests infestation",
          "Attention should be given to hard to clean areas to prevent dirt accumulation & pests infestation",
          "Passage way of oven boards should be cleaned on a regular basis to prevent pests infestation"
        ]
      },
      {
        "id": "fs-section-13-item-004",
        "question": "Detergent containers used to store chemicals are labeled with their name and use and solutions recipients are easily identifiable",
        "questionAr": "يوجد بطاقات على حاويات المنظفات المستخدمة لتخزين المواد الكيميائية لتعرفة اسمها واستخدامها ويمكن التعرف بسهولة على حاويات المحلول",
        "guidance": "Minor Non-Conformity. Unlabeled bottles or sprayers should be included in this question | containers used for wiping towels (chamex) not easily IDENTIFIABLE (such as a different color or shape) deduct here",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Detergents should be placed in thick containers to avoid any misuse & to prevent a chemical contamination due to spillage",
          "Detergents and cleaning products should be labeled with their adequate name and use to avoid any confusion or misuse",
          "Containers/recipient used for chemicals should be easily identified to avoid confusing them with food containers",
          "Chemical containers similar to food ones should be labeled as so to avoid any misuse and a chemical contamination to food items",
          "Detergents that are noticed to have their labels detach or fade over time should have them scotch taped to preserve them",
          "Containers designated for a specific chemical should not be filled with another one to avoid chemical reactions & any misuse"
        ]
      },
      {
        "id": "fs-section-13-item-005",
        "question": "Wiping towels (chamex) are soaked in sanitizing solution or soap when not in use |",
        "questionAr": "ان فوطة مسح الطاولات يجب ان تنقع بمعقم بين الاستعمال",
        "guidance": "Minor Non-conformity , Wiping towels can be kept outside of solution to be changed every 4 hours. Time monitoring should be properly tracked (i.e. color coding by hours) | Sponges do not have to be kept soaked in soap solution, they should be reasonably well maintained and clean. Sponges can be squeezed then stored out of solution in a clean and/or dry place",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "After use, wiping towels should be cleaned then soaked in a sanitizing solution to decrease bacterial count",
          "Wiping towels, if kept out of solution should be time monitored and changed every 4 hours",
          "The solution should be changed when it gets murky to avoid bacterial growth",
          "Color-coded wiping towels may be used to ensure that they are replaced every 4 hours and sent for sanitation"
        ]
      },
      {
        "id": "fs-section-13-item-006",
        "question": "Cleaning equipment (sponge, steel wool pad, mop, etc.) is maintained and cleaned between uses (for mops: cotton mops are hung to dry when not in use, synthetic mops are either soaked in clean moping solution or hung to dry)",
        "questionAr": "يُحتفظ بأدوات التنظيف ويتم تنظيفها بين كل عملية استخدام وأخرى. تُعلّق المماسح القطنية لتجفّ عندما لا تكون قيد الاستخدام، أما بالنسبة إلى المماسح الاصطناعية فيتم سواء نقعها في محلول نظيف للمسح أو تُعلّق لتجف",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Stewards should clean the mops then soak them in a water & soap solution or hang them to dry to prevent bacterial growth",
          "Mopping solution should be changed more frequently to ensure a proper cleaning of the floor",
          "Cleaning equipment should be kept clean to allow a proper cleaning process",
          "Sponges should be changed when in bad repair to prevent any risk of contamination",
          "Broken and rusty steel wool pads should be replaced with new ones to prevent physical contamination",
          "Stewards should be instructed to replace loofahs in kitchen with synthetic sponges to avoid physical contamination"
        ]
      },
      {
        "id": "fs-section-13-item-007",
        "question": "A specific area for cleaning equipment is available, well organized, clean and is located away from food, food preparation and food storage areas",
        "questionAr": "يوجد مكان محدد مخصص لمعدات التنظيف وهو منظم جدا ونظيف ويبعد عن أماكن تخزين وحفظ المواد الغذائية والأطعمة وإعدادها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Detergents and pesticides should be stored away from food containers to prevent chemical contamination",
          "Cleaning tools’ units should be kept clean and organized to prevent the risk of pests’ infestation"
        ]
      },
      {
        "id": "fs-section-13-item-008",
        "question": "Stoves, ovens, grill and microwaves are clean",
        "questionAr": "إن المواقد والأفران والمايكرويف نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ovens should be cleaned on a regular basis to prevent dirt accumulation & pests' infestation",
          "Ovens should be cleaned regularly to prevent grease accumulation. A degreaser should be used to facilitate the cleaning process"
        ]
      },
      {
        "id": "fs-section-13-item-009",
        "question": "Oven hood is clean and free of grease",
        "questionAr": "إن غطاء الفرن نظيف وخال من الدهون",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Oven hood should be cleaned on a regular basis to prevent grease from accumulating & dripping into food",
          "Hood should be cleaned on a regular basis to avoid grease build-up and its dripping over cooking equipment due to heat",
          "Hood should be cleaned on a regular basis to avoid grease build-up and to prevent the risk of it catching fire",
          "Filter blades cleaning should be scheduled outside working hours to avoid any grease dripping into the food being prepared"
        ]
      },
      {
        "id": "fs-section-13-item-010",
        "question": "Garbage cans are clean not overflowing and changed when necessary",
        "questionAr": "نظيفة إن سلات المهملات غير فائضة ويتم تغييرها عند الضرورة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garbage cans should be equipped with disposable plastic bags to avoid dirt accumulation, off odors & the attraction of pests",
          "Garbage cans should be kept clean and covered to prevent insects infestation",
          "Garbage cans should be cleaned on a daily basis at closing time to prevent dirt accumulation & pests infestation"
        ]
      },
      {
        "id": "fs-section-13-item-011",
        "question": "Detergent and sanitizer concentration are correct",
        "questionAr": "إن نسب تركيز المطهرات والمنظفات صحيحة",
        "guidance": "Put N/A to this question if we do NOT know the concentration of a sanitizer // For food contact surfaces: If rinsing is required and is not done after sanitation deduct here; If contact time is more than the required time, and rinsing is not done, deduct here, if rinsing is required",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The supplier should provide the safe concentration range of the sanitizer being used to ensure a proper sanitation procedure",
          "The sanitizer should be diluted in water to obtain the required concentration and avoid any risk of chemical contamination",
          "The sanitizer should be less diluted in water to ensure a proper sanitation procedure",
          "The dispenser should be adjusted to pump the correct sanitizer’s concentration in order to ensure proper sanitation results",
          "Rinsing is required after sanitation to prevent any risk of chemical contamination"
        ]
      },
      {
        "id": "fs-section-13-item-012",
        "question": "Storage shelves are clean (no dust on goods)",
        "questionAr": "رفوف التخزين نظيفة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Storage shelves should be cleaned more often to avoid dirt and dust accumulation & prevent pests’ infestation"
        ]
      },
      {
        "id": "fs-section-13-item-013",
        "question": "Food contact surfaces including cutting boards are sanitized",
        "questionAr": "يتم تنظيف وتطهير الأسطح الملامسة للمواد الغذائية بما في ذلك ألواح التقطيع",
        "guidance": "Major Non-conformity, Deduct here if extreme dirt accumulation was noticed, proving beyond doubt that cleaning is not properly done (old residues, rotten food, grease accumulation). Deduct here if a sanitizer is not available. Deduct here if the contact time is LESS than the required time",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A food grade sanitizer should be available & must be used on food contact surfaces after cleaning to reduce bacterial count",
          "Cutting boards should be first cleaned then sanitized using a food grade sanitizer to reduce bacterial count to a safe level"
        ]
      },
      {
        "id": "fs-section-13-item-014",
        "question": "Employees know how and where to use each detergent (no detergent is being used in the wrong manner)",
        "questionAr": "يعلم الموظفون كيف ومتى يستخدمون المطهرات والمنظفات لا يتم استخدام أي مطهر أو منظف بطريقة خاطئة",
        "guidance": "Minor Non-conformity, If stainless steel polisher is used on food and hand contact surfaces deduct in this question",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Stainless steel polisher should not be used on food & hand contact surfaces to avoid chemical contamination",
          "Employees should be trained on the use of each detergent to ensure a proper and safe cleaning & sanitation process",
          "Employees should be advised not to mix detergents to avoid chemical reaction & ensure a proper cleaning & sanitation process"
        ]
      }
    ]
  },
  {
    "id": "fs-section-14",
    "title": "Food Handling and Food Preparation",
    "titleAr": "معالجة المواد الغذائية وإعداد الأطعمة",
    "items": [
      {
        "id": "fs-section-14-item-001",
        "question": "Liquids are placed in food grade plastic bottles",
        "questionAr": "توضع السوائل في قناني بلاستيكية مخصصة للمواد الغذائية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Juices & sauces should be stored in thick plastic bottles to prevent any risk of chemical contamination",
          "Mineral water bottles are not intended for multiple uses; therefore, they should not be used to store food items",
          "All food items should be stored in food grade containers in order to avoid any risk of chemical contamination"
        ]
      },
      {
        "id": "fs-section-14-item-002",
        "question": "No expired food is available",
        "questionAr": "لا وجود للمواد غذائية المنتهية الصلاحية",
        "guidance": "Critical Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All food items should be regularly checked in order to directly discard expired items",
          "Management should apply a strict monitoring for date labeling to ensure that no expired food items are available",
          "All food items should be constantly checked to directly discard expired items",
          "When giving a secondary shelf life, staff should make sure that the shelf life they are giving does not exceed the original one"
        ]
      },
      {
        "id": "fs-section-14-item-003",
        "question": "Eggs are stored in the refrigerator. No cracked eggs are available",
        "questionAr": "يُحفظ البيض في البراد. لا يوجد بيض متصدع",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Eggs should be stored inside the fridge in order to avoid any risk of bacterial growth due to time temperature abuse",
          "Eggs should be refrigerated upon receiving to prolong the effectiveness of the egg shell against bacterial contamination",
          "Broken eggs should be discarded to prevent any risk of contamination"
        ]
      },
      {
        "id": "fs-section-14-item-004",
        "question": "Food is thawed (defrosted) correctly",
        "questionAr": "تتم إذابة الجليد عن المواد الغذائية والأطعمة كما ينبغي",
        "guidance": "If there is a temperature abuse --> deduct in food is \" Potentially Hazardous Food in temperature danger zone (TDZ) is time monitored\"",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Thawing can be done in the microwave but food must then be cooked immediately to prevent the risk of time & temperature abuse",
          "Thawing should be done in the fridge overnight or under running, cold, potable water to prevent bacterial multiplication",
          "Thawing can be done: in the fridge overnight, under cold running and potable water, in the microwave or cooked directly"
        ]
      },
      {
        "id": "fs-section-14-item-005",
        "question": "Food is cooled properly",
        "questionAr": "تُبّرد الأطعمة كما ينبغي",
        "guidance": "Critical Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Cooling should be time & temperature monitored to reach 21°C from 63°C within 2 hours & 5°C in 4 extra hours",
          "Cooling should be time & temperature monitored to reach 21°C from 60°C within 2 hours & 5°C in 4 extra hours",
          "To speed the cooling process, hot food can be placed in an ice bath & stirred often. At 20°C the food can be moved in the fridge",
          "For prompt cooling process, a blast chiller can be used to allow effective cooling & prevent the risk of time-temperature abuse"
        ]
      },
      {
        "id": "fs-section-14-item-006",
        "question": "pH of acidified rice is 4.0 or less and is not kept for more than 24 hr at room temperature",
        "questionAr": "نسبة حموضة أرز السوشي 4.0 أو أقل ولا يترك على حرارة الغرفة لأكثر من 24 ساعة",
        "guidance": "Major Non-Conformity, If pH is 4.6 and below, consider it as YES - but mention it as a comment in the report",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Sushi rice’ recipe should be checked to ensure a right acidity to protect it from bacterial growth when let at room temperature",
          "Sushi rice recipe should be modified to reach a pH of 4.6 or less thus preventing bacterial growth at room temperature",
          "Sushi rice recipe should be modified to reach a pH of 4.0 or less thus preventing bacterial growth at room temperature"
        ]
      },
      {
        "id": "fs-section-14-item-007",
        "question": "No food is re-frozen (frozen, thawed then frozen again without prior cooking)",
        "questionAr": "لا تتم إعادة تبريد المواد الغذائية والأطعمة: أطعمة مبردة تتم إذابة الجليد عنها ومن ثم يتم تبريدها مجدداً قبل طهوها",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Thawed food should not be refrozen to prevent the bacterial multiplication and preserve the quality of the food"
        ]
      },
      {
        "id": "fs-section-14-item-008",
        "question": "No tangible proof of cross-contamination is available (dripping of raw items on ready to eat food, wrong use of gloves or cutting boards or direct contact of raw and ready to eat food)",
        "questionAr": "لا يوجد إثبات حِسّي على تلوّث إنتقالي (تنقيط أطعمة نيّئة على أطعمة جاهزة للتّقديم، إستعمال الكفوف أو ألواح التّقطيع بشكل خاطىئ أو إتّصال مباشر للأطعمة النّيّئة مع الجاهزة للتّقديم)",
        "guidance": "Critical Non-Conformity. Deduct here if unpasteurized raw eggs is used in garlic paste; hollandaise sauce, etc. // If you were told the wrong use of cutting boards but did not SEE a clear visible cross-contamination deduct in Food is prepared and handled",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Raw eggs can’t be used in food that will not be cooked to prevent contamination. Pasteurized eggs can be used instead",
          "Employees should be strictly advised to abide by the color code of cutting boards to prevent cross contamination",
          "An accurate color coding system for cutting boards should be followed and communicated to all employees to prevent contamination",
          "Cutting boards used for clean vegetables should be different from the ones used to cut dirty ones to avoid cross contamination",
          "Employees should be instructed to use different tongs when handling raw and cooked food to prevent cross contamination",
          "Employees should be instructed to use different knives to cut raw and ready to eat food to avoid any risk of cross-contamination"
        ]
      },
      {
        "id": "fs-section-14-item-009",
        "question": "No hot food that has been in Temperature Danger Zone for more than 2 hours is being used // - No cold food that has been in Temperature Danger Zone (TDZ >5°C) for more than 4 hours is being used / Potentially Hazardous Food in temperature danger zone (TDZ) is time monitored",
        "questionAr": "لا يتم استخدام الأطعمة والمواد الغذائية التي تعرّضت لدرجات الحرارة الخطرة لفترة تزيد على ساعتين للطعام الساخن و4 ساعات للطعام البارد / تجري مراقبة الأطعمة والمواد الغذائية التي من المحتمل أن تشكل خطراً لأنها تعرضت لدرجات الحرارة الخطرة من حيث الوقت",
        "guidance": "Critical Non-Conformity; if the quantity of food is relatively small (depending on the use) then put this question as N/A and deduct in the Temperatures question",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Potentially hazardous cold food should be time labeled for 4 hours when placed at room temperature to prevent bacterial growth",
          "Potentially hazardous hot food should be time labeled for 2 hours when placed at room temperature to prevent bacterial growth",
          "A small batch should be used to ensure the whole quantity is consumed within 4 (cold) hours or 2 hours (hot)",
          "Employees should be advised to store potentially hazardous food in the fridge when not in use",
          "Employees should be advised to store potentially hazardous food in hot cabinets when not in use",
          "Flour used for breading raw food should be time labeled for 4 hours when placed at room temperature and discarded afterwards"
        ]
      },
      {
        "id": "fs-section-14-item-010",
        "question": "Food is held at acceptable temperatures in Bain-marie (above 60-63°C) and Bain Marie is pre-heated before placing hot food",
        "questionAr": "يُحتفظ بالطعام في درجات حرارة مقبولة على طريقة بان ماري فوق 60-63 درجة مئوية كما يتمّ تسخين البان ماري قبل وضع الأطعمة فيه",
        "guidance": "Major Non-Conformity: Incorrect usage / temperature of bain-marie (Heating inside the bain-marie). // If the temperature of bain-marie is 57°C and above answer by YES. If 56.9°C and below put it as NO - if not time monitored",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food should be reheated to a temperature of 75°C prior to being placed in Bain Marie, to avoid time and temperature abuse",
          "Hot-holding equipment should be turned on (reheated) prior to installing the hot food to ensure proper hot holding"
        ]
      },
      {
        "id": "fs-section-14-item-011",
        "question": "Food is cooked to minimum internal temperature of 75°C",
        "questionAr": "يجري طهو الطعام على درجات الحرارة الداخلية الدنيا على 75 درجة مئوية، ، وتتم عملية إعادة التسخين على 75",
        "guidance": "Critical Non-conformity. If the temperature of a cooked item was not tested during the audit --> put N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food should be cooked to an internal temperature of 75°C to prevent the risk food poisoning"
        ]
      },
      {
        "id": "fs-section-14-item-012",
        "question": "Food that requires a shortening of the shelf life after opening is properly labeled and all perishable food and beverages (including ingredients) held for more than 6 hours are date coded within their expected shelf-life limit",
        "questionAr": "يتم وضع بطاقة على المواد الغذائية التي يجب تقصير فترة تخزينها بعد فتحها كما يتم وضع تاريخ صنع كافة المواد الغذائية والأطعمة والمشروبات القابلة للفساد بما في ذلك المكونات التي سوف يتم الاحتفاظ بها لفترة تزيد عن 6 ساعات و يتم تحديد الفترة الزمنية المتوقعة التي يمكن حفظها خلالها",
        "guidance": "Major Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Raw seafood should be labeled with a maximum shelf life of 2 days when placed in the fridge to avoid bacterial multiplication",
          "Raw chicken should be labeled with a maximum shelf life of 2 days when placed in the fridge to avoid bacterial multiplication",
          "Raw meat should be labeled with a maximum shelf life of 5 days when placed in fridge to avoid bacterial multiplication",
          "Frozen raw seafood can be labeled up to 3 days from the day it is moved to the fridge",
          "Frozen raw chicken can be labeled up to 3 days from the day it is moved to the fridge",
          "Frozen raw minced meat can be labeled up to 3 days from the day it is moved to the fridge"
        ]
      },
      {
        "id": "fs-section-14-item-013",
        "question": "Containers for food (sugar, flour…) are clean and covered",
        "questionAr": "إن الحاويات المخصصة للمواد الغذائية المخصصة للتخزين مثل السكر والطحين نظيفة ومغطاة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Containers should be washed before being refilled to prevent the risk of cross-contamination",
          "Outer surfaces of dry items containers should be washed more frequently to avoid attracting insects and pests"
        ]
      },
      {
        "id": "fs-section-14-item-014",
        "question": "Scoops used for dry food are stored with their handles not touching the food",
        "questionAr": "تُحفظ الملاعق المستخدمة للمواد الغذائية المخصصة للتخزين في وضعية لا تلامس مقابضها المواد الغذائية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Scoops should not be kept inside food containers to prevent food contamination when reaching for the handles",
          "Scoop should be pricked with handle up to avoid contaminating food from hands when reaching for the handle",
          "Cups with no handles should not be used to portion food to prevent contamination"
        ]
      },
      {
        "id": "fs-section-14-item-015",
        "question": "Food is prepared and handled with clean utensils, gloves and hands",
        "questionAr": "يجري إعداد الأطعمة بواسطة أواني و قفازات وأيدي نظيفة",
        "guidance": "Deduct here if: bags are sealed with staples (in the kitchen) // if hair is found on a container or food contact surface",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food should not come in direct contact with bottoms of containers to avoid its contamination",
          "After their use, all utensils should be sent for cleaning & should be stored on clean & sanitized surfaces",
          "Staplers should not be used to avoid any risk of physical contamination. Sticky labels may be used instead",
          "Employees should be instructed not to sit on food contact surfaces to avoid their contamination",
          "After being sharpened, knives should be washed to avoid any risk of physical contamination",
          "Food should not come in direct contact with disposable paper towels in order to avoid physical contamination"
        ]
      },
      {
        "id": "fs-section-14-item-016",
        "question": "Vegetable sanitation is appropriate: sanitizer used, concentration, method of dosage, water source, technique used, drying process…",
        "questionAr": "إن تنظيف الخضار مناسب: تُستخدم المطهرات بالشكل المناسب، يتم استخدام نسب التركيز وطريقة العيار، ومصادر المياه، والتقنيات وعملية التجفيف بالشكل المناسب",
        "guidance": "Major Non-conformity, Answer by YES, if the fruits and vegetables are not rinsed with water after sanitation - even if the process requires it",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Fruits & vegetables should be cleaned and sanitized to prevent food poisoning",
          "Sanitizer should be less diluted in water to obtain an appropriate concentration to reduce the presence of bacteria",
          "Sanitizer should be more diluted in water to avoid any risk of chemical contamination",
          "The dispenser should be fixed to pump a sanitizer concentration within the acceptable range to ensure proper sanitation process",
          "Employees should follow the manufacturer's instructions when mixing the sanitizer to ensure a proper sanitation",
          "Employees should follow the manufacturer's instructions for the sanitizer’s contact time to ensure a proper sanitation process"
        ]
      },
      {
        "id": "fs-section-14-item-017",
        "question": "No opened canned food is left in the original can",
        "questionAr": "لم تُترك المواد الغذائية المفتوحة في العلبة الأصلية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Food should not be left in opened original cans in order to avoid any risk of chemical contamination",
          "Food should be emptied in food grade containers upon opening of the can to prevent the risk of chemical contamination"
        ]
      },
      {
        "id": "fs-section-14-item-018",
        "question": "Food processing machines (slicer machine; meat grinder, mixer, etc.) are properly cleaned and sanitized after use or after 4 hours of continuous use",
        "questionAr": "يتم تنظيف آلات تجهيز الأغذية (آلة تقطيع اللحم، مطحنة اللحم، الخ) وتنظيفها بشكل صحيح بعد الاستخدام أو بعد 4 ساعات من الاستخدام المستمر",
        "guidance": "Major Non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Parts of machines should be carefully removed and sent to the dishwasher for proper cleaning & sanitation",
          "Machines should be thoroughly cleaned & sanitized after use to avoid bacterial multiplication",
          "Machines should be dismantled to facilitate the cleaning and sanitation process",
          "Machines should be cleaned & sanitized every maximum 4 hours of continuous use to prevent bacterial growth"
        ]
      },
      {
        "id": "fs-section-14-item-019",
        "question": "Garbage cans are placed away from food, food contact surfaces and food containers",
        "questionAr": "إن سلات المهملات بعيدة عن المواد الغذائية والأسطح التي تلامس الأطعمة وحاويات المواد الغذائية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Garbage bins should be placed away from food contact surfaces to prevent the risk of cross-contamination"
        ]
      },
      {
        "id": "fs-section-14-item-020",
        "question": "All food are obtained from reputable sources with proper records, inspected upon arrival and labeled with a production and expiry dates",
        "questionAr": "يتم الحصول على جميع المواد الغذائية من مصادر ذات سمعة جيدة مع السجلات المناسبة، وتفتيشها لدى وصوله، وصفت مع تواريخ الإنتاج وانتهاء الصلاحية",
        "guidance": "Minor Non-Conformity; Deduct here if the trade licenses were not available and/or expired",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Suppliers should be requested to put a shelf life on all their products to avoid using expired items",
          "Suppliers should be requested to clearly date label all their products to avoid the use of any expired item",
          "Management should request a clear labeling from suppliers to easily identify expired goods and respect the FEFO system",
          "Suppliers should be requested to put a shelf life on all their products to avoid any confusion with the regulatory inspectors",
          "All food items should be checked upon receiving to discard any unlabeled or faded label received from the supplier",
          "The license of suppliers should be available and up to date as a proof that food is purchased from approved sources"
        ]
      },
      {
        "id": "fs-section-14-item-021",
        "question": "No cardboard boxes are present in the kitchen",
        "questionAr": "لا وجود لصناديق الكرتون في المطبخ",
        "guidance": "Deduct here if vegetables are placed in the same container received from the supplier and not cleaned. Outlets who do not have a dry store but have storage shelves/racks instead, are allowed to have thick cardboard boxes as long as they are in good repair and no signs of insects are available. Mention it in the report and put N/A to the above question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Cardboard boxes should not be available in food preparation areas to avoid pest infestation",
          "De-boxing should be done outside the kitchen to prevent pests’ infestation & avoid the risk of physical contamination",
          "Content of boxes should be emptied on shelves & thick cardboard packaging should be discarded to avoid pests’ infestation",
          "At receiving, fruits & vegetables should be transferred into clean containers to prevent the access of insects into the kitchen"
        ]
      }
    ]
  },
  {
    "id": "fs-section-15",
    "title": "Record Keeping, Monitoring and Documentation",
    "titleAr": "حفظ السجلات ومراقبتها وتوثيقها",
    "items": [
      {
        "id": "fs-section-15-item-001",
        "question": "Fridges/freezers temperatures are monitored at least four times a day and documented with temperature control sheets that are correctly filled",
        "questionAr": "تجري مراقبة درجة حرارة البرادات/الثلاجات ما لا يقل عن 4 مرات باليوم ويتم تسجيل ذلك على أوراق مراقبة درجة الحرارة التي تتم تعبئتها كما ينبغي",
        "guidance": "Minor Non-Conformity. | If an internal thermometer is available but the temperature is checked via the built-in, deduct here | If an internal thermometer is not available and the temperature is checked via the built-in answer this by N/A and deduct in Thermometers are available",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Temperature logs should be filled at least 4 times a day to ensure a proper cooling & correct any deviation when necessary",
          "Temperature monitoring sheets should be available & filled as scheduled to ensure proper monitoring of cooling units temperature",
          "Temperatures should be logged faithfully & not randomly to follow-up closely on the functioning of cooling units",
          "Temperatures should be read via the internal thermometers placed inside cooling units to ensure a proper monitoring",
          "Documentation sheets should be signed to be able to relate to the person in charge in cases of non-conformity"
        ]
      },
      {
        "id": "fs-section-15-item-002",
        "question": "Calibration of thermometers is being done and logs are being filled once/week",
        "questionAr": "تجري معايرة الترمومترات وتجري تعبئة السجلات مرة في الأسبوع",
        "guidance": "If the boiling point method is wrong, but the ice point is correct, answer the question by N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Calibration sheet should be filled to make sure that the probe thermometer is calibrated once a week",
          "Probe should be calibrated using ice point or boiling point methods to ensure that probe readings are accurate",
          "Calibration should be documented via logging sheets for verification",
          "Probe thermometer should be replaced whenever a temperature deviation exceeding ±1°C is noticed",
          "In ice, thermometer should read 0°C; while in boiling water, it should read 100°C. A deviation of ±1°C is acceptable",
          "Calibration sheet should be faithfully filled to ensure that probe readings are accurate"
        ]
      },
      {
        "id": "fs-section-15-item-003",
        "question": "A system ensuring that minimum internal temperatures are reached is in place - Cooking temperatures are monitored and documented",
        "questionAr": "تجري مراقبة درجات حرارة الطهو وإعادة التسخين ويجري تسجيل ذلك",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All food should be cooked to 75˚C to prevent food poisoning, if below 75˚C cooking time should be extended",
          "Cooking logs should be available and properly filled to ensure that food reaches correct temperatures during cooking",
          "Documentation sheets should be signed to be able to relate to the person in charge in cases of non-conformity"
        ]
      },
      {
        "id": "fs-section-15-item-004",
        "question": "Hot holding process is monitored and documented properly",
        "questionAr": "يتم مراقبة حرارة الطعام الساخن ويجرى توثيق ذلك",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The hot holding sheet should be available and properly filled to make sure that the process is being followed properly",
          "Food held hot should be time/temperature monitored every 2 hours, to prevent any risk of bacterial growth"
        ]
      },
      {
        "id": "fs-section-15-item-005",
        "question": "Cooling process when performed is time and temperature monitored",
        "questionAr": "تجري مراقبة عملية التبريد ويجري تسجيل ذلك",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Temperature & time monitoring during the cooling process should be documented to ensure that cooling is being done properly",
          "Employees should be instructed to faithfully log the cooling process to prevent time & temperature abuse",
          "Documentation sheets should be signed to be able to relate to the person in charge in cases of non-conformity",
          "Employees should be instructed to preserve the old documentation sheets as a proof that they are filled regularly"
        ]
      },
      {
        "id": "fs-section-15-item-006",
        "question": "Receiving records are available and properly filled and clearly mention receiving temperatures",
        "questionAr": "إن سجلات الاستلام متوفرة وتتم تعبئتها كما ينبغي ويُذكر فيها بوضوح درجة حرارة الاستلام",
        "guidance": "If the temperature of chilled items is up to 8.9°C consider it as correct. If it is 9°C and above, deduct points. If the temperature of frozen items is up to -15°C consider is as correct. If is it between -14.9°C and -10°C answer by N/A; above -10°C, deduct points",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Receiving logs should be available and properly filled to ensure that food is being received at safe temperatures",
          "Frozen food must be received at ≤ -15°C. Chilled food must be received at ≤ 8°C to ensure that the cold chain is maintained",
          "Documentation sheets should be signed to be able to relate to the person in charge in cases of non-conformity",
          "Employees should be instructed to preserve the old documentation sheets as a proof that they are filled regularly"
        ]
      },
      {
        "id": "fs-section-15-item-007",
        "question": "Maintenance cards are available for equipment",
        "questionAr": "إن سجلات المتعلقة بالصيانة متوفرة وتتم تعبئتها كما ينبغي",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          ">>",
          "~MULTIPLE~"
        ]
      },
      {
        "id": "fs-section-15-item-008",
        "question": "Traceability system is implemented and properly followed",
        "questionAr": "يوجد نظام لمتابعة إنتاج المأكولات",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          ">>",
          "~MULTIPLE~"
        ]
      },
      {
        "id": "fs-section-15-item-009",
        "question": "Cleaning checklist is available and properly followed and filled",
        "questionAr": "إن قائمة التدقيق المتعلقة بالتنظيف متوفرة ويتم اتباعها وتعبئتها كما ينبغي",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Cleaning checklist should be kept in outlet as a proof that cleanliness of all areas and equipment is monitored",
          "Cleaning checklist should be updated, properly followed & checked then signed to ensure that all areas & equipment are cleaned",
          "Documentation sheets should be signed to be able to relate to the person in charge in cases of non-conformity"
        ]
      },
      {
        "id": "fs-section-15-item-010",
        "question": "Pest control operations is carried out by a pest control company specialist and pesticides are used in a proper manner. Moreover, Pest Control Records are available (i.e. Copy of the contract valid, schedule, reports ...)",
        "questionAr": "تتم عمليات مكافحة الآفات من قبل شركة متخصصة لمكافحة الآفات وتستخدم المبيدات بطريقة سليمة . وعلاوة على ذلك ، هي الآفات سجلات مراقبة المتاحة (أي نسخة من عقد صحيح ، والجدول الزمني ، وتقارير ... )",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A proof that a pest control program is available should be kept in outlet to avoid confusion with the concerned authority",
          "Pest control reports showing at least 2 visits per year should be kept at the outlet as a proof that treatments done"
        ]
      },
      {
        "id": "fs-section-15-item-011",
        "question": "A PIC checklist is available and properly filled",
        "questionAr": "موجودة ويتم تعبئتها بشكل صحيح PIC قائمة ال",
        "guidance": "Minor Non-Conformity. This is applicable for Dubai only. However if the sheet is available in outlets outside of Dubai and is properly filled, put YES to this question - otherwise put N/A (even if the sheet is not properly filled). If the PIC checklist is not filled before 12:00PM (Noon) - same day of the audit, do not deduct points and answer N/A to the related question",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A PIC checklist should be available and properly filled to make sure that food is handled in a safe manner",
          "A PIC checklist should be available and properly filled as per DM requirements",
          "The name of the PIC should be logged on the sheet to get back to him/her in case of any deviation",
          "The date should be logged on the PIC checklist to allow a proper tracking of documentation"
        ]
      },
      {
        "id": "fs-section-15-item-012",
        "question": "A documented foodborne illness reporting system is available",
        "questionAr": "يتوافر نظام للإبلاغ عن الأمراض المنقولة بالغذاء",
        "guidance": "Minor Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "This report should be available to follow a standard practice whenever investigating a food poisoning allegation",
          "This report should be available as per the local requirements"
        ]
      },
      {
        "id": "fs-section-15-item-013",
        "question": "An allergen management system is available",
        "questionAr": "يوجد نظام لإدارة الحساسية",
        "guidance": "Major Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "This report should be available to make sure that a standard practice is followed to prevent any risk of contamination",
          "This report should be available to make sure that allergen-free food are prepared and handled in a safe manner",
          "This report should be available as per DM requirements"
        ]
      }
    ]
  },
  {
    "id": "fs-section-16",
    "title": "Management and Maintenance: Facilities, equipment and layout",
    "titleAr": "إدارة وصيانة المرافق والمعدات والمخططات",
    "items": [
      {
        "id": "fs-section-16-item-001",
        "question": "The flow of food production and cleaning process are correct (no crossing between raw and ready to eat food; dirty and clean areas; no sewage and liquid waste crossing food preparation areas causing hazards etc.) فق الإنتاج الغذائي وعملية التنظيف صحيحة (لا يوجد اختلاط بين المواد الغذائية النيئة/الوسخة والجاهزة/النظيف ولا اختلاط بين الأواني القذرة والنظيفة)",
        "questionAr": "",
        "guidance": "Critical Non-conformity; Deduct here if employees restrooms open directly to the preparation area",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Sewage pipes should be redirected away from food passage items to avoid the risk of cross-contamination",
          "Toilets shall be reasonably separated from food preparation areas. A double door can be added to prevent cross-contamination",
          "Toilets doors should be equipped with self-closing device to ensure automatic closing after opening",
          "Restrooms’ door should relocated in a manner that it opens to the outside of the kitchen to avoid cross-contamination",
          "A proper time separation should be done for food deliveries to prevent any risk of contamination of cleaned kitchen utensils",
          "Suppliers should deliver food prior to the start of operation or food should be properly handled and the receiving area cleaned"
        ]
      },
      {
        "id": "fs-section-16-item-002",
        "question": "Preparation, storage, distribution and display of non-Halal food are carried out in a way that does not affect the integrity of Halal food",
        "questionAr": "يتم إعداد وتخزين وتوزيع وعرض الطعام غير الحلال بطريقة لا تؤثر على سلامة الغذاء الحلال",
        "guidance": "Major Non-Conformity; Answer by Yes, unless there is a non-conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A non-halal permit should be available in the outlet as per the local requirements",
          "An alcohol permit should be available in the outlet as per the local requirements",
          "A separate food preparation and cleaning sections should be available for the storage and preparation of non-halal food"
        ]
      },
      {
        "id": "fs-section-16-item-003",
        "question": "Work surfaces are in good condition",
        "questionAr": "إن أسطح العمل في حالة جيدة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Work surfaces should be smooth & gap free to avoid the accumulation of dirt in hard to clean areas resulting in bacterial growth",
          "Work surfaces should be smooth, impervious, non-absorbent and easy cleanable to prevent the risk of food contamination"
        ]
      },
      {
        "id": "fs-section-16-item-004",
        "question": "Machines are in good repair",
        "questionAr": "إن المكنات في حالة جيدة",
        "guidance": "If board with pins is available, answer by NO to the above question",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Filter blades should be installed to prevent grease accumulation inside the duct & to prevent the hood from catching fire",
          "Hood should be gap free to avoid grease accumulation in duct, dripping and catching fire when exposed to heat",
          "Cause of dripping should be established & fixed to prevent any risk of contamination to food items by water splashes",
          "Soap dispensers should be covered to keep the hand washing soap clean and ensure proper hand washing results",
          "Concrete blocks should not be available inside the kitchen to allow an easier cleaning process & to avoid the attraction of pest",
          "Dishwasher hood should be covered to avoid dirt accumulation in it and it’s dripping over clean containers"
        ]
      },
      {
        "id": "fs-section-16-item-005",
        "question": "Food preparation area is well lit and light fixtures are protected in a manner that prevents food contamination in case of breakage",
        "questionAr": "تعد مناطق إعداد الطعام وتخزينه مضاءة بشكل جيد، كما يتم حماية المصابيح بالطريقة التي تمنع تلوث الأغذية في حالة الكسر",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Lamps in all cooling units should be covered to avoid any risk of physical contamination in case of breakage",
          "Light fixtures should be adequately covered to avoid physical contamination in case of breakage & to promote employees’ safety",
          "Adequate lighting should be available in kitchen & storage areas to allow proper monitoring of cleanliness & food shelf lives",
          "Adequate lighting should be available inside walk-in cooling units to allow proper monitoring of cleanliness & food shelf lives"
        ]
      },
      {
        "id": "fs-section-16-item-006",
        "question": "Walls and ceilings are in good repair (no moisture, no peeling paint, no broken panels, no holes…)",
        "questionAr": "إن الجدران والأسقف في حالة جيدة لا يوجد رطوبة، ولا تقشير في الطلاء، ولا يوجد ألواح مكسورة، ولا يوجد ثقوب",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Cause of humidity should be investigated & fixed to avoid water dripping over food and to prevent further damage to the paint",
          "Peeling paint should be repaired the soonest in order to prevent its dripping into food",
          "Peeling paint should be correctly treated to avoid physical contamination from occurring in case of dripping",
          "Tiles of walls should be repaired to prevent any further damage and avoid any risk of pest infestation",
          "Ceilings should be of a continuous construction so that there are no empty spaces to avoid dirt accumulation inside the gaps",
          "Holes and openings should be closed to eliminate hard to clean areas & prevent dirt accumulation resulting in pests’ infestation"
        ]
      },
      {
        "id": "fs-section-16-item-007",
        "question": "Floors are in good repair (no broken tiles)",
        "questionAr": "إن الأرضيات في حالة جيدة: لا يوجد بلاط مكسور",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Broken floor tiles should be sealed or replaced to allow an easier cleaning and eliminate areas where pests may harbor",
          "Floors should be tiled and gaps should be sealed to allow an easier cleaning and eliminate areas where pests may harbor"
        ]
      },
      {
        "id": "fs-section-16-item-008",
        "question": "Doors and windows leading to the kitchen are closed or are equipped with proper mosquito nets and these nets are in good repair",
        "questionAr": "إن الأبواب والنوافذ المؤدية إلى المطبخ والأماكن مغلقة أو مزودة بشبكات الناموسيات التي تمنع دخول البعوض وهي في حالة جيدة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Doors and windows leading to kitchen should be kept closed to prevent any risk of pests’ infestation",
          "Doors and windows leading to the kitchen should be kept closed or equipped with mosquito nets in order to isolate the premises"
        ]
      },
      {
        "id": "fs-section-16-item-009",
        "question": "All garbage cans are covered, foot activated and in good repair (garbage can in the dishwashing area may be uncovered)",
        "questionAr": "تُغطى كافة سلات المهملات ويمكن فتحها من خلال الضغط عليها بواسطة القدم وهي في حالة جيدة. يمكن عدم تغطية سلة المهملات الموجودة في المنطقة المخصصة لغسل الأطباق",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All garbage cans in preparation areas should be covered to prevent insects' infestation and garbage falling out of the bin",
          "Garbage cans should be foot activated to prevent contamination of clean hands when reaching for the cover",
          "All garbage cans in food preparation areas should be covered to prevent insects' infestation and garbage falling out of the bin",
          "Garbage cans should be foot activated in order to prevent contamination of clean hands when reaching for the cover",
          "Foot pedals of garbage cans should be in good repair to prevent the contamination of clean hands when reaching for the cover"
        ]
      },
      {
        "id": "fs-section-16-item-010",
        "question": "All cooling units are in good repair (no water dripping, no rusty shelves, doors and handles in good repair, no broken rubber seals, etc.…)",
        "questionAr": "جميع وحدات التبريد هي في حالة جيدة (لا يقطر فتحات الهواء، لا الرفوف الصدئة والأبواب ومقابض في حالة جيدة، لا كسر الأختام المطاطية، الخ ...)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Broken rubber seals should be fixed as soon as possible in order to maintain adequate temperatures inside cooling units",
          "Broken rubber seals should be replaced with new ones in order to maintain adequate temperatures inside cooling units",
          "Doors of cooling units should be fixed the soonest to prevent temperature fluctuations inside of them",
          "Handles of the cooling units should be fixed to prevent dirt accumulation in hard to clean areas and any risk of contamination",
          "Cause of dripping should be established and fixed to prevent any risk of contamination to food items by water splashes",
          "Dripping should be inspected & fixed to avoid any contact of water with stored food items"
        ]
      },
      {
        "id": "fs-section-16-item-011",
        "question": "All display fridges have covers",
        "questionAr": "تتمتع كافة برادات العرض بأغطية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "The display fridge cover should be fixed in order to maintain the temperature of the cooling units during off peak time",
          "The display fridge should be covered to maintain the temperature of the cooling units during off peak time"
        ]
      },
      {
        "id": "fs-section-16-item-012",
        "question": "Ice machine is in good repair",
        "questionAr": "إن مكنة صنع مكعبات الثلج في حالة جيدة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Ice machine should be treated the soonest to eliminate rust; thus, to avoid the contamination of ice cubes by rust",
          "Ice machine's cover should be fixed in order to isolate the ice from any source of contamination"
        ]
      },
      {
        "id": "fs-section-16-item-013",
        "question": "Dry store is in good repair (no rusty shelves, no peeling paint, no exposed lights, no open doors or windows)",
        "questionAr": "إن المكان المخصص للتخزين في حالة جيدة: الرفوف غير صدئة، ولا تقشير في الطلاء، والأضواء غير مكشوفة،",
        "guidance": "All mistakes related to the dry store should be deducted in here",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Shelves should be painted or replaced to avoid contamination of food items with leaking rust when containers are uncovered",
          "Shelves should be treated for rust or replaced to avoid physical contamination of food items",
          "Rusty shelves should be treated or replaced the soonest to prevent further damage & avoid rust contamination of stored items",
          "Lamps in all cooling units should be covered to avoid any risk of physical contamination in case of breakage",
          "Light fixtures should be adequately covered to avoid physical contamination in case of breakage and to promote employees’ safety",
          "Wood should not be available in dry store to prevent pests’ infestation. It can be replaced with other rust proof shelving"
        ]
      },
      {
        "id": "fs-section-16-item-014",
        "question": "No presence of wood, rust proof shelving units are available in the kitchen (No wooden pallets are used to raise stored goods. Only treated metallic or plastic racks are used)",
        "questionAr": "لا وجود للخشب كما توجد رفوف مضادة للصدأ في المطبخ ولا تُستخدم المنصات الخشبية لرفع السلع المخزنة. ولا تُستخدم إلّا الرّفوف المعدنية المعالجة والمضادة للصدأ أو البلاستيكية",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Wood should not be available in preparation areas as it is hard to clean and can harbor pests",
          "Wooden shelves should be replaced with rust proof ones to facilitate their cleaning and avoid pests’ infestation",
          "Wooden cabinets, frames should be properly maintained to allow an easier cleaning and prevent any risk of pests infestation"
        ]
      },
      {
        "id": "fs-section-16-item-015",
        "question": "Kitchen utensils and equipment are in good repair (cutting boards; containers; etc.)",
        "questionAr": "أدوات المطبخ والمعدات في حالة جيدة (لوحات القطع، حاويات، الخ)",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Chipped plates should be replaced with new ones in order to avoid any physical contamination",
          "Rusty kitchen equipment should be coated or replaced the soonest in order to prevent food contamination when opening the cans",
          "Broken containers and covers should be replaced with new ones to prevent any risk of physical contamination",
          "Broken strainer should be replaced with a new one in order to prevent any risk of physical contamination",
          "Old cutting boards should be replaced with new ones to prevent bacterial growth inside cracks & to allow an easier cleaning",
          "Cutting boards should be replaced when in bad condition in order to prevent accumulation of residues inside the cracks"
        ]
      },
      {
        "id": "fs-section-16-item-016",
        "question": "All drains are equipped with screwed on covers or perforated covers",
        "questionAr": "إن كافة قنوات التصريف مزودة بأغطية مثبتة بواسطة البراغي أو بأغطية مثقوبة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Drains in all areas must be adequately covered to avoid any risk of contamination and pest infestation",
          "Drainage pipes should be fixed to avoid drainage water from dripping and leaking, thus, to avoid the attraction of pests",
          "Pipes should be properly covered to prevent dirt accumulation in hard to clean areas and any risk of pests infestation"
        ]
      },
      {
        "id": "fs-section-16-item-017",
        "question": "Hot water is available on hand washing and dishwashing sinks",
        "questionAr": "إن المياه الساخنة متوفرة على المغاسل المخصصة لليدين والأحواض المخصصة لغسل الأطباق",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hot water should be linked to hand washing & pot wash sinks to allow better cleaning results mainly in the presence of grease",
          "Adequate supply of hot water should be provided for all activities conducted in kitchen to achieve effective sanitizing results",
          "Hot water should be linked to hand washing sinks to encourage employees to wash their hands in cold weather"
        ]
      },
      {
        "id": "fs-section-16-item-018",
        "question": "Potable water is linked to all sinks including ice and coffee machines (exception is accepted for utility sink only) and microbiological results show no signs of contamination",
        "questionAr": "إن المياه الصالحة للشرب موصولة بكافة الأحواض و مكنات صنع مكعبات الثلج والقهوة باستثناء حوض الصرف العام فقط والنتائج الميكروبيولوجية لا تظهر أي علامات على التلوث",
        "guidance": "Critical Non-conformity if tests show signs of contamination. MAJOR NON-CONFORMITY if tests were not available or expired // In UAE, Qatar and Bahrain the tests can be done only once a year",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Microbiological tests should be performed frequently on every water tap to ensure that water is free of contaminants",
          "Water tests should be done every six months and copy of documents must be kept in outlet as a proof of a safe water consumption",
          "A clear schedule for testing all the water taps should be implemented so that every tap will be tested twice per year",
          "Microbiological tests on water samples should be conducted by a certified laboratory",
          "Cause of contamination should be investigated and fixed to ensure a safe water consumption",
          "Tests should be repeated after implementing the corrective actions for verification"
        ]
      },
      {
        "id": "fs-section-16-item-019",
        "question": "Room temperature in the kitchen and storage areas is within acceptable range (25°C or below)",
        "questionAr": "درجة حرارة الغرفة في المطبخ ومناطق التخزين ضمن النطاق المقبول (25 درجة مئوية أو أقل)",
        "guidance": "Major Non-Conformity; If the temperature is up to 27°C, answer this question by YES. If it is between 27.1 and 30°C, answer this question by N/A. If it is more than 30°C, answer this question by NO",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Adequate natural or mechanical ventilation must be in place to keep rooms free of excessive heat, steam, odors, smoke and fumes",
          "An adequate ventilation system should be installed in food preparation areas in order to ensure a hygienic and safe environment",
          "An adequate ventilation system should be installed in storage areas to ensure suitable storage conditions"
        ]
      },
      {
        "id": "fs-section-16-item-020",
        "question": "Thermometers are available on all fridges and freezers and are indicating correct fridge/freezer temperature",
        "questionAr": "يوجد ميازين حرارة على كافة البرادات والثلاجات وتشير إلى درجة حرارة مناسبة في البراد/الثلاجة",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "All cooling units should have internal thermometers placed inside to ensure accurate monitoring and recordings of temperatures",
          "When broken, internal thermometers should be replaced the soonest to ensure accurate temperature monitoring of all cooling units",
          "Thermometers should be placed deep inside the cooling unit and away from air vents to ensure accurate monitoring temperatures"
        ]
      },
      {
        "id": "fs-section-16-item-021",
        "question": "Humidity measurement tool is available in the dry store",
        "questionAr": "يوجد أداة لقياس نسبة الرطوبة في المكان المخصص للتخزين",
        "guidance": "This question is to be answered by N/A if no hygrometer is available in the outlet",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A hygrometer should be available in the dry store to allow a close monitoring of the store's humidity and avoid food spoilage"
        ]
      },
      {
        "id": "fs-section-16-item-022",
        "question": "Hand washing sinks are available in the kitchen and in adequate locations",
        "questionAr": "يوجد أحواض لغسل اليدين في المطبخ وفي الأماكن المناسبة",
        "guidance": "Major Non-Conformity",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Soap being used should be unscented to avoid the presence of smells that might contaminate food being prepared later on",
          "A sink should be allocated for the only purpose of hand washing to avoid contamination of clean hands after being washed"
        ]
      },
      {
        "id": "fs-section-16-item-023",
        "question": "Insects Killers are available properly maintained and placed away from food contact surfaces",
        "questionAr": "مكنات صعق الحشرات موجودة في اماكن مناسبة في المطبخ وهي نظيفة و بعيدة عن أسطح العمل",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Insect killers' lamps should be well maintained to ensure a proper control of flying insects",
          "Whenever filled, glue board of insect killer should be replaced with a new one to ensure a proper flying insects control",
          "Insect killers of glue board type should be available in kitchen to reduce the presence of flies that might contaminate food",
          "Insect zappers should be placed away from food passage ways to avoid zapped flies from falling over food being transported",
          "It is advisable to replace the insect zappers with insect killers of glue board type to prevent the risk of physical contaminati",
          "Insect killer should be present in the kitchen (away from food preparation surfaces) to control flies and prevent contamination"
        ]
      },
      {
        "id": "fs-section-16-item-024",
        "question": "No signs of insects in food, openings, cracks, hot areas, printers, elevators, cable covers etc…",
        "questionAr": "(لا أثر للحشرات في الطّعام، الفجوات و الكسور و الأمكنة الساخنة (مكنة طبع الطلبيات، المصعد، غطاء الأسلاك الكهربائية",
        "guidance": "Major Non-Conformity, This question concerns ants, flies and insects (and not cockroaches). If an insect is found INSIDE the food deduct here; 1 or 2 flies spotted in the outlet are not to be mentioned at all",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A pest control treatment should be performed the soonest to eliminate insects. Meanwhile, deep cleaning should be conducted",
          "Kitchen must be kept clean to avoid the access of pests. A pest control program should be integrated to prevent infestation",
          "A pest control program should be implemented and source of insects should be investigated (i.e. holes) and treated",
          "All food containers and bags should be well covered & stored 15 cm above the floor to avoid facilitate the cleaning process",
          "Doors should be kept closed and an insect zapper should be installed to prevent such hazards",
          "Staff should make sure that they are working in a clean and hygienic environment to avoid risk of pest infestation"
        ]
      },
      {
        "id": "fs-section-16-item-025",
        "question": "No signs of a major insects infestation, nor rodents in openings (no gnawing signs, chewed packages, signs of droppings/smears, signs of footprints in dust etc…",
        "questionAr": "ما من إنتشار للحشرات و لا أثر لوجود القوارض في الفجوات و الكسور، لا آثار لمأكولات أو أنابيب مقضومة و لا آثار لروث",
        "guidance": "Critical Non-Conformity; This question is for major infestations, cockroaches and rodents. | Old residue (very dry) of a cockroach is to be deducted in: Hard to clean areas (exposed pipes, hidden corners…) are treated and cleaned correctly",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Staff should make sure that they are working in a clean and hygienic environment to avoid risk of pest infestation",
          "Doors should be kept closed and an insect zapper should be installed to prevent such hazards",
          "Insect zappers should be placed away from food passage ways to avoid zapped flies from falling over food being transported",
          "All food containers and bags should be well covered & stored 15 cm above the floor to avoid facilitate the cleaning process",
          "A pest control program should be implemented and source of cockroaches should be investigated (i.e. holes) and treated",
          "Kitchen must be kept clean to avoid the access of pests. A pest control program should be integrated to prevent infestation"
        ]
      },
      {
        "id": "fs-section-16-item-026",
        "question": "Hand washing procedure posters are hung over the hand washing sinks",
        "questionAr": "عُلّقت ملصقات إجراءات غسل اليدين فوق أحواض غسل اليدين",
        "guidance": "",
        "answers": [
          {
            "label": "Yes",
            "score": 1
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Hand washing poster guide must be hung above each hand washing sink to remind employees about the proper hand washing technique"
        ]
      },
      {
        "id": "fs-section-16-item-027",
        "question": "A kitchen suitable thermometer is available",
        "questionAr": "يوجد ميزان حرارة مناسب للمطبخ",
        "guidance": "Minor Non-conformity. Deduct here if the thermometer is broken; not working or not available. If it is working properly but the calibration sheet was not properly filled, deduct in the monitoring sheet section only",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Probe thermometer should be kept in the kitchen to allow proper monitoring of cooking, cooling, receiving & storage temperatures",
          "Probe thermometer should be purchased to allow proper temperature monitoring of cooking, cooling & receiving procedures",
          "Probe thermometers that can be inserted inside the food being cooked/cooled should be used for accurate readings",
          "Broken probe thermometers should be fixed or replaced to allow proper temperature monitoring"
        ]
      },
      {
        "id": "fs-section-16-item-028",
        "question": "Medical Cards are available and up to date",
        "questionAr": "الشهادات الصحية موجودة و صالحة",
        "guidance": "Minor Non-conformity; The card of the cleaning staff should be available in the outlet // If the cards are being renewed and a proof of that was available, answer by N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 2
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "Medical cards should be kept in outlet as a proof that all food handlers do not carry transmittable infectious diseases",
          "Medical cards should be available & updated to ensure that all food handlers do not carry any transmittable infectious disease",
          "When updating the medical cards, copies of the old ones should be kept at the outlet as a proof for the concerned regulatory",
          "Food handlers should have medical cards to ensure that they do not carry any transmittable infectious disease",
          "Employees working at different branches should have copies of their medical card kept at location for the concerned regulatory"
        ]
      },
      {
        "id": "fs-section-16-item-029",
        "question": "A food safety training system is implemented for all food handlers and records are available​",
        "questionAr": "​ ​ ​يتم تنفيذ نظام تدريبي في مجال سلامة الغذاء لجميع الموظفين و تتوفر السجلات المطلوبة​",
        "guidance": "Major Non-Conformity; If an induction training is available (for GCC countries except UAE), answer this question by Yes // If proof of enrolment was available, answer this question by N/A",
        "answers": [
          {
            "label": "Yes",
            "score": 5
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": true,
        "actionPlans": [
          "A proof that employees are trained on basic food safety practices should be in place for the concerned regulatory",
          "A proof that executives have received advanced food safety training should be kept in outlet for the concerned regulatory",
          "Food handlers must be trained on basic food safety to empower them with the knowledge needed for safe practices"
        ]
      },
      {
        "id": "fs-section-16-item-030",
        "question": "A certified Person In Charge is present during all hours of operation and is actively managing and supervising the operations",
        "questionAr": "يوجد شخص معتمد ومسؤول أثناء جميع ساعات العمل ويقوم بإدارة العمليات والإشراف عليها بنشاط",
        "guidance": "Critical Non-Conformity; This is applicable for Dubai only",
        "answers": [
          {
            "label": "Yes",
            "score": 10
          },
          {
            "label": "No",
            "score": 0
          }
        ],
        "requiresEvidence": false,
        "actionPlans": [
          "A PIC should be available in the outlet during hours of operation as per DM requirements"
        ]
      },
      {
        "id": "fs-section-16-item-031",
        "question": "No more than 0 Critical Violation /OR/ no more than 2 Major violations /OR/ no more than 4 Minor violations /Or/ no more than 1 Major and 2 Minor violations found during the inspection",
        "questionAr": "",
        "guidance": "If 1 Critical and above --> put NO; If 3 Majors and above --> put NO; If 5 Minors and above --> put NO; If 2 Majors and 2 Minors and above --> put NO",
        "answers": [
          {
            "label": "Yes",
            "score": 0
          },
          {
            "label": "No",
            "score": -25
          }
        ],
        "requiresEvidence": false,
        "actionPlans": []
      }
    ]
  }
] satisfies ChecklistSection[]
