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
            href: "/search/category/stationery/office-supplies",
          },
          {
            title: "کیف، کوله پشتی و جامدادی",
            href: "/search/category/stationery/bags-backpacks",
          },
          {
            title: "چراغ مطالعه",
            href: "/search/category/stationery/light",
          },
          {
            title: "کاغذ کادو، پاکت و کارت هدیه",
            href: "/search/category/stationery/gift-tools",
          },
        ],
      },
      {
        title: "آلات موسیقی",
        href: "/category/musicalinstruments",
        list: [
          {
            title: "لوازم جانبی آلات موسیقی",
            href: "/category/musicalinstruments/musicinstrumentsaccessories",
          },
          {
            title: "گیتار",
            href: "/category/musicalinstruments/guitar",
          },
          {
            title: "کیبورد و ارگ",
            href: "/category/musicalinstruments/keybord-organ",
          },
          {
            title: "ویولن",
            href: "/category/musicalinstruments/violin",
          },
          {
            title: "پیانو دیجیتال",
            href: "/category/musicalinstruments/pianos",
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
            href: "/category/laptop/asus",
          },
          {
            title: "لپ تاپ لنوو",
            href: "/category/laptop/lenovo",
          },
          {
            title: "مک بوک",
            href: "/category/laptop/apple",
          },
          {
            title: "لپ تاپ HP",
            href: "/category/laptop/hp",
          },
          {
            title: "لپ تاپ دل",
            href: "/category/laptop/dell",
          },
          {
            title: "لپ تاپ ایسر",
            href: "/category/laptop/acer",
          },
          {
            title: "لپ تاپ ام اس آی",
            href: "/category/laptop/msi",
          },
          {
            title: "لپ تاپ کاستوم",
            href: "/category/laptop/custom",
          },
        ],
      },
      {
        title: "هدفون",
        href: "/category/headphone",
        list: [
          {
            title: "هدفون بی سیم",
            href: "/category/headphone/wireless",
          },
          {
            title: "هدفون اپل (ایرپاد)",
            href: "/category/headphone/apple",
          },
          {
            title: "هدفون بیتس",
            href: "/category/headphone/beats",
          },
          {
            title: "هدفون سونی",
            href: "/category/headphone/sony",
          },
          {
            title: "هدفون سامسونگ",
            href: "/category/headphone/samsung",
          },
          {
            title: "هدفون شیائومی",
            href: "/category/headphone/xiaomi",
          },
          {
            title: "هدفون جی بی ال",
            href: "/category/headphone/jbl",
          },
          {
            title: "هدفون ریزر",
            href: "/category/headphone/razer",
          },
        ],
      },
      {
        title: "پرینتر",
        href: "/category/printer",
        list: [
          {
            title: "پرینتر سه بعدی",
            href: "/category/printer/3d",
          },
          {
            title: "پرینتر حرارتی",
            href: "/category/printer/thermal ",
          },
          {
            title: "پرینتر رنگی",
            href: "/category/printer/color",
          },
          {
            title: "پرینتر لیبل زن",
            href: "/category/printer/label",
          },
          {
            title: "پرینتر اچ پی",
            href: "/category/printer/hp",
          },
        ],
      },
      {
        title: "ماشین های اداری",
        href: "/category/office-machines",
        list: [
          {
            title: "کابل پرینتر",
            href: "/category/office-machines/cartridge",
          },
          {
            title: "کارتریج",
            href: "/category/office-machines/cable",
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
            href: "/category/smart-home/lighting",
          },
          {
            title: "کلید و پریز هوشمند",
            href: "/category/smart-home/plugs-outlets",
          },
          {
            title: "سنسور هوشمند",
            href: "/category/smart-home/sensors",
          },
          {
            title: "جارو هوشمند (رباتیک)",
            href: "/category/smart-home/roomba",
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
            href: "/category/men-clothing/t-shirt",
          },
          {
            title: "پیراهن مردانه",
            href: "/category/men-clothing/shirt",
          },
          {
            title: "سویشرت مردانه",
            href: "/category/men-clothing/sweatshirts",
          },
          {
            title: "ژاکت و پلیور مردانه",
            href: "/category/men-clothing/knitwear",
          },
          {
            title: "هودی مردانه",
            href: "/category/men-clothing/hoodie",
          },
        ],
      },
      {
        title: "لباس زنانه",
        href: "/category/women-clothing",
        list: [
          {
            title: "پیراهن و لباس مجلسی زنانه",
            href: "/category/women-clothing/dress",
          },
          {
            title: "دامن زنانه",
            href: "/category/women-clothing/skirt",
          },
          {
            title: "سویشرت زنانه",
            href: "/category/women-clothing/sweatshirts",
          },
          {
            title: "شلوار جین زنانه",
            href: "/category/women-clothing/jean",
          },
          {
            title: "لگ زنانه",
            href: "/category/women-clothing/legging",
          },
          {
            title: "هودی زنانه",
            href: "/category/women-clothing/",
          },
        ],
      },
      {
        title: "لباس دخترانه",
        href: "/category/girls-clothing",
        list: [
          {
            title: "کاپشن دخترانه",
            href: "/category/girl-clothing/warm-jacket",
          },
          {
            title: "پالتو دخترانه",
            href: "/category/girl-clothing/coat",
          },
          {
            title: "سویشرت و هودی دخترانه",
            href: "/category/girl-clothing/hoodie",
          },
          {
            title: "کت، جلیقه و ست رسمی دخترانه",
            href: "/category/girl-clothing/suits",
          },
          {
            title: "جوراب و ساق دخترانه",
            href: "/category/girl-clothing/socks",
          },
          {
            title: "لباس راحتی دخترانه",
            href: "/category/girl-clothing/homewear",
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
            href: "/category/beauty/face",
          },
          {
            title: "آرایش ابرو",
            href: "/category/beauty/eyebrow",
          },
          {
            title: "آرایش چشم",
            href: "/category/beauty/eye",
          },
          {
            title: "آرایش لب",
            href: "/category/beauty/lip",
          },
          {
            title: "بهداشت و زیبایی ناخن",
            href: "/category/beauty/nails-care",
          },
          {
            title: "ابزار آرایشی",
            href: "/category/beauty/tools",
          },
        ],
      },
      {
        title: "مراقبت و زیبایی مو",
        href: "/category/hair-care",

        list: [
          {
            title: "شامپو و مراقبت مو",
            href: "/category/hair-care/shampoo",
          },
          {
            title: "آرایش مو",
            href: "/category/hair-care/beauty",
          },
        ],
      },
      {
        title: "مراقبت پوست",
        href: "/category/skin-care",
        list: [
          {
            title: "تونر",
            href: "/category/skin-care/face-toner",
          },
          {
            title: "کرم مرطوب کننده وآبرسان",
            href: "/category/skin-care/moisturizing-cream",
          },
          {
            title: "پاک کننده",
            href: "/category/skin-care/makeup-remover",
          },
          {
            title: "ضدآفتاب",
            href: "/category/skin-care/sunscreen-cream",
          },
        ],
      },
      {
        title: "لوازم بهداشتی",
        href: "/category/personal-care",
        list: [
          {
            title: "مراقبت دهان و دندان",
            href: "/category/personal-care/dental-hygienist",
          },
          {
            title: "مسواک",
            href: "/category/personal-care/tooth-brush",
          },
          {
            title: "خمیردندان",
            href: "/category/personal-care/toothpaste",
          },
          {
            title: "دئودورانت و ضدتعریق",
            href: "/category/personal-care/anti-sweat",
          },
        ],
      },
      {
        title: "عطر و ادکلن",
        href: "/category/perfume",
        list: [
          {
            title: "عطر و ادکلن زنانه",
            href: "/category/perfume/women-perfume",
          },
          {
            title: "عطر و ادکلن مردانه",
            href: "/category/perfume/men-perfume",
          },
          {
            title: "عطر جیبی",
            href: "/category/perfume/pocket-perfume",
          },
          {
            title: "بادی اسپلش",
            href: "/category/perfume/body-splash",
          },
        ],
      },
      {
        title: "لوازم شخصی برقی",
        href: "/category/electrical-personal-care",
        list: [
          {
            title: "سشوار",
            href: "/category/electrical-personal-care/hair-drier",
          },
          {
            title: "اتو و حالت دهنده ی مو",
            href: "/category/electrical-personal-care/hair-iron",
          },
          {
            title: "اصلاح موی صورت",
            href: "/category/electrical-personal-care/hair-trimmer",
          },
          {
            title: "اصلاح موی سر",
            href: "/category/electrical-personal-care/shaver",
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
        list: [
          "تلویزیون",
          "ساندبار",
          "ویدیو پروژکتور",
          "پخش کننده خانگی",
          "ریموت کنترل",
          "میز تلویزیون",
        ],
      },
      {
        title: "یخچال فریزر",
        list: [
          "یخچال فریزر ساید بای ساید",
          "یخچال فریزر دوقولو",
          "یخچال فریزر هتلی",
          "یخچال فریزر کمبی",
        ],
      },
      {
        title: "جاروبرقی",
        list: ["جارو شارژی", "لوازم جانبی جاروبرقی و بخارشو"],
      },
      {
        title: "لوازم پخت و پز",
        list: [
          "سرخ کن بدون روغن (airfrier)",
          "مایکروویو، مایکروفر",
          "اجاق گاز",
          "پلوپز",
          "گریل و باربیکیو",
          "آون توستر",
          "توستر",
          "ساندویچ ساز و وافل ساز",
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
        list: ["قابلمه و تابه", "زودپز", "سرویس پخت و پز"],
      },
      {
        title: "ابزار آشپزی",
        list: ["ست کفگیر و ملاقه", "چاقو", "تخته گوشت", "ظرف و قالب یخ", "قیف"],
      },
      {
        title: "مبلمان و دکوراسین داخلی",
        list: [
          "مبل",
          "کتابخانه",
          "شلف و طبقه",
          "کنسول",
          "صندلی",
          "میز ناهارخوری",
        ],
      },
      {
        title: "حمام",
        list: ["حوله", "دمپایی", "لیف", "پرده حمام", "وان و جکوزی"],
      },
      {
        title: "سرویس بهداشتی",
        list: ["توالت فرنگی", "ست سرویس بهداشتی"],
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
        list: [
          "زنجیر طلا زنانه",
          "انگشتر طلا زنانه",
          "دستبند طلا زنانه",
          "النگو طلا زنانه",
          "گردنبد طلا زنانه",
          "گوشواره طلا",
        ],
      },
      {
        title: "زیورآلات نقره زنانه",
        list: [
          "زنجیر نقره زنانه",
          "انگشتر نقره زنانه",
          "دستبند نقره زنانه",
          "پیرسینگ نقره زنانه",
          "آویز ساعت نقره زنانه",
          "گردنبد نقره زنانه",
          "گوشواره نقره زنانه",
          "پابند نقره زنانه",
          "آویز نقره زنانه",
        ],
      },
      {
        title: "طلای آب شده",
        list: [""],
      },
      {
        title: "سکه طلا",
        list: [""],
      },
    ],
  },
];
