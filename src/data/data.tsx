import {
  Armchair,
  Gem,
  HeartPulse,
  Laptop,
  PencilRuler,
  Refrigerator,
  Shirt,
  Smartphone,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    title: "موبایل",
    icon: <Smartphone size={16} />,
    href: "/category/mobile",
    submenu: [
      {
        title: "برندهای مختلف گوشی موبایل",
        href: "/search/mobile-brands",
        list: [
          {
            title: "گوشی آیفون",
            href: "/search/mobile-brands/apple",
          },
          {
            title: "گوشی سامسونگ",
            href: "/search/mobile-brands/samsung",
          },
          {
            title: "گوشی شیائومی",
            href: "/search/mobile-brands/xiaomi",
          },
          {
            title: "گوشی نوکیا",
            href: "/search/mobile-brands/nokia",
          },
        ],
      },
      {
        title: "گوشی براساس قیمت",
        href: "/search/mobile-prices",
        list: [
          {
            title: "گوشی موبایل ارزان",
            href: "/search/mobile-prices/cheap",
          },
          {
            title: "گوشی موبایل قسطی",
            href: "/search/mobile-prices/credit",
          },
          {
            title: "گوشی تا 2 میلیون",
            href: "/search/mobile-prices/below-2million",
          },
          {
            title: "گوشی تا 5 میلیون",
            href: "/search/mobile-prices/below-5million",
          },
        ],
      },
      {
        title: "لوازم جانبی موبایل",
        href: "/search/mobile-accessories",
        list: [
          {
            title: "شارژر گوشی",
            href: "/search/mobile-accessories/charger",
          },
          {
            title: "قاب و کاور گوشی",
            href: "/search/mobile-accessories/cover",
          },
          {
            title: "گلس گوشی",
            href: "/search/mobile-accessories/screen-guard",
          },
          {
            title: "هولدر گوشی موبایل",
            href: "/search/mobile-accessories/holder",
          },
          {
            title: "کابل شارژ و مبدل",
            href: "/search/mobile-accessories/data-cable",
          },
          {
            title: "پاوربانک (شارژر همراه)",
            href: "/search/mobile-accessories/power-bank",
          },
        ],
      },
      {
        title: "داغ ترین ها",
        href: "/search/mobile-trend",
        list: [
          {
            title: "گلکسی S23 Ultra",
            href: "/search/mobile-trend/galaxy-s23-ultra",
          },
          {
            title: "گلکسی A54",
            href: "/search/mobile-trend/galaxy-a54",
          },
          {
            title: "گلکسی A34",
            href: "/search/mobile-trend/galaxy-a34",
          },
          {
            title: "گلکسی A24",
            href: "/search/mobile-trend/galaxy-a24",
          },
          {
            title: "گلکسی A14",
            href: "/search/mobile-trend/galaxy-a14",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "کتاب، لوازم التحریر و هنر",
    icon: <PencilRuler size={16} />,
    href: "/category/book-and-media",
    submenu: [
      {
        title: "کتاب و مجله",
        href: "/category/book-and-magazine",
        list: [
          {
            title: "کتاب چاپی",
            href: "/search/book-and-magazine/book",
          },
          {
            title: "مجلات خارجی و داخلی",
            href: "/search/book-and-magazine/magazines",
          },
        ],
      },
      {
        title: "لوازم التحریر",
        href: "/category/stationery",
        list: [
          {
            title: "لوازم اداری و اقلام مصرفی",
            href: "/search/stationery/office-supplies",
          },
          {
            title: "کیف، کوله پشتی و جامدادی",
            href: "/search/stationery/bags-backpacks",
          },
          {
            title: "چراغ مطالعه",
            href: "/search/stationery/light",
          },
          {
            title: "کاغذ کادو، پاکت و کارت هدیه",
            href: "/search/stationery/gift-tools",
          },
        ],
      },
      {
        title: "آلات موسیقی",
        href: "/category/musicalinstruments",
        list: [
          {
            title: "لوازم جانبی آلات موسیقی",
            href: "/search/musicalinstruments/musicinstrumentsaccessories",
          },
          {
            title: "گیتار",
            href: "/search/musicalinstruments/guitar",
          },
          {
            title: "کیبورد و ارگ",
            href: "/search/musicalinstruments/keybord-organ",
          },
          {
            title: "ویولن",
            href: "/search/musicalinstruments/violin",
          },
          {
            title: "پیانو دیجیتال",
            href: "/search/musicalinstruments/pianos",
          },
        ],
      },
      { title: "کتاب صوتی", href: "/category/audio-book", list: [] },
    ],
  },
  {
    id: 3,
    title: "کالای دیجیتال",
    icon: <Laptop size={16} />,
    href: "/category/digital",
    submenu: [
      {
        title: "لپ تاپ",
        href: "/category/laptop",
        list: [
          {
            title: "لپ تاپ ایسوس",
            href: "/search/laptop/asus",
          },
          {
            title: "لپ تاپ لنوو",
            href: "/search/laptop/lenovo",
          },
          {
            title: "مک بوک",
            href: "/search/laptop/apple",
          },
          {
            title: "لپ تاپ HP",
            href: "/search/laptop/hp",
          },
          {
            title: "لپ تاپ دل",
            href: "/search/laptop/dell",
          },
          {
            title: "لپ تاپ ایسر",
            href: "/search/laptop/acer",
          },
          {
            title: "لپ تاپ ام اس آی",
            href: "/search/laptop/msi",
          },
          {
            title: "لپ تاپ کاستوم",
            href: "/search/laptop/custom",
          },
        ],
      },
      {
        title: "هدفون",
        href: "/category/headphone",
        list: [
          {
            title: "هدفون بی سیم",
            href: "/search/headphone/wireless",
          },
          {
            title: "هدفون اپل (ایرپاد)",
            href: "/search/headphone/apple",
          },
          {
            title: "هدفون بیتس",
            href: "/search/headphone/beats",
          },
          {
            title: "هدفون سونی",
            href: "/search/headphone/sony",
          },
          {
            title: "هدفون سامسونگ",
            href: "/search/headphone/samsung",
          },
          {
            title: "هدفون شیائومی",
            href: "/search/headphone/xiaomi",
          },
          {
            title: "هدفون جی بی ال",
            href: "/search/headphone/jbl",
          },
          {
            title: "هدفون ریزر",
            href: "/search/headphone/razer",
          },
        ],
      },
      {
        title: "پرینتر",
        href: "/category/printer",
        list: [
          {
            title: "پرینتر سه بعدی",
            href: "/search/printer/3d",
          },
          {
            title: "پرینتر حرارتی",
            href: "/search/printer/thermal ",
          },
          {
            title: "پرینتر رنگی",
            href: "/search/printer/color",
          },
          {
            title: "پرینتر لیبل زن",
            href: "/search/printer/label",
          },
          {
            title: "پرینتر اچ پی",
            href: "/search/printer/hp",
          },
        ],
      },
      {
        title: "ماشین های اداری",
        href: "/category/office-machines",
        list: [
          {
            title: "کابل پرینتر",
            href: "/search/office-machines/cartridge",
          },
          {
            title: "کارتریج",
            href: "/search/office-machines/cable",
          },
        ],
      },
      {
        title: "تبلت",
        href: "/category/tablet",
        list: [],
      },
      {
        title: "خانه هوشمند",
        href: "/category/smart-home",
        list: [
          {
            title: "نور و روشنایی هوشمند",
            href: "/search/smart-home/lighting",
          },
          {
            title: "کلید و پریز هوشمند",
            href: "/search/smart-home/plugs-outlets",
          },
          {
            title: "سنسور هوشمند",
            href: "/search/smart-home/sensors",
          },
          {
            title: "جارو هوشمند (رباتیک)",
            href: "/search/smart-home/roomba",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "مد و پوشاک",
    icon: <Shirt size={16} />,
    href: "/category/apparel",
    submenu: [
      {
        title: "لباس مردانه",
        href: "/category/men-clothing",
        list: [
          {
            title: "تی شرت مردانه",
            href: "/search/men-clothing/t-shirt",
          },
          {
            title: "پیراهن مردانه",
            href: "/search/men-clothing/shirt",
          },
          {
            title: "سویشرت مردانه",
            href: "/search/men-clothing/sweatshirts",
          },
          {
            title: "ژاکت و پلیور مردانه",
            href: "/search/men-clothing/knitwear",
          },
          {
            title: "هودی مردانه",
            href: "/search/men-clothing/hoodie",
          },
        ],
      },
      {
        title: "لباس زنانه",
        href: "/category/women-clothing",
        list: [
          {
            title: "پیراهن و لباس مجلسی زنانه",
            href: "/search/women-clothing/dress",
          },
          {
            title: "دامن زنانه",
            href: "/search/women-clothing/skirt",
          },
          {
            title: "سویشرت زنانه",
            href: "/search/women-clothing/sweatshirts",
          },
          {
            title: "شلوار جین زنانه",
            href: "/search/women-clothing/jean",
          },
          {
            title: "لگ زنانه",
            href: "/search/women-clothing/legging",
          },
          {
            title: "هودی زنانه",
            href: "/search/women-clothing/",
          },
        ],
      },
      {
        title: "لباس دخترانه",
        href: "/category/girls-clothing",
        list: [
          {
            title: "کاپشن دخترانه",
            href: "/search/girl-clothing/warm-jacket",
          },
          {
            title: "پالتو دخترانه",
            href: "/search/girl-clothing/coat",
          },
          {
            title: "سویشرت و هودی دخترانه",
            href: "/search/girl-clothing/hoodie",
          },
          {
            title: "کت، جلیقه و ست رسمی دخترانه",
            href: "/search/girl-clothing/suits",
          },
          {
            title: "جوراب و ساق دخترانه",
            href: "/search/girl-clothing/socks",
          },
          {
            title: "لباس راحتی دخترانه",
            href: "/search/girl-clothing/homewear",
          },
        ],
      },
      {
        title: "پوشاک بچگانه",
        href: "/category/kids-clothing",
        list: [],
      },
    ],
  },
  {
    id: 5,
    title: "آرایشی بهداشتی",
    icon: <HeartPulse size={16} />,
    href: "/category/personal-appliance",
    submenu: [
      {
        title: "لوازم آرایشی",
        href: "/category/beauty",
        list: [
          {
            title: "آرایش صورت",
            href: "/search/beauty/face",
          },
          {
            title: "آرایش ابرو",
            href: "/search/beauty/eyebrow",
          },
          {
            title: "آرایش چشم",
            href: "/search/beauty/eye",
          },
          {
            title: "آرایش لب",
            href: "/search/beauty/lip",
          },
          {
            title: "بهداشت و زیبایی ناخن",
            href: "/search/beauty/nails-care",
          },
          {
            title: "ابزار آرایشی",
            href: "/search/beauty/tools",
          },
        ],
      },
      {
        title: "مراقبت و زیبایی مو",
        href: "/category/hair-care",

        list: [
          {
            title: "شامپو و مراقبت مو",
            href: "/search/hair-care/shampoo",
          },
          {
            title: "آرایش مو",
            href: "/search/hair-care/beauty",
          },
        ],
      },
      {
        title: "مراقبت پوست",
        href: "/category/skin-care",
        list: [
          {
            title: "تونر",
            href: "/search/skin-care/face-toner",
          },
          {
            title: "کرم مرطوب کننده وآبرسان",
            href: "/search/skin-care/moisturizing-cream",
          },
          {
            title: "پاک کننده",
            href: "/search/skin-care/makeup-remover",
          },
          {
            title: "ضدآفتاب",
            href: "/search/skin-care/sunscreen-cream",
          },
        ],
      },
      {
        title: "لوازم بهداشتی",
        href: "/category/personal-care",
        list: [
          {
            title: "مراقبت دهان و دندان",
            href: "/search/personal-care/dental-hygienist",
          },
          {
            title: "مسواک",
            href: "/search/personal-care/tooth-brush",
          },
          {
            title: "خمیردندان",
            href: "/search/personal-care/toothpaste",
          },
          {
            title: "دئودورانت و ضدتعریق",
            href: "/search/personal-care/anti-sweat",
          },
        ],
      },
      {
        title: "عطر و ادکلن",
        href: "/category/perfume",
        list: [
          {
            title: "عطر و ادکلن زنانه",
            href: "/search/perfume/women-perfume",
          },
          {
            title: "عطر و ادکلن مردانه",
            href: "/search/perfume/men-perfume",
          },
          {
            title: "عطر جیبی",
            href: "/search/perfume/pocket-perfume",
          },
          {
            title: "بادی اسپلش",
            href: "/search/perfume/body-splash",
          },
        ],
      },
      {
        title: "لوازم شخصی برقی",
        href: "/category/electrical-personal-care",
        list: [
          {
            title: "سشوار",
            href: "/search/electrical-personal-care/hair-drier",
          },
          {
            title: "اتو و حالت دهنده ی مو",
            href: "/search/electrical-personal-care/hair-iron",
          },
          {
            title: "اصلاح موی صورت",
            href: "/search/electrical-personal-care/hair-trimmer",
          },
          {
            title: "اصلاح موی سر",
            href: "/search/electrical-personal-care/shaver",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "لوازم خانگی برقی",
    icon: <Refrigerator size={16} />,
    href: "/category/home-appliance",
    submenu: [
      {
        title: "صوتی و تصویری",
        href: "/category/video-audio-entertainment",
        list: [
          {
            title: "تلویزیون",
            href: "/search/video-audio-entertainment/tv",
          },
          {
            title: "ساندبار",
            href: "/search/video-audio-entertainment/soundbar",
          },
          {
            title: "ویدیو پروژکتور",
            href: "/search/video-audio-entertainment/video-projector",
          },
          {
            title: "پخش کننده خانگی",
            href: "/search/video-audio-entertainment/multimedia-player",
          },
          {
            title: "ریموت کنترل",
            href: "/search/video-audio-entertainment/remote-control",
          },
          {
            title: "میز تلویزیون",
            href: "/search/video-audio-entertainment/tv-tables",
          },
        ],
      },
      {
        title: "یخچال فریزر",
        href: "/category/refrigerator",
        list: [
          {
            title: "یخچال فریزر ساید بای ساید",
            href: "/search/refrigerator/side-by-side",
          },
          {
            title: "یخچال فریزر دوقلو",
            href: "/search/refrigerator/twin",
          },
          {
            title: "یخچال فریزر هتلی",
            href: "/search/refrigerator/hotel ",
          },
          {
            title: "یخچال فریزر کمبی",
            href: "/search/refrigerator/combi ",
          },
        ],
      },
      {
        title: "جاروبرقی",
        href: "/category/vacuum ",
        list: [
          {
            title: "جارو شارژی",
            href: "/search/vacuum/rechargeable",
          },
          {
            title: "لوازم جانبی جاروبرقی و بخارشو",
            href: "/search/vacuum/consumption",
          },
        ],
      },
      {
        title: "لوازم پخت و پز",
        href: "/category/cooking",
        list: [
          {
            title: "سرخ کن بدون روغن (airfrier)",
            href: "/search/cooking/airfrier",
          },
          {
            title: "مایکروویو، مایکروفر",
            href: "/search/cooking/microwave",
          },
          {
            title: "اجاق گاز",
            href: "/search/cooking/oven",
          },
          {
            title: "پلوپز",
            href: "/search/cooking/electric-rice-cooker",
          },
          {
            title: "گریل و باربیکیو",
            href: "/search/cooking/grill-barbecue",
          },
          {
            title: "آون توستر",
            href: "/search/cooking/oven-toaster",
          },
          {
            title: "توستر",
            href: "/search/cooking/toaster",
          },
          {
            title: "ساندویچ ساز و وافل ساز",
            href: "/search/cooking/sandwich-makers",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "خانه و آشپزخانه",
    icon: <Armchair size={16} />,
    href: "/category/home-and-kitchen",
    submenu: [
      {
        title: "ظروف پخت و پز",
        href: "/category/cooking-dishes",
        list: [
          {
            title: "قابلمه و تابه",
            href: "/search/cooking-dishes/pots-pans",
          },
          {
            title: "زودپز",
            href: "/search/cooking-dishes/pressurecooker",
          },
          {
            title: "سرویس پخت و پز",
            href: "/search/cooking-dishes/cookwareset",
          },
        ],
      },
      {
        title: "ابزار آشپزی",
        href: "/category/cooking-tools",

        list: [
          {
            title: "ست کفگیر و ملاقه",
            href: "/search/cooking-tools/spatulaladleset",
          },
          {
            title: "چاقو",
            href: "/search/cooking-tools/knife",
          },
          {
            title: "تخته گوشت",
            href: "/search/cooking-tools/meat-board",
          },
          {
            title: "ظرف و قالب یخ",
            href: "/search/cooking-tools/icetray",
          },
          {
            title: "قیف",
            href: "/search/cooking-tools/funnel",
          },
        ],
      },
      {
        title: "مبلمان و دکوراسین داخلی",
        href: "/category/household-furniture",

        list: [
          {
            title: "مبل",
            href: "/search/household-furniture/sofa",
          },
          {
            title: "کتابخانه",
            href: "/search/household-furniture/library",
          },
          {
            title: "شلف و طبقه",
            href: "/search/household-furniture/shelf",
          },
          {
            title: "کنسول",
            href: "/search/household-furniture/console",
          },
          {
            title: "صندلی",
            href: "/search/household-furniture/chair",
          },
          {
            title: "میز ناهارخوری",
            href: "/search/household-furniture/dining-table",
          },
        ],
      },
      {
        title: "حمام",
        href: "/category/bathroom",
        list: [
          {
            title: "حوله",
            href: "/search/bathroom/towel",
          },
          {
            title: "دمپایی",
            href: "/search/bathroom/slippers",
          },
          {
            title: "لیف",
            href: "/search/bathroom/washingmitt",
          },
          {
            title: "پرده حمام",
            href: "/search/bathroom/showercurtains",
          },
          {
            title: "وان و جکوزی",
            href: "/search/bathroom/bathtub-and-jacuzzi",
          },
        ],
      },
      {
        title: "سرویس بهداشتی",
        href: "/category/watercloset",
        list: [
          {
            title: "توالت فرنگی",
            href: "/search/watercloset/toilet",
          },
          {
            title: "ست سرویس بهداشتی",
            href: "/search/watercloset/toiletset",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "طلا و نقره",
    icon: <Gem size={16} />,
    href: "/category/jewelry",
    submenu: [
      {
        title: "زیورآلات طلا زنانه",
        href: "/category/women-gold-jewelry",
        list: [
          {
            title: "زنجیر طلا زنانه",
            href: "/search/women-gold-jewelry/chain",
          },
          {
            title: "انگشتر طلا زنانه",
            href: "/search/women-gold-jewelry/ring",
          },
          {
            title: "دستبند طلا زنانه",
            href: "/search/women-gold-jewelry/bracelet",
          },
          {
            title: "النگو طلا زنانه",
            href: "/search/women-gold-jewelry/bangle",
          },
          {
            title: "گردنبد طلا زنانه",
            href: "/search/women-gold-jewelry/necklace",
          },
          {
            title: "گوشواره طلا",
            href: "/search/women-gold-jewelry/earrings",
          },
        ],
      },
      {
        title: "زیورآلات نقره زنانه",
        href: "/category/women-silver-jewelry",
        list: [
          {
            title: "زنجیر نقره زنانه",
            href: "/search/women-silver-jewelry/chain",
          },
          {
            title: "انگشتر نقره زنانه",
            href: "/search/women-silver-jewelry/ring",
          },
          {
            title: "دستبند نقره زنانه",
            href: "/search/women-silver-jewelry/bracelet",
          },
          {
            title: "پیرسینگ نقره زنانه",
            href: "/search/women-silver-jewelry/piercing",
          },
          {
            title: "آویز ساعت نقره زنانه",
            href: "/search/women-silver-jewelry/watch-pendant",
          },
          {
            title: "گردنبد نقره زنانه",
            href: "/search/women-silver-jewelry/necklace",
          },
          {
            title: "گوشواره نقره زنانه",
            href: "/search/women-silver-jewelry/earrings",
          },
          {
            title: "پابند نقره زنانه",
            href: "/search/women-silver-jewelry/anklet",
          },
          {
            title: "آویز نقره زنانه",
            href: "/search/women-silver-jewelry/pendants",
          },
        ],
      },
      {
        title: "طلای آب شده",
        href: "/category/melt-gold",
        list: [],
      },
      {
        title: "سکه طلا",
        href: "/category/gold-coin",
        list: [],
      },
    ],
  },
];
