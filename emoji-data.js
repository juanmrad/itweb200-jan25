const emojis = [
  {
    "no": 1,
    "codes": "1F600",
    "char": "😀",
    "name": "grinning face",
    "keywords": "face | grin | grinning face"
  },
  {
    "no": 2,
    "codes": "1F603",
    "char": "😃",
    "name": "grinning face with big eyes",
    "keywords": "face | grinning face with big eyes | mouth | open | smile"
  },
  {
    "no": 3,
    "codes": "1F604",
    "char": "😄",
    "name": "grinning face with smiling eyes",
    "keywords": "eye | face | grinning face with smiling eyes | mouth | open | smile"
  },
  {
    "no": 4,
    "codes": "1F601",
    "char": "😁",
    "name": "beaming face with smiling eyes",
    "keywords": "beaming face with smiling eyes | eye | face | grin | smile"
  },
  {
    "no": 5,
    "codes": "1F606",
    "char": "😆",
    "name": "grinning squinting face",
    "keywords": "face | grinning squinting face | laugh | mouth | satisfied | smile"
  },
  {
    "no": 6,
    "codes": "1F605",
    "char": "😅",
    "name": "grinning face with sweat",
    "keywords": "cold | face | grinning face with sweat | open | smile | sweat"
  },
  {
    "no": 7,
    "codes": "1F923",
    "char": "🤣",
    "name": "rolling on the floor laughing",
    "keywords": "face | floor | laugh | rolling | rolling on the floor laughing"
  },
  {
    "no": 8,
    "codes": "1F602",
    "char": "😂",
    "name": "face with tears of joy",
    "keywords": "face | face with tears of joy | joy | laugh | tear"
  },
  {
    "no": 9,
    "codes": "1F642",
    "char": "🙂",
    "name": "slightly smiling face",
    "keywords": "face | slightly smiling face | smile"
  },
  {
    "no": 10,
    "codes": "1F643",
    "char": "🙃",
    "name": "upside-down face",
    "keywords": "face | upside-down"
  },
  {
    "no": 11,
    "codes": "1F609",
    "char": "😉",
    "name": "winking face",
    "keywords": "face | wink | winking face"
  },
  {
    "no": 12,
    "codes": "1F60A",
    "char": "😊",
    "name": "smiling face with smiling eyes",
    "keywords": "blush | eye | face | smile | smiling face with smiling eyes"
  },
  {
    "no": 13,
    "codes": "1F607",
    "char": "😇",
    "name": "smiling face with halo",
    "keywords": "angel | face | fantasy | halo | innocent | smiling face with halo"
  },
  {
    "no": 14,
    "codes": "1F970",
    "char": "🥰",
    "name": "smiling face with 3 hearts",
    "keywords": "adore | crush | in love | smiling face with 3 hearts"
  },
  {
    "no": 15,
    "codes": "1F60D",
    "char": "😍",
    "name": "smiling face with heart-eyes",
    "keywords": "eye | face | love | smile | smiling face with heart-eyes"
  },
  {
    "no": 16,
    "codes": "1F929",
    "char": "🤩",
    "name": "star-struck",
    "keywords": "eyes | face | grinning | star | star-struck | starry-eyed"
  },
  {
    "no": 17,
    "codes": "1F618",
    "char": "😘",
    "name": "face blowing a kiss",
    "keywords": "face | face blowing a kiss | kiss"
  },
  {
    "no": 18,
    "codes": "1F617",
    "char": "😗",
    "name": "kissing face",
    "keywords": "face | kiss | kissing face"
  },
  {
    "no": 19,
    "codes": "263A",
    "char": "☺",
    "name": "smiling face",
    "keywords": "face | outlined | relaxed | smile | smiling face"
  },
  {
    "no": 20,
    "codes": "1F61A",
    "char": "😚",
    "name": "kissing face with closed eyes",
    "keywords": "closed | eye | face | kiss | kissing face with closed eyes"
  },
  {
    "no": 21,
    "codes": "1F619",
    "char": "😙",
    "name": "kissing face with smiling eyes",
    "keywords": "eye | face | kiss | kissing face with smiling eyes | smile"
  },
  {
    "no": 22,
    "codes": "1F60B",
    "char": "😋",
    "name": "face savoring food",
    "keywords": "delicious | face | face savoring food | savouring | smile | yum"
  },
  {
    "no": 23,
    "codes": "1F61B",
    "char": "😛",
    "name": "face with tongue",
    "keywords": "face | face with tongue | tongue"
  },
  {
    "no": 24,
    "codes": "1F61C",
    "char": "😜",
    "name": "winking face with tongue",
    "keywords": "eye | face | joke | tongue | wink | winking face with tongue"
  },
  {
    "no": 25,
    "codes": "1F92A",
    "char": "🤪",
    "name": "zany face",
    "keywords": "eye | goofy | large | small | zany face"
  },
  {
    "no": 26,
    "codes": "1F61D",
    "char": "😝",
    "name": "squinting face with tongue",
    "keywords": "eye | face | horrible | squinting face with tongue | taste | tongue"
  },
  {
    "no": 27,
    "codes": "1F911",
    "char": "🤑",
    "name": "money-mouth face",
    "keywords": "face | money | money-mouth face | mouth"
  },
  {
    "no": 28,
    "codes": "1F917",
    "char": "🤗",
    "name": "hugging face",
    "keywords": "face | hug | hugging"
  },
  {
    "no": 29,
    "codes": "1F92D",
    "char": "🤭",
    "name": "face with hand over mouth",
    "keywords": "face with hand over mouth | whoops | shock | sudden realization | surprise"
  },
  {
    "no": 30,
    "codes": "1F92B",
    "char": "🤫",
    "name": "shushing face",
    "keywords": "quiet | shush | shushing face"
  },
  {
    "no": 31,
    "codes": "1F914",
    "char": "🤔",
    "name": "thinking face",
    "keywords": "face | thinking"
  },
  {
    "no": 32,
    "codes": "1F910",
    "char": "🤐",
    "name": "zipper-mouth face",
    "keywords": "face | mouth | zipper | zipper-mouth face"
  },
  {
    "no": 33,
    "codes": "1F928",
    "char": "🤨",
    "name": "face with raised eyebrow",
    "keywords": "distrust | face with raised eyebrow | skeptic | disapproval | disbelief | mild surprise | scepticism"
  },
  {
    "no": 34,
    "codes": "1F610",
    "char": "😐",
    "name": "neutral face",
    "keywords": "deadpan | face | meh | neutral"
  },
  {
    "no": 35,
    "codes": "1F611",
    "char": "😑",
    "name": "expressionless face",
    "keywords": "expressionless | face | inexpressive | meh | unexpressive"
  },
  {
    "no": 36,
    "codes": "1F636",
    "char": "😶",
    "name": "face without mouth",
    "keywords": "face | face without mouth | mouth | quiet | silent"
  },
  {
    "no": 37,
    "codes": "1F60F",
    "char": "😏",
    "name": "smirking face",
    "keywords": "face | smirk | smirking face"
  },
  {
    "no": 38,
    "codes": "1F612",
    "char": "😒",
    "name": "unamused face",
    "keywords": "face | unamused | unhappy"
  },
  {
    "no": 39,
    "codes": "1F644",
    "char": "🙄",
    "name": "face with rolling eyes",
    "keywords": "eyeroll | eyes | face | face with rolling eyes | rolling"
  },
  {
    "no": 40,
    "codes": "1F62C",
    "char": "😬",
    "name": "grimacing face",
    "keywords": "face | grimace | grimacing face"
  },
  {
    "no": 41,
    "codes": "1F925",
    "char": "🤥",
    "name": "lying face",
    "keywords": "face | lie | lying face | pinocchio"
  },
  {
    "no": 42,
    "codes": "1F60C",
    "char": "😌",
    "name": "relieved face",
    "keywords": "face | relieved"
  },
  {
    "no": 43,
    "codes": "1F614",
    "char": "😔",
    "name": "pensive face",
    "keywords": "dejected | face | pensive"
  },
  {
    "no": 44,
    "codes": "1F62A",
    "char": "😪",
    "name": "sleepy face",
    "keywords": "face | sleep | sleepy face"
  },
  {
    "no": 45,
    "codes": "1F924",
    "char": "🤤",
    "name": "drooling face",
    "keywords": "drooling | face"
  },
  {
    "no": 46,
    "codes": "1F634",
    "char": "😴",
    "name": "sleeping face",
    "keywords": "face | sleep | sleeping face | zzz"
  },
  {
    "no": 47,
    "codes": "1F637",
    "char": "😷",
    "name": "face with medical mask",
    "keywords": "cold | doctor | face | face with medical mask | mask | sick"
  },
  {
    "no": 48,
    "codes": "1F912",
    "char": "🤒",
    "name": "face with thermometer",
    "keywords": "face | face with thermometer | ill | sick | thermometer"
  },
  {
    "no": 49,
    "codes": "1F915",
    "char": "🤕",
    "name": "face with head-bandage",
    "keywords": "bandage | face | face with head-bandage | hurt | injury"
  },
  {
    "no": 50,
    "codes": "1F922",
    "char": "🤢",
    "name": "nauseated face",
    "keywords": "face | nauseated | vomit"
  },
  {
    "no": 51,
    "codes": "1F92E",
    "char": "🤮",
    "name": "face vomiting",
    "keywords": "face vomiting | sick | vomit"
  },
  {
    "no": 52,
    "codes": "1F927",
    "char": "🤧",
    "name": "sneezing face",
    "keywords": "face | gesundheit | sneeze | sneezing face"
  },
  {
    "no": 53,
    "codes": "1F975",
    "char": "🥵",
    "name": "hot face",
    "keywords": "feverish | heat stroke | hot | hot face | red-faced | sweating"
  },
  {
    "no": 54,
    "codes": "1F976",
    "char": "🥶",
    "name": "cold face",
    "keywords": "blue-faced | cold | cold face | freezing | frostbite | icicles"
  },
  {
    "no": 55,
    "codes": "1F974",
    "char": "🥴",
    "name": "woozy face",
    "keywords": "dizzy | intoxicated | tipsy | uneven eyes | wavy mouth | woozy face"
  },
  {
    "no": 56,
    "codes": "1F635",
    "char": "😵",
    "name": "dizzy face",
    "keywords": "dizzy | face"
  },
  {
    "no": 57,
    "codes": "1F92F",
    "char": "🤯",
    "name": "exploding head",
    "keywords": "exploding head | shocked"
  },
  {
    "no": 58,
    "codes": "1F920",
    "char": "🤠",
    "name": "cowboy hat face",
    "keywords": "cowboy | cowgirl | face | hat"
  },
  {
    "no": 59,
    "codes": "1F973",
    "char": "🥳",
    "name": "partying face",
    "keywords": "celebration | hat | horn | party | partying face"
  },
  {
    "no": 60,
    "codes": "1F60E",
    "char": "😎",
    "name": "smiling face with sunglasses",
    "keywords": "bright | cool | face | smiling face with sunglasses | sun | sunglasses"
  },
  {
    "no": 61,
    "codes": "1F913",
    "char": "🤓",
    "name": "nerd face",
    "keywords": "face | geek | nerd"
  },
  {
    "no": 62,
    "codes": "1F9D0",
    "char": "🧐",
    "name": "face with monocle",
    "keywords": "face with monocle | stuffy | wealthy"
  },
  {
    "no": 63,
    "codes": "1F615",
    "char": "😕",
    "name": "confused face",
    "keywords": "confused | face | meh"
  },
  {
    "no": 64,
    "codes": "1F61F",
    "char": "😟",
    "name": "worried face",
    "keywords": "face | worried"
  },
  {
    "no": 65,
    "codes": "1F641",
    "char": "🙁",
    "name": "slightly frowning face",
    "keywords": "face | frown | slightly frowning face"
  },
  {
    "no": 66,
    "codes": "2639",
    "char": "☹",
    "name": "frowning face",
    "keywords": "face | frown | frowning face"
  },
  {
    "no": 67,
    "codes": "1F62E",
    "char": "😮",
    "name": "face with open mouth",
    "keywords": "face | face with open mouth | mouth | open | sympathy"
  },
  {
    "no": 68,
    "codes": "1F62F",
    "char": "😯",
    "name": "hushed face",
    "keywords": "face | hushed | stunned | surprised"
  },
  {
    "no": 69,
    "codes": "1F632",
    "char": "😲",
    "name": "astonished face",
    "keywords": "astonished | face | shocked | totally"
  },
  {
    "no": 70,
    "codes": "1F633",
    "char": "😳",
    "name": "flushed face",
    "keywords": "dazed | face | flushed"
  },
  {
    "no": 71,
    "codes": "1F97A",
    "char": "🥺",
    "name": "pleading face",
    "keywords": "begging | mercy | pleading face | puppy eyes"
  },
  {
    "no": 72,
    "codes": "1F626",
    "char": "😦",
    "name": "frowning face with open mouth",
    "keywords": "face | frown | frowning face with open mouth | mouth | open"
  },
  {
    "no": 73,
    "codes": "1F627",
    "char": "😧",
    "name": "anguished face",
    "keywords": "anguished | face"
  },
  {
    "no": 74,
    "codes": "1F628",
    "char": "😨",
    "name": "fearful face",
    "keywords": "face | fear | fearful | scared"
  },
  {
    "no": 75,
    "codes": "1F630",
    "char": "😰",
    "name": "anxious face with sweat",
    "keywords": "anxious face with sweat | blue | cold | face | rushed | sweat"
  },
  {
    "no": 76,
    "codes": "1F625",
    "char": "😥",
    "name": "sad but relieved face",
    "keywords": "disappointed | face | relieved | sad but relieved face | whew"
  },
  {
    "no": 77,
    "codes": "1F622",
    "char": "😢",
    "name": "crying face",
    "keywords": "cry | crying face | face | sad | tear"
  },
  {
    "no": 78,
    "codes": "1F62D",
    "char": "😭",
    "name": "loudly crying face",
    "keywords": "cry | face | loudly crying face | sad | sob | tear"
  },
  {
    "no": 79,
    "codes": "1F631",
    "char": "😱",
    "name": "face screaming in fear",
    "keywords": "face | face screaming in fear | fear | munch | scared | scream"
  },
  {
    "no": 80,
    "codes": "1F616",
    "char": "😖",
    "name": "confounded face",
    "keywords": "confounded | face"
  },
  {
    "no": 81,
    "codes": "1F623",
    "char": "😣",
    "name": "persevering face",
    "keywords": "face | persevere | persevering face"
  },
  {
    "no": 82,
    "codes": "1F61E",
    "char": "😞",
    "name": "disappointed face",
    "keywords": "disappointed | face"
  },
  {
    "no": 83,
    "codes": "1F613",
    "char": "😓",
    "name": "downcast face with sweat",
    "keywords": "cold | downcast face with sweat | face | sweat"
  },
  {
    "no": 84,
    "codes": "1F629",
    "char": "😩",
    "name": "weary face",
    "keywords": "face | tired | weary"
  },
  {
    "no": 85,
    "codes": "1F62B",
    "char": "😫",
    "name": "tired face",
    "keywords": "face | tired"
  },
  {
    "no": 86,
    "codes": "1F624",
    "char": "😤",
    "name": "face with steam from nose",
    "keywords": "face | face with steam from nose | triumph | won"
  },
  {
    "no": 87,
    "codes": "1F621",
    "char": "😡",
    "name": "pouting face",
    "keywords": "angry | face | mad | pouting | rage | red"
  },
  {
    "no": 88,
    "codes": "1F620",
    "char": "😠",
    "name": "angry face",
    "keywords": "angry | face | mad"
  },
  {
    "no": 89,
    "codes": "1F92C",
    "char": "🤬",
    "name": "face with symbols on mouth",
    "keywords": "face with symbols on mouth | swearing | cursing"
  },
  {
    "no": 90,
    "codes": "1F608",
    "char": "😈",
    "name": "smiling face with horns",
    "keywords": "face | fairy tale | fantasy | horns | smile | smiling face with horns"
  },
  {
    "no": 91,
    "codes": "1F47F",
    "char": "👿",
    "name": "angry face with horns",
    "keywords": "angry face with horns | demon | devil | face | fantasy | imp"
  },
  {
    "no": 92,
    "codes": "1F480",
    "char": "💀",
    "name": "skull",
    "keywords": "death | face | fairy tale | monster | skull"
  },
  {
    "no": 93,
    "codes": "2620",
    "char": "☠",
    "name": "skull and crossbones",
    "keywords": "crossbones | death | face | monster | skull | skull and crossbones"
  },
  {
    "no": 94,
    "codes": "1F4A9",
    "char": "💩",
    "name": "pile of poo",
    "keywords": "dung | face | monster | pile of poo | poo | poop"
  },
  {
    "no": 95,
    "codes": "1F921",
    "char": "🤡",
    "name": "clown face",
    "keywords": "clown | face"
  },
  {
    "no": 96,
    "codes": "1F479",
    "char": "👹",
    "name": "ogre",
    "keywords": "creature | face | fairy tale | fantasy | monster | ogre | troll"
  },
  {
    "no": 97,
    "codes": "1F47A",
    "char": "👺",
    "name": "goblin",
    "keywords": "creature | face | fairy tale | fantasy | goblin | monster"
  },
  {
    "no": 98,
    "codes": "1F47B",
    "char": "👻",
    "name": "ghost",
    "keywords": "creature | face | fairy tale | fantasy | ghost | monster"
  },
  {
    "no": 99,
    "codes": "1F47D",
    "char": "👽",
    "name": "alien",
    "keywords": "alien | creature | extraterrestrial | face | fantasy | ufo"
  },
  {
    "no": 100,
    "codes": "1F47E",
    "char": "👾",
    "name": "alien monster",
    "keywords": "alien | creature | extraterrestrial | face | monster | ufo"
  },
  {
    "no": 101,
    "codes": "1F916",
    "char": "🤖",
    "name": "robot face",
    "keywords": "face | monster | robot"
  },
  {
    "no": 102,
    "codes": "1F63A",
    "char": "😺",
    "name": "grinning cat face",
    "keywords": "cat | face | grinning cat face | mouth | open | smile"
  },
  {
    "no": 103,
    "codes": "1F638",
    "char": "😸",
    "name": "grinning cat face with smiling eyes",
    "keywords": "cat | eye | face | grin | grinning cat face with smiling eyes | smile"
  },
  {
    "no": 104,
    "codes": "1F639",
    "char": "😹",
    "name": "cat face with tears of joy",
    "keywords": "cat | cat face with tears of joy | face | joy | tear"
  },
  {
    "no": 105,
    "codes": "1F63B",
    "char": "😻",
    "name": "smiling cat face with heart-eyes",
    "keywords": "cat | eye | face | love | smile | smiling cat face with heart-eyes"
  },
  {
    "no": 106,
    "codes": "1F63C",
    "char": "😼",
    "name": "cat face with wry smile",
    "keywords": "cat | cat face with wry smile | face | ironic | smile | wry"
  },
  {
    "no": 107,
    "codes": "1F63D",
    "char": "😽",
    "name": "kissing cat face",
    "keywords": "cat | eye | face | kiss | kissing cat face"
  },
  {
    "no": 108,
    "codes": "1F640",
    "char": "🙀",
    "name": "weary cat face",
    "keywords": "cat | face | oh | surprised | weary"
  },
  {
    "no": 109,
    "codes": "1F63F",
    "char": "😿",
    "name": "crying cat face",
    "keywords": "cat | cry | crying cat face | face | sad | tear"
  },
  {
    "no": 110,
    "codes": "1F63E",
    "char": "😾",
    "name": "pouting cat face",
    "keywords": "cat | face | pouting"
  },
  {
    "no": 111,
    "codes": "1F648",
    "char": "🙈",
    "name": "see-no-evil monkey",
    "keywords": "evil | face | forbidden | monkey | see | see-no-evil monkey"
  },
  {
    "no": 112,
    "codes": "1F649",
    "char": "🙉",
    "name": "hear-no-evil monkey",
    "keywords": "evil | face | forbidden | hear | hear-no-evil monkey | monkey"
  },
  {
    "no": 113,
    "codes": "1F64A",
    "char": "🙊",
    "name": "speak-no-evil monkey",
    "keywords": "evil | face | forbidden | monkey | speak | speak-no-evil monkey"
  },
  {
    "no": 114,
    "codes": "1F48B",
    "char": "💋",
    "name": "kiss mark",
    "keywords": "kiss | kiss mark | lips"
  },
  {
    "no": 115,
    "codes": "1F48C",
    "char": "💌",
    "name": "love letter",
    "keywords": "heart | letter | love | mail"
  },
  {
    "no": 116,
    "codes": "1F498",
    "char": "💘",
    "name": "heart with arrow",
    "keywords": "arrow | cupid | heart with arrow"
  },
  {
    "no": 117,
    "codes": "1F49D",
    "char": "💝",
    "name": "heart with ribbon",
    "keywords": "heart with ribbon | ribbon | valentine"
  },
  {
    "no": 118,
    "codes": "1F496",
    "char": "💖",
    "name": "sparkling heart",
    "keywords": "excited | sparkle | sparkling heart"
  },
  {
    "no": 119,
    "codes": "1F497",
    "char": "💗",
    "name": "growing heart",
    "keywords": "excited | growing | growing heart | nervous | pulse"
  },
  {
    "no": 120,
    "codes": "1F493",
    "char": "💓",
    "name": "beating heart",
    "keywords": "beating | beating heart | heartbeat | pulsating"
  },
  {
    "no": 121,
    "codes": "1F49E",
    "char": "💞",
    "name": "revolving hearts",
    "keywords": "revolving | revolving hearts"
  },
  {
    "no": 122,
    "codes": "1F495",
    "char": "💕",
    "name": "two hearts",
    "keywords": "love | two hearts"
  },
  {
    "no": 123,
    "codes": "1F49F",
    "char": "💟",
    "name": "heart decoration",
    "keywords": "heart | heart decoration"
  },
  {
    "no": 124,
    "codes": "2763",
    "char": "❣",
    "name": "heavy heart exclamation",
    "keywords": "exclamation | heavy heart exclamation | mark | punctuation"
  },
  {
    "no": 125,
    "codes": "1F494",
    "char": "💔",
    "name": "broken heart",
    "keywords": "break | broken | broken heart"
  },
  {
    "no": 126,
    "codes": "2764",
    "char": "❤",
    "name": "red heart",
    "keywords": "heart | red heart"
  },
  {
    "no": 127,
    "codes": "1F9E1",
    "char": "🧡",
    "name": "orange heart",
    "keywords": "orange | orange heart"
  },
  {
    "no": 128,
    "codes": "1F49B",
    "char": "💛",
    "name": "yellow heart",
    "keywords": "yellow | yellow heart"
  },
  {
    "no": 129,
    "codes": "1F49A",
    "char": "💚",
    "name": "green heart",
    "keywords": "green | green heart"
  },
  {
    "no": 130,
    "codes": "1F499",
    "char": "💙",
    "name": "blue heart",
    "keywords": "blue | blue heart"
  },
  {
    "no": 131,
    "codes": "1F49C",
    "char": "💜",
    "name": "purple heart",
    "keywords": "purple | purple heart"
  },
  {
    "no": 132,
    "codes": "1F5A4",
    "char": "🖤",
    "name": "black heart",
    "keywords": "black | black heart | evil | wicked"
  },
  {
    "no": 133,
    "codes": "1F4AF",
    "char": "💯",
    "name": "hundred points",
    "keywords": "100 | full | hundred | hundred points | score"
  },
  {
    "no": 134,
    "codes": "1F4A2",
    "char": "💢",
    "name": "anger symbol",
    "keywords": "anger symbol | angry | comic | mad"
  },
  {
    "no": 135,
    "codes": "1F4A5",
    "char": "💥",
    "name": "collision",
    "keywords": "boom | collision | comic"
  },
  {
    "no": 136,
    "codes": "1F4AB",
    "char": "💫",
    "name": "dizzy",
    "keywords": "comic | dizzy | star"
  },
  {
    "no": 137,
    "codes": "1F4A6",
    "char": "💦",
    "name": "sweat droplets",
    "keywords": "comic | splashing | sweat | sweat droplets"
  },
  {
    "no": 138,
    "codes": "1F4A8",
    "char": "💨",
    "name": "dashing away",
    "keywords": "comic | dash | dashing away | running"
  },
  {
    "no": 139,
    "codes": "1F573",
    "char": "🕳",
    "name": "hole",
    "keywords": "hole"
  },
  {
    "no": 140,
    "codes": "1F4A3",
    "char": "💣",
    "name": "bomb",
    "keywords": "bomb | comic"
  },
  {
    "no": 141,
    "codes": "1F4AC",
    "char": "💬",
    "name": "speech balloon",
    "keywords": "balloon | bubble | comic | dialog | speech"
  },
  {
    "no": 142,
    "codes": "1F441 FE0F 200D 1F5E8 FE0F",
    "char": "👁️‍🗨️",
    "name": "eye in speech bubble",
    "keywords": "eye | eye in speech bubble | speech bubble | witness"
  },
  {
    "no": 143,
    "codes": "1F5E8",
    "char": "🗨",
    "name": "left speech bubble",
    "keywords": "dialog | left speech bubble | speech"
  },
  {
    "no": 144,
    "codes": "1F5EF",
    "char": "🗯",
    "name": "right anger bubble",
    "keywords": "angry | balloon | bubble | mad | right anger bubble"
  },
  {
    "no": 145,
    "codes": "1F4AD",
    "char": "💭",
    "name": "thought balloon",
    "keywords": "balloon | bubble | comic | thought"
  },
  {
    "no": 146,
    "codes": "1F4A4",
    "char": "💤",
    "name": "zzz",
    "keywords": "comic | sleep | zzz"
  },
  {
    "no": 147,
    "codes": "1F44B",
    "char": "👋",
    "name": "waving hand",
    "keywords": "hand | wave | waving"
  },
  {
    "no": 148,
    "codes": "1F91A",
    "char": "🤚",
    "name": "raised back of hand",
    "keywords": "backhand | raised | raised back of hand"
  },
  {
    "no": 149,
    "codes": "1F590",
    "char": "🖐",
    "name": "hand with fingers splayed",
    "keywords": "finger | hand | hand with fingers splayed | splayed"
  },
  {
    "no": 150,
    "codes": "270B",
    "char": "✋",
    "name": "raised hand",
    "keywords": "hand | raised hand"
  },
  {
    "no": 151,
    "codes": "1F596",
    "char": "🖖",
    "name": "vulcan salute",
    "keywords": "finger | hand | spock | vulcan | vulcan salute"
  },
  {
    "no": 152,
    "codes": "1F44C",
    "char": "👌",
    "name": "OK hand",
    "keywords": "hand | OK"
  },
  {
    "no": 153,
    "codes": "270C",
    "char": "✌",
    "name": "victory hand",
    "keywords": "hand | v | victory"
  },
  {
    "no": 154,
    "codes": "1F91E",
    "char": "🤞",
    "name": "crossed fingers",
    "keywords": "cross | crossed fingers | finger | hand | luck"
  },
  {
    "no": 155,
    "codes": "1F91F",
    "char": "🤟",
    "name": "love-you gesture",
    "keywords": "hand | ILY | love-you gesture"
  },
  {
    "no": 156,
    "codes": "1F918",
    "char": "🤘",
    "name": "sign of the horns",
    "keywords": "finger | hand | horns | rock-on | sign of the horns"
  },
  {
    "no": 157,
    "codes": "1F919",
    "char": "🤙",
    "name": "call me hand",
    "keywords": "call | call me hand | hand"
  },
  {
    "no": 158,
    "codes": "1F448",
    "char": "👈",
    "name": "backhand index pointing left",
    "keywords": "backhand | backhand index pointing left | finger | hand | index | point"
  },
  {
    "no": 159,
    "codes": "1F449",
    "char": "👉",
    "name": "backhand index pointing right",
    "keywords": "backhand | backhand index pointing right | finger | hand | index | point"
  },
  {
    "no": 160,
    "codes": "1F446",
    "char": "👆",
    "name": "backhand index pointing up",
    "keywords": "backhand | backhand index pointing up | finger | hand | point | up"
  },
  {
    "no": 161,
    "codes": "1F595",
    "char": "🖕",
    "name": "middle finger",
    "keywords": "finger | hand | middle finger"
  },
  {
    "no": 162,
    "codes": "1F447",
    "char": "👇",
    "name": "backhand index pointing down",
    "keywords": "backhand | backhand index pointing down | down | finger | hand | point"
  },
  {
    "no": 163,
    "codes": "261D",
    "char": "☝",
    "name": "index pointing up",
    "keywords": "finger | hand | index | index pointing up | point | up"
  },
  {
    "no": 164,
    "codes": "1F44D",
    "char": "👍",
    "name": "thumbs up",
    "keywords": "+1 | hand | thumb | thumbs up | up"
  },
  {
    "no": 165,
    "codes": "1F44E",
    "char": "👎",
    "name": "thumbs down",
    "keywords": "-1 | down | hand | thumb | thumbs down"
  },
  {
    "no": 166,
    "codes": "270A",
    "char": "✊",
    "name": "raised fist",
    "keywords": "clenched | fist | hand | punch | raised fist"
  },
  {
    "no": 167,
    "codes": "1F44A",
    "char": "👊",
    "name": "oncoming fist",
    "keywords": "clenched | fist | hand | oncoming fist | punch"
  },
  {
    "no": 168,
    "codes": "1F91B",
    "char": "🤛",
    "name": "left-facing fist",
    "keywords": "fist | left-facing fist | leftwards"
  },
  {
    "no": 169,
    "codes": "1F91C",
    "char": "🤜",
    "name": "right-facing fist",
    "keywords": "fist | right-facing fist | rightwards"
  },
  {
    "no": 170,
    "codes": "1F44F",
    "char": "👏",
    "name": "clapping hands",
    "keywords": "clap | clapping hands | hand"
  },
  {
    "no": 171,
    "codes": "1F64C",
    "char": "🙌",
    "name": "raising hands",
    "keywords": "celebration | gesture | hand | hooray | raised | raising hands"
  },
  {
    "no": 172,
    "codes": "1F450",
    "char": "👐",
    "name": "open hands",
    "keywords": "hand | open | open hands"
  },
  {
    "no": 173,
    "codes": "1F932",
    "char": "🤲",
    "name": "palms up together",
    "keywords": "palms up together | prayer | cupped hands"
  },
  {
    "no": 174,
    "codes": "1F91D",
    "char": "🤝",
    "name": "handshake",
    "keywords": "agreement | hand | handshake | meeting | shake"
  },
  {
    "no": 175,
    "codes": "1F64F",
    "char": "🙏",
    "name": "folded hands",
    "keywords": "ask | folded hands | hand | please | pray | thanks"
  },
  {
    "no": 176,
    "codes": "270D",
    "char": "✍",
    "name": "writing hand",
    "keywords": "hand | write | writing hand"
  },
  {
    "no": 177,
    "codes": "1F485",
    "char": "💅",
    "name": "nail polish",
    "keywords": "care | cosmetics | manicure | nail | polish"
  },
  {
    "no": 178,
    "codes": "1F933",
    "char": "🤳",
    "name": "selfie",
    "keywords": "camera | phone | selfie"
  },
  {
    "no": 179,
    "codes": "1F4AA",
    "char": "💪",
    "name": "flexed biceps",
    "keywords": "biceps | comic | flex | flexed biceps | muscle"
  },
  {
    "no": 180,
    "codes": "1F9B5",
    "char": "🦵",
    "name": "leg",
    "keywords": "kick | leg | limb"
  },
  {
    "no": 181,
    "codes": "1F9B6",
    "char": "🦶",
    "name": "foot",
    "keywords": "foot | kick | stomp"
  },
  {
    "no": 182,
    "codes": "1F442",
    "char": "👂",
    "name": "ear",
    "keywords": "body | ear"
  },
  {
    "no": 183,
    "codes": "1F443",
    "char": "👃",
    "name": "nose",
    "keywords": "body | nose"
  },
  {
    "no": 184,
    "codes": "1F9E0",
    "char": "🧠",
    "name": "brain",
    "keywords": "brain | intelligent"
  },
  {
    "no": 185,
    "codes": "1F9B7",
    "char": "🦷",
    "name": "tooth",
    "keywords": "dentist | tooth"
  },
  {
    "no": 186,
    "codes": "1F9B4",
    "char": "🦴",
    "name": "bone",
    "keywords": "bone | skeleton"
  },
  {
    "no": 187,
    "codes": "1F440",
    "char": "👀",
    "name": "eyes",
    "keywords": "eye | eyes | face"
  },
  {
    "no": 188,
    "codes": "1F441",
    "char": "👁",
    "name": "eye",
    "keywords": "body | eye"
  },
  {
    "no": 189,
    "codes": "1F445",
    "char": "👅",
    "name": "tongue",
    "keywords": "body | tongue"
  },
  {
    "no": 190,
    "codes": "1F444",
    "char": "👄",
    "name": "mouth",
    "keywords": "lips | mouth"
  },
  {
    "no": 191,
    "codes": "1F476",
    "char": "👶",
    "name": "baby",
    "keywords": "baby | young"
  },
  {
    "no": 192,
    "codes": "1F9D2",
    "char": "🧒",
    "name": "child",
    "keywords": "child | gender-neutral | unspecified gender | young"
  },
  {
    "no": 193,
    "codes": "1F466",
    "char": "👦",
    "name": "boy",
    "keywords": "boy | young"
  },
  {
    "no": 194,
    "codes": "1F467",
    "char": "👧",
    "name": "girl",
    "keywords": "girl | Virgo | young | zodiac"
  },
  {
    "no": 195,
    "codes": "1F9D1",
    "char": "🧑",
    "name": "person",
    "keywords": "adult | gender-neutral | person | unspecified gender"
  },
  {
    "no": 196,
    "codes": "1F471",
    "char": "👱",
    "name": "person: blond hair",
    "keywords": "blond | blond-haired person | person: blond hair"
  },
  {
    "no": 197,
    "codes": "1F468",
    "char": "👨",
    "name": "man",
    "keywords": "adult | man"
  },
  {
    "no": 198,
    "codes": "1F471 200D 2642 FE0F",
    "char": "👱‍♂️",
    "name": "man: blond hair",
    "keywords": "blond | blond-haired man | man | man: blond hair"
  },
  {
    "no": 199,
    "codes": "1F468 200D 1F9B0",
    "char": "👨‍🦰",
    "name": "man: red hair",
    "keywords": "adult | man | red hair"
  },
  {
    "no": 200,
    "codes": "1F468 200D 1F9B1",
    "char": "👨‍🦱",
    "name": "man: curly hair",
    "keywords": "adult | curly hair | man"
  },
  {
    "no": 201,
    "codes": "1F468 200D 1F9B3",
    "char": "👨‍🦳",
    "name": "man: white hair",
    "keywords": "adult | man | white hair"
  },
  {
    "no": 202,
    "codes": "1F468 200D 1F9B2",
    "char": "👨‍🦲",
    "name": "man: bald",
    "keywords": "adult | bald | man"
  },
  {
    "no": 203,
    "codes": "1F9D4",
    "char": "🧔",
    "name": "man: beard",
    "keywords": "beard | man: beard | person | bewhiskered"
  },
  {
    "no": 204,
    "codes": "1F469",
    "char": "👩",
    "name": "woman",
    "keywords": "adult | woman"
  },
  {
    "no": 205,
    "codes": "1F471 200D 2640 FE0F",
    "char": "👱‍♀️",
    "name": "woman: blond hair",
    "keywords": "blond-haired woman | blonde | woman | woman: blond hair"
  },
  {
    "no": 206,
    "codes": "1F469 200D 1F9B0",
    "char": "👩‍🦰",
    "name": "woman: red hair",
    "keywords": "adult | red hair | woman"
  },
  {
    "no": 207,
    "codes": "1F469 200D 1F9B1",
    "char": "👩‍🦱",
    "name": "woman: curly hair",
    "keywords": "adult | curly hair | woman"
  },
  {
    "no": 208,
    "codes": "1F469 200D 1F9B3",
    "char": "👩‍🦳",
    "name": "woman: white hair",
    "keywords": "adult | white hair | woman"
  },
  {
    "no": 209,
    "codes": "1F469 200D 1F9B2",
    "char": "👩‍🦲",
    "name": "woman: bald",
    "keywords": "adult | bald | woman"
  },
  {
    "no": 210,
    "codes": "1F9D3",
    "char": "🧓",
    "name": "older person",
    "keywords": "adult | gender-neutral | old | older person | unspecified gender"
  },
  {
    "no": 211,
    "codes": "1F474",
    "char": "👴",
    "name": "old man",
    "keywords": "adult | man | old"
  },
  {
    "no": 212,
    "codes": "1F475",
    "char": "👵",
    "name": "old woman",
    "keywords": "adult | old | woman"
  },
  {
    "no": 213,
    "codes": "1F64D",
    "char": "🙍",
    "name": "person frowning",
    "keywords": "frown | gesture | person frowning"
  },
  {
    "no": 214,
    "codes": "1F64D 200D 2642 FE0F",
    "char": "🙍‍♂️",
    "name": "man frowning",
    "keywords": "frowning | gesture | man"
  },
  {
    "no": 215,
    "codes": "1F64D 200D 2640 FE0F",
    "char": "🙍‍♀️",
    "name": "woman frowning",
    "keywords": "frowning | gesture | woman"
  },
  {
    "no": 216,
    "codes": "1F64E",
    "char": "🙎",
    "name": "person pouting",
    "keywords": "gesture | person pouting | pouting"
  },
  {
    "no": 217,
    "codes": "1F64E 200D 2642 FE0F",
    "char": "🙎‍♂️",
    "name": "man pouting",
    "keywords": "gesture | man | pouting"
  },
  {
    "no": 218,
    "codes": "1F64E 200D 2640 FE0F",
    "char": "🙎‍♀️",
    "name": "woman pouting",
    "keywords": "gesture | pouting | woman"
  },
  {
    "no": 219,
    "codes": "1F645",
    "char": "🙅",
    "name": "person gesturing NO",
    "keywords": "forbidden | gesture | hand | person gesturing NO | prohibited"
  },
  {
    "no": 220,
    "codes": "1F645 200D 2642 FE0F",
    "char": "🙅‍♂️",
    "name": "man gesturing NO",
    "keywords": "forbidden | gesture | hand | man | man gesturing NO | prohibited"
  },
  {
    "no": 221,
    "codes": "1F645 200D 2640 FE0F",
    "char": "🙅‍♀️",
    "name": "woman gesturing NO",
    "keywords": "forbidden | gesture | hand | prohibited | woman | woman gesturing NO"
  },
  {
    "no": 222,
    "codes": "1F646",
    "char": "🙆",
    "name": "person gesturing OK",
    "keywords": "gesture | hand | OK | person gesturing OK"
  },
  {
    "no": 223,
    "codes": "1F646 200D 2642 FE0F",
    "char": "🙆‍♂️",
    "name": "man gesturing OK",
    "keywords": "gesture | hand | man | man gesturing OK | OK"
  },
  {
    "no": 224,
    "codes": "1F646 200D 2640 FE0F",
    "char": "🙆‍♀️",
    "name": "woman gesturing OK",
    "keywords": "gesture | hand | OK | woman | woman gesturing OK"
  },
  {
    "no": 225,
    "codes": "1F481",
    "char": "💁",
    "name": "person tipping hand",
    "keywords": "hand | help | information | person tipping hand | sassy | tipping"
  },
  {
    "no": 226,
    "codes": "1F481 200D 2642 FE0F",
    "char": "💁‍♂️",
    "name": "man tipping hand",
    "keywords": "man | man tipping hand | sassy | tipping hand"
  },
  {
    "no": 227,
    "codes": "1F481 200D 2640 FE0F",
    "char": "💁‍♀️",
    "name": "woman tipping hand",
    "keywords": "sassy | tipping hand | woman | woman tipping hand"
  },
  {
    "no": 228,
    "codes": "1F64B",
    "char": "🙋",
    "name": "person raising hand",
    "keywords": "gesture | hand | happy | person raising hand | raised"
  },
  {
    "no": 229,
    "codes": "1F64B 200D 2642 FE0F",
    "char": "🙋‍♂️",
    "name": "man raising hand",
    "keywords": "gesture | man | man raising hand | raising hand"
  },
  {
    "no": 230,
    "codes": "1F64B 200D 2640 FE0F",
    "char": "🙋‍♀️",
    "name": "woman raising hand",
    "keywords": "gesture | raising hand | woman | woman raising hand"
  },
  {
    "no": 231,
    "codes": "1F647",
    "char": "🙇",
    "name": "person bowing",
    "keywords": "apology | bow | gesture | person bowing | sorry"
  },
  {
    "no": 232,
    "codes": "1F647 200D 2642 FE0F",
    "char": "🙇‍♂️",
    "name": "man bowing",
    "keywords": "apology | bowing | favor | gesture | man | sorry"
  },
  {
    "no": 233,
    "codes": "1F647 200D 2640 FE0F",
    "char": "🙇‍♀️",
    "name": "woman bowing",
    "keywords": "apology | bowing | favor | gesture | sorry | woman"
  },
  {
    "no": 234,
    "codes": "1F926",
    "char": "🤦",
    "name": "person facepalming",
    "keywords": "disbelief | exasperation | face | palm | person facepalming"
  },
  {
    "no": 235,
    "codes": "1F926 200D 2642 FE0F",
    "char": "🤦‍♂️",
    "name": "man facepalming",
    "keywords": "disbelief | exasperation | facepalm | man | man facepalming"
  },
  {
    "no": 236,
    "codes": "1F926 200D 2640 FE0F",
    "char": "🤦‍♀️",
    "name": "woman facepalming",
    "keywords": "disbelief | exasperation | facepalm | woman | woman facepalming"
  },
  {
    "no": 237,
    "codes": "1F937",
    "char": "🤷",
    "name": "person shrugging",
    "keywords": "doubt | ignorance | indifference | person shrugging | shrug"
  },
  {
    "no": 238,
    "codes": "1F937 200D 2642 FE0F",
    "char": "🤷‍♂️",
    "name": "man shrugging",
    "keywords": "doubt | ignorance | indifference | man | man shrugging | shrug"
  },
  {
    "no": 239,
    "codes": "1F937 200D 2640 FE0F",
    "char": "🤷‍♀️",
    "name": "woman shrugging",
    "keywords": "doubt | ignorance | indifference | shrug | woman | woman shrugging"
  },
  {
    "no": 240,
    "codes": "1F468 200D 2695 FE0F",
    "char": "👨‍⚕️",
    "name": "man health worker",
    "keywords": "doctor | healthcare | man | man health worker | nurse | therapist"
  },
  {
    "no": 241,
    "codes": "1F469 200D 2695 FE0F",
    "char": "👩‍⚕️",
    "name": "woman health worker",
    "keywords": "doctor | healthcare | nurse | therapist | woman | woman health worker"
  },
  {
    "no": 242,
    "codes": "1F468 200D 1F393",
    "char": "👨‍🎓",
    "name": "man student",
    "keywords": "graduate | man | student"
  },
  {
    "no": 243,
    "codes": "1F469 200D 1F393",
    "char": "👩‍🎓",
    "name": "woman student",
    "keywords": "graduate | student | woman"
  },
  {
    "no": 244,
    "codes": "1F468 200D 1F3EB",
    "char": "👨‍🏫",
    "name": "man teacher",
    "keywords": "instructor | man | professor | teacher"
  },
  {
    "no": 245,
    "codes": "1F469 200D 1F3EB",
    "char": "👩‍🏫",
    "name": "woman teacher",
    "keywords": "instructor | professor | teacher | woman"
  },
  {
    "no": 246,
    "codes": "1F468 200D 2696 FE0F",
    "char": "👨‍⚖️",
    "name": "man judge",
    "keywords": "justice | man | man judge | scales"
  },
  {
    "no": 247,
    "codes": "1F469 200D 2696 FE0F",
    "char": "👩‍⚖️",
    "name": "woman judge",
    "keywords": "judge | scales | woman"
  },
  {
    "no": 248,
    "codes": "1F468 200D 1F33E",
    "char": "👨‍🌾",
    "name": "man farmer",
    "keywords": "farmer | gardener | man | rancher"
  },
  {
    "no": 249,
    "codes": "1F469 200D 1F33E",
    "char": "👩‍🌾",
    "name": "woman farmer",
    "keywords": "farmer | gardener | rancher | woman"
  },
  {
    "no": 250,
    "codes": "1F468 200D 1F373",
    "char": "👨‍🍳",
    "name": "man cook",
    "keywords": "chef | cook | man"
  },
  {
    "no": 251,
    "codes": "1F469 200D 1F373",
    "char": "👩‍🍳",
    "name": "woman cook",
    "keywords": "chef | cook | woman"
  },
  {
    "no": 252,
    "codes": "1F468 200D 1F527",
    "char": "👨‍🔧",
    "name": "man mechanic",
    "keywords": "electrician | man | mechanic | plumber | tradesperson"
  },
  {
    "no": 253,
    "codes": "1F469 200D 1F527",
    "char": "👩‍🔧",
    "name": "woman mechanic",
    "keywords": "electrician | mechanic | plumber | tradesperson | woman"
  },
  {
    "no": 254,
    "codes": "1F468 200D 1F3ED",
    "char": "👨‍🏭",
    "name": "man factory worker",
    "keywords": "assembly | factory | industrial | man | worker"
  },
  {
    "no": 255,
    "codes": "1F469 200D 1F3ED",
    "char": "👩‍🏭",
    "name": "woman factory worker",
    "keywords": "assembly | factory | industrial | woman | worker"
  },
  {
    "no": 256,
    "codes": "1F468 200D 1F4BC",
    "char": "👨‍💼",
    "name": "man office worker",
    "keywords": "architect | business | man | man office worker | manager | white-collar"
  },
  {
    "no": 257,
    "codes": "1F469 200D 1F4BC",
    "char": "👩‍💼",
    "name": "woman office worker",
    "keywords": "architect | business | manager | white-collar | woman | woman office worker"
  },
  {
    "no": 258,
    "codes": "1F468 200D 1F52C",
    "char": "👨‍🔬",
    "name": "man scientist",
    "keywords": "biologist | chemist | engineer | man | physicist | scientist"
  },
  {
    "no": 259,
    "codes": "1F469 200D 1F52C",
    "char": "👩‍🔬",
    "name": "woman scientist",
    "keywords": "biologist | chemist | engineer | physicist | scientist | woman"
  },
  {
    "no": 260,
    "codes": "1F468 200D 1F4BB",
    "char": "👨‍💻",
    "name": "man technologist",
    "keywords": "coder | developer | inventor | man | software | technologist"
  },
  {
    "no": 261,
    "codes": "1F469 200D 1F4BB",
    "char": "👩‍💻",
    "name": "woman technologist",
    "keywords": "coder | developer | inventor | software | technologist | woman"
  },
  {
    "no": 262,
    "codes": "1F468 200D 1F3A4",
    "char": "👨‍🎤",
    "name": "man singer",
    "keywords": "actor | entertainer | man | rock | singer | star"
  },
  {
    "no": 263,
    "codes": "1F469 200D 1F3A4",
    "char": "👩‍🎤",
    "name": "woman singer",
    "keywords": "actor | entertainer | rock | singer | star | woman"
  },
  {
    "no": 264,
    "codes": "1F468 200D 1F3A8",
    "char": "👨‍🎨",
    "name": "man artist",
    "keywords": "artist | man | palette"
  },
  {
    "no": 265,
    "codes": "1F469 200D 1F3A8",
    "char": "👩‍🎨",
    "name": "woman artist",
    "keywords": "artist | palette | woman"
  },
  {
    "no": 266,
    "codes": "1F468 200D 2708 FE0F",
    "char": "👨‍✈️",
    "name": "man pilot",
    "keywords": "man | pilot | plane"
  },
  {
    "no": 267,
    "codes": "1F469 200D 2708 FE0F",
    "char": "👩‍✈️",
    "name": "woman pilot",
    "keywords": "pilot | plane | woman"
  },
  {
    "no": 268,
    "codes": "1F468 200D 1F680",
    "char": "👨‍🚀",
    "name": "man astronaut",
    "keywords": "astronaut | man | rocket"
  },
  {
    "no": 269,
    "codes": "1F469 200D 1F680",
    "char": "👩‍🚀",
    "name": "woman astronaut",
    "keywords": "astronaut | rocket | woman"
  },
  {
    "no": 270,
    "codes": "1F468 200D 1F692",
    "char": "👨‍🚒",
    "name": "man firefighter",
    "keywords": "firefighter | firetruck | man"
  },
  {
    "no": 271,
    "codes": "1F469 200D 1F692",
    "char": "👩‍🚒",
    "name": "woman firefighter",
    "keywords": "firefighter | firetruck | woman"
  },
  {
    "no": 272,
    "codes": "1F46E",
    "char": "👮",
    "name": "police officer",
    "keywords": "cop | officer | police"
  },
  {
    "no": 273,
    "codes": "1F46E 200D 2642 FE0F",
    "char": "👮‍♂️",
    "name": "man police officer",
    "keywords": "cop | man | officer | police"
  },
  {
    "no": 274,
    "codes": "1F46E 200D 2640 FE0F",
    "char": "👮‍♀️",
    "name": "woman police officer",
    "keywords": "cop | officer | police | woman"
  },
  {
    "no": 275,
    "codes": "1F575",
    "char": "🕵",
    "name": "detective",
    "keywords": "detective | sleuth | spy"
  },
  {
    "no": 276,
    "codes": "1F575 FE0F 200D 2642 FE0F",
    "char": "🕵️‍♂️",
    "name": "man detective",
    "keywords": "detective | man | sleuth | spy"
  },
  {
    "no": 277,
    "codes": "1F575 FE0F 200D 2640 FE0F",
    "char": "🕵️‍♀️",
    "name": "woman detective",
    "keywords": "detective | sleuth | spy | woman"
  },
  {
    "no": 278,
    "codes": "1F482",
    "char": "💂",
    "name": "guard",
    "keywords": "guard"
  },
  {
    "no": 279,
    "codes": "1F482 200D 2642 FE0F",
    "char": "💂‍♂️",
    "name": "man guard",
    "keywords": "guard | man"
  },
  {
    "no": 280,
    "codes": "1F482 200D 2640 FE0F",
    "char": "💂‍♀️",
    "name": "woman guard",
    "keywords": "guard | woman"
  },
  {
    "no": 281,
    "codes": "1F477",
    "char": "👷",
    "name": "construction worker",
    "keywords": "construction | hat | worker"
  },
  {
    "no": 282,
    "codes": "1F477 200D 2642 FE0F",
    "char": "👷‍♂️",
    "name": "man construction worker",
    "keywords": "construction | man | worker"
  },
  {
    "no": 283,
    "codes": "1F477 200D 2640 FE0F",
    "char": "👷‍♀️",
    "name": "woman construction worker",
    "keywords": "construction | woman | worker"
  },
  {
    "no": 284,
    "codes": "1F934",
    "char": "🤴",
    "name": "prince",
    "keywords": "prince"
  },
  {
    "no": 285,
    "codes": "1F478",
    "char": "👸",
    "name": "princess",
    "keywords": "fairy tale | fantasy | princess"
  },
  {
    "no": 286,
    "codes": "1F473",
    "char": "👳",
    "name": "person wearing turban",
    "keywords": "person wearing turban | turban"
  },
  {
    "no": 287,
    "codes": "1F473 200D 2642 FE0F",
    "char": "👳‍♂️",
    "name": "man wearing turban",
    "keywords": "man | man wearing turban | turban"
  },
  {
    "no": 288,
    "codes": "1F473 200D 2640 FE0F",
    "char": "👳‍♀️",
    "name": "woman wearing turban",
    "keywords": "turban | woman | woman wearing turban"
  },
  {
    "no": 289,
    "codes": "1F472",
    "char": "👲",
    "name": "man with Chinese cap",
    "keywords": "gua pi mao | hat | man | man with Chinese cap"
  },
  {
    "no": 290,
    "codes": "1F9D5",
    "char": "🧕",
    "name": "woman with headscarf",
    "keywords": "headscarf | hijab | mantilla | tichel | woman with headscarf | bandana | head kerchief"
  },
  {
    "no": 291,
    "codes": "1F935",
    "char": "🤵",
    "name": "man in tuxedo",
    "keywords": "groom | man | man in tuxedo | tuxedo"
  },
  {
    "no": 292,
    "codes": "1F470",
    "char": "👰",
    "name": "bride with veil",
    "keywords": "bride | bride with veil | veil | wedding"
  },
  {
    "no": 293,
    "codes": "1F930",
    "char": "🤰",
    "name": "pregnant woman",
    "keywords": "pregnant | woman"
  },
  {
    "no": 294,
    "codes": "1F931",
    "char": "🤱",
    "name": "breast-feeding",
    "keywords": "baby | breast | breast-feeding | nursing"
  },
  {
    "no": 295,
    "codes": "1F47C",
    "char": "👼",
    "name": "baby angel",
    "keywords": "angel | baby | face | fairy tale | fantasy"
  },
  {
    "no": 296,
    "codes": "1F385",
    "char": "🎅",
    "name": "Santa Claus",
    "keywords": "celebration | Christmas | claus | father | santa | Santa Claus"
  },
  {
    "no": 297,
    "codes": "1F936",
    "char": "🤶",
    "name": "Mrs. Claus",
    "keywords": "celebration | Christmas | claus | mother | Mrs. | Mrs. Claus"
  },
  {
    "no": 298,
    "codes": "1F9B8",
    "char": "🦸",
    "name": "superhero",
    "keywords": "good | hero | heroine | superhero | superpower | superpowers"
  },
  {
    "no": 299,
    "codes": "1F9B8 200D 2642 FE0F",
    "char": "🦸‍♂️",
    "name": "man superhero",
    "keywords": "good | hero | man | man superhero | superpower"
  },
  {
    "no": 300,
    "codes": "1F9B8 200D 2640 FE0F",
    "char": "🦸‍♀️",
    "name": "woman superhero",
    "keywords": "good | hero | heroine | superpower | woman | woman superhero"
  },
  {
    "no": 301,
    "codes": "1F9B9",
    "char": "🦹",
    "name": "supervillain",
    "keywords": "criminal | evil | superpower | supervillain | villain | bad | superpowers"
  },
  {
    "no": 302,
    "codes": "1F9B9 200D 2642 FE0F",
    "char": "🦹‍♂️",
    "name": "man supervillain",
    "keywords": "criminal | evil | man | man supervillain | superpower | villain"
  },
  {
    "no": 303,
    "codes": "1F9B9 200D 2640 FE0F",
    "char": "🦹‍♀️",
    "name": "woman supervillain",
    "keywords": "criminal | evil | superpower | villain | woman | woman supervillain"
  },
  {
    "no": 304,
    "codes": "1F9D9",
    "char": "🧙",
    "name": "mage",
    "keywords": "mage | sorcerer | sorceress | witch | wizard"
  },
  {
    "no": 305,
    "codes": "1F9D9 200D 2642 FE0F",
    "char": "🧙‍♂️",
    "name": "man mage",
    "keywords": "man mage | sorcerer | wizard"
  },
  {
    "no": 306,
    "codes": "1F9D9 200D 2640 FE0F",
    "char": "🧙‍♀️",
    "name": "woman mage",
    "keywords": "sorceress | witch | woman mage"
  },
  {
    "no": 307,
    "codes": "1F9DA",
    "char": "🧚",
    "name": "fairy",
    "keywords": "fairy | Oberon | Puck | Titania"
  },
  {
    "no": 308,
    "codes": "1F9DA 200D 2642 FE0F",
    "char": "🧚‍♂️",
    "name": "man fairy",
    "keywords": "man fairy | Oberon | Puck"
  },
  {
    "no": 309,
    "codes": "1F9DA 200D 2640 FE0F",
    "char": "🧚‍♀️",
    "name": "woman fairy",
    "keywords": "Titania | woman fairy"
  },
  {
    "no": 310,
    "codes": "1F9DB",
    "char": "🧛",
    "name": "vampire",
    "keywords": "Dracula | undead | vampire"
  },
  {
    "no": 311,
    "codes": "1F9DB 200D 2642 FE0F",
    "char": "🧛‍♂️",
    "name": "man vampire",
    "keywords": "Dracula | man vampire | undead"
  },
  {
    "no": 312,
    "codes": "1F9DB 200D 2640 FE0F",
    "char": "🧛‍♀️",
    "name": "woman vampire",
    "keywords": "undead | woman vampire"
  },
  {
    "no": 313,
    "codes": "1F9DC",
    "char": "🧜",
    "name": "merperson",
    "keywords": "mermaid | merman | merperson | merwoman"
  },
  {
    "no": 314,
    "codes": "1F9DC 200D 2642 FE0F",
    "char": "🧜‍♂️",
    "name": "merman",
    "keywords": "merman | Triton"
  },
  {
    "no": 315,
    "codes": "1F9DC 200D 2640 FE0F",
    "char": "🧜‍♀️",
    "name": "mermaid",
    "keywords": "mermaid | merwoman"
  },
  {
    "no": 316,
    "codes": "1F9DD",
    "char": "🧝",
    "name": "elf",
    "keywords": "elf | magical | LOTR style"
  },
  {
    "no": 317,
    "codes": "1F9DD 200D 2642 FE0F",
    "char": "🧝‍♂️",
    "name": "man elf",
    "keywords": "magical | man elf"
  },
  {
    "no": 318,
    "codes": "1F9DD 200D 2640 FE0F",
    "char": "🧝‍♀️",
    "name": "woman elf",
    "keywords": "magical | woman elf"
  },
  {
    "no": 319,
    "codes": "1F9DE",
    "char": "🧞",
    "name": "genie",
    "keywords": "djinn | genie | (non-human color)"
  },
  {
    "no": 320,
    "codes": "1F9DE 200D 2642 FE0F",
    "char": "🧞‍♂️",
    "name": "man genie",
    "keywords": "djinn | man genie"
  },
  {
    "no": 321,
    "codes": "1F9DE 200D 2640 FE0F",
    "char": "🧞‍♀️",
    "name": "woman genie",
    "keywords": "djinn | woman genie"
  },
  {
    "no": 322,
    "codes": "1F9DF",
    "char": "🧟",
    "name": "zombie",
    "keywords": "undead | walking dead | zombie | (non-human color)"
  },
  {
    "no": 323,
    "codes": "1F9DF 200D 2642 FE0F",
    "char": "🧟‍♂️",
    "name": "man zombie",
    "keywords": "man zombie | undead | walking dead"
  },
  {
    "no": 324,
    "codes": "1F9DF 200D 2640 FE0F",
    "char": "🧟‍♀️",
    "name": "woman zombie",
    "keywords": "undead | walking dead | woman zombie"
  },
  {
    "no": 325,
    "codes": "1F486",
    "char": "💆",
    "name": "person getting massage",
    "keywords": "face | massage | person getting massage | salon"
  },
  {
    "no": 326,
    "codes": "1F486 200D 2642 FE0F",
    "char": "💆‍♂️",
    "name": "man getting massage",
    "keywords": "face | man | man getting massage | massage"
  },
  {
    "no": 327,
    "codes": "1F486 200D 2640 FE0F",
    "char": "💆‍♀️",
    "name": "woman getting massage",
    "keywords": "face | massage | woman | woman getting massage"
  },
  {
    "no": 328,
    "codes": "1F487",
    "char": "💇",
    "name": "person getting haircut",
    "keywords": "barber | beauty | haircut | parlor | person getting haircut"
  },
  {
    "no": 329,
    "codes": "1F487 200D 2642 FE0F",
    "char": "💇‍♂️",
    "name": "man getting haircut",
    "keywords": "haircut | man | man getting haircut"
  },
  {
    "no": 330,
    "codes": "1F487 200D 2640 FE0F",
    "char": "💇‍♀️",
    "name": "woman getting haircut",
    "keywords": "haircut | woman | woman getting haircut"
  },
  {
    "no": 331,
    "codes": "1F6B6",
    "char": "🚶",
    "name": "person walking",
    "keywords": "hike | person walking | walk | walking"
  },
  {
    "no": 332,
    "codes": "1F6B6 200D 2642 FE0F",
    "char": "🚶‍♂️",
    "name": "man walking",
    "keywords": "hike | man | man walking | walk"
  },
  {
    "no": 333,
    "codes": "1F6B6 200D 2640 FE0F",
    "char": "🚶‍♀️",
    "name": "woman walking",
    "keywords": "hike | walk | woman | woman walking"
  },
  {
    "no": 334,
    "codes": "1F3C3",
    "char": "🏃",
    "name": "person running",
    "keywords": "marathon | person running | running"
  },
  {
    "no": 335,
    "codes": "1F3C3 200D 2642 FE0F",
    "char": "🏃‍♂️",
    "name": "man running",
    "keywords": "man | marathon | racing | running"
  },
  {
    "no": 336,
    "codes": "1F3C3 200D 2640 FE0F",
    "char": "🏃‍♀️",
    "name": "woman running",
    "keywords": "marathon | racing | running | woman"
  },
  {
    "no": 337,
    "codes": "1F483",
    "char": "💃",
    "name": "woman dancing",
    "keywords": "dancing | woman"
  },
  {
    "no": 338,
    "codes": "1F57A",
    "char": "🕺",
    "name": "man dancing",
    "keywords": "dance | man | man dancing"
  },
  {
    "no": 339,
    "codes": "1F574",
    "char": "🕴",
    "name": "man in suit levitating",
    "keywords": "business | man | man in suit levitating | suit"
  },
  {
    "no": 340,
    "codes": "1F46F",
    "char": "👯",
    "name": "people with bunny ears",
    "keywords": "bunny ear | dancer | partying | people with bunny ears"
  },
  {
    "no": 341,
    "codes": "1F46F 200D 2642 FE0F",
    "char": "👯‍♂️",
    "name": "men with bunny ears",
    "keywords": "bunny ear | dancer | men | men with bunny ears | partying"
  },
  {
    "no": 342,
    "codes": "1F46F 200D 2640 FE0F",
    "char": "👯‍♀️",
    "name": "women with bunny ears",
    "keywords": "bunny ear | dancer | partying | women | women with bunny ears"
  },
  {
    "no": 343,
    "codes": "1F9D6",
    "char": "🧖",
    "name": "person in steamy room",
    "keywords": "person in steamy room | sauna | steam room | hamam | steambath"
  },
  {
    "no": 344,
    "codes": "1F9D6 200D 2642 FE0F",
    "char": "🧖‍♂️",
    "name": "man in steamy room",
    "keywords": "man in steamy room | sauna | steam room"
  },
  {
    "no": 345,
    "codes": "1F9D6 200D 2640 FE0F",
    "char": "🧖‍♀️",
    "name": "woman in steamy room",
    "keywords": "sauna | steam room | woman in steamy room"
  },
  {
    "no": 346,
    "codes": "1F9D7",
    "char": "🧗",
    "name": "person climbing",
    "keywords": "climber | person climbing"
  },
  {
    "no": 347,
    "codes": "1F9D7 200D 2642 FE0F",
    "char": "🧗‍♂️",
    "name": "man climbing",
    "keywords": "climber | man climbing"
  },
  {
    "no": 348,
    "codes": "1F9D7 200D 2640 FE0F",
    "char": "🧗‍♀️",
    "name": "woman climbing",
    "keywords": "climber | woman climbing"
  },
  {
    "no": 349,
    "codes": "1F93A",
    "char": "🤺",
    "name": "person fencing",
    "keywords": "fencer | fencing | person fencing | sword"
  },
  {
    "no": 350,
    "codes": "1F3C7",
    "char": "🏇",
    "name": "horse racing",
    "keywords": "horse | jockey | racehorse | racing"
  },
  {
    "no": 351,
    "codes": "26F7",
    "char": "⛷",
    "name": "skier",
    "keywords": "ski | skier | snow"
  },
  {
    "no": 352,
    "codes": "1F3C2",
    "char": "🏂",
    "name": "snowboarder",
    "keywords": "ski | snow | snowboard | snowboarder"
  },
  {
    "no": 353,
    "codes": "1F3CC",
    "char": "🏌",
    "name": "person golfing",
    "keywords": "ball | golf | person golfing"
  },
  {
    "no": 354,
    "codes": "1F3CC FE0F 200D 2642 FE0F",
    "char": "🏌️‍♂️",
    "name": "man golfing",
    "keywords": "golf | man | man golfing"
  },
  {
    "no": 355,
    "codes": "1F3CC FE0F 200D 2640 FE0F",
    "char": "🏌️‍♀️",
    "name": "woman golfing",
    "keywords": "golf | woman | woman golfing"
  },
  {
    "no": 356,
    "codes": "1F3C4",
    "char": "🏄",
    "name": "person surfing",
    "keywords": "person surfing | surfing"
  },
  {
    "no": 357,
    "codes": "1F3C4 200D 2642 FE0F",
    "char": "🏄‍♂️",
    "name": "man surfing",
    "keywords": "man | surfing"
  },
  {
    "no": 358,
    "codes": "1F3C4 200D 2640 FE0F",
    "char": "🏄‍♀️",
    "name": "woman surfing",
    "keywords": "surfing | woman"
  },
  {
    "no": 359,
    "codes": "1F6A3",
    "char": "🚣",
    "name": "person rowing boat",
    "keywords": "boat | person rowing boat | rowboat"
  },
  {
    "no": 360,
    "codes": "1F6A3 200D 2642 FE0F",
    "char": "🚣‍♂️",
    "name": "man rowing boat",
    "keywords": "boat | man | man rowing boat | rowboat"
  },
  {
    "no": 361,
    "codes": "1F6A3 200D 2640 FE0F",
    "char": "🚣‍♀️",
    "name": "woman rowing boat",
    "keywords": "boat | rowboat | woman | woman rowing boat"
  },
  {
    "no": 362,
    "codes": "1F3CA",
    "char": "🏊",
    "name": "person swimming",
    "keywords": "person swimming | swim"
  },
  {
    "no": 363,
    "codes": "1F3CA 200D 2642 FE0F",
    "char": "🏊‍♂️",
    "name": "man swimming",
    "keywords": "man | man swimming | swim"
  },
  {
    "no": 364,
    "codes": "1F3CA 200D 2640 FE0F",
    "char": "🏊‍♀️",
    "name": "woman swimming",
    "keywords": "swim | woman | woman swimming"
  },
  {
    "no": 365,
    "codes": "26F9",
    "char": "⛹",
    "name": "person bouncing ball",
    "keywords": "ball | person bouncing ball"
  },
  {
    "no": 366,
    "codes": "26F9 FE0F 200D 2642 FE0F",
    "char": "⛹️‍♂️",
    "name": "man bouncing ball",
    "keywords": "ball | man | man bouncing ball"
  },
  {
    "no": 367,
    "codes": "26F9 FE0F 200D 2640 FE0F",
    "char": "⛹️‍♀️",
    "name": "woman bouncing ball",
    "keywords": "ball | woman | woman bouncing ball"
  },
  {
    "no": 368,
    "codes": "1F3CB",
    "char": "🏋",
    "name": "person lifting weights",
    "keywords": "lifter | person lifting weights | weight"
  },
  {
    "no": 369,
    "codes": "1F3CB FE0F 200D 2642 FE0F",
    "char": "🏋️‍♂️",
    "name": "man lifting weights",
    "keywords": "man | man lifting weights | weight lifter"
  },
  {
    "no": 370,
    "codes": "1F3CB FE0F 200D 2640 FE0F",
    "char": "🏋️‍♀️",
    "name": "woman lifting weights",
    "keywords": "weight lifter | woman | woman lifting weights"
  },
  {
    "no": 371,
    "codes": "1F6B4",
    "char": "🚴",
    "name": "person biking",
    "keywords": "bicycle | biking | cyclist | person biking"
  },
  {
    "no": 372,
    "codes": "1F6B4 200D 2642 FE0F",
    "char": "🚴‍♂️",
    "name": "man biking",
    "keywords": "bicycle | biking | cyclist | man"
  },
  {
    "no": 373,
    "codes": "1F6B4 200D 2640 FE0F",
    "char": "🚴‍♀️",
    "name": "woman biking",
    "keywords": "bicycle | biking | cyclist | woman"
  },
  {
    "no": 374,
    "codes": "1F6B5",
    "char": "🚵",
    "name": "person mountain biking",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | person mountain biking"
  },
  {
    "no": 375,
    "codes": "1F6B5 200D 2642 FE0F",
    "char": "🚵‍♂️",
    "name": "man mountain biking",
    "keywords": "bicycle | bike | cyclist | man | man mountain biking | mountain"
  },
  {
    "no": 376,
    "codes": "1F6B5 200D 2640 FE0F",
    "char": "🚵‍♀️",
    "name": "woman mountain biking",
    "keywords": "bicycle | bike | biking | cyclist | mountain | woman"
  },
  {
    "no": 377,
    "codes": "1F938",
    "char": "🤸",
    "name": "person cartwheeling",
    "keywords": "cartwheel | gymnastics | person cartwheeling"
  },
  {
    "no": 378,
    "codes": "1F938 200D 2642 FE0F",
    "char": "🤸‍♂️",
    "name": "man cartwheeling",
    "keywords": "cartwheel | gymnastics | man | man cartwheeling"
  },
  {
    "no": 379,
    "codes": "1F938 200D 2640 FE0F",
    "char": "🤸‍♀️",
    "name": "woman cartwheeling",
    "keywords": "cartwheel | gymnastics | woman | woman cartwheeling"
  },
  {
    "no": 380,
    "codes": "1F93C",
    "char": "🤼",
    "name": "people wrestling",
    "keywords": "people wrestling | wrestle | wrestler"
  },
  {
    "no": 381,
    "codes": "1F93C 200D 2642 FE0F",
    "char": "🤼‍♂️",
    "name": "men wrestling",
    "keywords": "men | men wrestling | wrestle"
  },
  {
    "no": 382,
    "codes": "1F93C 200D 2640 FE0F",
    "char": "🤼‍♀️",
    "name": "women wrestling",
    "keywords": "women | women wrestling | wrestle"
  },
  {
    "no": 383,
    "codes": "1F93D",
    "char": "🤽",
    "name": "person playing water polo",
    "keywords": "person playing water polo | polo | water"
  },
  {
    "no": 384,
    "codes": "1F93D 200D 2642 FE0F",
    "char": "🤽‍♂️",
    "name": "man playing water polo",
    "keywords": "man | man playing water polo | water polo"
  },
  {
    "no": 385,
    "codes": "1F93D 200D 2640 FE0F",
    "char": "🤽‍♀️",
    "name": "woman playing water polo",
    "keywords": "water polo | woman | woman playing water polo"
  },
  {
    "no": 386,
    "codes": "1F93E",
    "char": "🤾",
    "name": "person playing handball",
    "keywords": "ball | handball | person playing handball"
  },
  {
    "no": 387,
    "codes": "1F93E 200D 2642 FE0F",
    "char": "🤾‍♂️",
    "name": "man playing handball",
    "keywords": "handball | man | man playing handball"
  },
  {
    "no": 388,
    "codes": "1F93E 200D 2640 FE0F",
    "char": "🤾‍♀️",
    "name": "woman playing handball",
    "keywords": "handball | woman | woman playing handball"
  },
  {
    "no": 389,
    "codes": "1F939",
    "char": "🤹",
    "name": "person juggling",
    "keywords": "balance | juggle | multitask | person juggling | skill"
  },
  {
    "no": 390,
    "codes": "1F939 200D 2642 FE0F",
    "char": "🤹‍♂️",
    "name": "man juggling",
    "keywords": "juggling | man | multitask"
  },
  {
    "no": 391,
    "codes": "1F939 200D 2640 FE0F",
    "char": "🤹‍♀️",
    "name": "woman juggling",
    "keywords": "juggling | multitask | woman"
  },
  {
    "no": 392,
    "codes": "1F9D8",
    "char": "🧘",
    "name": "person in lotus position",
    "keywords": "meditation | person in lotus position | yoga | serenity"
  },
  {
    "no": 393,
    "codes": "1F9D8 200D 2642 FE0F",
    "char": "🧘‍♂️",
    "name": "man in lotus position",
    "keywords": "man in lotus position | meditation | yoga"
  },
  {
    "no": 394,
    "codes": "1F9D8 200D 2640 FE0F",
    "char": "🧘‍♀️",
    "name": "woman in lotus position",
    "keywords": "meditation | woman in lotus position | yoga"
  },
  {
    "no": 395,
    "codes": "1F6C0",
    "char": "🛀",
    "name": "person taking bath",
    "keywords": "bath | bathtub | person taking bath"
  },
  {
    "no": 396,
    "codes": "1F6CC",
    "char": "🛌",
    "name": "person in bed",
    "keywords": "hotel | person in bed | sleep"
  },
  {
    "no": 397,
    "codes": "1F46D",
    "char": "👭",
    "name": "women holding hands",
    "keywords": "couple | hand | holding hands | women"
  },
  {
    "no": 398,
    "codes": "1F46B",
    "char": "👫",
    "name": "woman and man holding hands",
    "keywords": "couple | hand | hold | holding hands | man | woman"
  },
  {
    "no": 399,
    "codes": "1F46C",
    "char": "👬",
    "name": "men holding hands",
    "keywords": "couple | Gemini | holding hands | man | men | twins | zodiac"
  },
  {
    "no": 400,
    "codes": "1F48F",
    "char": "💏",
    "name": "kiss",
    "keywords": "couple | kiss"
  },
  {
    "no": 401,
    "codes": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468",
    "char": "👩‍❤️‍💋‍👨",
    "name": "kiss: woman, man",
    "keywords": "couple | kiss | man | woman"
  },
  {
    "no": 402,
    "codes": "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468",
    "char": "👨‍❤️‍💋‍👨",
    "name": "kiss: man, man",
    "keywords": "couple | kiss | man"
  },
  {
    "no": 403,
    "codes": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469",
    "char": "👩‍❤️‍💋‍👩",
    "name": "kiss: woman, woman",
    "keywords": "couple | kiss | woman"
  },
  {
    "no": 404,
    "codes": "1F491",
    "char": "💑",
    "name": "couple with heart",
    "keywords": "couple | couple with heart | love"
  },
  {
    "no": 405,
    "codes": "1F469 200D 2764 FE0F 200D 1F468",
    "char": "👩‍❤️‍👨",
    "name": "couple with heart: woman, man",
    "keywords": "couple | couple with heart | love | man | woman"
  },
  {
    "no": 406,
    "codes": "1F468 200D 2764 FE0F 200D 1F468",
    "char": "👨‍❤️‍👨",
    "name": "couple with heart: man, man",
    "keywords": "couple | couple with heart | love | man"
  },
  {
    "no": 407,
    "codes": "1F469 200D 2764 FE0F 200D 1F469",
    "char": "👩‍❤️‍👩",
    "name": "couple with heart: woman, woman",
    "keywords": "couple | couple with heart | love | woman"
  },
  {
    "no": 408,
    "codes": "1F46A",
    "char": "👪",
    "name": "family",
    "keywords": "family"
  },
  {
    "no": 409,
    "codes": "1F468 200D 1F469 200D 1F466",
    "char": "👨‍👩‍👦",
    "name": "family: man, woman, boy",
    "keywords": "boy | family | man | woman"
  },
  {
    "no": 410,
    "codes": "1F468 200D 1F469 200D 1F467",
    "char": "👨‍👩‍👧",
    "name": "family: man, woman, girl",
    "keywords": "family | girl | man | woman"
  },
  {
    "no": 411,
    "codes": "1F468 200D 1F469 200D 1F467 200D 1F466",
    "char": "👨‍👩‍👧‍👦",
    "name": "family: man, woman, girl, boy",
    "keywords": "boy | family | girl | man | woman"
  },
  {
    "no": 412,
    "codes": "1F468 200D 1F469 200D 1F466 200D 1F466",
    "char": "👨‍👩‍👦‍👦",
    "name": "family: man, woman, boy, boy",
    "keywords": "boy | family | man | woman"
  },
  {
    "no": 413,
    "codes": "1F468 200D 1F469 200D 1F467 200D 1F467",
    "char": "👨‍👩‍👧‍👧",
    "name": "family: man, woman, girl, girl",
    "keywords": "family | girl | man | woman"
  },
  {
    "no": 414,
    "codes": "1F468 200D 1F468 200D 1F466",
    "char": "👨‍👨‍👦",
    "name": "family: man, man, boy",
    "keywords": "boy | family | man"
  },
  {
    "no": 415,
    "codes": "1F468 200D 1F468 200D 1F467",
    "char": "👨‍👨‍👧",
    "name": "family: man, man, girl",
    "keywords": "family | girl | man"
  },
  {
    "no": 416,
    "codes": "1F468 200D 1F468 200D 1F467 200D 1F466",
    "char": "👨‍👨‍👧‍👦",
    "name": "family: man, man, girl, boy",
    "keywords": "boy | family | girl | man"
  },
  {
    "no": 417,
    "codes": "1F468 200D 1F468 200D 1F466 200D 1F466",
    "char": "👨‍👨‍👦‍👦",
    "name": "family: man, man, boy, boy",
    "keywords": "boy | family | man"
  },
  {
    "no": 418,
    "codes": "1F468 200D 1F468 200D 1F467 200D 1F467",
    "char": "👨‍👨‍👧‍👧",
    "name": "family: man, man, girl, girl",
    "keywords": "family | girl | man"
  },
  {
    "no": 419,
    "codes": "1F469 200D 1F469 200D 1F466",
    "char": "👩‍👩‍👦",
    "name": "family: woman, woman, boy",
    "keywords": "boy | family | woman"
  },
  {
    "no": 420,
    "codes": "1F469 200D 1F469 200D 1F467",
    "char": "👩‍👩‍👧",
    "name": "family: woman, woman, girl",
    "keywords": "family | girl | woman"
  },
  {
    "no": 421,
    "codes": "1F469 200D 1F469 200D 1F467 200D 1F466",
    "char": "👩‍👩‍👧‍👦",
    "name": "family: woman, woman, girl, boy",
    "keywords": "boy | family | girl | woman"
  },
  {
    "no": 422,
    "codes": "1F469 200D 1F469 200D 1F466 200D 1F466",
    "char": "👩‍👩‍👦‍👦",
    "name": "family: woman, woman, boy, boy",
    "keywords": "boy | family | woman"
  },
  {
    "no": 423,
    "codes": "1F469 200D 1F469 200D 1F467 200D 1F467",
    "char": "👩‍👩‍👧‍👧",
    "name": "family: woman, woman, girl, girl",
    "keywords": "family | girl | woman"
  },
  {
    "no": 424,
    "codes": "1F468 200D 1F466",
    "char": "👨‍👦",
    "name": "family: man, boy",
    "keywords": "boy | family | man"
  },
  {
    "no": 425,
    "codes": "1F468 200D 1F466 200D 1F466",
    "char": "👨‍👦‍👦",
    "name": "family: man, boy, boy",
    "keywords": "boy | family | man"
  },
  {
    "no": 426,
    "codes": "1F468 200D 1F467",
    "char": "👨‍👧",
    "name": "family: man, girl",
    "keywords": "family | girl | man"
  },
  {
    "no": 427,
    "codes": "1F468 200D 1F467 200D 1F466",
    "char": "👨‍👧‍👦",
    "name": "family: man, girl, boy",
    "keywords": "boy | family | girl | man"
  },
  {
    "no": 428,
    "codes": "1F468 200D 1F467 200D 1F467",
    "char": "👨‍👧‍👧",
    "name": "family: man, girl, girl",
    "keywords": "family | girl | man"
  },
  {
    "no": 429,
    "codes": "1F469 200D 1F466",
    "char": "👩‍👦",
    "name": "family: woman, boy",
    "keywords": "boy | family | woman"
  },
  {
    "no": 430,
    "codes": "1F469 200D 1F466 200D 1F466",
    "char": "👩‍👦‍👦",
    "name": "family: woman, boy, boy",
    "keywords": "boy | family | woman"
  },
  {
    "no": 431,
    "codes": "1F469 200D 1F467",
    "char": "👩‍👧",
    "name": "family: woman, girl",
    "keywords": "family | girl | woman"
  },
  {
    "no": 432,
    "codes": "1F469 200D 1F467 200D 1F466",
    "char": "👩‍👧‍👦",
    "name": "family: woman, girl, boy",
    "keywords": "boy | family | girl | woman"
  },
  {
    "no": 433,
    "codes": "1F469 200D 1F467 200D 1F467",
    "char": "👩‍👧‍👧",
    "name": "family: woman, girl, girl",
    "keywords": "family | girl | woman"
  },
  {
    "no": 434,
    "codes": "1F5E3",
    "char": "🗣",
    "name": "speaking head",
    "keywords": "face | head | silhouette | speak | speaking"
  },
  {
    "no": 435,
    "codes": "1F464",
    "char": "👤",
    "name": "bust in silhouette",
    "keywords": "bust | bust in silhouette | silhouette"
  },
  {
    "no": 436,
    "codes": "1F465",
    "char": "👥",
    "name": "busts in silhouette",
    "keywords": "bust | busts in silhouette | silhouette"
  },
  {
    "no": 437,
    "codes": "1F463",
    "char": "👣",
    "name": "footprints",
    "keywords": "clothing | footprint | footprints | print"
  },
  {
    "no": 438,
    "codes": "1F9B0",
    "char": "🦰",
    "name": "red hair",
    "keywords": "ginger | red hair | redhead\n➯ Component for use in RGI sequences. Isolated images should have dotted borders."
  },
  {
    "no": 439,
    "codes": "1F9B1",
    "char": "🦱",
    "name": "curly hair",
    "keywords": "afro | curly | curly hair | ringlets\n➯ Component for use in RGI sequences. Isolated images should have dotted borders."
  },
  {
    "no": 440,
    "codes": "1F9B3",
    "char": "🦳",
    "name": "white hair",
    "keywords": "gray | hair | old | white\n➯ Component for use in RGI sequences. Isolated images should have dotted borders."
  },
  {
    "no": 441,
    "codes": "1F9B2",
    "char": "🦲",
    "name": "bald",
    "keywords": "bald | chemotherapy | hairless | no hair | shaven\n➯ Component for use in RGI sequences. Isolated images should have dotted borders."
  },
  {
    "no": 442,
    "codes": "1F435",
    "char": "🐵",
    "name": "monkey face",
    "keywords": "face | monkey"
  },
  {
    "no": 443,
    "codes": "1F412",
    "char": "🐒",
    "name": "monkey",
    "keywords": "monkey"
  },
  {
    "no": 444,
    "codes": "1F98D",
    "char": "🦍",
    "name": "gorilla",
    "keywords": "gorilla"
  },
  {
    "no": 445,
    "codes": "1F436",
    "char": "🐶",
    "name": "dog face",
    "keywords": "dog | face | pet"
  },
  {
    "no": 446,
    "codes": "1F415",
    "char": "🐕",
    "name": "dog",
    "keywords": "dog | pet"
  },
  {
    "no": 447,
    "codes": "1F429",
    "char": "🐩",
    "name": "poodle",
    "keywords": "dog | poodle"
  },
  {
    "no": 448,
    "codes": "1F43A",
    "char": "🐺",
    "name": "wolf face",
    "keywords": "face | wolf"
  },
  {
    "no": 449,
    "codes": "1F98A",
    "char": "🦊",
    "name": "fox face",
    "keywords": "face | fox"
  },
  {
    "no": 450,
    "codes": "1F99D",
    "char": "🦝",
    "name": "raccoon",
    "keywords": "curious | raccoon | sly"
  },
  {
    "no": 451,
    "codes": "1F431",
    "char": "🐱",
    "name": "cat face",
    "keywords": "cat | face | pet"
  },
  {
    "no": 452,
    "codes": "1F408",
    "char": "🐈",
    "name": "cat",
    "keywords": "cat | pet"
  },
  {
    "no": 453,
    "codes": "1F981",
    "char": "🦁",
    "name": "lion face",
    "keywords": "face | Leo | lion | zodiac"
  },
  {
    "no": 454,
    "codes": "1F42F",
    "char": "🐯",
    "name": "tiger face",
    "keywords": "face | tiger"
  },
  {
    "no": 455,
    "codes": "1F405",
    "char": "🐅",
    "name": "tiger",
    "keywords": "tiger"
  },
  {
    "no": 456,
    "codes": "1F406",
    "char": "🐆",
    "name": "leopard",
    "keywords": "leopard"
  },
  {
    "no": 457,
    "codes": "1F434",
    "char": "🐴",
    "name": "horse face",
    "keywords": "face | horse"
  },
  {
    "no": 458,
    "codes": "1F40E",
    "char": "🐎",
    "name": "horse",
    "keywords": "equestrian | horse | racehorse | racing"
  },
  {
    "no": 459,
    "codes": "1F984",
    "char": "🦄",
    "name": "unicorn face",
    "keywords": "face | unicorn"
  },
  {
    "no": 460,
    "codes": "1F993",
    "char": "🦓",
    "name": "zebra",
    "keywords": "stripe | zebra"
  },
  {
    "no": 461,
    "codes": "1F98C",
    "char": "🦌",
    "name": "deer",
    "keywords": "deer"
  },
  {
    "no": 462,
    "codes": "1F42E",
    "char": "🐮",
    "name": "cow face",
    "keywords": "cow | face"
  },
  {
    "no": 463,
    "codes": "1F402",
    "char": "🐂",
    "name": "ox",
    "keywords": "bull | ox | Taurus | zodiac"
  },
  {
    "no": 464,
    "codes": "1F403",
    "char": "🐃",
    "name": "water buffalo",
    "keywords": "buffalo | water"
  },
  {
    "no": 465,
    "codes": "1F404",
    "char": "🐄",
    "name": "cow",
    "keywords": "cow"
  },
  {
    "no": 466,
    "codes": "1F437",
    "char": "🐷",
    "name": "pig face",
    "keywords": "face | pig"
  },
  {
    "no": 467,
    "codes": "1F416",
    "char": "🐖",
    "name": "pig",
    "keywords": "pig | sow"
  },
  {
    "no": 468,
    "codes": "1F417",
    "char": "🐗",
    "name": "boar",
    "keywords": "boar | pig"
  },
  {
    "no": 469,
    "codes": "1F43D",
    "char": "🐽",
    "name": "pig nose",
    "keywords": "face | nose | pig"
  },
  {
    "no": 470,
    "codes": "1F40F",
    "char": "🐏",
    "name": "ram",
    "keywords": "Aries | male | ram | sheep | zodiac"
  },
  {
    "no": 471,
    "codes": "1F411",
    "char": "🐑",
    "name": "ewe",
    "keywords": "ewe | female | sheep"
  },
  {
    "no": 472,
    "codes": "1F410",
    "char": "🐐",
    "name": "goat",
    "keywords": "Capricorn | goat | zodiac"
  },
  {
    "no": 473,
    "codes": "1F42A",
    "char": "🐪",
    "name": "camel",
    "keywords": "camel | dromedary | hump"
  },
  {
    "no": 474,
    "codes": "1F42B",
    "char": "🐫",
    "name": "two-hump camel",
    "keywords": "bactrian | camel | hump | two-hump camel"
  },
  {
    "no": 475,
    "codes": "1F999",
    "char": "🦙",
    "name": "llama",
    "keywords": "alpaca | guanaco | llama | vicuña | wool"
  },
  {
    "no": 476,
    "codes": "1F992",
    "char": "🦒",
    "name": "giraffe",
    "keywords": "giraffe | spots"
  },
  {
    "no": 477,
    "codes": "1F418",
    "char": "🐘",
    "name": "elephant",
    "keywords": "elephant"
  },
  {
    "no": 478,
    "codes": "1F98F",
    "char": "🦏",
    "name": "rhinoceros",
    "keywords": "rhinoceros"
  },
  {
    "no": 479,
    "codes": "1F99B",
    "char": "🦛",
    "name": "hippopotamus",
    "keywords": "hippo | hippopotamus"
  },
  {
    "no": 480,
    "codes": "1F42D",
    "char": "🐭",
    "name": "mouse face",
    "keywords": "face | mouse"
  },
  {
    "no": 481,
    "codes": "1F401",
    "char": "🐁",
    "name": "mouse",
    "keywords": "mouse"
  },
  {
    "no": 482,
    "codes": "1F400",
    "char": "🐀",
    "name": "rat",
    "keywords": "rat"
  },
  {
    "no": 483,
    "codes": "1F439",
    "char": "🐹",
    "name": "hamster face",
    "keywords": "face | hamster | pet"
  },
  {
    "no": 484,
    "codes": "1F430",
    "char": "🐰",
    "name": "rabbit face",
    "keywords": "bunny | face | pet | rabbit"
  },
  {
    "no": 485,
    "codes": "1F407",
    "char": "🐇",
    "name": "rabbit",
    "keywords": "bunny | pet | rabbit"
  },
  {
    "no": 486,
    "codes": "1F43F",
    "char": "🐿",
    "name": "chipmunk",
    "keywords": "chipmunk | squirrel"
  },
  {
    "no": 487,
    "codes": "1F994",
    "char": "🦔",
    "name": "hedgehog",
    "keywords": "hedgehog | spiny"
  },
  {
    "no": 488,
    "codes": "1F987",
    "char": "🦇",
    "name": "bat",
    "keywords": "bat | vampire"
  },
  {
    "no": 489,
    "codes": "1F43B",
    "char": "🐻",
    "name": "bear face",
    "keywords": "bear | face"
  },
  {
    "no": 490,
    "codes": "1F428",
    "char": "🐨",
    "name": "koala",
    "keywords": "bear | koala"
  },
  {
    "no": 491,
    "codes": "1F43C",
    "char": "🐼",
    "name": "panda face",
    "keywords": "face | panda"
  },
  {
    "no": 492,
    "codes": "1F998",
    "char": "🦘",
    "name": "kangaroo",
    "keywords": "Australia | joey | jump | kangaroo | marsupial"
  },
  {
    "no": 493,
    "codes": "1F9A1",
    "char": "🦡",
    "name": "badger",
    "keywords": "badger | honey badger | pester"
  },
  {
    "no": 494,
    "codes": "1F43E",
    "char": "🐾",
    "name": "paw prints",
    "keywords": "feet | paw | paw prints | print"
  },
  {
    "no": 495,
    "codes": "1F983",
    "char": "🦃",
    "name": "turkey",
    "keywords": "bird | turkey"
  },
  {
    "no": 496,
    "codes": "1F414",
    "char": "🐔",
    "name": "chicken",
    "keywords": "bird | chicken"
  },
  {
    "no": 497,
    "codes": "1F413",
    "char": "🐓",
    "name": "rooster",
    "keywords": "bird | rooster"
  },
  {
    "no": 498,
    "codes": "1F423",
    "char": "🐣",
    "name": "hatching chick",
    "keywords": "baby | bird | chick | hatching"
  },
  {
    "no": 499,
    "codes": "1F424",
    "char": "🐤",
    "name": "baby chick",
    "keywords": "baby | bird | chick"
  },
  {
    "no": 500,
    "codes": "1F425",
    "char": "🐥",
    "name": "front-facing baby chick",
    "keywords": "baby | bird | chick | front-facing baby chick"
  },
  {
    "no": 501,
    "codes": "1F426",
    "char": "🐦",
    "name": "bird",
    "keywords": "bird"
  },
  {
    "no": 502,
    "codes": "1F427",
    "char": "🐧",
    "name": "penguin",
    "keywords": "bird | penguin"
  },
  {
    "no": 503,
    "codes": "1F54A",
    "char": "🕊",
    "name": "dove",
    "keywords": "bird | dove | fly | peace"
  },
  {
    "no": 504,
    "codes": "1F985",
    "char": "🦅",
    "name": "eagle",
    "keywords": "bird | eagle"
  },
  {
    "no": 505,
    "codes": "1F986",
    "char": "🦆",
    "name": "duck",
    "keywords": "bird | duck"
  },
  {
    "no": 506,
    "codes": "1F9A2",
    "char": "🦢",
    "name": "swan",
    "keywords": "bird | cygnet | swan | ugly duckling"
  },
  {
    "no": 507,
    "codes": "1F989",
    "char": "🦉",
    "name": "owl",
    "keywords": "bird | owl | wise"
  },
  {
    "no": 508,
    "codes": "1F99A",
    "char": "🦚",
    "name": "peacock",
    "keywords": "bird | ostentatious | peacock | peahen | proud"
  },
  {
    "no": 509,
    "codes": "1F99C",
    "char": "🦜",
    "name": "parrot",
    "keywords": "bird | parrot | pirate | talk"
  },
  {
    "no": 510,
    "codes": "1F438",
    "char": "🐸",
    "name": "frog face",
    "keywords": "face | frog"
  },
  {
    "no": 511,
    "codes": "1F40A",
    "char": "🐊",
    "name": "crocodile",
    "keywords": "crocodile"
  },
  {
    "no": 512,
    "codes": "1F422",
    "char": "🐢",
    "name": "turtle",
    "keywords": "terrapin | tortoise | turtle"
  },
  {
    "no": 513,
    "codes": "1F98E",
    "char": "🦎",
    "name": "lizard",
    "keywords": "lizard | reptile"
  },
  {
    "no": 514,
    "codes": "1F40D",
    "char": "🐍",
    "name": "snake",
    "keywords": "bearer | Ophiuchus | serpent | snake | zodiac"
  },
  {
    "no": 515,
    "codes": "1F432",
    "char": "🐲",
    "name": "dragon face",
    "keywords": "dragon | face | fairy tale"
  },
  {
    "no": 516,
    "codes": "1F409",
    "char": "🐉",
    "name": "dragon",
    "keywords": "dragon | fairy tale"
  },
  {
    "no": 517,
    "codes": "1F995",
    "char": "🦕",
    "name": "sauropod",
    "keywords": "brachiosaurus | brontosaurus | diplodocus | sauropod"
  },
  {
    "no": 518,
    "codes": "1F996",
    "char": "🦖",
    "name": "T-Rex",
    "keywords": "T-Rex | Tyrannosaurus Rex"
  },
  {
    "no": 519,
    "codes": "1F433",
    "char": "🐳",
    "name": "spouting whale",
    "keywords": "face | spouting | whale"
  },
  {
    "no": 520,
    "codes": "1F40B",
    "char": "🐋",
    "name": "whale",
    "keywords": "whale"
  },
  {
    "no": 521,
    "codes": "1F42C",
    "char": "🐬",
    "name": "dolphin",
    "keywords": "dolphin | flipper"
  },
  {
    "no": 522,
    "codes": "1F41F",
    "char": "🐟",
    "name": "fish",
    "keywords": "fish | Pisces | zodiac"
  },
  {
    "no": 523,
    "codes": "1F420",
    "char": "🐠",
    "name": "tropical fish",
    "keywords": "fish | tropical"
  },
  {
    "no": 524,
    "codes": "1F421",
    "char": "🐡",
    "name": "blowfish",
    "keywords": "blowfish | fish"
  },
  {
    "no": 525,
    "codes": "1F988",
    "char": "🦈",
    "name": "shark",
    "keywords": "fish | shark"
  },
  {
    "no": 526,
    "codes": "1F419",
    "char": "🐙",
    "name": "octopus",
    "keywords": "octopus"
  },
  {
    "no": 527,
    "codes": "1F41A",
    "char": "🐚",
    "name": "spiral shell",
    "keywords": "shell | spiral"
  },
  {
    "no": 528,
    "codes": "1F40C",
    "char": "🐌",
    "name": "snail",
    "keywords": "snail"
  },
  {
    "no": 529,
    "codes": "1F98B",
    "char": "🦋",
    "name": "butterfly",
    "keywords": "butterfly | insect | pretty"
  },
  {
    "no": 530,
    "codes": "1F41B",
    "char": "🐛",
    "name": "bug",
    "keywords": "bug | insect"
  },
  {
    "no": 531,
    "codes": "1F41C",
    "char": "🐜",
    "name": "ant",
    "keywords": "ant | insect"
  },
  {
    "no": 532,
    "codes": "1F41D",
    "char": "🐝",
    "name": "honeybee",
    "keywords": "bee | honeybee | insect"
  },
  {
    "no": 533,
    "codes": "1F41E",
    "char": "🐞",
    "name": "lady beetle",
    "keywords": "beetle | insect | lady beetle | ladybird | ladybug"
  },
  {
    "no": 534,
    "codes": "1F997",
    "char": "🦗",
    "name": "cricket",
    "keywords": "cricket | grasshopper | Orthoptera"
  },
  {
    "no": 535,
    "codes": "1F577",
    "char": "🕷",
    "name": "spider",
    "keywords": "insect | spider"
  },
  {
    "no": 536,
    "codes": "1F578",
    "char": "🕸",
    "name": "spider web",
    "keywords": "spider | web"
  },
  {
    "no": 537,
    "codes": "1F982",
    "char": "🦂",
    "name": "scorpion",
    "keywords": "scorpio | Scorpio | scorpion | zodiac"
  },
  {
    "no": 538,
    "codes": "1F99F",
    "char": "🦟",
    "name": "mosquito",
    "keywords": "disease | fever | insect | malaria | mosquito | virus"
  },
  {
    "no": 539,
    "codes": "1F9A0",
    "char": "🦠",
    "name": "microbe",
    "keywords": "amoeba | bacteria | microbe | virus"
  },
  {
    "no": 540,
    "codes": "1F490",
    "char": "💐",
    "name": "bouquet",
    "keywords": "bouquet | flower"
  },
  {
    "no": 541,
    "codes": "1F338",
    "char": "🌸",
    "name": "cherry blossom",
    "keywords": "blossom | cherry | flower"
  },
  {
    "no": 542,
    "codes": "1F4AE",
    "char": "💮",
    "name": "white flower",
    "keywords": "flower | white flower"
  },
  {
    "no": 543,
    "codes": "1F3F5",
    "char": "🏵",
    "name": "rosette",
    "keywords": "plant | rosette"
  },
  {
    "no": 544,
    "codes": "1F339",
    "char": "🌹",
    "name": "rose",
    "keywords": "flower | rose"
  },
  {
    "no": 545,
    "codes": "1F940",
    "char": "🥀",
    "name": "wilted flower",
    "keywords": "flower | wilted"
  },
  {
    "no": 546,
    "codes": "1F33A",
    "char": "🌺",
    "name": "hibiscus",
    "keywords": "flower | hibiscus"
  },
  {
    "no": 547,
    "codes": "1F33B",
    "char": "🌻",
    "name": "sunflower",
    "keywords": "flower | sun | sunflower"
  },
  {
    "no": 548,
    "codes": "1F33C",
    "char": "🌼",
    "name": "blossom",
    "keywords": "blossom | flower"
  },
  {
    "no": 549,
    "codes": "1F337",
    "char": "🌷",
    "name": "tulip",
    "keywords": "flower | tulip"
  },
  {
    "no": 550,
    "codes": "1F331",
    "char": "🌱",
    "name": "seedling",
    "keywords": "seedling | young"
  },
  {
    "no": 551,
    "codes": "1F332",
    "char": "🌲",
    "name": "evergreen tree",
    "keywords": "evergreen tree | tree"
  },
  {
    "no": 552,
    "codes": "1F333",
    "char": "🌳",
    "name": "deciduous tree",
    "keywords": "deciduous | shedding | tree"
  },
  {
    "no": 553,
    "codes": "1F334",
    "char": "🌴",
    "name": "palm tree",
    "keywords": "palm | tree"
  },
  {
    "no": 554,
    "codes": "1F335",
    "char": "🌵",
    "name": "cactus",
    "keywords": "cactus | plant"
  },
  {
    "no": 555,
    "codes": "1F33E",
    "char": "🌾",
    "name": "sheaf of rice",
    "keywords": "ear | grain | rice | sheaf of rice"
  },
  {
    "no": 556,
    "codes": "1F33F",
    "char": "🌿",
    "name": "herb",
    "keywords": "herb | leaf"
  },
  {
    "no": 557,
    "codes": "2618",
    "char": "☘",
    "name": "shamrock",
    "keywords": "plant | shamrock"
  },
  {
    "no": 558,
    "codes": "1F340",
    "char": "🍀",
    "name": "four leaf clover",
    "keywords": "4 | clover | four | four-leaf clover | leaf"
  },
  {
    "no": 559,
    "codes": "1F341",
    "char": "🍁",
    "name": "maple leaf",
    "keywords": "falling | leaf | maple"
  },
  {
    "no": 560,
    "codes": "1F342",
    "char": "🍂",
    "name": "fallen leaf",
    "keywords": "fallen leaf | falling | leaf"
  },
  {
    "no": 561,
    "codes": "1F343",
    "char": "🍃",
    "name": "leaf fluttering in wind",
    "keywords": "blow | flutter | leaf | leaf fluttering in wind | wind"
  },
  {
    "no": 562,
    "codes": "1F347",
    "char": "🍇",
    "name": "grapes",
    "keywords": "fruit | grape | grapes"
  },
  {
    "no": 563,
    "codes": "1F348",
    "char": "🍈",
    "name": "melon",
    "keywords": "fruit | melon"
  },
  {
    "no": 564,
    "codes": "1F349",
    "char": "🍉",
    "name": "watermelon",
    "keywords": "fruit | watermelon"
  },
  {
    "no": 565,
    "codes": "1F34A",
    "char": "🍊",
    "name": "tangerine",
    "keywords": "fruit | orange | tangerine"
  },
  {
    "no": 566,
    "codes": "1F34B",
    "char": "🍋",
    "name": "lemon",
    "keywords": "citrus | fruit | lemon"
  },
  {
    "no": 567,
    "codes": "1F34C",
    "char": "🍌",
    "name": "banana",
    "keywords": "banana | fruit"
  },
  {
    "no": 568,
    "codes": "1F34D",
    "char": "🍍",
    "name": "pineapple",
    "keywords": "fruit | pineapple"
  },
  {
    "no": 569,
    "codes": "1F96D",
    "char": "🥭",
    "name": "mango",
    "keywords": "fruit | mango | tropical | shaker"
  },
  {
    "no": 570,
    "codes": "1F34E",
    "char": "🍎",
    "name": "red apple",
    "keywords": "apple | fruit | red"
  },
  {
    "no": 571,
    "codes": "1F34F",
    "char": "🍏",
    "name": "green apple",
    "keywords": "apple | fruit | green"
  },
  {
    "no": 572,
    "codes": "1F350",
    "char": "🍐",
    "name": "pear",
    "keywords": "fruit | pear"
  },
  {
    "no": 573,
    "codes": "1F351",
    "char": "🍑",
    "name": "peach",
    "keywords": "fruit | peach"
  },
  {
    "no": 574,
    "codes": "1F352",
    "char": "🍒",
    "name": "cherries",
    "keywords": "berries | cherries | cherry | fruit | red"
  },
  {
    "no": 575,
    "codes": "1F353",
    "char": "🍓",
    "name": "strawberry",
    "keywords": "berry | fruit | strawberry"
  },
  {
    "no": 576,
    "codes": "1F95D",
    "char": "🥝",
    "name": "kiwi fruit",
    "keywords": "food | fruit | kiwi"
  },
  {
    "no": 577,
    "codes": "1F345",
    "char": "🍅",
    "name": "tomato",
    "keywords": "fruit | tomato | vegetable"
  },
  {
    "no": 578,
    "codes": "1F965",
    "char": "🥥",
    "name": "coconut",
    "keywords": "coconut | palm | piña colada"
  },
  {
    "no": 579,
    "codes": "1F951",
    "char": "🥑",
    "name": "avocado",
    "keywords": "avocado | food | fruit"
  },
  {
    "no": 580,
    "codes": "1F346",
    "char": "🍆",
    "name": "eggplant",
    "keywords": "aubergine | eggplant | vegetable"
  },
  {
    "no": 581,
    "codes": "1F954",
    "char": "🥔",
    "name": "potato",
    "keywords": "food | potato | vegetable"
  },
  {
    "no": 582,
    "codes": "1F955",
    "char": "🥕",
    "name": "carrot",
    "keywords": "carrot | food | vegetable"
  },
  {
    "no": 583,
    "codes": "1F33D",
    "char": "🌽",
    "name": "ear of corn",
    "keywords": "corn | ear | ear of corn | maize | maze"
  },
  {
    "no": 584,
    "codes": "1F336",
    "char": "🌶",
    "name": "hot pepper",
    "keywords": "hot | pepper"
  },
  {
    "no": 585,
    "codes": "1F952",
    "char": "🥒",
    "name": "cucumber",
    "keywords": "cucumber | food | pickle | vegetable"
  },
  {
    "no": 586,
    "codes": "1F96C",
    "char": "🥬",
    "name": "leafy green",
    "keywords": "bok choy | cabbage | kale | leafy green | lettuce"
  },
  {
    "no": 587,
    "codes": "1F966",
    "char": "🥦",
    "name": "broccoli",
    "keywords": "broccoli | wild cabbage"
  },
  {
    "no": 588,
    "codes": "1F344",
    "char": "🍄",
    "name": "mushroom",
    "keywords": "mushroom | toadstool"
  },
  {
    "no": 589,
    "codes": "1F95C",
    "char": "🥜",
    "name": "peanuts",
    "keywords": "food | nut | peanut | peanuts | vegetable"
  },
  {
    "no": 590,
    "codes": "1F330",
    "char": "🌰",
    "name": "chestnut",
    "keywords": "chestnut | plant"
  },
  {
    "no": 591,
    "codes": "1F35E",
    "char": "🍞",
    "name": "bread",
    "keywords": "bread | loaf"
  },
  {
    "no": 592,
    "codes": "1F950",
    "char": "🥐",
    "name": "croissant",
    "keywords": "bread | crescent roll | croissant | food | french"
  },
  {
    "no": 593,
    "codes": "1F956",
    "char": "🥖",
    "name": "baguette bread",
    "keywords": "baguette | bread | food | french"
  },
  {
    "no": 594,
    "codes": "1F968",
    "char": "🥨",
    "name": "pretzel",
    "keywords": "pretzel | twisted | convoluted"
  },
  {
    "no": 595,
    "codes": "1F96F",
    "char": "🥯",
    "name": "bagel",
    "keywords": "bagel | bakery | schmear"
  },
  {
    "no": 596,
    "codes": "1F95E",
    "char": "🥞",
    "name": "pancakes",
    "keywords": "crêpe | food | hotcake | pancake | pancakes"
  },
  {
    "no": 597,
    "codes": "1F9C0",
    "char": "🧀",
    "name": "cheese wedge",
    "keywords": "cheese | cheese wedge"
  },
  {
    "no": 598,
    "codes": "1F356",
    "char": "🍖",
    "name": "meat on bone",
    "keywords": "bone | meat | meat on bone"
  },
  {
    "no": 599,
    "codes": "1F357",
    "char": "🍗",
    "name": "poultry leg",
    "keywords": "bone | chicken | drumstick | leg | poultry"
  },
  {
    "no": 600,
    "codes": "1F969",
    "char": "🥩",
    "name": "cut of meat",
    "keywords": "chop | cut of meat | lambchop | porkchop | steak"
  },
  {
    "no": 601,
    "codes": "1F953",
    "char": "🥓",
    "name": "bacon",
    "keywords": "bacon | food | meat"
  },
  {
    "no": 602,
    "codes": "1F354",
    "char": "🍔",
    "name": "hamburger",
    "keywords": "burger | hamburger"
  },
  {
    "no": 603,
    "codes": "1F35F",
    "char": "🍟",
    "name": "french fries",
    "keywords": "french | fries"
  },
  {
    "no": 604,
    "codes": "1F355",
    "char": "🍕",
    "name": "pizza",
    "keywords": "cheese | pizza | slice"
  },
  {
    "no": 605,
    "codes": "1F32D",
    "char": "🌭",
    "name": "hot dog",
    "keywords": "frankfurter | hot dog | hotdog | sausage"
  },
  {
    "no": 606,
    "codes": "1F96A",
    "char": "🥪",
    "name": "sandwich",
    "keywords": "bread | sandwich"
  },
  {
    "no": 607,
    "codes": "1F32E",
    "char": "🌮",
    "name": "taco",
    "keywords": "mexican | taco"
  },
  {
    "no": 608,
    "codes": "1F32F",
    "char": "🌯",
    "name": "burrito",
    "keywords": "burrito | mexican | wrap"
  },
  {
    "no": 609,
    "codes": "1F959",
    "char": "🥙",
    "name": "stuffed flatbread",
    "keywords": "falafel | flatbread | food | gyro | kebab | stuffed"
  },
  {
    "no": 610,
    "codes": "1F95A",
    "char": "🥚",
    "name": "egg",
    "keywords": "egg | food"
  },
  {
    "no": 611,
    "codes": "1F373",
    "char": "🍳",
    "name": "cooking",
    "keywords": "cooking | egg | frying | pan"
  },
  {
    "no": 612,
    "codes": "1F958",
    "char": "🥘",
    "name": "shallow pan of food",
    "keywords": "casserole | food | paella | pan | shallow | shallow pan of food"
  },
  {
    "no": 613,
    "codes": "1F372",
    "char": "🍲",
    "name": "pot of food",
    "keywords": "pot | pot of food | stew"
  },
  {
    "no": 614,
    "codes": "1F963",
    "char": "🥣",
    "name": "bowl with spoon",
    "keywords": "bowl with spoon | breakfast | cereal | congee | oatmeal | porridge"
  },
  {
    "no": 615,
    "codes": "1F957",
    "char": "🥗",
    "name": "green salad",
    "keywords": "food | green | salad"
  },
  {
    "no": 616,
    "codes": "1F37F",
    "char": "🍿",
    "name": "popcorn",
    "keywords": "popcorn"
  },
  {
    "no": 617,
    "codes": "1F9C2",
    "char": "🧂",
    "name": "salt",
    "keywords": "condiment | salt | shaker"
  },
  {
    "no": 618,
    "codes": "1F96B",
    "char": "🥫",
    "name": "canned food",
    "keywords": "can | canned food"
  },
  {
    "no": 619,
    "codes": "1F371",
    "char": "🍱",
    "name": "bento box",
    "keywords": "bento | box"
  },
  {
    "no": 620,
    "codes": "1F358",
    "char": "🍘",
    "name": "rice cracker",
    "keywords": "cracker | rice"
  },
  {
    "no": 621,
    "codes": "1F359",
    "char": "🍙",
    "name": "rice ball",
    "keywords": "ball | Japanese | rice"
  },
  {
    "no": 622,
    "codes": "1F35A",
    "char": "🍚",
    "name": "cooked rice",
    "keywords": "cooked | rice"
  },
  {
    "no": 623,
    "codes": "1F35B",
    "char": "🍛",
    "name": "curry rice",
    "keywords": "curry | rice"
  },
  {
    "no": 624,
    "codes": "1F35C",
    "char": "🍜",
    "name": "steaming bowl",
    "keywords": "bowl | noodle | ramen | steaming"
  },
  {
    "no": 625,
    "codes": "1F35D",
    "char": "🍝",
    "name": "spaghetti",
    "keywords": "pasta | spaghetti"
  },
  {
    "no": 626,
    "codes": "1F360",
    "char": "🍠",
    "name": "roasted sweet potato",
    "keywords": "potato | roasted | sweet"
  },
  {
    "no": 627,
    "codes": "1F362",
    "char": "🍢",
    "name": "oden",
    "keywords": "kebab | oden | seafood | skewer | stick"
  },
  {
    "no": 628,
    "codes": "1F363",
    "char": "🍣",
    "name": "sushi",
    "keywords": "sushi"
  },
  {
    "no": 629,
    "codes": "1F364",
    "char": "🍤",
    "name": "fried shrimp",
    "keywords": "fried | prawn | shrimp | tempura"
  },
  {
    "no": 630,
    "codes": "1F365",
    "char": "🍥",
    "name": "fish cake with swirl",
    "keywords": "cake | fish | fish cake with swirl | pastry | swirl"
  },
  {
    "no": 631,
    "codes": "1F96E",
    "char": "🥮",
    "name": "moon cake",
    "keywords": "autumn | festival | moon cake | yuèbǐng"
  },
  {
    "no": 632,
    "codes": "1F361",
    "char": "🍡",
    "name": "dango",
    "keywords": "dango | dessert | Japanese | skewer | stick | sweet"
  },
  {
    "no": 633,
    "codes": "1F95F",
    "char": "🥟",
    "name": "dumpling",
    "keywords": "dumpling | empanada | gyōza | jiaozi | pierogi | potsticker"
  },
  {
    "no": 634,
    "codes": "1F960",
    "char": "🥠",
    "name": "fortune cookie",
    "keywords": "fortune cookie | prophecy"
  },
  {
    "no": 635,
    "codes": "1F961",
    "char": "🥡",
    "name": "takeout box",
    "keywords": "oyster pail | takeout box"
  },
  {
    "no": 636,
    "codes": "1F980",
    "char": "🦀",
    "name": "crab",
    "keywords": "Cancer | crab | zodiac"
  },
  {
    "no": 637,
    "codes": "1F99E",
    "char": "🦞",
    "name": "lobster",
    "keywords": "bisque | claws | lobster | seafood"
  },
  {
    "no": 638,
    "codes": "1F990",
    "char": "🦐",
    "name": "shrimp",
    "keywords": "food | shellfish | shrimp | small"
  },
  {
    "no": 639,
    "codes": "1F991",
    "char": "🦑",
    "name": "squid",
    "keywords": "food | molusc | squid"
  },
  {
    "no": 640,
    "codes": "1F366",
    "char": "🍦",
    "name": "soft ice cream",
    "keywords": "cream | dessert | ice | icecream | soft | sweet"
  },
  {
    "no": 641,
    "codes": "1F367",
    "char": "🍧",
    "name": "shaved ice",
    "keywords": "dessert | ice | shaved | sweet"
  },
  {
    "no": 642,
    "codes": "1F368",
    "char": "🍨",
    "name": "ice cream",
    "keywords": "cream | dessert | ice | sweet"
  },
  {
    "no": 643,
    "codes": "1F369",
    "char": "🍩",
    "name": "doughnut",
    "keywords": "dessert | donut | doughnut | sweet"
  },
  {
    "no": 644,
    "codes": "1F36A",
    "char": "🍪",
    "name": "cookie",
    "keywords": "cookie | dessert | sweet"
  },
  {
    "no": 645,
    "codes": "1F382",
    "char": "🎂",
    "name": "birthday cake",
    "keywords": "birthday | cake | celebration | dessert | pastry | sweet"
  },
  {
    "no": 646,
    "codes": "1F370",
    "char": "🍰",
    "name": "shortcake",
    "keywords": "cake | dessert | pastry | shortcake | slice | sweet"
  },
  {
    "no": 647,
    "codes": "1F9C1",
    "char": "🧁",
    "name": "cupcake",
    "keywords": "bakery | cupcake | sweet"
  },
  {
    "no": 648,
    "codes": "1F967",
    "char": "🥧",
    "name": "pie",
    "keywords": "filling | pastry | pie | fruit | meat"
  },
  {
    "no": 649,
    "codes": "1F36B",
    "char": "🍫",
    "name": "chocolate bar",
    "keywords": "bar | chocolate | dessert | sweet"
  },
  {
    "no": 650,
    "codes": "1F36C",
    "char": "🍬",
    "name": "candy",
    "keywords": "candy | dessert | sweet"
  },
  {
    "no": 651,
    "codes": "1F36D",
    "char": "🍭",
    "name": "lollipop",
    "keywords": "candy | dessert | lollipop | sweet"
  },
  {
    "no": 652,
    "codes": "1F36E",
    "char": "🍮",
    "name": "custard",
    "keywords": "custard | dessert | pudding | sweet"
  },
  {
    "no": 653,
    "codes": "1F36F",
    "char": "🍯",
    "name": "honey pot",
    "keywords": "honey | honeypot | pot | sweet"
  },
  {
    "no": 654,
    "codes": "1F37C",
    "char": "🍼",
    "name": "baby bottle",
    "keywords": "baby | bottle | drink | milk"
  },
  {
    "no": 655,
    "codes": "1F95B",
    "char": "🥛",
    "name": "glass of milk",
    "keywords": "drink | glass | glass of milk | milk"
  },
  {
    "no": 656,
    "codes": "2615",
    "char": "☕",
    "name": "hot beverage",
    "keywords": "beverage | coffee | drink | hot | steaming | tea"
  },
  {
    "no": 657,
    "codes": "1F375",
    "char": "🍵",
    "name": "teacup without handle",
    "keywords": "beverage | cup | drink | tea | teacup | teacup without handle"
  },
  {
    "no": 658,
    "codes": "1F376",
    "char": "🍶",
    "name": "sake",
    "keywords": "bar | beverage | bottle | cup | drink | sake"
  },
  {
    "no": 659,
    "codes": "1F37E",
    "char": "🍾",
    "name": "bottle with popping cork",
    "keywords": "bar | bottle | bottle with popping cork | cork | drink | popping"
  },
  {
    "no": 660,
    "codes": "1F377",
    "char": "🍷",
    "name": "wine glass",
    "keywords": "bar | beverage | drink | glass | wine"
  },
  {
    "no": 661,
    "codes": "1F378",
    "char": "🍸",
    "name": "cocktail glass",
    "keywords": "bar | cocktail | drink | glass"
  },
  {
    "no": 662,
    "codes": "1F379",
    "char": "🍹",
    "name": "tropical drink",
    "keywords": "bar | drink | tropical"
  },
  {
    "no": 663,
    "codes": "1F37A",
    "char": "🍺",
    "name": "beer mug",
    "keywords": "bar | beer | drink | mug"
  },
  {
    "no": 664,
    "codes": "1F37B",
    "char": "🍻",
    "name": "clinking beer mugs",
    "keywords": "bar | beer | clink | clinking beer mugs | drink | mug"
  },
  {
    "no": 665,
    "codes": "1F942",
    "char": "🥂",
    "name": "clinking glasses",
    "keywords": "celebrate | clink | clinking glasses | drink | glass"
  },
  {
    "no": 666,
    "codes": "1F943",
    "char": "🥃",
    "name": "tumbler glass",
    "keywords": "glass | liquor | shot | tumbler | whisky"
  },
  {
    "no": 667,
    "codes": "1F964",
    "char": "🥤",
    "name": "cup with straw",
    "keywords": "cup with straw | juice | soda | malt | soft drink | water"
  },
  {
    "no": 668,
    "codes": "1F962",
    "char": "🥢",
    "name": "chopsticks",
    "keywords": "chopsticks | hashi | jeotgarak | kuaizi"
  },
  {
    "no": 669,
    "codes": "1F37D",
    "char": "🍽",
    "name": "fork and knife with plate",
    "keywords": "cooking | fork | fork and knife with plate | knife | plate"
  },
  {
    "no": 670,
    "codes": "1F374",
    "char": "🍴",
    "name": "fork and knife",
    "keywords": "cooking | cutlery | fork | fork and knife | knife"
  },
  {
    "no": 671,
    "codes": "1F944",
    "char": "🥄",
    "name": "spoon",
    "keywords": "spoon | tableware"
  },
  {
    "no": 672,
    "codes": "1F52A",
    "char": "🔪",
    "name": "kitchen knife",
    "keywords": "cooking | hocho | kitchen knife | knife | tool | weapon"
  },
  {
    "no": 673,
    "codes": "1F3FA",
    "char": "🏺",
    "name": "amphora",
    "keywords": "amphora | Aquarius | cooking | drink | jug | zodiac"
  },
  {
    "no": 674,
    "codes": "1F30D",
    "char": "🌍",
    "name": "globe showing Europe-Africa",
    "keywords": "Africa | earth | Europe | globe | globe showing Europe-Africa | world"
  },
  {
    "no": 675,
    "codes": "1F30E",
    "char": "🌎",
    "name": "globe showing Americas",
    "keywords": "Americas | earth | globe | globe showing Americas | world"
  },
  {
    "no": 676,
    "codes": "1F30F",
    "char": "🌏",
    "name": "globe showing Asia-Australia",
    "keywords": "Asia | Australia | earth | globe | globe showing Asia-Australia | world"
  },
  {
    "no": 677,
    "codes": "1F310",
    "char": "🌐",
    "name": "globe with meridians",
    "keywords": "earth | globe | globe with meridians | meridians | world"
  },
  {
    "no": 678,
    "codes": "1F5FA",
    "char": "🗺",
    "name": "world map",
    "keywords": "map | world"
  },
  {
    "no": 679,
    "codes": "1F5FE",
    "char": "🗾",
    "name": "map of Japan",
    "keywords": "Japan | map | map of Japan"
  },
  {
    "no": 680,
    "codes": "1F9ED",
    "char": "🧭",
    "name": "compass",
    "keywords": "compass | magnetic | navigation | orienteering"
  },
  {
    "no": 681,
    "codes": "1F3D4",
    "char": "🏔",
    "name": "snow-capped mountain",
    "keywords": "cold | mountain | snow | snow-capped mountain"
  },
  {
    "no": 682,
    "codes": "26F0",
    "char": "⛰",
    "name": "mountain",
    "keywords": "mountain"
  },
  {
    "no": 683,
    "codes": "1F30B",
    "char": "🌋",
    "name": "volcano",
    "keywords": "eruption | mountain | volcano"
  },
  {
    "no": 684,
    "codes": "1F5FB",
    "char": "🗻",
    "name": "mount fuji",
    "keywords": "fuji | mount fuji | mountain"
  },
  {
    "no": 685,
    "codes": "1F3D5",
    "char": "🏕",
    "name": "camping",
    "keywords": "camping"
  },
  {
    "no": 686,
    "codes": "1F3D6",
    "char": "🏖",
    "name": "beach with umbrella",
    "keywords": "beach | beach with umbrella | umbrella"
  },
  {
    "no": 687,
    "codes": "1F3DC",
    "char": "🏜",
    "name": "desert",
    "keywords": "desert"
  },
  {
    "no": 688,
    "codes": "1F3DD",
    "char": "🏝",
    "name": "desert island",
    "keywords": "desert | island"
  },
  {
    "no": 689,
    "codes": "1F3DE",
    "char": "🏞",
    "name": "national park",
    "keywords": "national park | park"
  },
  {
    "no": 690,
    "codes": "1F3DF",
    "char": "🏟",
    "name": "stadium",
    "keywords": "stadium"
  },
  {
    "no": 691,
    "codes": "1F3DB",
    "char": "🏛",
    "name": "classical building",
    "keywords": "classical | classical building"
  },
  {
    "no": 692,
    "codes": "1F3D7",
    "char": "🏗",
    "name": "building construction",
    "keywords": "building construction | construction"
  },
  {
    "no": 693,
    "codes": "1F9F1",
    "char": "🧱",
    "name": "brick",
    "keywords": "brick | bricks | clay | mortar | wall"
  },
  {
    "no": 694,
    "codes": "1F3D8",
    "char": "🏘",
    "name": "houses",
    "keywords": "houses"
  },
  {
    "no": 695,
    "codes": "1F3DA",
    "char": "🏚",
    "name": "derelict house",
    "keywords": "derelict | house"
  },
  {
    "no": 696,
    "codes": "1F3E0",
    "char": "🏠",
    "name": "house",
    "keywords": "home | house"
  },
  {
    "no": 697,
    "codes": "1F3E1",
    "char": "🏡",
    "name": "house with garden",
    "keywords": "garden | home | house | house with garden"
  },
  {
    "no": 698,
    "codes": "1F3E2",
    "char": "🏢",
    "name": "office building",
    "keywords": "building | office building"
  },
  {
    "no": 699,
    "codes": "1F3E3",
    "char": "🏣",
    "name": "Japanese post office",
    "keywords": "Japanese | Japanese post office | post"
  },
  {
    "no": 700,
    "codes": "1F3E4",
    "char": "🏤",
    "name": "post office",
    "keywords": "European | post | post office"
  },
  {
    "no": 701,
    "codes": "1F3E5",
    "char": "🏥",
    "name": "hospital",
    "keywords": "doctor | hospital | medicine"
  },
  {
    "no": 702,
    "codes": "1F3E6",
    "char": "🏦",
    "name": "bank",
    "keywords": "bank | building"
  },
  {
    "no": 703,
    "codes": "1F3E8",
    "char": "🏨",
    "name": "hotel",
    "keywords": "building | hotel"
  },
  {
    "no": 704,
    "codes": "1F3E9",
    "char": "🏩",
    "name": "love hotel",
    "keywords": "hotel | love"
  },
  {
    "no": 705,
    "codes": "1F3EA",
    "char": "🏪",
    "name": "convenience store",
    "keywords": "convenience | store"
  },
  {
    "no": 706,
    "codes": "1F3EB",
    "char": "🏫",
    "name": "school",
    "keywords": "building | school"
  },
  {
    "no": 707,
    "codes": "1F3EC",
    "char": "🏬",
    "name": "department store",
    "keywords": "department | store"
  },
  {
    "no": 708,
    "codes": "1F3ED",
    "char": "🏭",
    "name": "factory",
    "keywords": "building | factory"
  },
  {
    "no": 709,
    "codes": "1F3EF",
    "char": "🏯",
    "name": "Japanese castle",
    "keywords": "castle | Japanese"
  },
  {
    "no": 710,
    "codes": "1F3F0",
    "char": "🏰",
    "name": "castle",
    "keywords": "castle | European"
  },
  {
    "no": 711,
    "codes": "1F492",
    "char": "💒",
    "name": "wedding",
    "keywords": "chapel | romance | wedding"
  },
  {
    "no": 712,
    "codes": "1F5FC",
    "char": "🗼",
    "name": "Tokyo tower",
    "keywords": "Tokyo | tower"
  },
  {
    "no": 713,
    "codes": "1F5FD",
    "char": "🗽",
    "name": "Statue of Liberty",
    "keywords": "liberty | statue | Statue of Liberty"
  },
  {
    "no": 714,
    "codes": "26EA",
    "char": "⛪",
    "name": "church",
    "keywords": "Christian | church | cross | religion"
  },
  {
    "no": 715,
    "codes": "1F54C",
    "char": "🕌",
    "name": "mosque",
    "keywords": "islam | mosque | Muslim | religion"
  },
  {
    "no": 716,
    "codes": "1F54D",
    "char": "🕍",
    "name": "synagogue",
    "keywords": "Jew | Jewish | religion | synagogue | temple"
  },
  {
    "no": 717,
    "codes": "26E9",
    "char": "⛩",
    "name": "shinto shrine",
    "keywords": "religion | shinto | shrine"
  },
  {
    "no": 718,
    "codes": "1F54B",
    "char": "🕋",
    "name": "kaaba",
    "keywords": "islam | kaaba | Muslim | religion"
  },
  {
    "no": 719,
    "codes": "26F2",
    "char": "⛲",
    "name": "fountain",
    "keywords": "fountain"
  },
  {
    "no": 720,
    "codes": "26FA",
    "char": "⛺",
    "name": "tent",
    "keywords": "camping | tent"
  },
  {
    "no": 721,
    "codes": "1F301",
    "char": "🌁",
    "name": "foggy",
    "keywords": "fog | foggy"
  },
  {
    "no": 722,
    "codes": "1F303",
    "char": "🌃",
    "name": "night with stars",
    "keywords": "night | night with stars | star"
  },
  {
    "no": 723,
    "codes": "1F3D9",
    "char": "🏙",
    "name": "cityscape",
    "keywords": "city | cityscape"
  },
  {
    "no": 724,
    "codes": "1F304",
    "char": "🌄",
    "name": "sunrise over mountains",
    "keywords": "morning | mountain | sun | sunrise | sunrise over mountains"
  },
  {
    "no": 725,
    "codes": "1F305",
    "char": "🌅",
    "name": "sunrise",
    "keywords": "morning | sun | sunrise"
  },
  {
    "no": 726,
    "codes": "1F306",
    "char": "🌆",
    "name": "cityscape at dusk",
    "keywords": "city | cityscape at dusk | dusk | evening | landscape | sunset"
  },
  {
    "no": 727,
    "codes": "1F307",
    "char": "🌇",
    "name": "sunset",
    "keywords": "dusk | sun | sunset"
  },
  {
    "no": 728,
    "codes": "1F309",
    "char": "🌉",
    "name": "bridge at night",
    "keywords": "bridge | bridge at night | night"
  },
  {
    "no": 729,
    "codes": "2668",
    "char": "♨",
    "name": "hot springs",
    "keywords": "hot | hotsprings | springs | steaming"
  },
  {
    "no": 730,
    "codes": "1F30C",
    "char": "🌌",
    "name": "milky way",
    "keywords": "milky way | space"
  },
  {
    "no": 731,
    "codes": "1F3A0",
    "char": "🎠",
    "name": "carousel horse",
    "keywords": "carousel | horse"
  },
  {
    "no": 732,
    "codes": "1F3A1",
    "char": "🎡",
    "name": "ferris wheel",
    "keywords": "amusement park | ferris | wheel"
  },
  {
    "no": 733,
    "codes": "1F3A2",
    "char": "🎢",
    "name": "roller coaster",
    "keywords": "amusement park | coaster | roller"
  },
  {
    "no": 734,
    "codes": "1F488",
    "char": "💈",
    "name": "barber pole",
    "keywords": "barber | haircut | pole"
  },
  {
    "no": 735,
    "codes": "1F3AA",
    "char": "🎪",
    "name": "circus tent",
    "keywords": "circus | tent"
  },
  {
    "no": 736,
    "codes": "1F682",
    "char": "🚂",
    "name": "locomotive",
    "keywords": "engine | locomotive | railway | steam | train"
  },
  {
    "no": 737,
    "codes": "1F683",
    "char": "🚃",
    "name": "railway car",
    "keywords": "car | electric | railway | train | tram | trolleybus"
  },
  {
    "no": 738,
    "codes": "1F684",
    "char": "🚄",
    "name": "high-speed train",
    "keywords": "high-speed train | railway | shinkansen | speed | train"
  },
  {
    "no": 739,
    "codes": "1F685",
    "char": "🚅",
    "name": "bullet train",
    "keywords": "bullet | railway | shinkansen | speed | train"
  },
  {
    "no": 740,
    "codes": "1F686",
    "char": "🚆",
    "name": "train",
    "keywords": "railway | train"
  },
  {
    "no": 741,
    "codes": "1F687",
    "char": "🚇",
    "name": "metro",
    "keywords": "metro | subway"
  },
  {
    "no": 742,
    "codes": "1F688",
    "char": "🚈",
    "name": "light rail",
    "keywords": "light rail | railway"
  },
  {
    "no": 743,
    "codes": "1F689",
    "char": "🚉",
    "name": "station",
    "keywords": "railway | station | train"
  },
  {
    "no": 744,
    "codes": "1F68A",
    "char": "🚊",
    "name": "tram",
    "keywords": "tram | trolleybus"
  },
  {
    "no": 745,
    "codes": "1F69D",
    "char": "🚝",
    "name": "monorail",
    "keywords": "monorail | vehicle"
  },
  {
    "no": 746,
    "codes": "1F69E",
    "char": "🚞",
    "name": "mountain railway",
    "keywords": "car | mountain | railway"
  },
  {
    "no": 747,
    "codes": "1F68B",
    "char": "🚋",
    "name": "tram car",
    "keywords": "car | tram | trolleybus"
  },
  {
    "no": 748,
    "codes": "1F68C",
    "char": "🚌",
    "name": "bus",
    "keywords": "bus | vehicle"
  },
  {
    "no": 749,
    "codes": "1F68D",
    "char": "🚍",
    "name": "oncoming bus",
    "keywords": "bus | oncoming"
  },
  {
    "no": 750,
    "codes": "1F68E",
    "char": "🚎",
    "name": "trolleybus",
    "keywords": "bus | tram | trolley | trolleybus"
  },
  {
    "no": 751,
    "codes": "1F690",
    "char": "🚐",
    "name": "minibus",
    "keywords": "bus | minibus"
  },
  {
    "no": 752,
    "codes": "1F691",
    "char": "🚑",
    "name": "ambulance",
    "keywords": "ambulance | vehicle"
  },
  {
    "no": 753,
    "codes": "1F692",
    "char": "🚒",
    "name": "fire engine",
    "keywords": "engine | fire | truck"
  },
  {
    "no": 754,
    "codes": "1F693",
    "char": "🚓",
    "name": "police car",
    "keywords": "car | patrol | police"
  },
  {
    "no": 755,
    "codes": "1F694",
    "char": "🚔",
    "name": "oncoming police car",
    "keywords": "car | oncoming | police"
  },
  {
    "no": 756,
    "codes": "1F695",
    "char": "🚕",
    "name": "taxi",
    "keywords": "taxi | vehicle"
  },
  {
    "no": 757,
    "codes": "1F696",
    "char": "🚖",
    "name": "oncoming taxi",
    "keywords": "oncoming | taxi"
  },
  {
    "no": 758,
    "codes": "1F697",
    "char": "🚗",
    "name": "automobile",
    "keywords": "automobile | car"
  },
  {
    "no": 759,
    "codes": "1F698",
    "char": "🚘",
    "name": "oncoming automobile",
    "keywords": "automobile | car | oncoming"
  },
  {
    "no": 760,
    "codes": "1F699",
    "char": "🚙",
    "name": "sport utility vehicle",
    "keywords": "recreational | sport utility | sport utility vehicle"
  },
  {
    "no": 761,
    "codes": "1F69A",
    "char": "🚚",
    "name": "delivery truck",
    "keywords": "delivery | truck"
  },
  {
    "no": 762,
    "codes": "1F69B",
    "char": "🚛",
    "name": "articulated lorry",
    "keywords": "articulated lorry | lorry | semi | truck"
  },
  {
    "no": 763,
    "codes": "1F69C",
    "char": "🚜",
    "name": "tractor",
    "keywords": "tractor | vehicle"
  },
  {
    "no": 764,
    "codes": "1F3CE",
    "char": "🏎",
    "name": "racing car",
    "keywords": "car | racing"
  },
  {
    "no": 765,
    "codes": "1F3CD",
    "char": "🏍",
    "name": "motorcycle",
    "keywords": "motorcycle | racing"
  },
  {
    "no": 766,
    "codes": "1F6F5",
    "char": "🛵",
    "name": "motor scooter",
    "keywords": "motor | scooter"
  },
  {
    "no": 767,
    "codes": "1F6B2",
    "char": "🚲",
    "name": "bicycle",
    "keywords": "bicycle | bike"
  },
  {
    "no": 768,
    "codes": "1F6F4",
    "char": "🛴",
    "name": "kick scooter",
    "keywords": "kick | scooter"
  },
  {
    "no": 769,
    "codes": "1F6F9",
    "char": "🛹",
    "name": "skateboard",
    "keywords": "board | skateboard"
  },
  {
    "no": 770,
    "codes": "1F68F",
    "char": "🚏",
    "name": "bus stop",
    "keywords": "bus | busstop | stop"
  },
  {
    "no": 771,
    "codes": "1F6E3",
    "char": "🛣",
    "name": "motorway",
    "keywords": "highway | motorway | road"
  },
  {
    "no": 772,
    "codes": "1F6E4",
    "char": "🛤",
    "name": "railway track",
    "keywords": "railway | railway track | train"
  },
  {
    "no": 773,
    "codes": "1F6E2",
    "char": "🛢",
    "name": "oil drum",
    "keywords": "drum | oil"
  },
  {
    "no": 774,
    "codes": "26FD",
    "char": "⛽",
    "name": "fuel pump",
    "keywords": "diesel | fuel | fuelpump | gas | pump | station"
  },
  {
    "no": 775,
    "codes": "1F6A8",
    "char": "🚨",
    "name": "police car light",
    "keywords": "beacon | car | light | police | revolving"
  },
  {
    "no": 776,
    "codes": "1F6A5",
    "char": "🚥",
    "name": "horizontal traffic light",
    "keywords": "horizontal traffic light | light | signal | traffic"
  },
  {
    "no": 777,
    "codes": "1F6A6",
    "char": "🚦",
    "name": "vertical traffic light",
    "keywords": "light | signal | traffic | vertical traffic light"
  },
  {
    "no": 778,
    "codes": "1F6D1",
    "char": "🛑",
    "name": "stop sign",
    "keywords": "octagonal | sign | stop"
  },
  {
    "no": 779,
    "codes": "1F6A7",
    "char": "🚧",
    "name": "construction",
    "keywords": "barrier | construction"
  },
  {
    "no": 780,
    "codes": "2693",
    "char": "⚓",
    "name": "anchor",
    "keywords": "anchor | ship | tool"
  },
  {
    "no": 781,
    "codes": "26F5",
    "char": "⛵",
    "name": "sailboat",
    "keywords": "boat | resort | sailboat | sea | yacht"
  },
  {
    "no": 782,
    "codes": "1F6F6",
    "char": "🛶",
    "name": "canoe",
    "keywords": "boat | canoe"
  },
  {
    "no": 783,
    "codes": "1F6A4",
    "char": "🚤",
    "name": "speedboat",
    "keywords": "boat | speedboat"
  },
  {
    "no": 784,
    "codes": "1F6F3",
    "char": "🛳",
    "name": "passenger ship",
    "keywords": "passenger | ship"
  },
  {
    "no": 785,
    "codes": "26F4",
    "char": "⛴",
    "name": "ferry",
    "keywords": "boat | ferry | passenger"
  },
  {
    "no": 786,
    "codes": "1F6E5",
    "char": "🛥",
    "name": "motor boat",
    "keywords": "boat | motor boat | motorboat"
  },
  {
    "no": 787,
    "codes": "1F6A2",
    "char": "🚢",
    "name": "ship",
    "keywords": "boat | passenger | ship"
  },
  {
    "no": 788,
    "codes": "2708",
    "char": "✈",
    "name": "airplane",
    "keywords": "aeroplane | airplane"
  },
  {
    "no": 789,
    "codes": "1F6E9",
    "char": "🛩",
    "name": "small airplane",
    "keywords": "aeroplane | airplane | small airplane"
  },
  {
    "no": 790,
    "codes": "1F6EB",
    "char": "🛫",
    "name": "airplane departure",
    "keywords": "aeroplane | airplane | check-in | departure | departures"
  },
  {
    "no": 791,
    "codes": "1F6EC",
    "char": "🛬",
    "name": "airplane arrival",
    "keywords": "aeroplane | airplane | airplane arrival | arrivals | arriving | landing"
  },
  {
    "no": 792,
    "codes": "1F4BA",
    "char": "💺",
    "name": "seat",
    "keywords": "chair | seat"
  },
  {
    "no": 793,
    "codes": "1F681",
    "char": "🚁",
    "name": "helicopter",
    "keywords": "helicopter | vehicle"
  },
  {
    "no": 794,
    "codes": "1F69F",
    "char": "🚟",
    "name": "suspension railway",
    "keywords": "railway | suspension"
  },
  {
    "no": 795,
    "codes": "1F6A0",
    "char": "🚠",
    "name": "mountain cableway",
    "keywords": "cable | gondola | mountain | mountain cableway"
  },
  {
    "no": 796,
    "codes": "1F6A1",
    "char": "🚡",
    "name": "aerial tramway",
    "keywords": "aerial | cable | car | gondola | tramway"
  },
  {
    "no": 797,
    "codes": "1F6F0",
    "char": "🛰",
    "name": "satellite",
    "keywords": "satellite | space"
  },
  {
    "no": 798,
    "codes": "1F680",
    "char": "🚀",
    "name": "rocket",
    "keywords": "rocket | space"
  },
  {
    "no": 799,
    "codes": "1F6F8",
    "char": "🛸",
    "name": "flying saucer",
    "keywords": "flying saucer | UFO"
  },
  {
    "no": 800,
    "codes": "1F6CE",
    "char": "🛎",
    "name": "bellhop bell",
    "keywords": "bell | bellhop | hotel"
  },
  {
    "no": 801,
    "codes": "1F9F3",
    "char": "🧳",
    "name": "luggage",
    "keywords": "luggage | packing | travel"
  },
  {
    "no": 802,
    "codes": "231B",
    "char": "⌛",
    "name": "hourglass done",
    "keywords": "hourglass done | sand | timer"
  },
  {
    "no": 803,
    "codes": "23F3",
    "char": "⏳",
    "name": "hourglass not done",
    "keywords": "hourglass | hourglass not done | sand | timer"
  },
  {
    "no": 804,
    "codes": "231A",
    "char": "⌚",
    "name": "watch",
    "keywords": "clock | watch"
  },
  {
    "no": 805,
    "codes": "23F0",
    "char": "⏰",
    "name": "alarm clock",
    "keywords": "alarm | clock"
  },
  {
    "no": 806,
    "codes": "23F1",
    "char": "⏱",
    "name": "stopwatch",
    "keywords": "clock | stopwatch"
  },
  {
    "no": 807,
    "codes": "23F2",
    "char": "⏲",
    "name": "timer clock",
    "keywords": "clock | timer"
  },
  {
    "no": 808,
    "codes": "1F570",
    "char": "🕰",
    "name": "mantelpiece clock",
    "keywords": "clock | mantelpiece clock"
  },
  {
    "no": 809,
    "codes": "1F55B",
    "char": "🕛",
    "name": "twelve o’clock",
    "keywords": "00 | 12 | 12:00 | clock | o’clock | twelve"
  },
  {
    "no": 810,
    "codes": "1F567",
    "char": "🕧",
    "name": "twelve-thirty",
    "keywords": "12 | 12:30 | clock | thirty | twelve | twelve-thirty"
  },
  {
    "no": 811,
    "codes": "1F550",
    "char": "🕐",
    "name": "one o’clock",
    "keywords": "00 | 1 | 1:00 | clock | o’clock | one"
  },
  {
    "no": 812,
    "codes": "1F55C",
    "char": "🕜",
    "name": "one-thirty",
    "keywords": "1 | 1:30 | clock | one | one-thirty | thirty"
  },
  {
    "no": 813,
    "codes": "1F551",
    "char": "🕑",
    "name": "two o’clock",
    "keywords": "00 | 2 | 2:00 | clock | o’clock | two"
  },
  {
    "no": 814,
    "codes": "1F55D",
    "char": "🕝",
    "name": "two-thirty",
    "keywords": "2 | 2:30 | clock | thirty | two | two-thirty"
  },
  {
    "no": 815,
    "codes": "1F552",
    "char": "🕒",
    "name": "three o’clock",
    "keywords": "00 | 3 | 3:00 | clock | o’clock | three"
  },
  {
    "no": 816,
    "codes": "1F55E",
    "char": "🕞",
    "name": "three-thirty",
    "keywords": "3 | 3:30 | clock | thirty | three | three-thirty"
  },
  {
    "no": 817,
    "codes": "1F553",
    "char": "🕓",
    "name": "four o’clock",
    "keywords": "00 | 4 | 4:00 | clock | four | o’clock"
  },
  {
    "no": 818,
    "codes": "1F55F",
    "char": "🕟",
    "name": "four-thirty",
    "keywords": "4 | 4:30 | clock | four | four-thirty | thirty"
  },
  {
    "no": 819,
    "codes": "1F554",
    "char": "🕔",
    "name": "five o’clock",
    "keywords": "00 | 5 | 5:00 | clock | five | o’clock"
  },
  {
    "no": 820,
    "codes": "1F560",
    "char": "🕠",
    "name": "five-thirty",
    "keywords": "5 | 5:30 | clock | five | five-thirty | thirty"
  },
  {
    "no": 821,
    "codes": "1F555",
    "char": "🕕",
    "name": "six o’clock",
    "keywords": "00 | 6 | 6:00 | clock | o’clock | six"
  },
  {
    "no": 822,
    "codes": "1F561",
    "char": "🕡",
    "name": "six-thirty",
    "keywords": "6 | 6:30 | clock | six | six-thirty | thirty"
  },
  {
    "no": 823,
    "codes": "1F556",
    "char": "🕖",
    "name": "seven o’clock",
    "keywords": "00 | 7 | 7:00 | clock | o’clock | seven"
  },
  {
    "no": 824,
    "codes": "1F562",
    "char": "🕢",
    "name": "seven-thirty",
    "keywords": "7 | 7:30 | clock | seven | seven-thirty | thirty"
  },
  {
    "no": 825,
    "codes": "1F557",
    "char": "🕗",
    "name": "eight o’clock",
    "keywords": "00 | 8 | 8:00 | clock | eight | o’clock"
  },
  {
    "no": 826,
    "codes": "1F563",
    "char": "🕣",
    "name": "eight-thirty",
    "keywords": "8 | 8:30 | clock | eight | eight-thirty | thirty"
  },
  {
    "no": 827,
    "codes": "1F558",
    "char": "🕘",
    "name": "nine o’clock",
    "keywords": "00 | 9 | 9:00 | clock | nine | o’clock"
  },
  {
    "no": 828,
    "codes": "1F564",
    "char": "🕤",
    "name": "nine-thirty",
    "keywords": "9 | 9:30 | clock | nine | nine-thirty | thirty"
  },
  {
    "no": 829,
    "codes": "1F559",
    "char": "🕙",
    "name": "ten o’clock",
    "keywords": "00 | 10 | 10:00 | clock | o’clock | ten"
  },
  {
    "no": 830,
    "codes": "1F565",
    "char": "🕥",
    "name": "ten-thirty",
    "keywords": "10 | 10:30 | clock | ten | ten-thirty | thirty"
  },
  {
    "no": 831,
    "codes": "1F55A",
    "char": "🕚",
    "name": "eleven o’clock",
    "keywords": "00 | 11 | 11:00 | clock | eleven | o’clock"
  },
  {
    "no": 832,
    "codes": "1F566",
    "char": "🕦",
    "name": "eleven-thirty",
    "keywords": "11 | 11:30 | clock | eleven | eleven-thirty | thirty"
  },
  {
    "no": 833,
    "codes": "1F311",
    "char": "🌑",
    "name": "new moon",
    "keywords": "dark | moon | new moon"
  },
  {
    "no": 834,
    "codes": "1F312",
    "char": "🌒",
    "name": "waxing crescent moon",
    "keywords": "crescent | moon | waxing"
  },
  {
    "no": 835,
    "codes": "1F313",
    "char": "🌓",
    "name": "first quarter moon",
    "keywords": "first quarter moon | moon | quarter"
  },
  {
    "no": 836,
    "codes": "1F314",
    "char": "🌔",
    "name": "waxing gibbous moon",
    "keywords": "gibbous | moon | waxing"
  },
  {
    "no": 837,
    "codes": "1F315",
    "char": "🌕",
    "name": "full moon",
    "keywords": "full | moon"
  },
  {
    "no": 838,
    "codes": "1F316",
    "char": "🌖",
    "name": "waning gibbous moon",
    "keywords": "gibbous | moon | waning"
  },
  {
    "no": 839,
    "codes": "1F317",
    "char": "🌗",
    "name": "last quarter moon",
    "keywords": "last quarter moon | moon | quarter"
  },
  {
    "no": 840,
    "codes": "1F318",
    "char": "🌘",
    "name": "waning crescent moon",
    "keywords": "crescent | moon | waning"
  },
  {
    "no": 841,
    "codes": "1F319",
    "char": "🌙",
    "name": "crescent moon",
    "keywords": "crescent | moon"
  },
  {
    "no": 842,
    "codes": "1F31A",
    "char": "🌚",
    "name": "new moon face",
    "keywords": "face | moon | new moon face"
  },
  {
    "no": 843,
    "codes": "1F31B",
    "char": "🌛",
    "name": "first quarter moon face",
    "keywords": "face | first quarter moon face | moon | quarter"
  },
  {
    "no": 844,
    "codes": "1F31C",
    "char": "🌜",
    "name": "last quarter moon face",
    "keywords": "face | last quarter moon face | moon | quarter"
  },
  {
    "no": 845,
    "codes": "1F321",
    "char": "🌡",
    "name": "thermometer",
    "keywords": "thermometer | weather"
  },
  {
    "no": 846,
    "codes": "2600",
    "char": "☀",
    "name": "sun",
    "keywords": "bright | rays | sun | sunny"
  },
  {
    "no": 847,
    "codes": "1F31D",
    "char": "🌝",
    "name": "full moon face",
    "keywords": "bright | face | full | moon"
  },
  {
    "no": 848,
    "codes": "1F31E",
    "char": "🌞",
    "name": "sun with face",
    "keywords": "bright | face | sun | sun with face"
  },
  {
    "no": 849,
    "codes": "2B50",
    "char": "⭐",
    "name": "star",
    "keywords": "star"
  },
  {
    "no": 850,
    "codes": "1F31F",
    "char": "🌟",
    "name": "glowing star",
    "keywords": "glittery | glow | glowing star | shining | sparkle | star"
  },
  {
    "no": 851,
    "codes": "1F320",
    "char": "🌠",
    "name": "shooting star",
    "keywords": "falling | shooting | star"
  },
  {
    "no": 852,
    "codes": "2601",
    "char": "☁",
    "name": "cloud",
    "keywords": "cloud | weather"
  },
  {
    "no": 853,
    "codes": "26C5",
    "char": "⛅",
    "name": "sun behind cloud",
    "keywords": "cloud | sun | sun behind cloud"
  },
  {
    "no": 854,
    "codes": "26C8",
    "char": "⛈",
    "name": "cloud with lightning and rain",
    "keywords": "cloud | cloud with lightning and rain | rain | thunder"
  },
  {
    "no": 855,
    "codes": "1F324",
    "char": "🌤",
    "name": "sun behind small cloud",
    "keywords": "cloud | sun | sun behind small cloud"
  },
  {
    "no": 856,
    "codes": "1F325",
    "char": "🌥",
    "name": "sun behind large cloud",
    "keywords": "cloud | sun | sun behind large cloud"
  },
  {
    "no": 857,
    "codes": "1F326",
    "char": "🌦",
    "name": "sun behind rain cloud",
    "keywords": "cloud | rain | sun | sun behind rain cloud"
  },
  {
    "no": 858,
    "codes": "1F327",
    "char": "🌧",
    "name": "cloud with rain",
    "keywords": "cloud | cloud with rain | rain"
  },
  {
    "no": 859,
    "codes": "1F328",
    "char": "🌨",
    "name": "cloud with snow",
    "keywords": "cloud | cloud with snow | cold | snow"
  },
  {
    "no": 860,
    "codes": "1F329",
    "char": "🌩",
    "name": "cloud with lightning",
    "keywords": "cloud | cloud with lightning | lightning"
  },
  {
    "no": 861,
    "codes": "1F32A",
    "char": "🌪",
    "name": "tornado",
    "keywords": "cloud | tornado | whirlwind"
  },
  {
    "no": 862,
    "codes": "1F32B",
    "char": "🌫",
    "name": "fog",
    "keywords": "cloud | fog"
  },
  {
    "no": 863,
    "codes": "1F32C",
    "char": "🌬",
    "name": "wind face",
    "keywords": "blow | cloud | face | wind"
  },
  {
    "no": 864,
    "codes": "1F300",
    "char": "🌀",
    "name": "cyclone",
    "keywords": "cyclone | dizzy | hurricane | twister | typhoon"
  },
  {
    "no": 865,
    "codes": "1F308",
    "char": "🌈",
    "name": "rainbow",
    "keywords": "rain | rainbow"
  },
  {
    "no": 866,
    "codes": "1F302",
    "char": "🌂",
    "name": "closed umbrella",
    "keywords": "closed umbrella | clothing | rain | umbrella"
  },
  {
    "no": 867,
    "codes": "2602",
    "char": "☂",
    "name": "umbrella",
    "keywords": "clothing | rain | umbrella"
  },
  {
    "no": 868,
    "codes": "2614",
    "char": "☔",
    "name": "umbrella with rain drops",
    "keywords": "clothing | drop | rain | umbrella | umbrella with rain drops"
  },
  {
    "no": 869,
    "codes": "26F1",
    "char": "⛱",
    "name": "umbrella on ground",
    "keywords": "rain | sun | umbrella | umbrella on ground"
  },
  {
    "no": 870,
    "codes": "26A1",
    "char": "⚡",
    "name": "high voltage",
    "keywords": "danger | electric | high voltage | lightning | voltage | zap"
  },
  {
    "no": 871,
    "codes": "2744",
    "char": "❄",
    "name": "snowflake",
    "keywords": "cold | snow | snowflake"
  },
  {
    "no": 872,
    "codes": "2603",
    "char": "☃",
    "name": "snowman",
    "keywords": "cold | snow | snowman"
  },
  {
    "no": 873,
    "codes": "26C4",
    "char": "⛄",
    "name": "snowman without snow",
    "keywords": "cold | snow | snowman | snowman without snow"
  },
  {
    "no": 874,
    "codes": "2604",
    "char": "☄",
    "name": "comet",
    "keywords": "comet | space"
  },
  {
    "no": 875,
    "codes": "1F525",
    "char": "🔥",
    "name": "fire",
    "keywords": "fire | flame | tool"
  },
  {
    "no": 876,
    "codes": "1F4A7",
    "char": "💧",
    "name": "droplet",
    "keywords": "cold | comic | drop | droplet | sweat"
  },
  {
    "no": 877,
    "codes": "1F30A",
    "char": "🌊",
    "name": "water wave",
    "keywords": "ocean | water | wave"
  },
  {
    "no": 878,
    "codes": "1F383",
    "char": "🎃",
    "name": "jack-o-lantern",
    "keywords": "celebration | halloween | jack | jack-o-lantern | lantern"
  },
  {
    "no": 879,
    "codes": "1F384",
    "char": "🎄",
    "name": "Christmas tree",
    "keywords": "celebration | Christmas | tree"
  },
  {
    "no": 880,
    "codes": "1F386",
    "char": "🎆",
    "name": "fireworks",
    "keywords": "celebration | fireworks"
  },
  {
    "no": 881,
    "codes": "1F387",
    "char": "🎇",
    "name": "sparkler",
    "keywords": "celebration | fireworks | sparkle | sparkler"
  },
  {
    "no": 882,
    "codes": "1F9E8",
    "char": "🧨",
    "name": "firecracker",
    "keywords": "dynamite | explosive | firecracker | fireworks"
  },
  {
    "no": 883,
    "codes": "2728",
    "char": "✨",
    "name": "sparkles",
    "keywords": "sparkle | sparkles | star"
  },
  {
    "no": 884,
    "codes": "1F388",
    "char": "🎈",
    "name": "balloon",
    "keywords": "balloon | celebration"
  },
  {
    "no": 885,
    "codes": "1F389",
    "char": "🎉",
    "name": "party popper",
    "keywords": "celebration | party | popper | tada"
  },
  {
    "no": 886,
    "codes": "1F38A",
    "char": "🎊",
    "name": "confetti ball",
    "keywords": "ball | celebration | confetti"
  },
  {
    "no": 887,
    "codes": "1F38B",
    "char": "🎋",
    "name": "tanabata tree",
    "keywords": "banner | celebration | Japanese | tanabata tree | tree"
  },
  {
    "no": 888,
    "codes": "1F38D",
    "char": "🎍",
    "name": "pine decoration",
    "keywords": "bamboo | celebration | Japanese | pine | pine decoration"
  },
  {
    "no": 889,
    "codes": "1F38E",
    "char": "🎎",
    "name": "Japanese dolls",
    "keywords": "celebration | doll | festival | Japanese | Japanese dolls"
  },
  {
    "no": 890,
    "codes": "1F38F",
    "char": "🎏",
    "name": "carp streamer",
    "keywords": "carp | celebration | streamer"
  },
  {
    "no": 891,
    "codes": "1F390",
    "char": "🎐",
    "name": "wind chime",
    "keywords": "bell | celebration | chime | wind"
  },
  {
    "no": 892,
    "codes": "1F391",
    "char": "🎑",
    "name": "moon viewing ceremony",
    "keywords": "celebration | ceremony | moon | moon viewing ceremony"
  },
  {
    "no": 893,
    "codes": "1F9E7",
    "char": "🧧",
    "name": "red envelope",
    "keywords": "gift | good luck | hóngbāo | lai see | money | red envelope"
  },
  {
    "no": 894,
    "codes": "1F380",
    "char": "🎀",
    "name": "ribbon",
    "keywords": "celebration | ribbon"
  },
]