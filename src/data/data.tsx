// Story Images Source
import handsfree from "@/../public/stories/0522c3b5af6b7200a673513f1142f028d693515b_1709192564.jpg";
import water from "@/../public/stories/114085322.jpg";
import bag from "@/../public/stories/121770049.jpg";
import fan from "@/../public/stories/5250665c235dcee56c87643e607c8038f10dbaf5_1635078485.jpg";
import brush from "@/../public/stories/52a7c2d9a63b18916e42547325256a518dccfc5c_1714564300.jpg";
import game from "@/../public/stories/5731e97ed9d3b90c3742076c104f83fe5b3a15fe_1696924676.jpg";
import bird from "@/../public/stories/7f9bc07da7fadef4ff47d736af9756407c60b5f1_1628475897.jpg";
import trend from "@/../public/stories/92a7527335232d34e8b305caf625e83c104e6e9b_1716364617.jpg";
import product from "@/../public/stories/9c1116f57381aff1e143f0cf1b11fcf76c23aef2_1660401902.jpg";
import yoga from "@/../public/stories/9fb51e64d9d9036ef746dc851b039e5d68b908ab_1667840291.jpg";
import laptop from "@/../public/stories/a0d157d46805b4088a34652c667d6fbb2757f5b4_1702127081.jpg";
import headphone from "@/../public/stories/a5078d3ed60f9e655dbe0cd53d97e55742485a4f_1704809564.jpg";
import umbrella from "@/../public/stories/afe2c3040d0a40ba1d99826a9721a5c63388d31b_1713949315.jpg";
import bag2 from "@/../public/stories/bag2.webp";
import bird2 from "@/../public/stories/bird2.webp";
import brush2 from "@/../public/stories/brush2.webp";
import tea from "@/../public/stories/da2f620f186b837f106fccf1eeb8f779847fbd24_1665154598.jpg";
import sugar from "@/../public/stories/ed86895b16923c064f563039053d043acd45bc56_1641552917.jpg";
import fan2 from "@/../public/stories/fan2.webp";
import game2 from "@/../public/stories/game2.webp";
import handsfree2 from "@/../public/stories/handsfree2.jpg";
import laptop2 from "@/../public/stories/laptop2.webp";
import product2 from "@/../public/stories/product2.webp";
import skirt from "@/../public/stories/skirt.webp";
import sugar2 from "@/../public/stories/sugar2.webp";
import tea2 from "@/../public/stories/tea2.jpg";
import umbrella2 from "@/../public/stories/umbrella2.webp";
import headphone2 from "@/../public/stories/videoframe_4702.png";
import water2 from "@/../public/stories/water2.jpg";
import yoga2 from "@/../public/stories/yoga2.webp";

// Hero Images Source
import image1 from "@/../public/hero/223182406f6b2b94af6e227293071c82552e3f04_1720613062.webp";
import image2 from "@/../public/hero/4663d35c9f9e75c051d24b070df6673aa0ab57ba_1721201981.webp";
import image3 from "@/../public/hero/5e019f7eb15ca21899dea8d986bc9a0c3ba4f3da_1720423339.webp";
import image4 from "@/../public/hero/86cd652dcca75bc161612940ad0c23d375b45e75_1720969903.webp";
import image5 from "@/../public/hero/8db73b25bd311928c27f64d04eb58f9836666d7a_1715008589.webp";
import image6 from "@/../public/hero/a0e32b8fd59bbfa40b4c8a5b7d43149d84e29846_1721248372.webp";
import image7 from "@/../public/hero/aafb21566813f2ab151d259f45ad95640affd557_1720939653.webp";
import image8 from "@/../public/hero/dd85e4685cbd6565e27af70daea6141a06933743_1699359521.webp";
import image9 from "@/../public/hero/e1272decb672540df5818e3200f843b5a2596b99_1720633023.webp";

// Services Images Source
import s_image1 from "@/../public/services/2f34563cf96880fc578e08fee355bc1dac50fe9c_1718718377.png";
import s_image2 from "@/../public/services/625d8883f37944f3f0c4af5fe39435600931ab22_1713343293.png";
import s_image3 from "@/../public/services/6395b5347ba5a4ba6d556f9ab3916185f2745295_1720858203.png";
import s_image4 from "@/../public/services/7493e66e491c18d699274a48a53a9dfcb8aa2e93_1717230600.png";
import s_image5 from "@/../public/services/787a330f980d0cb7583d5d3316a868757535ea79_1708970899.png";
import s_image6 from "@/../public/services/98d35f5e1706a907fe3f9019d907e3d031a6402e_1719843669.png";
import s_image7 from "@/../public/services/ac127167132653d14c758748b07824a6a7643a31_1708971047.png";
import s_image8 from "@/../public/services/afb3c938fd3149d7587b59919bfc500a461693a6_1709571657.png";
import s_image9 from "@/../public/services/bb03641a188f3a74ec493d0790da87074492f64b_1708970740.png";
import s_image10 from "@/../public/services/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png";

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
    cover: "/category/mobile.png",
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
    title: "کتاب، لوازم تحریر و هنر",
    icon: <PencilRuler size={16} />,
    cover: "/category/book.png",
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
        title: "لوازم تحریر",
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
    cover: "/category/digital.png",
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
    cover: "/category/mode.png",
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
    cover: "/category/cosmetic.png",
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
    cover: "/category/electronic.png",
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
    cover: "/category/kitchen.png",
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
    cover: "/category/jewelry.png",
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
  {
    id: 9,
    title: "خودرو و موتورسیکلت",
    cover: "/category/car.png",
    href: "/category/vehicles-spare-parts",
    submenu: [
      {
        title: "لوازم مصرفی خودرو",
        href: "/category/car-parts",
        list: [],
      },
      {
        title: "لوازم یدکی خودرو",
        href: "/category/car-spare-parts",
        list: [],
      },
      {
        title: "موتور سیکلت",
        href: "/category/motorbike",
        list: [],
      },
      {
        title: "خودرو",
        href: "/category/cars",
        list: [],
      },
    ],
  },
  {
    id: 10,
    title: "ابزار آلات و تجهیزات",
    cover: "/category/vehicles.png",
    href: "/category/vehicles",
    submenu: [],
  },
  {
    id: 11,
    title: "تجهیزات پزشکی و سلامت",
    cover: "/category/medical.jpg",
    href: "/category/category-health-care",
    submenu: [],
  },
  {
    id: 12,
    title: "ورزش و سفر",
    cover: "/category/sport.png",
    href: "/category/sport-entertainment",
    submenu: [],
  },
  {
    id: 13,
    title: "کارت هدیه و گیفت کارت",
    cover: "/category/gift.png",
    href: "/category/gift-card",
    submenu: [],
  },
  {
    id: 14,
    title: "کالای خوراکی و اساسی",
    cover: "/category/food.png",
    href: "/category/food-beverage",
    submenu: [],
  },
  {
    id: 15,
    title: "اسباب بازی، کودک و نوزاد",
    cover: "/category/toy.png",
    href: "/category/mother-and-child",
    submenu: [],
  },
  {
    id: 16,
    title: "محصولات بومی و محلی",
    cover: "/category/local.png",
    href: "/category/rural-products",
    submenu: [],
  },
];
export const province = [
  {
    id: 4,
    title: "آذربايجان شرقی",
    slug: "East Azarbaijan",
    latitude: 37.9035733,
    longitude: 46.2682109,
  },
  {
    id: 5,
    title: "آذربایجان غربی",
    slug: "Western Azerbaijan",
    latitude: 37.9035733,
    longitude: 46.2682109,
  },
  {
    id: 25,
    title: "اردبيل",
    slug: "Ardabil",
    latitude: 38.4853276,
    longitude: 47.8911209,
  },
  {
    id: 11,
    title: "اصفهان",
    slug: "Esfahan",
    latitude: 32.6546275,
    longitude: 51.6679826,
  },
  {
    id: 31,
    title: "البرز",
    slug: "Alborz",
    latitude: 35.9960467,
    longitude: 50.9289246,
  },
  {
    id: 17,
    title: "ايلام",
    slug: "Ilam",
    latitude: 33.2957618,
    longitude: 46.670534,
  },
  {
    id: 19,
    title: "بوشهر",
    slug: "Bushehr",
    latitude: 28.9233837,
    longitude: 50.820314,
  },
  {
    id: 24,
    title: "تهران",
    slug: "Tehran",
    latitude: 35.696111,
    longitude: 51.423056,
  },
  {
    id: 30,
    title: "خراسان جنوبی",
    slug: "South Khorasan",
    latitude: 32.5175643,
    longitude: 59.1041758,
  },
  {
    id: 10,
    title: "خراسان رضوی",
    slug: "Khorasan Razavi",
    latitude: 32.5175643,
    longitude: 59.1041758,
  },
  {
    id: 29,
    title: "خراسان شمالی",
    slug: "North Khorasan",
    latitude: 37.4710353,
    longitude: 57.1013188,
  },
  {
    id: 7,
    title: "خوزستان",
    slug: "Khuzestan",
    latitude: 31.4360149,
    longitude: 49.041312,
  },
  {
    id: 20,
    title: "زنجان",
    slug: "Zanjan",
    latitude: 36.5018185,
    longitude: 48.3988186,
  },
  {
    id: 21,
    title: "سمنان",
    slug: "Semnan",
    latitude: 35.2255585,
    longitude: 54.4342138,
  },
  {
    id: 12,
    title: "سيستان وبلوچستان",
    slug: "Sistan and Baluchistan",
    latitude: 27.5299906,
    longitude: 60.5820676,
  },
  {
    id: 8,
    title: "فارس",
    slug: "Fars",
    latitude: 29.1043813,
    longitude: 53.045893,
  },
  {
    id: 27,
    title: "قزوين",
    slug: "Qazvin",
    latitude: 36.0881317,
    longitude: 49.8547266,
  },
  {
    id: 26,
    title: "قم",
    slug: "Qom",
    latitude: 34.6399443,
    longitude: 50.8759419,
  },
  {
    id: 13,
    title: "كردستان",
    slug: "Kurdistan",
    latitude: 31.4360149,
    longitude: 49.041312,
  },
  {
    id: 9,
    title: "كرمان",
    slug: "Kerman",
    latitude: 30.2839379,
    longitude: 57.0833628,
  },
  {
    id: 6,
    title: "کرمانشاه",
    slug: "Kermanshah",
    latitude: 34.314167,
    longitude: 47.065,
  },
  {
    id: 18,
    title: "كهگيلويه وبويراحمد",
    slug: "Kohgiloyeh Boyerahmad",
    latitude: 30.6509479,
    longitude: 51.60525,
  },
  {
    id: 28,
    title: "گلستان",
    slug: "Golestan",
    latitude: 37.2898123,
    longitude: 55.1375834,
  },
  {
    id: 2,
    title: "گيلان",
    slug: "Gilan",
    latitude: 37.2809,
    longitude: 49.5924,
  },
  {
    id: 16,
    title: "لرستان",
    slug: "Lorestan",
    latitude: 31.4360149,
    longitude: 49.041312,
  },
  {
    id: 3,
    title: "مازندران",
    slug: "Mazandaran",
    latitude: 36.2262393,
    longitude: 52.5318604,
  },
  {
    id: 1,
    title: "مرکزی",
    slug: "Markazi",
    latitude: 34.6123,
    longitude: 49.8547,
  },
  {
    id: 23,
    title: "هرمزگان",
    slug: "Hormozgan",
    latitude: 30.2839379,
    longitude: 57.0833628,
  },
  {
    id: 14,
    title: "همدان",
    slug: "Hamedan",
    latitude: 27.138723,
    longitude: 55.1375834,
  },
  {
    id: 15,
    title: "چهارمحال وبختياری",
    slug: "Chaharmahal and Bakhtiari ",
    latitude: 31.9614348,
    longitude: 50.8456323,
  },
  {
    id: 22,
    title: "یزد",
    slug: "Yazd",
    latitude: 0,
    longitude: 0,
  },
];
export const cities = [
  {
    id: 102,
    title: "آبادان",
    slug: "Abadan",
    province_id: 7,
    latitude: 32.9925,
    longitude: 47.419722,
  },
  {
    id: 129,
    title: "آباده",
    slug: "Abade",
    province_id: 8,
    latitude: 30.347296,
    longitude: 48.2934004,
  },
  {
    id: 296,
    title: "آبدانان",
    slug: "ABDANAN",
    province_id: 17,
    latitude: 32.9925,
    longitude: 47.419722,
  },
  {
    id: 65,
    title: "آذرشهر",
    slug: "Azarshahr",
    province_id: 4,
    latitude: 37.758889,
    longitude: 45.978333,
  },
  {
    id: 332,
    title: "آرادان",
    slug: "Aradan",
    province_id: 21,
    latitude: 33.860278,
    longitude: 58.521667,
  },
  {
    id: 226,
    title: "آران وبيدگل",
    slug: "Aran va Bidgol",
    province_id: 11,
    latitude: 34.057778,
    longitude: 51.484167,
  },
  {
    id: 400,
    title: "آزادشهر",
    slug: "Azadshahr",
    province_id: 28,
    latitude: 37.758889,
    longitude: 45.978333,
  },
  {
    id: 13,
    title: "آستارا",
    slug: "Astara",
    province_id: 2,
    latitude: 38.429167,
    longitude: 48.871944,
  },
  {
    id: 14,
    title: "آستانه اشرفيه",
    slug: "Astaneh",
    province_id: 2,
    latitude: 37.2598022,
    longitude: 49.9436621,
  },
  {
    id: 2,
    title: "آشتيان",
    slug: "Ashtian",
    province_id: 1,
    latitude: 34.521944,
    longitude: 50.006111,
  },
  {
    id: 398,
    title: "آق قلا",
    slug: "Aqqala",
    province_id: 28,
    latitude: 37.013889,
    longitude: 54.455,
  },
  {
    id: 29,
    title: "آمل",
    slug: "Amol",
    province_id: 3,
    latitude: 36.469722,
    longitude: 52.350833,
  },
  {
    id: 341,
    title: "ابركوه",
    slug: "Abarkouh",
    province_id: 22,
    latitude: 31.1304036,
    longitude: 53.2503736,
  },
  {
    id: 319,
    title: "ابهر",
    slug: "Abhar",
    province_id: 20,
    latitude: 38.4894305,
    longitude: 47.0683575,
  },
  {
    id: 345,
    title: "ابوموسي",
    slug: "Abu Musa",
    province_id: 23,
    latitude: 25.8797106,
    longitude: 55.0328017,
  },
  {
    id: 1,
    title: "اراک",
    slug: "Arak",
    province_id: 1,
    latitude: 34.091667,
    longitude: 49.689167,
  },
  {
    id: 374,
    title: "اردبيل",
    slug: "Ardabil",
    province_id: 25,
    latitude: 38.4853276,
    longitude: 47.8911209,
  },
  {
    id: 209,
    title: "اردستان",
    slug: "Ardestān",
    province_id: 11,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 335,
    title: "اردكان",
    slug: "Ardakan",
    province_id: 22,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 275,
    title: "اردل",
    slug: "Ardal",
    province_id: 15,
    latitude: 38.4853276,
    longitude: 47.8911209,
  },
  {
    id: 145,
    title: "ارسنجان",
    slug: "Arsanjan",
    province_id: 8,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 71,
    title: "اروميه",
    slug: "Address:",
    province_id: 5,
    latitude: 37.555278,
    longitude: 45.0725,
  },
  {
    id: 286,
    title: "ازنا",
    slug: "AZNA",
    province_id: 16,
    latitude: 33.455833,
    longitude: 49.455556,
  },
  {
    id: 130,
    title: "استهبان",
    slug: "Estahban",
    province_id: 8,
    latitude: 35.696111,
    longitude: 51.423056,
  },
  {
    id: 267,
    title: "اسدآباد",
    slug: "Asadabad",
    province_id: 14,
    latitude: 37.85,
    longitude: 46.833333,
  },
  {
    id: 405,
    title: "اسفراين",
    slug: "Esfaraien",
    province_id: 29,
    latitude: 37.076389,
    longitude: 57.51,
  },
  {
    id: 88,
    title: "اسلام آبادغرب",
    slug: "Islamic garb",
    province_id: 6,
    latitude: 33.7293882,
    longitude: 73.0931461,
  },
  {
    id: 364,
    title: "اسلامشهر",
    slug: "Eslamshahr",
    province_id: 24,
    latitude: 35.5445805,
    longitude: 51.2302457,
  },
  {
    id: 66,
    title: "اسکو",
    slug: "Osku",
    province_id: 4,
    latitude: 37.915833,
    longitude: 46.123611,
  },
  {
    id: 83,
    title: "اشنويه",
    slug: "Oshnavieh",
    province_id: 5,
    latitude: 37.039722,
    longitude: 45.098333,
  },
  {
    id: 210,
    title: "اصفهان",
    slug: "Esfahan",
    province_id: 11,
    latitude: 32.6546275,
    longitude: 51.6679826,
  },
  {
    id: 131,
    title: "اقليد",
    slug: "Eghlid",
    province_id: 8,
    latitude: 30.898889,
    longitude: 52.686667,
  },
  {
    id: 389,
    title: "البرز",
    slug: "Alborz",
    province_id: 27,
    latitude: 35.9960467,
    longitude: 50.9289246,
  },
  {
    id: 280,
    title: "اليگودرز",
    slug: "Aligoudarz",
    province_id: 16,
    latitude: 33.400556,
    longitude: 49.695,
  },
  {
    id: 25,
    title: "املش",
    slug: "Amlash",
    province_id: 2,
    latitude: 37.0916334,
    longitude: 50.1869377,
  },
  {
    id: 177,
    title: "انار",
    slug: "Pomegranate",
    province_id: 9,
    latitude: 37.340278,
    longitude: 46.056111,
  },
  {
    id: 103,
    title: "انديمشک",
    slug: "ANDIMESHK",
    province_id: 7,
    latitude: 32.46,
    longitude: 48.359167,
  },
  {
    id: 51,
    title: "اهر",
    slug: "Ahar",
    province_id: 4,
    latitude: 38.4894305,
    longitude: 47.0683575,
  },
  {
    id: 104,
    title: "اهواز",
    slug: "Ahvaz",
    province_id: 7,
    latitude: 31.3183272,
    longitude: 48.6706187,
  },
  {
    id: 322,
    title: "ايجرود",
    slug: "Ijroud",
    province_id: 20,
    latitude: 36.4160928,
    longitude: 48.2469249,
  },
  {
    id: 105,
    title: "ايذه",
    slug: "IZEH",
    province_id: 7,
    latitude: 31.834167,
    longitude: 49.867222,
  },
  {
    id: 233,
    title: "ايرانشهر",
    slug: "Iranshahr",
    province_id: 12,
    latitude: 36.694444,
    longitude: 45.141667,
  },
  {
    id: 291,
    title: "ايلام",
    slug: "Ilam",
    province_id: 17,
    latitude: 33.2957618,
    longitude: 46.670534,
  },
  {
    id: 297,
    title: "ايوان",
    slug: "Ivan",
    province_id: 17,
    latitude: 33.2729171,
    longitude: 52.1985314,
  },
  {
    id: 30,
    title: "بابل",
    slug: "Babol",
    province_id: 3,
    latitude: 36.7025,
    longitude: 52.6575,
  },
  {
    id: 39,
    title: "بابلسر",
    slug: "Babolsar",
    province_id: 3,
    latitude: 32.468191,
    longitude: 44.5501935,
  },
  {
    id: 307,
    title: "باشت",
    slug: "Basht",
    province_id: 18,
    latitude: 29.233056,
    longitude: 56.602222,
  },
  {
    id: 116,
    title: "باغ ملک",
    slug: "Garden Property",
    province_id: 7,
    latitude: 32.3947206,
    longitude: 51.5965328,
  },
  {
    id: 158,
    title: "بافت",
    slug: "Tissue",
    province_id: 9,
    latitude: 29.233056,
    longitude: 56.602222,
  },
  {
    id: 336,
    title: "بافق",
    slug: "Bafg",
    province_id: 22,
    latitude: 35.9985999,
    longitude: 45.8823428,
  },
  {
    id: 252,
    title: "بانه",
    slug: "Bane",
    province_id: 13,
    latitude: 35.2747322,
    longitude: 59.4677727,
  },
  {
    id: 125,
    title: "باوي",
    slug: "Bavi",
    province_id: 7,
    latitude: 35.2747322,
    longitude: 59.4677727,
  },
  {
    id: 200,
    title: "بجستان",
    slug: "Bajestan",
    province_id: 10,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 406,
    title: "بجنورد",
    slug: "Bojnoord",
    province_id: 29,
    latitude: 37.475,
    longitude: 57.333333,
  },
  {
    id: 230,
    title: "برخوار",
    slug: "Borkhar",
    province_id: 11,
    latitude: 34.974722,
    longitude: 59.623611,
  },
  {
    id: 195,
    title: "بردسكن",
    slug: "Bardaskan",
    province_id: 10,
    latitude: 35.260833,
    longitude: 57.969722,
  },
  {
    id: 167,
    title: "بردسير",
    slug: "Bardsir",
    province_id: 9,
    latitude: 29.9275,
    longitude: 56.572222,
  },
  {
    id: 281,
    title: "بروجرد",
    slug: "Borujerd",
    province_id: 16,
    latitude: 37.475,
    longitude: 57.333333,
  },
  {
    id: 271,
    title: "بروجن",
    slug: "Borujen",
    province_id: 15,
    latitude: 31.965278,
    longitude: 51.287222,
  },
  {
    id: 59,
    title: "بستان آباد",
    slug: "Bostanabad",
    province_id: 4,
    latitude: 37.85,
    longitude: 46.833333,
  },
  {
    id: 353,
    title: "بستك",
    slug: "Block",
    province_id: 23,
    latitude: 27.199167,
    longitude: 54.366667,
  },
  {
    id: 159,
    title: "بم",
    slug: "Bass",
    province_id: 9,
    latitude: 29.106111,
    longitude: 58.356944,
  },
  {
    id: 58,
    title: "بناب",
    slug: "BONAB",
    province_id: 4,
    latitude: 37.340278,
    longitude: 46.056111,
  },
  {
    id: 15,
    title: "بندرانزلي",
    slug: "Bandar Anzali",
    province_id: 2,
    latitude: 37.4724467,
    longitude: 49.4587312,
  },
  {
    id: 346,
    title: "بندرعباس",
    slug: "Bandar Abbas",
    province_id: 23,
    latitude: 35.952222,
    longitude: 50.6075,
  },
  {
    id: 347,
    title: "بندرلنگه",
    slug: "Lengeh seaport",
    province_id: 23,
    latitude: 26.558056,
    longitude: 54.880556,
  },
  {
    id: 106,
    title: "بندرماهشهر",
    slug: "Bandar-e Mahshahr",
    province_id: 7,
    latitude: 33.139722,
    longitude: 47.376111,
  },
  {
    id: 391,
    title: "بندرگز",
    slug: "Gaz",
    province_id: 28,
    latitude: 37.444444,
    longitude: 59.108056,
  },
  {
    id: 344,
    title: "بهاباد",
    slug: "Bahabad",
    province_id: 22,
    latitude: 36.763056,
    longitude: 45.722222,
  },
  {
    id: 268,
    title: "بهار",
    slug: "Spring",
    province_id: 14,
    latitude: 37.340278,
    longitude: 46.056111,
  },
  {
    id: 371,
    title: "بهارستان",
    slug: "BAHARESTAN",
    province_id: 24,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 107,
    title: "بهبهان",
    slug: "PA",
    province_id: 7,
    latitude: 30.595833,
    longitude: 50.241667,
  },
  {
    id: 31,
    title: "بهشهر",
    slug: "Behshahr",
    province_id: 3,
    latitude: 34.9083252,
    longitude: 48.4392729,
  },
  {
    id: 305,
    title: "بهمئي",
    slug: "Bahmaie",
    province_id: 18,
    latitude: 0,
    longitude: 0,
  },
  {
    id: 385,
    title: "بوئين زهرا",
    slug: "Buin Zahra",
    province_id: 27,
    latitude: 35.766944,
    longitude: 50.057778,
  },
  {
    id: 144,
    title: "بوانات",
    slug: "Bavanat",
    province_id: 8,
    latitude: 33.220556,
    longitude: 50.315,
  },
  {
    id: 309,
    title: "بوشهر",
    slug: "Bushehr",
    province_id: 19,
    latitude: 28.9233837,
    longitude: 50.820314,
  },
  {
    id: 80,
    title: "بوكان",
    slug: "Bukan",
    province_id: 5,
    latitude: 36.521111,
    longitude: 46.208889,
  },
  {
    id: 301,
    title: "بويراحمد",
    slug: "Boyer",
    province_id: 18,
    latitude: 30.724586,
    longitude: 50.8456323,
  },
  {
    id: 253,
    title: "بيجار",
    slug: "Bijar",
    province_id: 13,
    latitude: 32.735278,
    longitude: 59.466667,
  },
  {
    id: 413,
    title: "بيرجند",
    slug: "Birjand",
    province_id: 30,
    latitude: 32.8649039,
    longitude: 59.2262472,
  },
  {
    id: 375,
    title: "بيله سوار",
    slug: "Bilesavar",
    province_id: 25,
    latitude: 39.3567775,
    longitude: 47.9490765,
  },
  {
    id: 386,
    title: "تاكستان",
    slug: "The vineyard",
    province_id: 27,
    latitude: 28.9837547,
    longitude: 50.8330708,
  },
  {
    id: 181,
    title: "تايباد",
    slug: "Taybad",
    province_id: 10,
    latitude: 34.74,
    longitude: 60.775556,
  },
  {
    id: 52,
    title: "تبريز",
    slug: "Tabriz",
    province_id: 4,
    latitude: 38.066667,
    longitude: 46.3,
  },
  {
    id: 183,
    title: "تربت جام",
    slug: "Torbat-e Jam",
    province_id: 10,
    latitude: 35.243889,
    longitude: 60.6225,
  },
  {
    id: 182,
    title: "تربت حيدريه",
    slug: "Torbat",
    province_id: 10,
    latitude: 35.273889,
    longitude: 59.219444,
  },
  {
    id: 337,
    title: "تفت",
    slug: "Taft",
    province_id: 22,
    latitude: 39.630631,
    longitude: -78.929542,
  },
  {
    id: 3,
    title: "تفرش",
    slug: "Tafresh",
    province_id: 1,
    latitude: 34.691944,
    longitude: 50.013056,
  },
  {
    id: 82,
    title: "تكاب",
    slug: "Tekab",
    province_id: 5,
    latitude: 37.340278,
    longitude: 46.056111,
  },
  {
    id: 32,
    title: "تنكابن",
    slug: "Tonkabon",
    province_id: 3,
    latitude: 36.816389,
    longitude: 50.873889,
  },
  {
    id: 310,
    title: "تنگستان",
    slug: "Tangistan",
    province_id: 19,
    latitude: 28.9837547,
    longitude: 50.8330708,
  },
  {
    id: 358,
    title: "تهران",
    slug: "Tehran",
    province_id: 24,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 262,
    title: "تويسركان",
    slug: "Tuyserkan",
    province_id: 14,
    latitude: 34.548056,
    longitude: 48.446944,
  },
  {
    id: 227,
    title: "تيران وکرون",
    slug: "Tiran Vkrvn",
    province_id: 11,
    latitude: 0,
    longitude: 0,
  },
  {
    id: 99,
    title: "ثلاث باباجاني",
    slug: "Salas Babajani",
    province_id: 6,
    latitude: 34.7358371,
    longitude: 46.1493969,
  },
  {
    id: 407,
    title: "جاجرم",
    slug: "Jajarm",
    province_id: 29,
    latitude: 36.95,
    longitude: 56.38,
  },
  {
    id: 350,
    title: "جاسك",
    slug: "Jask",
    province_id: 23,
    latitude: 25.643889,
    longitude: 57.774444,
  },
  {
    id: 203,
    title: "جغتاي",
    slug: "Jaghatay",
    province_id: 10,
    latitude: 36.5788853,
    longitude: 57.251215,
  },
  {
    id: 63,
    title: "جلفا",
    slug: "Jolfa",
    province_id: 4,
    latitude: 38.940278,
    longitude: 45.630833,
  },
  {
    id: 317,
    title: "جم",
    slug: "Jam",
    province_id: 19,
    latitude: 27.827778,
    longitude: 52.326944,
  },
  {
    id: 132,
    title: "جهرم",
    slug: "Jahrom",
    province_id: 8,
    latitude: 28.5,
    longitude: 53.560556,
  },
  {
    id: 96,
    title: "جوانرود",
    slug: "Javanrood",
    province_id: 6,
    latitude: 36.418056,
    longitude: 54.976389,
  },
  {
    id: 43,
    title: "جويبار",
    slug: "Juybar",
    province_id: 3,
    latitude: 36.8241289,
    longitude: 49.4237274,
  },
  {
    id: 205,
    title: "جوين",
    slug: "Jovin",
    province_id: 10,
    latitude: 36.6362238,
    longitude: 57.5079912,
  },
  {
    id: 160,
    title: "جيرفت",
    slug: "Jiroft",
    province_id: 9,
    latitude: 28.6751124,
    longitude: 57.7371569,
  },
  {
    id: 352,
    title: "حاجي اباد",
    slug: "Hajiabadi",
    province_id: 23,
    latitude: 28.309167,
    longitude: 55.901667,
  },
  {
    id: 343,
    title: "خاتم",
    slug: "Seal",
    province_id: 22,
    latitude: 28.1804287,
    longitude: 55.7453367,
  },
  {
    id: 235,
    title: "خاش",
    slug: "Khash",
    province_id: 12,
    latitude: 28.216667,
    longitude: 61.2,
  },
  {
    id: 320,
    title: "خدابنده",
    slug: "Khodabande",
    province_id: 20,
    latitude: 36.114722,
    longitude: 48.591111,
  },
  {
    id: 282,
    title: "خرم آباد",
    slug: "Khorramabad",
    province_id: 16,
    latitude: 39.648333,
    longitude: 47.9175,
  },
  {
    id: 146,
    title: "خرم بيد",
    slug: "Khorrambid",
    province_id: 8,
    latitude: 32.6708345,
    longitude: 51.6470279,
  },
  {
    id: 323,
    title: "خرمدره",
    slug: "Khoramdeh",
    province_id: 20,
    latitude: 30.4256219,
    longitude: 48.1891185,
  },
  {
    id: 108,
    title: "خرمشهر",
    slug: "Khorramshahr",
    province_id: 7,
    latitude: 37.758889,
    longitude: 45.978333,
  },
  {
    id: 376,
    title: "خلخال",
    slug: "Anklet",
    province_id: 25,
    latitude: 37.618889,
    longitude: 48.525833,
  },
  {
    id: 198,
    title: "خليل آباد",
    slug: "Khaliabad",
    province_id: 10,
    latitude: 35.255833,
    longitude: 58.286389,
  },
  {
    id: 354,
    title: "خمير",
    slug: "Dough",
    province_id: 23,
    latitude: 26.952222,
    longitude: 55.585,
  },
  {
    id: 4,
    title: "خمين",
    slug: "Khomain",
    province_id: 1,
    latitude: 33.6406148,
    longitude: 50.0771125,
  },
  {
    id: 211,
    title: "خميني شهر",
    slug: "Khomeini Shahr",
    province_id: 11,
    latitude: 32.700278,
    longitude: 51.521111,
  },
  {
    id: 152,
    title: "خنج",
    slug: "Khonj",
    province_id: 8,
    latitude: 27.891389,
    longitude: 53.434444,
  },
  {
    id: 11,
    title: "خنداب",
    slug: "Varkaroud",
    province_id: 1,
    latitude: 37.340278,
    longitude: 46.056111,
  },
  {
    id: 192,
    title: "خواف",
    slug: "KHAF",
    province_id: 10,
    latitude: 34.576389,
    longitude: 60.140833,
  },
  {
    id: 212,
    title: "خوانسار",
    slug: "Khansar",
    province_id: 11,
    latitude: 33.220556,
    longitude: 50.315,
  },
  {
    id: 422,
    title: "خوسف",
    slug: "Khoosf",
    province_id: 30,
    latitude: 34.576389,
    longitude: 60.140833,
  },
  {
    id: 133,
    title: "داراب",
    slug: "Darab",
    province_id: 8,
    latitude: 37.940833,
    longitude: 47.536667,
  },
  {
    id: 100,
    title: "دالاهو",
    slug: "Dalahoo",
    province_id: 6,
    latitude: 34.284167,
    longitude: 46.242222,
  },
  {
    id: 327,
    title: "دامغان",
    slug: "Damghan",
    province_id: 21,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 208,
    title: "داورزن",
    slug: "Davarzan",
    province_id: 10,
    latitude: 36.168333,
    longitude: 54.348056,
  },
  {
    id: 414,
    title: "درميان",
    slug: "in the middle of",
    province_id: 30,
    latitude: 33.0339405,
    longitude: 60.1184797,
  },
  {
    id: 292,
    title: "دره شهر",
    slug: "Valley City",
    province_id: 17,
    latitude: 33.139722,
    longitude: 47.376111,
  },
  {
    id: 184,
    title: "درگز",
    slug: "Dargaz",
    province_id: 10,
    latitude: 37.444444,
    longitude: 59.108056,
  },
  {
    id: 109,
    title: "دزفول",
    slug: "Dezful",
    province_id: 7,
    latitude: 32.3830777,
    longitude: 48.4235841,
  },
  {
    id: 110,
    title: "دشت آزادگان",
    slug: "DashteAzadegan",
    province_id: 7,
    latitude: 30.347296,
    longitude: 48.2934004,
  },
  {
    id: 311,
    title: "دشتستان",
    slug: "Dashtestan",
    province_id: 19,
    latitude: 29.266667,
    longitude: 51.216667,
  },
  {
    id: 312,
    title: "دشتي",
    slug: "Dashti",
    province_id: 19,
    latitude: 35.7845145,
    longitude: 51.4347961,
  },
  {
    id: 283,
    title: "دلفان",
    slug: "Delfan",
    province_id: 16,
    latitude: 38.940278,
    longitude: 45.630833,
  },
  {
    id: 5,
    title: "دليجان",
    slug: "Delijan",
    province_id: 1,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 244,
    title: "دلگان",
    slug: "Dlgan",
    province_id: 12,
    latitude: 27.6077357,
    longitude: 59.4720904,
  },
  {
    id: 359,
    title: "دماوند",
    slug: "Damavand",
    province_id: 24,
    latitude: 35.9467494,
    longitude: 52.1275481,
  },
  {
    id: 304,
    title: "دنا",
    slug: "Dena",
    province_id: 18,
    latitude: 30.9516666,
    longitude: 51.4375,
  },
  {
    id: 229,
    title: "دهاقان",
    slug: "Dehaghan",
    province_id: 11,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 293,
    title: "دهلران",
    slug: "DEHLORAN",
    province_id: 17,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 261,
    title: "دهگلان",
    slug: "Dehgolan",
    province_id: 13,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 289,
    title: "دوره",
    slug: "the period",
    province_id: 16,
    latitude: 33.4955028,
    longitude: 49.0631743,
  },
  {
    id: 284,
    title: "دورود",
    slug: "Dorud",
    province_id: 16,
    latitude: 34.806667,
    longitude: 46.488611,
  },
  {
    id: 316,
    title: "ديلم",
    slug: "Daylam",
    province_id: 19,
    latitude: 30.1182632,
    longitude: 50.2261227,
  },
  {
    id: 258,
    title: "ديواندره",
    slug: "Divandareh",
    province_id: 13,
    latitude: 35.913889,
    longitude: 47.023889,
  },
  {
    id: 175,
    title: "رابر",
    slug: "Seal",
    province_id: 9,
    latitude: 37.940833,
    longitude: 47.536667,
  },
  {
    id: 33,
    title: "رامسر",
    slug: "Ramsar",
    province_id: 3,
    latitude: 36.903056,
    longitude: 50.658333,
  },
  {
    id: 120,
    title: "رامشير",
    slug: "Ramshir",
    province_id: 7,
    latitude: 30.4256219,
    longitude: 48.1891185,
  },
  {
    id: 111,
    title: "رامهرمز",
    slug: "Rāmhormoz",
    province_id: 7,
    latitude: 31.28,
    longitude: 49.603611,
  },
  {
    id: 401,
    title: "راميان",
    slug: "Ramian",
    province_id: 28,
    latitude: 33.2729171,
    longitude: 52.1985314,
  },
  {
    id: 168,
    title: "راور",
    slug: "Raver",
    province_id: 9,
    latitude: 31.265556,
    longitude: 56.805556,
  },
  {
    id: 365,
    title: "رباطكريم",
    slug: "Robat Karim",
    province_id: 24,
    latitude: 35.484722,
    longitude: 51.082778,
  },
  {
    id: 269,
    title: "رزن",
    slug: "Razan",
    province_id: 14,
    latitude: 35.386667,
    longitude: 49.033889,
  },
  {
    id: 154,
    title: "رستم",
    slug: "Rustam",
    province_id: 8,
    latitude: 37.2709152,
    longitude: 49.5969146,
  },
  {
    id: 17,
    title: "رشت",
    slug: "Rasht",
    province_id: 2,
    latitude: 37.280833,
    longitude: 49.583056,
  },
  {
    id: 196,
    title: "رشتخوار",
    slug: "Roshtkhar",
    province_id: 10,
    latitude: 34.974722,
    longitude: 59.623611,
  },
  {
    id: 26,
    title: "رضوانشهر",
    slug: "Rezvanshahr",
    province_id: 2,
    latitude: 36.694444,
    longitude: 45.141667,
  },
  {
    id: 161,
    title: "رفسنجان",
    slug: "Rafsanjan",
    province_id: 9,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 101,
    title: "روانسر",
    slug: "Rawansar",
    province_id: 6,
    latitude: 33.220556,
    longitude: 50.315,
  },
  {
    id: 18,
    title: "رودبار",
    slug: "Rudbar",
    province_id: 2,
    latitude: 36.641111,
    longitude: 52.9125,
  },
  {
    id: 172,
    title: "رودبارجنوب",
    slug: "Rvdbarjnvb",
    province_id: 9,
    latitude: 36.8241289,
    longitude: 49.4237274,
  },
  {
    id: 19,
    title: "رودسر",
    slug: "Rudsar",
    province_id: 2,
    latitude: 37.1378415,
    longitude: 50.2836199,
  },
  {
    id: 290,
    title: "رومشکان",
    slug: "Rvmshkan",
    province_id: 16,
    latitude: 36.521111,
    longitude: 46.208889,
  },
  {
    id: 174,
    title: "ريگان",
    slug: "Reagan",
    province_id: 9,
    latitude: 27.6077357,
    longitude: 59.4720904,
  },
  {
    id: 236,
    title: "زابل",
    slug: "Zabul",
    province_id: 12,
    latitude: 31.028611,
    longitude: 61.501111,
  },
  {
    id: 237,
    title: "زاهدان",
    slug: "Zahedan",
    province_id: 12,
    latitude: 30.347296,
    longitude: 48.2934004,
  },
  {
    id: 204,
    title: "زاوه",
    slug: "Zavh",
    province_id: 10,
    latitude: 35.2747322,
    longitude: 59.4677727,
  },
  {
    id: 162,
    title: "زرند",
    slug: "Zarand",
    province_id: 9,
    latitude: 38.425117,
    longitude: 45.769636,
  },
  {
    id: 9,
    title: "زرنديه",
    slug: "Zarandieh",
    province_id: 1,
    latitude: 30.812778,
    longitude: 56.563889,
  },
  {
    id: 147,
    title: "زرين دشت",
    slug: "Zarrindasht",
    province_id: 8,
    latitude: 28.3545047,
    longitude: 54.4178006,
  },
  {
    id: 321,
    title: "زنجان",
    slug: "Zanjan",
    province_id: 20,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 421,
    title: "زيرکوه",
    slug: "Zirkouh",
    province_id: 30,
    latitude: 31.1304036,
    longitude: 53.2503736,
  },
  {
    id: 34,
    title: "سارئ",
    slug: "Infectious",
    province_id: 3,
    latitude: 36.563333,
    longitude: 53.06,
  },
  {
    id: 278,
    title: "سامان",
    slug: "Order",
    province_id: 15,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 425,
    title: "ساوجبلاغ",
    slug: "Savojbolagh",
    province_id: 31,
    latitude: 38.3787941,
    longitude: 47.4974359,
  },
  {
    id: 6,
    title: "ساوه",
    slug: "Saveh",
    province_id: 1,
    latitude: 35.2747322,
    longitude: 59.4677727,
  },
  {
    id: 185,
    title: "سبزوار",
    slug: "Sabzevar",
    province_id: 10,
    latitude: 36.2151823,
    longitude: 57.6678228,
  },
  {
    id: 53,
    title: "سراب",
    slug: "Sarab",
    province_id: 4,
    latitude: 37.940833,
    longitude: 47.536667,
  },
  {
    id: 238,
    title: "سراوان",
    slug: "Saravan",
    province_id: 12,
    latitude: 33.860278,
    longitude: 58.521667,
  },
  {
    id: 418,
    title: "سرايان",
    slug: "Writers",
    province_id: 30,
    latitude: 33.860278,
    longitude: 58.521667,
  },
  {
    id: 240,
    title: "سرباز",
    slug: "Soldier",
    province_id: 12,
    latitude: 37.940833,
    longitude: 47.536667,
  },
  {
    id: 415,
    title: "سربيشه",
    slug: "Sarbishe",
    province_id: 30,
    latitude: 32.575556,
    longitude: 59.798333,
  },
  {
    id: 193,
    title: "سرخس",
    slug: "Fern",
    province_id: 10,
    latitude: 37.940833,
    longitude: 47.536667,
  },
  {
    id: 334,
    title: "سرخه",
    slug: "Sorkhe",
    province_id: 21,
    latitude: 36.545,
    longitude: 61.157778,
  },
  {
    id: 74,
    title: "سردشت",
    slug: "Sardasht",
    province_id: 5,
    latitude: 36.155278,
    longitude: 45.478889,
  },
  {
    id: 260,
    title: "سروآباد",
    slug: "Sarvabad",
    province_id: 13,
    latitude: 37.85,
    longitude: 46.833333,
  },
  {
    id: 153,
    title: "سروستان",
    slug: "Sarvestan",
    province_id: 8,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 91,
    title: "سرپل ذهاب",
    slug: "Sarpolzohab",
    province_id: 6,
    latitude: 34.461111,
    longitude: 45.862778,
  },
  {
    id: 254,
    title: "سقز",
    slug: "Turpentine",
    province_id: 13,
    latitude: 36.246389,
    longitude: 46.266389,
  },
  {
    id: 288,
    title: "سلسله",
    slug: "Series",
    province_id: 16,
    latitude: 32.045776,
    longitude: 34.751639,
  },
  {
    id: 75,
    title: "سلماس",
    slug: "Salmas",
    province_id: 5,
    latitude: 38.197222,
    longitude: 44.765278,
  },
  {
    id: 328,
    title: "سمنان",
    slug: "Semnan",
    province_id: 21,
    latitude: 35.2255585,
    longitude: 54.4342138,
  },
  {
    id: 213,
    title: "سميرم",
    slug: "Semirom",
    province_id: 11,
    latitude: 31.3988346,
    longitude: 51.567593,
  },
  {
    id: 92,
    title: "سنقر",
    slug: "Falcon",
    province_id: 6,
    latitude: 34.783611,
    longitude: 47.600278,
  },
  {
    id: 255,
    title: "سنندج",
    slug: "Sanandaj",
    province_id: 13,
    latitude: 35.3218748,
    longitude: 46.9861647,
  },
  {
    id: 35,
    title: "سوادكوه",
    slug: "Savadkooh",
    province_id: 3,
    latitude: 36.3040255,
    longitude: 52.8852403,
  },
  {
    id: 163,
    title: "سيرجان",
    slug: "Sirjan",
    province_id: 9,
    latitude: 33.860278,
    longitude: 58.521667,
  },
  {
    id: 299,
    title: "سيروان",
    slug: "Sirvan",
    province_id: 17,
    latitude: 37.4092357,
    longitude: 57.9276184,
  },
  {
    id: 134,
    title: "سپيدان",
    slug: "Sepidan",
    province_id: 8,
    latitude: 30.2425282,
    longitude: 51.9924185,
  },
  {
    id: 112,
    title: "شادگان",
    slug: "Shadegan",
    province_id: 7,
    latitude: 32.768333,
    longitude: 50.628611,
  },
  {
    id: 7,
    title: "شازند",
    slug: "Shazand",
    province_id: 1,
    latitude: 33.455833,
    longitude: 49.455556,
  },
  {
    id: 329,
    title: "شاهرود",
    slug: "Anymore",
    province_id: 21,
    latitude: 37.477778,
    longitude: 47.050833,
  },
  {
    id: 81,
    title: "شاهين دژ",
    slug: "Shahindezh",
    province_id: 5,
    latitude: 36.679167,
    longitude: 46.566944,
  },
  {
    id: 224,
    title: "شاهين شهروميمه",
    slug: "Shahin Shhrvmymh",
    province_id: 11,
    latitude: 33.1271852,
    longitude: 51.5150077,
  },
  {
    id: 60,
    title: "شبستر",
    slug: "Shabestar",
    province_id: 4,
    latitude: 38.180278,
    longitude: 45.702778,
  },
  {
    id: 24,
    title: "شفت",
    slug: "Shafts",
    province_id: 2,
    latitude: 39.630631,
    longitude: -78.929542,
  },
  {
    id: 361,
    title: "شميرانات",
    slug: "Shemiranat",
    province_id: 24,
    latitude: 35.9548021,
    longitude: 51.5991643,
  },
  {
    id: 164,
    title: "شهربابك",
    slug: "Shahrbabak",
    province_id: 9,
    latitude: 30.116389,
    longitude: 55.118611,
  },
  {
    id: 217,
    title: "شهرضا",
    slug: "Branch",
    province_id: 11,
    latitude: 36.2924452,
    longitude: 59.5677149,
  },
  {
    id: 272,
    title: "شهركرد",
    slug: "Kord",
    province_id: 15,
    latitude: 32.325556,
    longitude: 50.864444,
  },
  {
    id: 363,
    title: "شهريار",
    slug: "Sh.",
    province_id: 24,
    latitude: 35.659722,
    longitude: 51.059167,
  },
  {
    id: 115,
    title: "شوش",
    slug: "Susa",
    province_id: 7,
    latitude: 32.194167,
    longitude: 48.243611,
  },
  {
    id: 113,
    title: "شوشتر",
    slug: "Shushtar",
    province_id: 7,
    latitude: 32.194167,
    longitude: 48.243611,
  },
  {
    id: 87,
    title: "شوط",
    slug: "Round",
    province_id: 5,
    latitude: 32.194167,
    longitude: 48.243611,
  },
  {
    id: 135,
    title: "شيراز",
    slug: "Shiraz",
    province_id: 8,
    latitude: 29.5917677,
    longitude: 52.5836982,
  },
  {
    id: 408,
    title: "شيروان",
    slug: "Shirvan",
    province_id: 29,
    latitude: 37.4092357,
    longitude: 57.9276184,
  },
  {
    id: 97,
    title: "صحنه",
    slug: "Scene",
    province_id: 6,
    latitude: 35.9985999,
    longitude: 45.8823428,
  },
  {
    id: 20,
    title: "صومعه سرا",
    slug: "Somesara",
    province_id: 2,
    latitude: 37.311667,
    longitude: 49.321944,
  },
  {
    id: 324,
    title: "طارم",
    slug: "Tarom",
    province_id: 20,
    latitude: 36.95,
    longitude: 56.38,
  },
  {
    id: 427,
    title: "طالقان",
    slug: "Taleghan",
    province_id: 31,
    latitude: 31.94,
    longitude: 51.647778,
  },
  {
    id: 423,
    title: "طبس",
    slug: "Peaks",
    province_id: 30,
    latitude: 33.595833,
    longitude: 56.924444,
  },
  {
    id: 16,
    title: "طوالش",
    slug: "Tvalsh",
    province_id: 2,
    latitude: 37,
    longitude: 48.4222222,
  },
  {
    id: 46,
    title: "عباس آباد",
    slug: "Abbas Abad",
    province_id: 3,
    latitude: 37.85,
    longitude: 46.833333,
  },
  {
    id: 69,
    title: "عجب شير",
    slug: "Ajabshir",
    province_id: 4,
    latitude: 37.4775,
    longitude: 45.894167,
  },
  {
    id: 393,
    title: "علي آباد",
    slug: "Ali Abad",
    province_id: 28,
    latitude: 32.6324231,
    longitude: 51.3679914,
  },
  {
    id: 169,
    title: "عنبرآباد",
    slug: "Anbarabad",
    province_id: 9,
    latitude: 35.952222,
    longitude: 50.6075,
  },
  {
    id: 273,
    title: "فارسان",
    slug: "Farsan",
    province_id: 15,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 409,
    title: "فاروج",
    slug: "Faruj",
    province_id: 29,
    latitude: 37.231111,
    longitude: 58.218889,
  },
  {
    id: 150,
    title: "فراشبند",
    slug: "Farashband",
    province_id: 8,
    latitude: 28.871389,
    longitude: 52.091667,
  },
  {
    id: 12,
    title: "فراهان",
    slug: "FARAHAN",
    province_id: 1,
    latitude: 38.509722,
    longitude: 46.654444,
  },
  {
    id: 419,
    title: "فردوس",
    slug: "Paradise",
    province_id: 30,
    latitude: 34.018611,
    longitude: 58.172222,
  },
  {
    id: 429,
    title: "فرديس",
    slug: "Fardis",
    province_id: 31,
    latitude: 34.018611,
    longitude: 58.172222,
  },
  {
    id: 214,
    title: "فريدن",
    slug: "Frieden",
    province_id: 11,
    latitude: 33.0214829,
    longitude: 50.3069088,
  },
  {
    id: 215,
    title: "فريدونشهر",
    slug: "Fereidunshahr",
    province_id: 11,
    latitude: 32.941111,
    longitude: 50.121111,
  },
  {
    id: 45,
    title: "فريدونكنار",
    slug: "Fereidoon'kenar",
    province_id: 3,
    latitude: 36.686389,
    longitude: 52.5225,
  },
  {
    id: 194,
    title: "فريمان",
    slug: "FARIMAN",
    province_id: 10,
    latitude: 35.706944,
    longitude: 59.85,
  },
  {
    id: 136,
    title: "فسا",
    slug: "Fasa",
    province_id: 8,
    latitude: 28.938333,
    longitude: 53.648333,
  },
  {
    id: 216,
    title: "فلاورجان",
    slug: "Falavarjan",
    province_id: 11,
    latitude: 32.555278,
    longitude: 51.509722,
  },
  {
    id: 251,
    title: "فنوج",
    slug: "Fenouj",
    province_id: 12,
    latitude: 27.9467603,
    longitude: 57.7062572,
  },
  {
    id: 21,
    title: "فومن",
    slug: "Fooman",
    province_id: 2,
    latitude: 37.223889,
    longitude: 49.3125,
  },
  {
    id: 137,
    title: "فيروزآباد",
    slug: "Firozabad",
    province_id: 8,
    latitude: 28.843889,
    longitude: 52.570833,
  },
  {
    id: 367,
    title: "فيروزكوه",
    slug: "Firouzkouh",
    province_id: 24,
    latitude: 35.438671,
    longitude: 60.809387,
  },
  {
    id: 36,
    title: "قائم شهر",
    slug: "Qaemshahr",
    province_id: 3,
    latitude: 35.5445805,
    longitude: 51.2302457,
  },
  {
    id: 416,
    title: "قائنات",
    slug: "Ghaenat",
    province_id: 30,
    latitude: 33.726667,
    longitude: 59.184444,
  },
  {
    id: 256,
    title: "قروه",
    slug: "Qorveh",
    province_id: 13,
    latitude: 35.1678934,
    longitude: 47.8038272,
  },
  {
    id: 387,
    title: "قزوين",
    slug: "Qazvin",
    province_id: 27,
    latitude: 36.0881317,
    longitude: 49.8547266,
  },
  {
    id: 348,
    title: "قشم",
    slug: "Qeshm",
    province_id: 23,
    latitude: 34.6399443,
    longitude: 50.8759419,
  },
  {
    id: 93,
    title: "قصرشيرين",
    slug: "Qasr-e Shirin",
    province_id: 6,
    latitude: 34.5159031,
    longitude: 45.5776859,
  },
  {
    id: 173,
    title: "قلعه گنج",
    slug: "Castle treasure",
    province_id: 9,
    latitude: 27.523611,
    longitude: 57.881111,
  },
  {
    id: 384,
    title: "قم",
    slug: "Qom",
    province_id: 26,
    latitude: 34.6399443,
    longitude: 50.8759419,
  },
  {
    id: 186,
    title: "قوچان",
    slug: "Ghoochan",
    province_id: 10,
    latitude: 37.106111,
    longitude: 58.509444,
  },
  {
    id: 148,
    title: "قيروکارزين",
    slug: "Qyrvkarzyn",
    province_id: 8,
    latitude: 28.42998,
    longitude: 53.09516,
  },
  {
    id: 187,
    title: "كاشمر",
    slug: "Kashmar",
    province_id: 10,
    latitude: 35.238333,
    longitude: 58.465556,
  },
  {
    id: 259,
    title: "كامياران",
    slug: "Kamyaran",
    province_id: 13,
    latitude: 34.795556,
    longitude: 46.935556,
  },
  {
    id: 266,
    title: "كبودرآهنگ",
    slug: "Kaboudarahang",
    province_id: 14,
    latitude: 35.208333,
    longitude: 48.723889,
  },
  {
    id: 165,
    title: "كرمان",
    slug: "Kerman",
    province_id: 9,
    latitude: 35.706944,
    longitude: 59.85,
  },
  {
    id: 197,
    title: "كلات",
    slug: "Kalat",
    province_id: 10,
    latitude: 34.198333,
    longitude: 58.544444,
  },
  {
    id: 399,
    title: "كلاله",
    slug: "Stigma",
    province_id: 28,
    latitude: 37.380833,
    longitude: 55.491667,
  },
  {
    id: 314,
    title: "كنگان",
    slug: "Kangan",
    province_id: 19,
    latitude: 27.8370437,
    longitude: 52.0645473,
  },
  {
    id: 166,
    title: "كهنوج",
    slug: "Kahnooj",
    province_id: 9,
    latitude: 27.9467603,
    longitude: 57.7062572,
  },
  {
    id: 380,
    title: "كوثر",
    slug: "Kosar",
    province_id: 25,
    latitude: 31.8676866,
    longitude: 54.3379802,
  },
  {
    id: 171,
    title: "كوهبنان",
    slug: "Kuhbanan",
    province_id: 9,
    latitude: 31.541944,
    longitude: 60.036389,
  },
  {
    id: 276,
    title: "كوهرنگ",
    slug: "Kouhrang",
    province_id: 15,
    latitude: 32.5558364,
    longitude: 51.6787252,
  },
  {
    id: 139,
    title: "لارستان",
    slug: "LARESTAN",
    province_id: 8,
    latitude: 33.376111,
    longitude: 52.369444,
  },
  {
    id: 118,
    title: "لالي",
    slug: "Lali",
    province_id: 7,
    latitude: 32.328889,
    longitude: 49.093611,
  },
  {
    id: 143,
    title: "لامرد",
    slug: "Lamerd",
    province_id: 8,
    latitude: 27.3423771,
    longitude: 53.1803558,
  },
  {
    id: 23,
    title: "لاهيجان",
    slug: "LAHIJAN",
    province_id: 2,
    latitude: 32.555278,
    longitude: 51.509722,
  },
  {
    id: 274,
    title: "لردگان",
    slug: "LORDEGAN",
    province_id: 15,
    latitude: 32.768333,
    longitude: 50.628611,
  },
  {
    id: 220,
    title: "لنجان",
    slug: "Lenjan",
    province_id: 11,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 308,
    title: "لنده",
    slug: "Landhi",
    province_id: 18,
    latitude: 36.955278,
    longitude: 45.388056,
  },
  {
    id: 22,
    title: "لنگرود",
    slug: "Langerud",
    province_id: 2,
    latitude: 37.196944,
    longitude: 50.153611,
  },
  {
    id: 28,
    title: "ماسال",
    slug: "Masal",
    province_id: 2,
    latitude: 37.3621185,
    longitude: 49.1314769,
  },
  {
    id: 76,
    title: "ماكو",
    slug: "Maku",
    province_id: 5,
    latitude: 39.295278,
    longitude: 44.516667,
  },
  {
    id: 410,
    title: "مانه وسملقان",
    slug: "Manet Vsmlqan",
    province_id: 29,
    latitude: 37.6620614,
    longitude: 56.741207,
  },
  {
    id: 325,
    title: "ماهنشان",
    slug: "Mahneshan",
    province_id: 20,
    latitude: 33.122222,
    longitude: 46.164722,
  },
  {
    id: 225,
    title: "مبارکه",
    slug: "Mobarakeh",
    province_id: 11,
    latitude: 32.346389,
    longitude: 51.504444,
  },
  {
    id: 8,
    title: "محلات",
    slug: "Mahalat",
    province_id: 1,
    latitude: 33.9085748,
    longitude: 50.4552616,
  },
  {
    id: 40,
    title: "محمودآباد",
    slug: "Mahmudabad",
    province_id: 3,
    latitude: 28.843889,
    longitude: 52.570833,
  },
  {
    id: 54,
    title: "مراغه",
    slug: "Maragheh",
    province_id: 4,
    latitude: 37.389167,
    longitude: 46.2375,
  },
  {
    id: 55,
    title: "مرند",
    slug: "Marand",
    province_id: 4,
    latitude: 38.425117,
    longitude: 45.769636,
  },
  {
    id: 140,
    title: "مرودشت",
    slug: "MARVDASHT",
    province_id: 8,
    latitude: 29.874167,
    longitude: 52.8025,
  },
  {
    id: 257,
    title: "مريوان",
    slug: "Marivan",
    province_id: 13,
    latitude: 35.526944,
    longitude: 46.176389,
  },
  {
    id: 114,
    title: "مسجدسليمان",
    slug: "Masjed Soleiman",
    province_id: 7,
    latitude: 31.936389,
    longitude: 49.303889,
  },
  {
    id: 189,
    title: "مشهد",
    slug: "Mashhad",
    province_id: 10,
    latitude: 38.425117,
    longitude: 45.769636,
  },
  {
    id: 377,
    title: "مشگين شهر",
    slug: "Meshkinshar",
    province_id: 25,
    latitude: 32.941111,
    longitude: 50.121111,
  },
  {
    id: 369,
    title: "ملارد",
    slug: "Mallard",
    province_id: 24,
    latitude: 27.3423771,
    longitude: 53.1803558,
  },
  {
    id: 263,
    title: "ملاير",
    slug: "Malayer",
    province_id: 14,
    latitude: 34.296944,
    longitude: 48.823611,
  },
  {
    id: 64,
    title: "ملکان",
    slug: "Malakan",
    province_id: 4,
    latitude: 37.145625,
    longitude: 46.1685242,
  },
  {
    id: 141,
    title: "ممسني",
    slug: "Mamasani",
    province_id: 8,
    latitude: 31.9600345,
    longitude: 50.5122652,
  },
  {
    id: 170,
    title: "منوجان",
    slug: "Manoujan",
    province_id: 9,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 199,
    title: "مه ولات",
    slug: "Mahvelat",
    province_id: 10,
    latitude: 35.0210829,
    longitude: 58.7818116,
  },
  {
    id: 77,
    title: "مهاباد",
    slug: "Mahabad",
    province_id: 5,
    latitude: 36.763056,
    longitude: 45.722222,
  },
  {
    id: 331,
    title: "مهدئ شهر",
    slug: "Mehdi City",
    province_id: 21,
    latitude: 35.7,
    longitude: 53.35,
  },
  {
    id: 149,
    title: "مهر",
    slug: "stamp",
    province_id: 8,
    latitude: 33.122222,
    longitude: 46.164722,
  },
  {
    id: 295,
    title: "مهران",
    slug: "Mehran",
    province_id: 17,
    latitude: 33.122222,
    longitude: 46.164722,
  },
  {
    id: 245,
    title: "مهرستان",
    slug: "Your spouse",
    province_id: 12,
    latitude: 33.122222,
    longitude: 46.164722,
  },
  {
    id: 338,
    title: "مهريز",
    slug: "MEHRIZ",
    province_id: 22,
    latitude: 31.28,
    longitude: 49.603611,
  },
  {
    id: 78,
    title: "مياندوآب",
    slug: "Miandoab",
    province_id: 5,
    latitude: 36.969444,
    longitude: 46.102778,
  },
  {
    id: 56,
    title: "ميانه",
    slug: "Mianeh",
    province_id: 4,
    latitude: 37.421111,
    longitude: 47.715,
  },
  {
    id: 340,
    title: "ميبد",
    slug: "Meibod",
    province_id: 22,
    latitude: 32.2487226,
    longitude: 54.0079341,
  },
  {
    id: 349,
    title: "ميناب",
    slug: "Minab",
    province_id: 23,
    latitude: 27.146667,
    longitude: 57.08,
  },
  {
    id: 397,
    title: "مينودشت",
    slug: "Minoodasht",
    province_id: 28,
    latitude: 29.874167,
    longitude: 52.8025,
  },
  {
    id: 222,
    title: "نجف آباد",
    slug: "Najaf Abad",
    province_id: 11,
    latitude: 32.6324231,
    longitude: 51.3679914,
  },
  {
    id: 178,
    title: "نرماشير",
    slug: "Narmashir",
    province_id: 9,
    latitude: 30.558889,
    longitude: 49.198056,
  },
  {
    id: 223,
    title: "نطنز",
    slug: "Natanz",
    province_id: 11,
    latitude: 33.513333,
    longitude: 51.916389,
  },
  {
    id: 426,
    title: "نظرآباد",
    slug: "Nazarabad",
    province_id: 31,
    latitude: 39.648333,
    longitude: 47.9175,
  },
  {
    id: 79,
    title: "نقده",
    slug: "Tinsel",
    province_id: 5,
    latitude: 36.955278,
    longitude: 45.388056,
  },
  {
    id: 381,
    title: "نمين",
    slug: "Namin",
    province_id: 25,
    latitude: 38.426944,
    longitude: 48.483889,
  },
  {
    id: 264,
    title: "نهاوند",
    slug: "Skinheads",
    province_id: 14,
    latitude: 35.9467494,
    longitude: 52.1275481,
  },
  {
    id: 417,
    title: "نهبندان",
    slug: "Nehbandan",
    province_id: 30,
    latitude: 31.541944,
    longitude: 60.036389,
  },
  {
    id: 37,
    title: "نور",
    slug: "Nur",
    province_id: 3,
    latitude: 36.648889,
    longitude: 51.496111,
  },
  {
    id: 38,
    title: "نوشهر",
    slug: "Noshahr",
    province_id: 3,
    latitude: 36.648889,
    longitude: 51.496111,
  },
  {
    id: 382,
    title: "نير",
    slug: "Nir",
    province_id: 25,
    latitude: 50.3851246,
    longitude: 3.2642436,
  },
  {
    id: 190,
    title: "نيشابور",
    slug: "Neyshabur",
    province_id: 10,
    latitude: 36.2140865,
    longitude: 58.7960915,
  },
  {
    id: 239,
    title: "نيك شهر",
    slug: "Nikshahr",
    province_id: 12,
    latitude: 36.648889,
    longitude: 51.496111,
  },
  {
    id: 98,
    title: "هرسين",
    slug: "Harsin",
    province_id: 6,
    latitude: 34.2719149,
    longitude: 47.6046183,
  },
  {
    id: 62,
    title: "هريس",
    slug: "Harris",
    province_id: 4,
    latitude: 29.7751825,
    longitude: -95.3102505,
  },
  {
    id: 57,
    title: "هشترود",
    slug: "Hashtrood",
    province_id: 4,
    latitude: 37.477778,
    longitude: 47.050833,
  },
  {
    id: 265,
    title: "همدان",
    slug: "Hamedan",
    province_id: 14,
    latitude: 31.541944,
    longitude: 60.036389,
  },
  {
    id: 119,
    title: "هنديجان",
    slug: "Hendijan",
    province_id: 7,
    latitude: 32.4750168,
    longitude: 51.3050851,
  },
  {
    id: 362,
    title: "ورامين",
    slug: "Varamin",
    province_id: 24,
    latitude: 35.3252407,
    longitude: 51.6471987,
  },
  {
    id: 68,
    title: "ورزقان",
    slug: "Varzeghan",
    province_id: 4,
    latitude: 38.509722,
    longitude: 46.654444,
  },
  {
    id: 379,
    title: "پارس آباد",
    slug: "Pars Abad",
    province_id: 25,
    latitude: 39.648333,
    longitude: 47.9175,
  },
  {
    id: 355,
    title: "پارسيان",
    slug: "Parsian",
    province_id: 23,
    latitude: 32.2582066,
    longitude: 50.5705088,
  },
  {
    id: 151,
    title: "پاسارگاد",
    slug: "Pasargad",
    province_id: 8,
    latitude: 39.648333,
    longitude: 47.9175,
  },
  {
    id: 366,
    title: "پاكدشت",
    slug: "Pakdasht",
    province_id: 24,
    latitude: 35.4668913,
    longitude: 51.6860625,
  },
  {
    id: 90,
    title: "پاوه",
    slug: "Pave",
    province_id: 6,
    latitude: 29.579167,
    longitude: 50.516944,
  },
  {
    id: 372,
    title: "پرديس",
    slug: "College",
    province_id: 24,
    latitude: 34.018611,
    longitude: 58.172222,
  },
  {
    id: 287,
    title: "پلدختر",
    slug: "Poldokhtar",
    province_id: 16,
    latitude: 33.153611,
    longitude: 47.713611,
  },
  {
    id: 85,
    title: "پلدشت",
    slug: "Demands",
    province_id: 5,
    latitude: 33.153611,
    longitude: 47.713611,
  },
  {
    id: 72,
    title: "پيرانشهر",
    slug: "Piranshar",
    province_id: 5,
    latitude: 36.694444,
    longitude: 45.141667,
  },
  {
    id: 228,
    title: "چادگان",
    slug: "Chadegan",
    province_id: 11,
    latitude: 39.0649837,
    longitude: 44.3844679,
  },
  {
    id: 67,
    title: "چاراويماق",
    slug: "Charoymagh",
    province_id: 4,
    latitude: 37.1299052,
    longitude: 47.0245686,
  },
  {
    id: 84,
    title: "چالدران",
    slug: "Chalderan",
    province_id: 5,
    latitude: 39.0649837,
    longitude: 44.3844679,
  },
  {
    id: 42,
    title: "چالوس",
    slug: "Chalus",
    province_id: 3,
    latitude: 36.6459174,
    longitude: 51.406979,
  },
  {
    id: 234,
    title: "چابهار",
    slug: "ChaBahar",
    province_id: 12,
    latitude: 25.291944,
    longitude: 60.643056,
  },
  {
    id: 191,
    title: "چناران",
    slug: "CHENARAN",
    province_id: 10,
    latitude: 39.0649837,
    longitude: 44.3844679,
  },
  {
    id: 128,
    title: "کارون",
    slug: "Karun",
    province_id: 7,
    latitude: 29.619444,
    longitude: 51.654167,
  },
  {
    id: 138,
    title: "کازرون",
    slug: "Kazeroon",
    province_id: 8,
    latitude: 29.619444,
    longitude: 51.654167,
  },
  {
    id: 218,
    title: "کاشان",
    slug: "Kashan",
    province_id: 11,
    latitude: 33.9850358,
    longitude: 51.4099625,
  },
  {
    id: 424,
    title: "کرج",
    slug: "Karaj",
    province_id: 31,
    latitude: 35.8400188,
    longitude: 50.9390906,
  },
  {
    id: 89,
    title: "کرمانشاه",
    slug: "Kermanshah",
    province_id: 6,
    latitude: 29.4850089,
    longitude: 57.6439048,
  },
  {
    id: 50,
    title: "کلاردشت",
    slug: "Kelardasht",
    province_id: 3,
    latitude: 36.155278,
    longitude: 45.478889,
  },
  {
    id: 61,
    title: "کليبر",
    slug: "Kalibar",
    province_id: 4,
    latitude: 38.869444,
    longitude: 47.035556,
  },
  {
    id: 10,
    title: "کميجان",
    slug: "Komijan",
    province_id: 1,
    latitude: 27.4475626,
    longitude: 57.5051616,
  },
  {
    id: 94,
    title: "کنگاور",
    slug: "Kangavar",
    province_id: 6,
    latitude: 27.8370437,
    longitude: 52.0645473,
  },
  {
    id: 156,
    title: "کوار",
    slug: "Kovar",
    province_id: 8,
    latitude: 31.8676866,
    longitude: 54.3379802,
  },
  {
    id: 285,
    title: "کوهدشت",
    slug: "Kuhdasht",
    province_id: 16,
    latitude: 33.535,
    longitude: 47.606111,
  },
  {
    id: 121,
    title: "گتوند",
    slug: "Scroll down",
    province_id: 7,
    latitude: 32.251389,
    longitude: 48.816111,
  },
  {
    id: 330,
    title: "گرمسار",
    slug: "Garmsar",
    province_id: 21,
    latitude: 35.218333,
    longitude: 52.340833,
  },
  {
    id: 411,
    title: "گرمه",
    slug: "it is hot",
    province_id: 29,
    latitude: 39.0372267,
    longitude: 47.9277021,
  },
  {
    id: 378,
    title: "گرمي",
    slug: "G",
    province_id: 25,
    latitude: 39.0372267,
    longitude: 47.9277021,
  },
  {
    id: 395,
    title: "گرگان",
    slug: "Gorgan",
    province_id: 28,
    latitude: 36.8456427,
    longitude: 54.4393363,
  },
  {
    id: 44,
    title: "گلوگاه",
    slug: "Galugah",
    province_id: 3,
    latitude: 36.727222,
    longitude: 53.808889,
  },
  {
    id: 219,
    title: "گلپايگان",
    slug: "Golpaygan",
    province_id: 11,
    latitude: 33.453611,
    longitude: 50.288333,
  },
  {
    id: 188,
    title: "گناباد",
    slug: "GONABAD",
    province_id: 10,
    latitude: 36.763056,
    longitude: 45.722222,
  },
  {
    id: 315,
    title: "گناوه",
    slug: "Ganaveh",
    province_id: 19,
    latitude: 29.579167,
    longitude: 50.516944,
  },
  {
    id: 396,
    title: "گنبدكاووس",
    slug: "Gonbad",
    province_id: 28,
    latitude: 37.25,
    longitude: 55.167222,
  },
  {
    id: 95,
    title: "گيلانغرب",
    slug: "Gilangharb",
    province_id: 6,
    latitude: 34.142222,
    longitude: 45.920278,
  },
  {
    id: 303,
    title: "گچساران",
    slug: "Gachsaran",
    province_id: 18,
    latitude: 36.645556,
    longitude: 59.121111,
  },
];
export const stories = [
  {
    id: 1,
    title: "قوری چایسازت شکسته؟",
    cover: tea,
    post: tea2,
  },
  {
    id: 2,
    title: "برای گوشیت چتر میخری؟",
    cover: umbrella,
    post: umbrella2,
  },
  { id: 3, title: "ترندی و ایرانی", cover: trend, post: skirt },
  { id: 4, title: "مسواک برقی اورال", cover: brush, post: brush2 },
  { id: 5, title: "خرید هندزفری", cover: handsfree, post: handsfree2 },
  { id: 6, title: "لپ تاپ اپل", cover: laptop, post: laptop2 },
  { id: 7, title: "قمقمه بچگیاته", cover: water, post: water2 },
  { id: 8, title: "هدفون سونی", cover: headphone, post: headphone2 },
  { id: 9, title: "پنکه شارژی", cover: fan, post: fan2 },
  { id: 10, title: "یه محصول متفاوت", cover: product, post: product2 },
  { id: 11, title: "کاپوچین", cover: game, post: game2 },
  { id: 12, title: "خوراک پرنده", cover: bird, post: bird2 },
  { id: 13, title: "قندون چوبی جذاب", cover: sugar, post: sugar2 },
  { id: 14, title: "کیف ابزار", cover: bag, post: bag2 },
  { id: 15, title: "تجهیزات یوگا", cover: yoga, post: yoga2 },
];
export const hero = [
  { title: "تن ماهی با بیشترین تخفیف", cover: image1 },
  { title: "محبوب ترین", cover: image2 },
  { title: "مراقبت پوستی", cover: image3 },
  { title: "پارتنرشیپ-هادرون", cover: image4 },
  { title: "خرید سوپرمارکتی پر تخفیف تر از همیشه", cover: image5 },
  { title: "خرید آخر ماه از فروشگاه های اطراف", cover: image6 },
  { title: "برندهای کفش", cover: image7 },
  { title: "کمپین - HE - Outlet - آبان 1402", cover: image8 },
  { title: "سامسونگ", cover: image9 },
];
export const services = [
  { title: "گیف کارت", image: s_image1 },
  { title: "دیجی‌کالا مهر", image: s_image2 },
  { title: "حراج دیجی استایل", image: s_image3 },
  { title: "دیجی‌کالا جت", image: s_image4 },
  { title: "تخفیف پلاس", image: s_image5 },
  { title: "فروشگاه حضوری", image: s_image6 },
  { title: "دیجی‌پی", image: s_image7 },
  { title: "سوپرمارکت پرتخفیف", image: s_image8 },
  { title: "خرید چکی", image: s_image9 },
  { title: "موبایل کارکرده", image: s_image10 },
];
export const brands = [
  { id: 1, logo: "/brands/preal.png", href: "/brand/pril" },
  { id: 2, logo: "/brands/3.png", href: "/brand/kingstar" },
  { id: 3, logo: "/brands/4.png", href: "/brand/kalleh" },
  { id: 4, logo: "/brands/5.png", href: "/brand/huawei" },
  { id: 5, logo: "/brands/6.png", href: "/brand/pegah" },
  { id: 6, logo: "/brands/7.jpg", href: "/brand/zariniran" },
  { id: 7, logo: "/brands/8.jpg", href: "/brand/panter" },
  { id: 8, logo: "/brands/9.png", href: "/brand/pakshoma" },
  { id: 9, logo: "/brands/10.png", href: "/brand/eurhi-vital" },
  { id: 10, logo: "/brands/11.png", href: "/brand/active" },
  { id: 11, logo: "/brands/12.jpg", href: "/brand/softlan" },
  { id: 12, logo: "/brands/13.jpg", href: "/brand/mahya" },
  { id: 13, logo: "/brands/percil.png", href: "/brand/persil" },
];
export const productscard = [
  {
    id: 1,
    href: "category/mobile",
    images: [
      {
        src: "/product-card/1.jpg",
        href: "/product/گوشی-موبایل-اپل-مدل-iphone-13-ch-دو-سیم-کارت-ظرفیت-128-گیگابایت-و-رم-4-گیگابایت-نات-اکتیو",
      },
      {
        src: "/product-card/2.jpg",
        href: "/product/گوشی-موبایل-شیائومی-مدل-redmi-note-13-4g-دو-سیم-کارت-ظرفیت-256-گیگابایت-و-رم-8-گیگابایت",
      },
      {
        src: "/product-card/3.jpg",
        href: "/product/گوشی-موبایل-سامسونگ-مدل-galaxy-s24-ultra-دو-سیم-کارت-ظرفیت-256-گیگابایت-و-رم-12-گیگابایت-ویتنام",
      },
      {
        src: "/product-card/4.jpg",
        href: "/product/گوشی-موبایل-آنر-مدل-x8b-دو-سیمکارت-ظرفیت-512-گیگابایت-و-رم-8-گیگابایت/",
      },
    ],
    title: "گوشی موبایل",
  },
  {
    id: 2,
    href: "search/mobile-accessories",
    images: [
      {
        src: "/product-card/5.jpg",
        href: "/product/کاور-ام-ان-اف-طرح-real-madrid-کد-p-218-مناسب-برای-گوشی-موبایل-اپل-iphone-15",
      },
      {
        src: "/product-card/6.jpg",
        href: "/product/برچسب-پوششی-ماهوت-مدل-collage-of-surreal-portrait-of-women-2-fullskin-مناسب-برای-گوشی-موبایل-شیائومی-redmi-note-8-pro",
      },
      {
        src: "/product-card/7.jpg",
        href: "/product/کاور-آکام-مدل-amcwa11-brands20-مناسب-برای-گوشی-موبایل-اپل-iphone-11",
      },
      {
        src: "/product-card/8.jpg",
        href: "/product/کاور-گالری-وبفر-طرح-بارسلونا-مناسب-برای-گوشی-موبایل-شیائومی-redmi-note-12-pro-5g",
      },
    ],
    title: "کیف و کاور گوشی",
  },
  {
    id: 3,
    href: "category/smart-watch",

    images: [
      {
        src: "/product-card/9.jpg",
        href: "/product/ساعت-هوشمند-هاینو-تکو-مدل-s1",
      },
      {
        src: "/product-card/10.jpg",
        href: "/product/ساعت-هوشمند-مدل-hm9-ultra-2",
      },
      {
        src: "/product-card/11.jpg",
        href: "/product/ساعت-هوشمند-فرفیت-مدل-ws22-max-amoled",
      },
      {
        src: "/product-card/12.jpg",
        href: "/product/ساعت-هوشمند-جی-اس-وای-اس-مدل-m70-max-ultra2",
      },
    ],
    title: "ساعت هوشمند",
  },
  {
    id: 4,
    href: "/category/car-parts",
    images: [
      {
        src: "/product-card/13.jpg",
        href: "/product/پنکه-خودرو-مارس-مدل-er",
      },
      {
        src: "/product-card/14.jpg",
        href: "/product/کیت-بک-فایر-خودرو-مدل-fr100/",
      },
      {
        src: "/product-card/15.jpg",
        href: "/product/پنکه-خودرو-کلاو-مدل-فندکی",
      },
      {
        src: "/product-card/16.jpg",
        href: "/product/پنکه-خودرو-مدل-دوبل-x916",
      },
    ],
    title: "سایر لوازم خودرو",
  },
];
export const partners = [
  {
    id: 1,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="20"
          viewBox="0 0 153 41"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.4971 8.81451C49.7441 8.81451 50.0894 8.95739 50.2633 9.13038L52.8431 11.7067L52.8605 11.7285V9.89733C52.8605 9.29953 53.3469 8.81451 53.9457 8.81451H57.5613C58.0997 8.81451 58.5508 9.15858 58.7158 9.63527C58.7286 9.69358 58.7331 9.75445 58.7331 9.81724V32.2471C58.7331 36.0427 56.3875 39.2758 53.0344 40.4887C52.1186 40.8206 51.1271 41 50.0894 41H45.1569C44.6949 41 44.2585 40.818 43.9305 40.4887C43.3016 39.8473 42.4488 38.9792 41.6106 38.127C40.5389 37.0461 41.3135 35.2111 42.837 35.2111H50.0695C51.1374 35.2111 52.0666 34.619 52.5441 33.7464C52.7674 33.3389 52.8605 32.875 52.8605 32.4117V32.2708H43.3357C42.7889 32.2708 42.255 32.217 41.739 32.1144C38.0104 31.2155 35.2413 27.8613 35.2413 23.8658V17.299C35.2413 12.6121 39.0456 8.81451 43.7393 8.81451H49.4971ZM99.072 0.0357521C99.6689 0.0357521 100.157 0.523343 100.157 1.11922V31.0808C100.157 31.7452 99.613 32.2885 98.9475 32.2885H95.4834C94.8128 32.2885 94.2744 31.7452 94.2744 31.0808V1.24352C94.2744 0.579727 94.8128 0.0357521 95.4834 0.0357521H99.072ZM134.296 0.0348551C134.895 0.0348551 135.381 0.519883 135.381 1.11832V8.83136H144.906C145.452 8.83136 145.986 8.88582 146.503 8.98769C150.231 9.88663 153 13.2408 153 17.2364V23.8012C153 28.4881 149.194 32.2883 144.499 32.2883H138.794C138.563 32.2883 138.339 32.2146 138.154 32.0781C138.109 32.0474 138.065 32.0108 138.026 31.9717L138.024 31.9698L135.378 29.3172V31.2048C135.378 31.8007 134.891 32.2883 134.294 32.2883H130.678C130.14 32.2883 129.689 31.9436 129.524 31.4669C129.51 31.4086 129.506 31.3477 129.506 31.2849V1.11832C129.506 0.519883 129.992 0.0348551 130.591 0.0348551H134.296ZM107.874 8.83916C108.476 8.83661 108.965 9.32228 108.965 9.92264V23.9116C108.965 25.2987 110.091 26.4232 111.48 26.4232H120.71L120.704 9.93289C120.704 9.33445 121.19 8.84878 121.789 8.84878H125.497C126.096 8.84878 126.582 9.33381 126.582 9.93225L126.584 31.285C126.584 31.3478 125.951 32.2884 125.413 32.2884H121.798C121.201 32.2884 120.712 31.8008 120.712 31.2049V29.3174L118.067 31.97C118.025 32.011 117.982 32.0475 117.936 32.0782C117.752 32.2141 117.529 32.2884 117.296 32.2884H111.591C106.896 32.2884 103.091 28.4883 103.091 23.8014V9.94186C103.091 9.34535 103.573 8.8616 104.17 8.8584L107.874 8.83916ZM86.5849 8.76235C86.934 8.7521 87.2748 8.88601 87.5199 9.13077L90.9642 12.5695C91.7369 13.341 91.2267 14.6948 90.1396 14.6948L88.7294 14.695C88.6721 14.695 88.6137 14.695 88.5542 14.695L85.8233 14.6956C85.7459 14.6956 85.6682 14.6956 85.5902 14.6957L82.9969 14.6963C82.92 14.6963 82.8435 14.6963 82.7674 14.6963L80.4822 14.6969C80.4221 14.6969 80.363 14.6969 80.3051 14.6969L78.5753 14.6974C77.1859 14.6974 76.0596 15.8212 76.0596 17.2084V23.9142C76.0596 25.3007 77.184 26.4233 78.5727 26.4252L90.2506 26.4233C90.8493 26.4233 91.3351 26.9083 91.3351 27.5067V31.205C91.3351 31.8028 90.8493 32.2885 90.2506 32.2885H78.2801C77.7327 32.2885 77.1987 32.234 76.6821 32.1321C72.9542 31.2332 70.1851 27.879 70.1851 23.8834V17.3186C70.1851 13.4339 72.8021 10.1559 76.3702 9.14807C76.9151 8.99621 77.4811 8.8969 78.0651 8.85397C78.2692 8.8386 78.4771 8.83155 78.6857 8.83155L78.7851 8.83124C78.8013 8.83119 78.8194 8.83113 78.8393 8.83106L78.9798 8.83059C80.269 8.82616 85.4088 8.80597 86.5849 8.76235ZM22.4089 0C23.0077 0 23.4941 0.485669 23.4941 1.08346V31.25C23.4941 31.3128 23.4896 31.3737 23.4768 31.432C23.3119 31.9087 22.8601 32.2534 22.3223 32.2534H18.7067C18.1099 32.2534 17.6215 31.7658 17.6215 31.1699V29.283L14.9762 31.935C14.9351 31.976 14.8915 32.0125 14.8459 32.0433C14.6617 32.1797 14.4378 32.2534 14.2061 32.2534H8.50033C3.80659 32.2534 0 28.4526 0 23.7664V17.2015C0 13.206 2.76888 9.85177 6.49744 8.95284C7.01404 8.85096 7.54733 8.7965 8.09474 8.7965H17.6196V1.08346C17.6196 0.485669 18.1054 0 18.7041 0H22.4089ZM31.2195 8.79727C31.8189 8.79727 32.3047 9.2823 32.3047 9.88073V31.1701C32.3047 31.7685 31.8189 32.2535 31.2195 32.2535H27.5153C26.9159 32.2535 26.4301 31.7685 26.4301 31.1701V9.88073C26.4301 9.2823 26.9159 8.79727 27.5153 8.79727H31.2195ZM66.4591 8.79727C67.0585 8.79727 67.5443 9.2823 67.5443 9.88073V31.1701C67.5443 31.7685 67.0585 32.2535 66.4591 32.2535H62.7549C62.1555 32.2535 61.6697 31.7685 61.6697 31.1701V9.88073C61.6697 9.2823 62.1555 8.79727 62.7549 8.79727H66.4591ZM144.612 14.6946H135.381V26.4231H144.61C145.999 26.4231 147.125 25.2986 147.125 23.9114V17.2056C147.125 15.8191 146.002 14.6965 144.612 14.6946ZM52.8605 14.6618H43.6289C42.2402 14.6618 41.1139 15.7869 41.1139 17.1734V23.8792C41.1139 25.2657 42.2376 26.3883 43.627 26.3902H52.8605V14.6618ZM17.6196 14.6598H8.38802C6.99864 14.6623 5.8743 15.7842 5.8743 17.1708V23.8772C5.8743 25.2638 7.00056 26.3882 8.38995 26.3882H17.6196V14.6598ZM66.4591 0.0356244C67.0585 0.0356244 67.5443 0.520653 67.5443 1.11909V4.81671C67.5443 5.41514 67.0585 5.90017 66.4591 5.90017H62.7549C62.1555 5.90017 61.6697 5.41514 61.6697 4.81671V1.11909C61.6697 0.520653 62.1555 0.0356244 62.7549 0.0356244H66.4591ZM31.2195 0.00089701C31.8189 0.00089701 32.3047 0.485925 32.3047 1.08436V4.78198C32.3047 5.38042 31.8189 5.86544 31.2195 5.86544H27.5153C26.9159 5.86544 26.4301 5.38042 26.4301 4.78198V1.08436C26.4301 0.485925 26.9159 0.00089701 27.5153 0.00089701H31.2195Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 2,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="25"
          viewBox="0 0 91 17"
          fill="none"
        >
          <g clip-path="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.1951 10.4056H43.7073V5.72269H40.1951C39.5891 5.72269 39.0244 6.28881 39.0244 6.89342V9.23489C39.0244 9.83959 39.5891 10.4056 40.1951 10.4056ZM54.2439 10.4056H57.7561V5.72269H54.2439C53.6379 5.72269 53.0732 6.28881 53.0732 6.89342V9.23489C53.0732 9.83959 53.6379 10.4056 54.2439 10.4056ZM46.0488 3.96659V12.1617C46.0488 12.42 45.7225 12.7471 45.4634 12.7471L44.2929 12.7594C44.0336 12.7594 43.7073 12.4201 43.7073 12.1617V11.7715L43.1761 12.4093C43.0143 12.6294 42.615 12.7471 42.3415 12.7471H40.1951C38.3118 12.7471 36.6829 11.1138 36.6829 9.23489V6.89342C36.6829 5.01452 38.3118 3.38123 40.1951 3.38123H45.4634C45.7221 3.38123 46.0488 3.7086 46.0488 3.96659ZM60.0976 3.96659V12.1617C60.0976 12.42 59.7712 12.7471 59.5122 12.7471L58.3417 12.7594C58.0824 12.7594 57.7561 12.4201 57.7561 12.1617V11.7715L57.2249 12.4093C57.0631 12.6294 56.6638 12.7471 56.3902 12.7471H54.2439C52.3606 12.7471 50.7317 11.1138 50.7317 9.23489V6.89342C50.7317 5.01452 52.3606 3.38123 54.2439 3.38123H59.5122C59.7709 3.38123 60.0976 3.7086 60.0976 3.96659ZM21.0732 5.72269H17.561C16.9549 5.72269 16.3902 6.28881 16.3902 6.89342V9.23489C16.3902 9.83968 16.9549 10.4056 17.561 10.4056H21.0732V5.72269ZM23.4146 3.96659V12.7471V12.9422C23.4146 14.8211 21.7857 16.2593 19.9024 16.2593H18.0927C17.8234 16.2593 17.5696 16.1333 17.4072 15.9189L16.377 14.5588C16.2059 14.333 16.3016 13.9178 16.5854 13.9178H19.9024C20.5085 13.9178 21.0732 13.5468 21.0732 12.9422V12.7471H17.561C15.6778 12.7471 14.0488 11.1138 14.0488 9.23489V6.89342C14.0488 5.01461 15.6778 3.38123 17.561 3.38123H19.7073C19.9759 3.38123 20.2686 3.5973 20.4583 3.77147L21.0732 4.35684V3.96659C21.0732 3.70868 21.4001 3.38123 21.6585 3.38123H22.8293C23.0882 3.38123 23.4146 3.70815 23.4146 3.96659ZM2.34146 9.23489C2.34146 9.8395 2.90616 10.4056 3.5122 10.4056H7.02439V5.72269H3.5122C2.90616 5.72269 2.34146 6.28881 2.34146 6.89342V9.23489ZM8.78049 0.259277C9.03962 0.259277 9.36585 0.586291 9.36585 0.844643V12.1617C9.36585 12.42 9.03962 12.7471 8.78049 12.7471H7.60976C7.35071 12.7471 7.02439 12.4202 7.02439 12.1617V11.7715L6.41058 12.4283C6.24428 12.613 5.9236 12.7471 5.65854 12.7471H3.51219C1.6289 12.7471 0 11.1138 0 9.23489V6.91129C0 5.03239 1.6289 3.38123 3.51219 3.38123H7.02439V0.844643C7.02439 0.586291 7.35071 0.259277 7.60976 0.259277H8.78049ZM32.9756 8.06416L36.2343 3.93931C36.4156 3.7145 36.2553 3.38042 35.9662 3.38042H34.1023C33.9614 3.38042 33.828 3.44371 33.7388 3.55271L30.439 7.67391V0.844643C30.439 0.586291 30.1126 0.259277 29.8537 0.259277H28.6829C28.4239 0.259277 28.0976 0.586291 28.0976 0.844643V12.1617C28.0976 12.4201 28.4239 12.7471 28.6829 12.7471H29.8537C30.1127 12.7471 30.439 12.4201 30.439 12.1617V8.4544L33.7406 12.5847C33.8296 12.695 33.9639 12.7594 34.106 12.7594H35.9679C36.257 12.7594 36.4175 12.4251 36.2361 12.2004L32.9756 8.06416ZM25.1707 0.259277C24.9119 0.259277 24.5854 0.586291 24.5854 0.844643V2.01537C24.5854 2.27373 24.9119 2.60074 25.1707 2.60074H26.3415C26.6004 2.60074 26.9268 2.27373 26.9268 2.01537V0.844643C26.9268 0.586291 26.6004 0.259277 26.3415 0.259277H25.1707ZM25.1707 3.38123C24.9119 3.38123 24.5854 3.70833 24.5854 3.96659V12.1617C24.5854 12.42 25.0036 12.7593 25.2625 12.7593L26.3415 12.7471C26.6004 12.7471 26.9268 12.42 26.9268 12.1617V3.96659C26.9268 3.70833 26.6004 3.38123 26.3415 3.38123H25.1707ZM11.122 0.259277C10.863 0.259277 10.5366 0.586291 10.5366 0.844643V2.01537C10.5366 2.27373 10.863 2.60074 11.122 2.60074H12.2927C12.5516 2.60074 12.878 2.27373 12.878 2.01537V0.844643C12.878 0.586291 12.5516 0.259277 12.2927 0.259277H11.122ZM11.122 3.38123C10.863 3.38123 10.5366 3.70833 10.5366 3.96659V12.1617C10.5366 12.42 10.863 12.7471 11.122 12.7471H12.2927C12.5516 12.7471 12.878 12.42 12.878 12.1617V3.96659C12.878 3.70833 12.5516 3.38123 12.2927 3.38123H11.122ZM49.561 0.844643V12.1617C49.561 12.42 49.2347 12.7471 48.9756 12.7471H47.8049C47.5458 12.7471 47.2195 12.42 47.2195 12.1617V0.844643C47.2195 0.586291 47.5458 0.259277 47.8049 0.259277H48.9756C49.2347 0.259277 49.561 0.586291 49.561 0.844643Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.6969 0.934368C63.5721 0.758476 63.353 0.649536 63.1261 0.649536C63.0625 0.649536 62.9996 0.658047 62.9394 0.674501C62.6438 0.748263 62.439 0.99054 62.439 1.26459V12.1349C62.439 12.4725 62.7454 12.7471 63.1215 12.7471C63.4983 12.7471 63.8041 12.4725 63.8041 12.1349V3.66808V3.36055L63.9823 3.61077L65.0705 5.13876C65.1965 5.31409 65.4115 5.41906 65.6453 5.41906C65.7696 5.41906 65.8927 5.38842 66.0011 5.33054C66.1622 5.24203 66.2757 5.09678 66.3137 4.93166C66.3494 4.77449 66.3165 4.61335 66.2201 4.47775L63.6969 0.934368Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.694 0.675636C70.6305 0.658047 70.5669 0.649536 70.5028 0.649536C70.2747 0.649536 70.0557 0.758476 69.9314 0.933801L65.2346 7.5292C65.1387 7.6648 65.1052 7.82594 65.1415 7.98311C65.1789 8.14822 65.293 8.29348 65.4536 8.38142C65.5625 8.44043 65.6868 8.47221 65.8122 8.47221C66.0454 8.47221 66.2598 8.3661 66.3852 8.18964L69.6455 3.6102L69.8236 3.35998V3.66751V12.1349C69.8236 12.4725 70.13 12.7471 70.5062 12.7471C70.883 12.7471 71.1888 12.4725 71.1888 12.1349V1.26402C71.1888 0.991108 70.9857 0.74883 70.694 0.675636Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.0764 1.04892C77.9806 0.810078 77.7215 0.649536 77.4314 0.649536C77.3587 0.649536 77.2855 0.659676 77.2145 0.679955C77.0371 0.735159 76.8906 0.857396 76.8157 1.01569C76.7481 1.15764 76.743 1.31536 76.801 1.46013L79.0402 7.06109L79.0931 7.19459H78.9495H75.7989H75.6575L75.7076 7.06278L76.9469 3.78884C77.0021 3.64351 76.9937 3.48635 76.9238 3.34608C76.8455 3.18948 76.6963 3.0695 76.5143 3.01711C76.4445 2.99683 76.3724 2.98613 76.3002 2.98613C76.0118 2.98613 75.7561 3.15287 75.6631 3.40072L72.445 11.9461C72.3898 12.0914 72.3982 12.2491 72.4686 12.3894C72.5475 12.546 72.6957 12.6654 72.8753 12.7167C72.9429 12.737 73.0134 12.7471 73.0872 12.7471C73.3789 12.7471 73.6364 12.5809 73.7288 12.3336L75.1781 8.4733L75.2018 8.41021H75.2694H79.5133H79.5793L79.604 8.47161L81.1531 12.3455C81.2489 12.586 81.5052 12.7471 81.7908 12.7471C81.8623 12.7471 81.9356 12.7364 82.015 12.7144C82.1924 12.6592 82.3389 12.537 82.4138 12.3793C82.4814 12.2367 82.4865 12.0785 82.4285 11.9348L78.0764 1.04892Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M89.74 2.72892C89.8691 2.86211 90.0554 2.93869 90.2512 2.93869C90.4072 2.93869 90.5604 2.88874 90.6821 2.79884C90.8246 2.69451 90.9105 2.5469 90.9245 2.38319C90.938 2.22392 90.8808 2.06909 90.7629 1.94811C89.5156 0.66452 87.4489 0.649536 87.3614 0.649536C84.0996 0.649536 83.162 2.85212 83.1216 4.01639L83.1221 7.46538C83.1221 7.79558 83.4246 8.06417 83.7966 8.06417C84.1692 8.06417 84.4716 7.79558 84.4716 7.46538L84.4711 4.0397C84.4817 3.81106 84.6501 1.84711 87.3603 1.84711C87.3754 1.84711 88.9045 1.87097 89.74 2.72892Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M83.2784 9.04545C83.1724 9.16007 83.1168 9.30589 83.1219 9.45681C83.1623 10.6393 84.1005 12.7471 87.3617 12.7471C87.4487 12.7471 89.5153 12.7324 90.7626 11.4234C90.8681 11.311 90.9265 11.1686 90.9265 11.0234V7.89591C90.9265 7.55831 90.6235 7.28369 90.2509 7.28369H86.2052C85.8332 7.28369 85.5302 7.55831 85.5302 7.89591C85.5302 8.23351 85.8332 8.50813 86.2052 8.50813H89.4788H89.5759V8.60629V10.7306V10.7777L89.5394 10.8072C88.6809 11.5034 87.3746 11.5227 87.3617 11.5227C84.6498 11.5227 84.4815 9.64349 84.4714 9.41426C84.4562 9.09084 84.1426 8.827 83.7722 8.827C83.582 8.83325 83.4013 8.91268 83.2784 9.04545Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="90.9268"
                height="16"
                fill="white"
                transform="translate(0 0.259277)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 3,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="25"
          viewBox="0 0 64 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.49816 4.02398H4.24908C1.90238 4.02398 0 5.7095 0 7.78869V8.72987C0 10.8091 1.90238 12.4946 4.24908 12.4946H10.6227V0.259277H8.49816V4.02398ZM8.49817 10.6122H4.24909C3.07574 10.6122 2.12455 9.76946 2.12455 8.72986V7.78869C2.12455 6.74909 3.07574 5.90633 4.24909 5.90633H8.49817V10.6122ZM11.685 4.02397H13.8095V12.4946H11.685V4.02397ZM14.8718 8.72985V7.78868C14.8718 5.70949 16.7742 4.02397 19.1209 4.02397H25.4945V12.4946C25.4945 14.5737 23.5921 16.2593 21.2454 16.2593H19.1209L17.9258 14.3769H21.2454C22.4188 14.3769 23.37 13.5342 23.37 12.4946H19.1209C16.7742 12.4946 14.8718 10.809 14.8718 8.72985ZM19.1209 10.6122H23.37V5.90633H19.1209C17.9475 5.90633 16.9963 6.74909 16.9963 7.78869V8.72986C16.9963 9.76946 17.9475 10.6122 19.1209 10.6122ZM61.6117 4.02397V10.6122H57.3626C56.1892 10.6122 55.2381 9.76945 55.2381 8.72985V4.02397H53.1135V8.72985C53.1135 10.809 55.0159 12.4946 57.3626 12.4946H61.6117C61.6117 13.5342 60.6605 14.3769 59.4871 14.3769H56.1675L57.3626 16.2593H59.4871C61.8338 16.2593 63.7362 14.5737 63.7362 12.4946V4.02397H61.6117ZM41.4285 7.78868V8.72985C41.4285 10.809 43.3309 12.4946 45.6776 12.4946H52.0512V4.02397H45.6776C43.3309 4.02397 41.4285 5.70949 41.4285 7.78868ZM49.9267 10.6122H45.6776C44.5043 10.6122 43.5531 9.76946 43.5531 8.72986V7.78869C43.5531 6.74909 44.5043 5.90633 45.6776 5.90633H49.9267V10.6122ZM29.7435 4.02397H36.1172C38.4639 4.02397 40.3662 5.70949 40.3662 7.78868V8.72985C40.3662 10.809 38.4639 12.4946 36.1172 12.4946H31.8681V16.2593H29.7435V4.02397ZM36.1172 10.6122C37.2905 10.6122 38.2417 9.76946 38.2417 8.72986V7.78869C38.2417 6.74909 37.2905 5.90633 36.1172 5.90633H31.8681V10.6122H36.1172ZM13.8095 0.259277H11.685V2.14163H13.8095V0.259277ZM26.5567 4.02397H28.6813V12.4946H26.5567V4.02397ZM28.6813 0.259277H26.5567V2.14163H28.6813V0.259277Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 4,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="30"
          viewBox="0 0 86 13"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.532 6.26131V5.57149H22.7628V6.95137H27.9665C27.5949 9.18007 25.4022 10.9076 22.7617 10.9076C19.8611 10.9076 17.5014 8.82333 17.5014 6.26131C17.5014 3.69953 19.8611 1.61501 22.7617 1.61501C24.4617 1.61501 26.0657 2.34691 27.0521 3.57233L28.2992 2.78926C27.0261 1.20757 24.956 0.263581 22.7617 0.263581C19.0173 0.263581 15.9711 2.954 15.9711 6.26131C15.9711 9.56862 19.0173 12.2593 22.7617 12.2593C26.5061 12.2593 29.5521 9.56862 29.532 6.26131ZM69.1064 10.7622V0.446497H67.6186V12.0761H75.727V10.7622H69.1064ZM65.218 0.446497L61.0808 6.3548L56.9434 0.446497H55.1932L60.3285 7.78035V12.0761H61.8166V7.80378L66.9684 0.446497H65.218ZM43.0232 11.2541C43.8502 10.6353 44.2871 9.72858 44.2871 8.63252C44.2871 7.51757 43.7763 6.67329 42.7695 6.12263C41.9468 5.67287 40.7833 5.41224 39.1079 5.3025C36.0555 5.05311 36.0552 3.91042 36.0552 3.53455C36.0552 2.34763 37.2293 1.58058 39.0462 1.58058C40.8878 1.58058 42.2768 2.42079 42.2768 3.53455H43.7727C43.7727 1.66761 41.7406 0.259277 39.0462 0.259277C36.4044 0.259277 34.5596 1.60616 34.5596 3.53455C34.5596 4.45534 35.0022 5.2224 35.8403 5.75321C36.5747 6.21803 37.6302 6.5095 38.9777 6.61877L38.991 6.61997C42.4974 6.84831 42.7914 7.77868 42.7914 8.63252C42.7914 9.19466 42.7914 10.9062 39.2571 10.9062C37.0519 10.9062 35.5119 9.90122 35.5119 8.46252H34.016C34.016 10.6439 36.2201 12.2272 39.2571 12.2272C40.8935 12.2272 42.1607 11.8999 43.0232 11.2541ZM85.4778 1.69487V0.446497H77.2148V12.0761H85.4778V10.7622H78.7024V6.91646H84.1327V5.60233H78.7024V1.69487H85.4778ZM54.5 0.439802H44.2982V1.75393H48.6549V12.079H50.1427V1.75393H54.5V0.439802ZM31.0198 12.0764H32.5076V0.446497H31.0198V12.0764ZM12.9836 12.0764H14.4714V0.446497H12.9836V12.0764ZM0 12.0761V0.446497H4.90084C8.49148 0.446497 11.42 2.99847 11.4833 6.15682C11.5488 9.42157 8.50691 12.0761 4.81043 12.0761H0ZM1.4878 10.762H4.82099C7.61927 10.762 9.9568 8.79918 9.99741 6.32778C10.0386 3.81574 7.73702 1.76062 4.90247 1.76062H1.4878V10.762Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },

  {
    id: 5,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="20"
          viewBox="0 0 153 41"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.4971 8.81451C49.7441 8.81451 50.0894 8.95739 50.2633 9.13038L52.8431 11.7067L52.8605 11.7285V9.89733C52.8605 9.29953 53.3469 8.81451 53.9457 8.81451H57.5613C58.0997 8.81451 58.5508 9.15858 58.7158 9.63527C58.7286 9.69358 58.7331 9.75445 58.7331 9.81724V32.2471C58.7331 36.0427 56.3875 39.2758 53.0344 40.4887C52.1186 40.8206 51.1271 41 50.0894 41H45.1569C44.6949 41 44.2585 40.818 43.9305 40.4887C43.3016 39.8473 42.4488 38.9792 41.6106 38.127C40.5389 37.0461 41.3135 35.2111 42.837 35.2111H50.0695C51.1374 35.2111 52.0666 34.619 52.5441 33.7464C52.7674 33.3389 52.8605 32.875 52.8605 32.4117V32.2708H43.3357C42.7889 32.2708 42.255 32.217 41.739 32.1144C38.0104 31.2155 35.2413 27.8613 35.2413 23.8658V17.299C35.2413 12.6121 39.0456 8.81451 43.7393 8.81451H49.4971ZM99.072 0.0357521C99.6689 0.0357521 100.157 0.523343 100.157 1.11922V31.0808C100.157 31.7452 99.613 32.2885 98.9475 32.2885H95.4834C94.8128 32.2885 94.2744 31.7452 94.2744 31.0808V1.24352C94.2744 0.579727 94.8128 0.0357521 95.4834 0.0357521H99.072ZM134.296 0.0348551C134.895 0.0348551 135.381 0.519883 135.381 1.11832V8.83136H144.906C145.452 8.83136 145.986 8.88582 146.503 8.98769C150.231 9.88663 153 13.2408 153 17.2364V23.8012C153 28.4881 149.194 32.2883 144.499 32.2883H138.794C138.563 32.2883 138.339 32.2146 138.154 32.0781C138.109 32.0474 138.065 32.0108 138.026 31.9717L138.024 31.9698L135.378 29.3172V31.2048C135.378 31.8007 134.891 32.2883 134.294 32.2883H130.678C130.14 32.2883 129.689 31.9436 129.524 31.4669C129.51 31.4086 129.506 31.3477 129.506 31.2849V1.11832C129.506 0.519883 129.992 0.0348551 130.591 0.0348551H134.296ZM107.874 8.83916C108.476 8.83661 108.965 9.32228 108.965 9.92264V23.9116C108.965 25.2987 110.091 26.4232 111.48 26.4232H120.71L120.704 9.93289C120.704 9.33445 121.19 8.84878 121.789 8.84878H125.497C126.096 8.84878 126.582 9.33381 126.582 9.93225L126.584 31.285C126.584 31.3478 125.951 32.2884 125.413 32.2884H121.798C121.201 32.2884 120.712 31.8008 120.712 31.2049V29.3174L118.067 31.97C118.025 32.011 117.982 32.0475 117.936 32.0782C117.752 32.2141 117.529 32.2884 117.296 32.2884H111.591C106.896 32.2884 103.091 28.4883 103.091 23.8014V9.94186C103.091 9.34535 103.573 8.8616 104.17 8.8584L107.874 8.83916ZM86.5849 8.76235C86.934 8.7521 87.2748 8.88601 87.5199 9.13077L90.9642 12.5695C91.7369 13.341 91.2267 14.6948 90.1396 14.6948L88.7294 14.695C88.6721 14.695 88.6137 14.695 88.5542 14.695L85.8233 14.6956C85.7459 14.6956 85.6682 14.6956 85.5902 14.6957L82.9969 14.6963C82.92 14.6963 82.8435 14.6963 82.7674 14.6963L80.4822 14.6969C80.4221 14.6969 80.363 14.6969 80.3051 14.6969L78.5753 14.6974C77.1859 14.6974 76.0596 15.8212 76.0596 17.2084V23.9142C76.0596 25.3007 77.184 26.4233 78.5727 26.4252L90.2506 26.4233C90.8493 26.4233 91.3351 26.9083 91.3351 27.5067V31.205C91.3351 31.8028 90.8493 32.2885 90.2506 32.2885H78.2801C77.7327 32.2885 77.1987 32.234 76.6821 32.1321C72.9542 31.2332 70.1851 27.879 70.1851 23.8834V17.3186C70.1851 13.4339 72.8021 10.1559 76.3702 9.14807C76.9151 8.99621 77.4811 8.8969 78.0651 8.85397C78.2692 8.8386 78.4771 8.83155 78.6857 8.83155L78.7851 8.83124C78.8013 8.83119 78.8194 8.83113 78.8393 8.83106L78.9798 8.83059C80.269 8.82616 85.4088 8.80597 86.5849 8.76235ZM22.4089 0C23.0077 0 23.4941 0.485669 23.4941 1.08346V31.25C23.4941 31.3128 23.4896 31.3737 23.4768 31.432C23.3119 31.9087 22.8601 32.2534 22.3223 32.2534H18.7067C18.1099 32.2534 17.6215 31.7658 17.6215 31.1699V29.283L14.9762 31.935C14.9351 31.976 14.8915 32.0125 14.8459 32.0433C14.6617 32.1797 14.4378 32.2534 14.2061 32.2534H8.50033C3.80659 32.2534 0 28.4526 0 23.7664V17.2015C0 13.206 2.76888 9.85177 6.49744 8.95284C7.01404 8.85096 7.54733 8.7965 8.09474 8.7965H17.6196V1.08346C17.6196 0.485669 18.1054 0 18.7041 0H22.4089ZM31.2195 8.79727C31.8189 8.79727 32.3047 9.2823 32.3047 9.88073V31.1701C32.3047 31.7685 31.8189 32.2535 31.2195 32.2535H27.5153C26.9159 32.2535 26.4301 31.7685 26.4301 31.1701V9.88073C26.4301 9.2823 26.9159 8.79727 27.5153 8.79727H31.2195ZM66.4591 8.79727C67.0585 8.79727 67.5443 9.2823 67.5443 9.88073V31.1701C67.5443 31.7685 67.0585 32.2535 66.4591 32.2535H62.7549C62.1555 32.2535 61.6697 31.7685 61.6697 31.1701V9.88073C61.6697 9.2823 62.1555 8.79727 62.7549 8.79727H66.4591ZM144.612 14.6946H135.381V26.4231H144.61C145.999 26.4231 147.125 25.2986 147.125 23.9114V17.2056C147.125 15.8191 146.002 14.6965 144.612 14.6946ZM52.8605 14.6618H43.6289C42.2402 14.6618 41.1139 15.7869 41.1139 17.1734V23.8792C41.1139 25.2657 42.2376 26.3883 43.627 26.3902H52.8605V14.6618ZM17.6196 14.6598H8.38802C6.99864 14.6623 5.8743 15.7842 5.8743 17.1708V23.8772C5.8743 25.2638 7.00056 26.3882 8.38995 26.3882H17.6196V14.6598ZM66.4591 0.0356244C67.0585 0.0356244 67.5443 0.520653 67.5443 1.11909V4.81671C67.5443 5.41514 67.0585 5.90017 66.4591 5.90017H62.7549C62.1555 5.90017 61.6697 5.41514 61.6697 4.81671V1.11909C61.6697 0.520653 62.1555 0.0356244 62.7549 0.0356244H66.4591ZM31.2195 0.00089701C31.8189 0.00089701 32.3047 0.485925 32.3047 1.08436V4.78198C32.3047 5.38042 31.8189 5.86544 31.2195 5.86544H27.5153C26.9159 5.86544 26.4301 5.38042 26.4301 4.78198V1.08436C26.4301 0.485925 26.9159 0.00089701 27.5153 0.00089701H31.2195Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 6,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="23"
          viewBox="0 0 66 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.8597 3.3392C64.8265 3.46476 64.7542 3.77729 64.6601 4.18425C64.5941 4.46966 64.5173 4.80151 64.4358 5.14788L63.1499 11.3145C63.051 11.7702 62.9379 12.1547 62.7966 12.4965C62.6553 12.8383 62.4716 13.1232 62.2314 13.3368C61.9912 13.5647 61.7085 13.7213 61.3553 13.8352C61.002 13.9492 60.5781 14.0061 60.0553 14.0061C59.9119 14.0061 59.7805 13.994 59.639 13.981L59.6031 13.9777C58.6565 13.9695 57.5248 13.9847 56.6452 13.9965C55.9885 14.0053 55.4724 14.0122 55.2791 14.0061C54.6715 14.0061 54.1204 13.9349 53.6258 13.764C51.2236 13.0377 50.8421 10.0612 51.6051 7.95347C52.5095 5.17636 55.0106 3.83765 57.7661 4.69215C59.4052 5.1906 60.2813 6.70021 60.2531 8.42344C60.2441 8.50526 60.2446 8.61608 60.2453 8.74C60.2477 9.19852 60.251 9.83639 59.7726 9.8476H53.6541C53.4704 11.2148 54.1204 12.1832 55.6182 12.1547C55.6978 12.1547 56.8438 12.1398 57.9625 12.1252C59.0292 12.1113 60.0711 12.0978 60.14 12.0978C60.3096 12.0978 60.4368 12.0408 60.5357 11.9269C60.6346 11.8129 60.7053 11.6848 60.7759 11.5139C60.8324 11.3572 60.889 11.1863 60.9172 11.0154C60.9462 10.9084 60.9686 10.8146 60.9888 10.7296C60.9982 10.6902 61.0072 10.6527 61.0161 10.6166V10.5882L61.3412 9.03583H61.327C61.402 8.66508 61.4736 8.29101 61.5404 7.94236C61.6121 7.56782 61.6783 7.2226 61.7368 6.94232L60.8183 6.9708C60.5781 6.9708 60.4368 6.67173 60.6064 6.48659L62.2314 4.72063C62.3054 4.34765 62.3445 4.11924 62.3792 3.91669C62.4108 3.73255 62.4386 3.56978 62.4857 3.3392C62.7401 2.19987 63.8847 0.519365 64.2238 0.0351508C64.2521 -0.0218156 64.351 -0.00757398 64.3651 0.0636339C64.5064 0.533606 64.9021 1.91504 64.8879 2.96892V3.04013C64.8879 3.13977 64.8738 3.23955 64.8597 3.3392ZM57.0454 6.51507C56.0139 6.05934 54.7563 6.51507 54.2334 7.54047C54.1062 7.78257 53.9932 8.02468 53.8943 8.28103H57.8509C57.8509 7.61167 57.7096 6.82839 57.0454 6.51507Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M49.6692 3.12565H51.3225C51.5203 3.12565 51.6758 2.99747 51.7181 2.79809L52.0008 1.55907C52.0573 1.30272 51.8595 1.06062 51.6051 1.06062H49.9518C49.754 1.06062 49.5986 1.18879 49.5562 1.38817L49.2877 2.62719C49.217 2.88354 49.4007 3.12565 49.6692 3.12565Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M26.6929 5.93122L24.333 8.89347L26.707 11.8557C26.8342 12.0266 26.7211 12.2687 26.5092 12.2687H25.1668C25.0537 12.2687 24.9689 12.226 24.8983 12.1406L22.4961 9.13558V11.9127C22.4961 12.0978 22.3406 12.2545 22.1569 12.2545H21.2102C21.0265 12.2545 20.871 12.0978 20.871 11.9127V3.49591C20.871 3.31077 21.0265 3.15412 21.2102 3.15412H22.1569C22.3406 3.15412 22.4961 3.31077 22.4961 3.49591V8.60864L24.8841 5.64639C24.9548 5.56094 25.0537 5.51822 25.1526 5.51822H26.495C26.707 5.51822 26.82 5.77457 26.6929 5.93122Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M35.2984 3.16832H36.2451C36.443 3.16832 36.5843 3.31073 36.5843 3.49588V11.9269C36.5843 12.112 36.4288 12.2687 36.2451 12.2687H35.2984C35.1147 12.2687 34.9593 12.112 34.9593 11.9269V3.51012C34.9593 3.32498 35.1147 3.16832 35.2984 3.16832Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M8.11095 5.53243H9.05771C9.24141 5.53243 9.39684 5.67484 9.39684 5.87423V11.9269C9.39684 12.112 9.24141 12.2687 9.05771 12.2687H8.11095C7.92726 12.2687 7.77182 12.112 7.77182 11.9269V5.87423C7.77182 5.68909 7.92726 5.53243 8.11095 5.53243Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M9.05771 3.16832H8.11095C7.92726 3.16832 7.77182 3.32498 7.77182 3.51012V4.37885C7.77182 4.56399 7.92726 4.72065 8.11095 4.72065H9.05771C9.24141 4.72065 9.39684 4.56399 9.39684 4.37885V3.51012C9.39684 3.31073 9.24141 3.16832 9.05771 3.16832Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M18.497 5.53243H19.4438C19.6275 5.53243 19.7829 5.67484 19.7829 5.87423V11.9269C19.7829 12.112 19.6275 12.2687 19.4438 12.2687H18.497C18.3133 12.2687 18.1579 12.112 18.1579 11.9269V5.87423C18.1579 5.68909 18.3133 5.53243 18.497 5.53243Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M19.4438 3.16832H18.497C18.3133 3.16832 18.1579 3.32498 18.1579 3.51012V4.37885C18.1579 4.56399 18.3133 4.72065 18.497 4.72065H19.4438C19.6275 4.72065 19.7829 4.56399 19.7829 4.37885V3.51012C19.7829 3.31073 19.6275 3.16832 19.4438 3.16832Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.34466 3.16832H5.299C5.1153 3.16832 4.95986 3.32498 4.95986 3.51012V5.53242H2.45873C1.10219 5.53242 0 6.64327 0 8.01046V9.79066C0 11.1578 1.10219 12.2687 2.45873 12.2687H4.12615C4.32398 12.2687 4.49355 12.1832 4.62072 12.0266L4.97399 11.5709V11.9269C4.97399 12.112 5.12943 12.2687 5.31313 12.2687H6.35879C6.54249 12.2687 6.69793 12.112 6.69793 11.9269V3.49588C6.6838 3.31073 6.52836 3.16832 6.34466 3.16832ZM4.95986 10.5312H2.50113C2.06308 10.5312 1.70981 10.1752 1.70981 9.73369V8.05318C1.70981 7.61169 2.06308 7.25565 2.50113 7.25565H4.95986V10.5312Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.685 5.53243H16.7307C16.9285 5.53243 17.0698 5.68909 17.0839 5.87423V12.3399C17.0839 13.7071 15.9817 14.8179 14.6252 14.8179H13.3393C13.1415 14.8179 12.9578 14.7325 12.8447 14.5758L12.0958 13.5789C11.9686 13.4223 12.0958 13.1802 12.2936 13.1802H14.5687C15.0067 13.1802 15.36 12.8241 15.36 12.3826V12.2687H12.8447C11.4882 12.2687 10.386 11.1579 10.386 9.79066V8.01046C10.386 6.64327 11.4882 5.53243 12.8447 5.53243H14.5121C14.71 5.53243 14.8937 5.61788 15.0067 5.77453L15.3459 6.23027V5.87423C15.3459 5.68909 15.5013 5.53243 15.685 5.53243ZM12.9012 10.6309H15.36V7.25566H12.9012C12.4632 7.25566 12.1099 7.6117 12.1099 8.05319V9.83339C12.1099 10.2749 12.4632 10.6309 12.9012 10.6309Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.8474 5.53243H40.0463C38.6897 5.53243 37.5875 6.64327 37.5875 8.01046V9.79066C37.5875 11.1579 38.6897 12.2687 40.0463 12.2687H41.742C41.9398 12.2687 42.1235 12.169 42.2365 12.0124L42.5615 11.5709V11.9269C42.5615 12.112 42.717 12.2687 42.9007 12.2687H43.8474C44.0311 12.2687 44.1866 12.112 44.1866 11.9269V5.87423C44.1724 5.67484 44.0311 5.53243 43.8474 5.53243ZM42.5474 10.6309H39.9898C39.5517 10.6309 39.1984 10.2749 39.1984 9.83339V8.05319C39.1984 7.6117 39.5517 7.25566 39.9898 7.25566H42.5474V10.6309Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.6462 5.53243H33.4473C33.631 5.53243 33.7865 5.67484 33.7865 5.87423V11.9269C33.7865 12.112 33.631 12.2687 33.4473 12.2687H32.5006C32.3169 12.2687 32.1614 12.112 32.1614 11.9269V11.5709L31.8364 12.0124C31.7234 12.169 31.5397 12.2687 31.3418 12.2687H29.6462C28.2896 12.2687 27.1874 11.1579 27.1874 9.79066V8.01046C27.1874 6.64327 28.2896 5.53243 29.6462 5.53243ZM29.6038 10.6309H32.1614V7.25566H29.6038C29.1657 7.25566 28.8125 7.6117 28.8125 8.05319V9.83339C28.8125 10.2749 29.1657 10.6309 29.6038 10.6309Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M49.2454 4.52128H50.8845C51.1389 4.52128 51.3367 4.76339 51.2802 5.03398L49.5986 13.1374C49.4997 13.6217 49.3725 14.0347 49.2171 14.4049C49.0617 14.7752 48.8638 15.0743 48.6095 15.3022C48.3551 15.53 48.0301 15.7152 47.6627 15.8291C47.2812 15.943 46.829 16 46.2638 16C46.066 16 45.854 16 45.6562 15.9715C45.635 15.9715 45.6103 15.968 45.5856 15.9644C45.5608 15.9608 45.5361 15.9573 45.5149 15.9573C45.2747 15.9288 45.1051 15.7009 45.1616 15.4588L45.416 14.2625C45.4584 14.0631 45.6421 13.9207 45.8399 13.935H45.9388C46.0801 13.9492 46.2214 13.9492 46.3768 13.9492C46.5605 13.9492 46.7019 13.8922 46.8008 13.7641C46.9138 13.6359 46.9986 13.4792 47.0692 13.3083C47.1399 13.1232 47.1964 12.9523 47.2247 12.7672C47.247 12.6209 47.2782 12.5013 47.3042 12.4013C47.3111 12.3748 47.3177 12.3496 47.3236 12.3257V12.2972L48.8497 4.84884C48.878 4.6637 49.0475 4.52128 49.2454 4.52128Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M65.9478 6.52939L64.9021 4.67799L64.3934 7.17026H65.5804C65.8913 7.18451 66.1032 6.82847 65.9478 6.52939Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 7,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="23"
          viewBox="0 0 61 16"
          fill="none"
        >
          <path
            d="M0.5 11.5791C0.5 11.8036 0.587655 11.8935 0.806793 11.8935H2.77904C2.99817 11.8935 3.12966 11.8036 3.12966 11.5791L3.74324 6.10005L5.32104 11.624C5.32104 11.6689 5.36486 11.7138 5.40869 11.8036C5.45252 11.8486 5.54018 11.8935 5.584 11.8935H7.42476C7.46859 11.8935 7.55625 11.8486 7.60007 11.8036C7.6439 11.7587 7.68773 11.6689 7.68773 11.624L9.26552 6.10005L9.87911 11.5791C9.87911 11.8036 10.0106 11.8935 10.2297 11.8935H12.202C12.4211 11.8935 12.5088 11.8036 12.5088 11.624V11.5791C12.3335 9.91742 12.202 8.25574 12.0267 6.59407C11.8514 4.93239 11.676 3.31562 11.5446 1.60903C11.5446 1.51921 11.5007 1.42939 11.4131 1.38448C11.3254 1.33957 11.2816 1.29466 11.1939 1.29466H8.82725C8.65194 1.29466 8.52045 1.38449 8.47663 1.56413L6.59204 8.03119L4.70745 1.56413C4.66362 1.38449 4.53214 1.29466 4.35683 1.29466H1.81483C1.72717 1.29466 1.63952 1.33957 1.59569 1.38448C1.55186 1.42939 1.50804 1.51921 1.50804 1.60903L0.5 11.5791ZM22.6329 3.31562C22.6329 3.2258 22.6329 3.13598 22.5891 3.09107C22.5453 3.04616 22.5015 2.95634 22.4576 2.91143C22.4138 2.86652 22.3262 2.82161 22.2823 2.82161C22.1947 2.82161 22.1508 2.82161 22.107 2.82161H21.0552C20.9675 2.82161 20.8798 2.82161 20.836 2.82161C20.7922 2.82161 20.7484 2.86652 20.7045 2.91143C20.6607 2.95634 20.6169 3.00125 20.6169 3.09107C20.573 3.18089 20.5292 3.27071 20.4854 3.36053L20.2663 3.98927C20.1348 3.80963 20.0033 3.62999 19.828 3.49526C19.6527 3.31562 19.4774 3.18089 19.2582 3.09107C19.0391 2.95634 18.8199 2.86652 18.557 2.82161C18.294 2.7767 18.031 2.73179 17.7681 2.73179C17.1545 2.73179 16.5409 2.86652 16.015 3.09107C15.4452 3.31562 14.9631 3.6749 14.5687 4.07909C14.1742 4.48329 13.8236 4.9773 13.6045 5.56113C13.3853 6.14496 13.2538 6.7288 13.2538 7.40245C13.2538 7.85155 13.2977 8.25574 13.4291 8.65993C13.5168 9.06412 13.6921 9.4234 13.8674 9.78269C14.0427 10.142 14.3057 10.4563 14.5687 10.7258C14.8316 10.9953 15.1384 11.2647 15.489 11.4444C15.8397 11.624 16.1903 11.8036 16.5847 11.8935C16.9792 11.9833 17.3736 12.0731 17.8119 12.0731C18.031 12.0731 18.294 12.0282 18.5131 11.9833C18.7323 11.9384 18.9514 11.8486 19.1267 11.7587C19.302 11.6689 19.4774 11.5342 19.6527 11.4444C19.828 11.3096 19.9595 11.1749 20.0909 11.0851L20.1786 11.3995C20.2224 11.4893 20.2224 11.5342 20.2663 11.624C20.3101 11.7138 20.3101 11.7587 20.3539 11.8036C20.3977 11.8486 20.4416 11.8935 20.4854 11.8935C20.5292 11.9384 20.6169 11.9384 20.7045 11.9384H22.0632C22.107 11.9384 22.1947 11.9384 22.2385 11.9384C22.3261 11.9384 22.37 11.8935 22.4138 11.8486C22.4576 11.8036 22.5453 11.7587 22.5453 11.6689C22.5891 11.5791 22.5891 11.5342 22.5891 11.4444V3.31562H22.6329ZM15.9273 6.50425C16.015 6.23479 16.1465 5.96532 16.3218 5.78568C16.4971 5.56113 16.7162 5.4264 16.9792 5.29167C17.2421 5.15694 17.5051 5.11203 17.8119 5.11203C18.1187 5.11203 18.4255 5.15694 18.6885 5.29167C18.9514 5.4264 19.1706 5.56113 19.3897 5.78568C19.565 6.01023 19.7403 6.23479 19.8718 6.50425C20.0033 6.77371 20.0471 7.08808 20.0471 7.35754C20.0471 7.67191 20.0033 7.94137 19.8718 8.25574C19.7403 8.5252 19.6088 8.74976 19.3897 8.97431C19.2144 9.15395 18.9514 9.33359 18.6885 9.46832C18.4255 9.60305 18.1187 9.64796 17.8119 9.64796C17.5051 9.64796 17.2421 9.60305 16.9792 9.46832C16.7162 9.33359 16.5409 9.19886 16.3218 8.97431C16.1465 8.79467 16.015 8.5252 15.9273 8.25574C15.8397 7.98628 15.7958 7.67191 15.7958 7.35754C15.752 7.04317 15.8397 6.77371 15.9273 6.50425ZM30.3466 12.118C30.2151 12.2977 30.0398 12.4324 29.8207 12.5222C29.6454 12.612 29.4262 12.7019 29.2071 12.7917C28.9879 12.8366 28.7688 12.8815 28.5497 12.8815C28.4182 12.8815 28.2867 12.8815 28.1114 12.8815C27.9361 12.8815 27.8046 12.8366 27.6293 12.7917C27.454 12.7468 27.3225 12.7018 27.1472 12.612C27.0157 12.5222 26.8842 12.4324 26.7527 12.3426C26.6213 12.2078 26.4898 12.1629 26.3583 12.1629C26.3145 12.1629 26.2268 12.1629 26.183 12.2078C26.1392 12.2528 26.0515 12.2977 26.0077 12.3875L25.3503 13.3306C25.2626 13.4653 25.2188 13.6001 25.2188 13.6899C25.2188 13.7797 25.2626 13.8695 25.3064 13.9593C25.3503 14.0492 25.3941 14.0941 25.4817 14.139C25.7009 14.3186 25.92 14.4983 26.183 14.633C26.4459 14.7677 26.7089 14.9024 27.0157 14.9923C27.2787 15.0821 27.5855 15.1719 27.8923 15.2168C28.1991 15.2617 28.462 15.3066 28.6812 15.3066C29.3386 15.3066 29.9083 15.2168 30.4781 14.9923C31.0478 14.7677 31.5299 14.4983 31.9244 14.0941C32.3188 13.6899 32.6695 13.1959 32.8886 12.612C33.1077 12.0282 33.2392 11.3545 33.2392 10.636V3.31562C33.2392 3.2258 33.2392 3.13598 33.1954 3.09107C33.1516 3.04616 33.1077 2.95634 33.0639 2.91143C33.0201 2.86652 32.9324 2.82161 32.8886 2.82161C32.8448 2.7767 32.7571 2.7767 32.7133 2.7767H31.6614C31.5738 2.7767 31.4861 2.7767 31.4423 2.82161C31.3985 2.86652 31.3546 2.86652 31.3108 2.91143C31.267 2.95634 31.2232 3.00125 31.2232 3.09107C31.1793 3.13598 31.1793 3.2258 31.1355 3.31562L30.9602 3.94436C30.8287 3.76472 30.6534 3.58508 30.5219 3.45035C30.3466 3.31562 30.1713 3.13598 29.996 3.04616C29.8207 2.91143 29.6015 2.82161 29.3386 2.7767C29.1194 2.73179 28.8565 2.68688 28.5497 2.68688C27.9361 2.68688 27.3663 2.82161 26.7966 3.04616C26.2706 3.27071 25.7885 3.63 25.3941 4.03419C24.9996 4.43838 24.6928 4.93239 24.4737 5.51622C24.2546 6.10005 24.1669 6.68389 24.1669 7.35754C24.1669 8.03119 24.2546 8.61502 24.4737 9.15395C24.6928 9.69287 24.9996 10.1869 25.3941 10.5462C25.7885 10.9504 26.2268 11.2647 26.7966 11.4444C27.3225 11.6689 27.8923 11.7587 28.5497 11.7587C28.8126 11.7587 29.0756 11.7138 29.2947 11.6689C29.5139 11.5791 29.6892 11.4893 29.8645 11.3995C30.0398 11.3096 30.1713 11.1749 30.3466 11.0402C30.4781 10.9054 30.6096 10.7707 30.7411 10.5911C30.7411 10.636 30.7411 10.6809 30.7411 10.6809V10.7258V10.7707C30.7411 10.7707 30.7411 10.8156 30.7411 10.8605C30.7411 10.9953 30.7411 11.0851 30.7411 11.2198C30.7411 11.3545 30.6972 11.4444 30.6972 11.5342C30.6096 11.7587 30.5219 11.9384 30.3466 12.118ZM26.8404 6.45934C26.928 6.18987 27.0595 5.96532 27.2348 5.74077C27.4102 5.51622 27.6293 5.38149 27.8923 5.24676C28.1552 5.11203 28.4182 5.06712 28.725 5.06712C29.0318 5.06712 29.2947 5.11203 29.5577 5.24676C29.8207 5.38149 30.0398 5.51622 30.2589 5.69586C30.4343 5.8755 30.6096 6.10005 30.7411 6.36952C30.8725 6.63898 30.9164 6.90844 30.9602 7.1779V7.40245C30.9602 7.71682 30.8725 7.98628 30.7411 8.25574C30.6096 8.5252 30.4781 8.74975 30.2589 8.9294C30.0836 9.10904 29.8207 9.28868 29.5577 9.3785C29.2947 9.46832 29.0318 9.55814 28.725 9.55814C28.4182 9.55814 28.1552 9.51323 27.8923 9.3785C27.6293 9.24377 27.454 9.10904 27.2348 8.9294C27.0595 8.74975 26.928 8.48029 26.8404 8.21083C26.7527 7.94137 26.7089 7.627 26.7089 7.31263C26.7089 7.04316 26.7527 6.7288 26.8404 6.45934ZM35.1676 2.95634C35.08 3.00125 35.0362 3.04616 34.9923 3.13598C34.9485 3.2258 34.9485 3.31562 34.9485 3.40544V11.3545C34.9485 11.5342 34.9923 11.6689 35.08 11.7587C35.1676 11.8486 35.2991 11.8935 35.5183 11.8935H37.0961C37.1837 11.8935 37.2275 11.8935 37.2714 11.8935C37.3152 11.8935 37.4029 11.8486 37.4467 11.8036C37.4905 11.7587 37.5343 11.7138 37.5782 11.624C37.622 11.5342 37.622 11.4444 37.622 11.3995V6.77371C37.622 6.54915 37.7096 6.36951 37.7973 6.18987C37.885 6.01023 38.0164 5.83059 38.1479 5.69586C38.2794 5.56113 38.4547 5.47131 38.63 5.38149C38.8053 5.29167 38.9806 5.24676 39.156 5.24676C39.3313 5.24676 39.5504 5.29167 39.7257 5.38149C39.901 5.47131 40.0763 5.56113 40.2078 5.69586C40.3393 5.83059 40.4708 6.01023 40.5584 6.18987C40.6461 6.36951 40.6899 6.54915 40.6899 6.77371V11.3995C40.6899 11.5791 40.7337 11.7138 40.8214 11.8036C40.9091 11.8935 41.0405 11.8935 41.2159 11.8935H42.8375C43.0128 11.8935 43.1443 11.8486 43.1881 11.7587C43.2757 11.6689 43.3196 11.5342 43.3196 11.3545V6.68389C43.3196 6.14496 43.2319 5.60604 43.1004 5.15694C42.969 4.66293 42.7498 4.25874 42.443 3.89946C42.1362 3.54017 41.7856 3.27071 41.3912 3.04616C40.9967 2.82161 40.5146 2.73179 39.9887 2.73179C39.6381 2.73179 39.2874 2.7767 38.9806 2.86652C38.6739 2.95634 38.4109 3.04616 38.1917 3.18089C37.9726 3.31562 37.7535 3.45036 37.622 3.58509C37.4467 3.71982 37.359 3.89946 37.2714 4.03419L37.1399 3.40544C37.0961 3.31562 37.0961 3.27071 37.0522 3.18089C37.0084 3.13598 37.0084 3.04616 36.9646 3.00125C36.9207 2.95634 36.8769 2.91143 36.8331 2.86652C36.7893 2.82161 36.7016 2.82161 36.614 2.82161H35.5621C35.5183 2.82161 35.4306 2.82161 35.3868 2.82161C35.2553 2.86652 35.2115 2.91143 35.1676 2.95634ZM52.5672 10.5911C52.611 10.5013 52.6549 10.4563 52.6549 10.3665C52.6549 10.3216 52.6549 10.2767 52.6549 10.2318C52.6549 10.1869 52.611 10.142 52.5672 10.0522L51.8221 9.19886C51.7345 9.10904 51.6906 9.06413 51.603 9.01921C51.5592 8.9743 51.4715 8.97431 51.4277 8.97431C51.3839 8.97431 51.2962 8.9743 51.2524 9.01921C51.2085 9.06413 51.1209 9.10904 51.0771 9.15395C50.9894 9.24377 50.9018 9.33359 50.7264 9.3785C50.595 9.46832 50.4197 9.51323 50.2882 9.60305C50.1129 9.64796 49.9375 9.69287 49.7622 9.73778C49.5869 9.78269 49.4116 9.78269 49.2363 9.78269C49.061 9.78269 48.8419 9.73778 48.6665 9.69287C48.4474 9.64796 48.2721 9.55814 48.0968 9.42341C47.9215 9.28868 47.7462 9.15395 47.6147 8.9294C47.4832 8.70484 47.3955 8.4803 47.3517 8.16592H52.3481C52.6549 8.16592 52.874 8.16592 53.0055 8.12101C53.137 8.0761 53.2684 8.03119 53.3123 7.94137C53.3561 7.85155 53.3999 7.71682 53.3999 7.58209C53.3999 7.44736 53.3999 7.22281 53.3999 6.99826C53.3999 6.45933 53.3561 6.3246 53.2246 5.8755C53.137 5.51622 52.9617 5.20185 52.7863 4.88748C52.611 4.57311 52.3481 4.30365 52.0851 4.03419C51.8221 3.76473 51.5153 3.54018 51.2085 3.36053C50.9018 3.18089 50.5511 3.04616 50.2005 2.91143C49.8499 2.82161 49.4554 2.7767 49.061 2.7767C48.6227 2.7767 48.2283 2.82161 47.8776 2.95634C47.4832 3.09107 47.1326 3.2258 46.8258 3.45035C46.519 3.6749 46.2122 3.89945 45.9492 4.16891C45.6863 4.43837 45.4671 4.75275 45.2918 5.11203C45.1165 5.47131 44.985 5.83059 44.8535 6.18987C44.7659 6.59406 44.7221 6.99826 44.7221 7.40245C44.7221 8.0761 44.8535 8.70484 45.1165 9.24376C45.3795 9.8276 45.6863 10.3216 46.1245 10.7258C46.5628 11.13 47.0449 11.4893 47.6147 11.7138C48.1844 11.9384 48.798 12.0731 49.4116 12.0731C49.9814 12.0731 50.5073 11.9833 51.0332 11.7587C51.5592 11.5342 51.9974 11.2647 52.3919 10.8605C52.4357 10.7258 52.5234 10.6809 52.5672 10.5911ZM49.6746 4.9773C49.8499 5.02221 50.0252 5.15694 50.1567 5.24676C50.2882 5.38149 50.4196 5.51622 50.5511 5.65095C50.6826 5.78568 50.7703 5.96532 50.8579 6.14497H47.3079C47.3955 5.96532 47.4832 5.83059 47.6147 5.65095C47.7462 5.51622 47.8776 5.33658 48.0091 5.24676C48.1406 5.11203 48.3159 5.02221 48.4912 4.93239C48.6665 4.84257 48.8419 4.84257 49.0172 4.84257C49.2801 4.84257 49.4993 4.88748 49.6746 4.9773ZM55.5913 2.82161H54.0573C53.7067 2.82161 53.5314 3.00125 53.5314 3.36053V4.75275C53.5314 5.15694 53.7067 5.33658 54.0573 5.33658H55.5913V11.3545C55.5913 11.7138 55.7666 11.8935 56.1172 11.8935H57.695C57.8703 11.8935 58.0018 11.8486 58.1333 11.7587C58.221 11.6689 58.2648 11.5342 58.2648 11.3545V5.33658H60.0179C60.1494 5.33658 60.2809 5.29167 60.3685 5.20185C60.4562 5.11203 60.5 4.9773 60.5 4.75275V3.36053C60.5 3.18089 60.4562 3.04616 60.3685 2.95634C60.2809 2.86652 60.1494 2.82161 60.0179 2.82161H58.2648V0.845562C58.2648 0.665921 58.221 0.531193 58.1771 0.441373C58.1333 0.351552 58.0018 0.306641 57.8265 0.306641H57.7827C57.7827 0.306641 57.7389 0.306641 57.695 0.306641L56.1172 0.890474C55.9419 0.935385 55.8104 1.02521 55.7228 1.11503C55.6351 1.20485 55.5913 1.29466 55.5913 1.4294V2.82161Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 8,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="20"
          viewBox="0 0 100 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M75.4657 6.73063C75.4657 6.18138 75.9136 5.73324 76.4624 5.73324H79.4797C79.7962 5.73324 80.0538 5.99096 80.0538 6.30947C80.0538 6.62621 79.7962 6.88393 79.4797 6.88393H75.4657V6.73063ZM76.4945 9.04723C76.5736 9.12646 76.6814 9.17195 76.7942 9.17195H79.4224C81.0236 9.17195 82.3672 7.86112 82.3386 6.25884C82.3116 4.70366 81.0388 3.44678 79.4797 3.44678H76.4624C74.9572 3.44678 73.6861 4.46446 73.3005 5.85113C73.2231 6.13074 73.1809 6.42566 73.1809 6.73056V9.32693C73.1809 11.1381 74.6525 12.6107 76.4624 12.6107H80.7745C81.0084 12.6107 81.197 12.4221 81.197 12.1878V10.7473C81.197 10.513 81.0084 10.3244 80.7745 10.3244H76.4624C75.9136 10.3244 75.4657 9.87619 75.4657 9.32693V8.01949L76.4945 9.04723Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M89.331 3.44005H87.0917C86.9789 3.44005 86.8728 3.48385 86.7937 3.56308L85.748 4.5975V0.479766C85.748 0.21689 85.5343 0.00127986 85.2716 0.00127986H83.9381C83.7277 0.00127986 83.5508 0.136057 83.4886 0.323089C83.4818 0.344988 83.4801 0.368578 83.4801 0.392169V12.1878C83.4801 12.422 83.6721 12.6124 83.9044 12.6124H85.3541C85.5882 12.6124 85.7784 12.422 85.7784 12.1878V10.3193H85.7733V5.718H89.3866C89.927 5.718 90.3665 6.15776 90.3665 6.70025V12.1895C90.3665 12.422 90.5567 12.6124 90.7908 12.6124H92.2236C92.4576 12.6124 92.6462 12.422 92.6462 12.1895V6.75749C92.6462 4.92607 91.1611 3.44005 89.331 3.44005Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.0201 6.75371V12.1822C72.0201 12.4163 71.8288 12.6079 71.5948 12.6079H70.1642C69.9299 12.6079 69.7385 12.4163 69.7385 12.1822V6.70045C69.7385 6.1577 69.3025 5.71591 68.7601 5.71591H67.2977C67.4094 6.04059 67.4681 6.39183 67.4681 6.75371V12.1822C67.4681 12.4163 67.2764 12.6079 67.0424 12.6079H65.6119C65.3778 12.6079 65.1916 12.4163 65.1916 12.1822V6.70045C65.1916 6.16827 64.7663 5.73189 64.2397 5.72124C64.2293 5.71591 64.2184 5.71591 64.2079 5.71591H62.8952V12.1822C62.8952 12.4163 62.709 12.6079 62.475 12.6079H61.0231C60.7944 12.6079 60.6029 12.4163 60.6029 12.1822V3.83198C60.6029 3.80526 60.6029 3.78404 60.6084 3.76265C60.6723 3.57646 60.8476 3.44346 61.0602 3.44346H62.3898C62.6558 3.44346 62.8687 3.65628 62.8687 3.91704V4.59829L63.9111 3.56581C63.9908 3.48591 64.0972 3.44346 64.2089 3.44346H64.1356C64.2631 3.44346 64.41 3.44879 64.5375 3.46469H64.543C65.3033 3.55516 65.9894 3.90115 66.5054 4.41734C66.5374 4.44922 66.5639 4.48127 66.5907 4.51306L67.5478 3.56581C67.6275 3.48591 67.734 3.44346 67.8457 3.44346H68.7068C70.5363 3.44346 72.0201 4.92289 72.0201 6.75371Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.0891 3.44607H97.4087C97.3182 3.44607 97.2311 3.47491 97.1591 3.52826C97.1413 3.5401 97.1245 3.55447 97.1092 3.56969L97.1084 3.57062L96.0778 4.60606V3.86943C96.0778 3.70861 95.9882 3.56893 95.8562 3.49697C95.8207 3.47744 95.7808 3.46307 95.7402 3.45461C95.7123 3.44954 95.6835 3.44607 95.6548 3.44607H94.2105C94.0319 3.44607 93.8797 3.55625 93.818 3.71284C93.7984 3.76103 93.7874 3.81439 93.7874 3.86943V12.189C93.7874 12.4228 93.9769 12.6124 94.2105 12.6124H95.6548C95.8884 12.6124 96.0778 12.4228 96.0778 12.189V6.16141C96.0778 5.92771 96.2672 5.73805 96.5009 5.73805H99.0891C99.3228 5.73805 99.5122 5.54857 99.5122 5.31478V3.86943C99.5122 3.63573 99.3228 3.44607 99.0891 3.44607Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.7321 12.1154C29.7321 12.3746 29.5202 12.5867 29.2611 12.5867H27.9124C27.6512 12.5867 27.4414 12.3746 27.4414 12.1154V0.471693C27.4414 0.212538 27.6512 0.000309643 27.9124 0.000309643H29.3096C29.542 0.000309643 29.7321 0.190554 29.7321 0.423075V12.1154Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.1676 12.1155C49.1676 12.3746 48.9556 12.5868 48.6966 12.5868H47.3479C47.0868 12.5868 46.877 12.3746 46.877 12.1155V0.471734C46.877 0.212495 47.0868 0.000350928 47.3479 0.000350928H48.7451C48.9774 0.000350928 49.1676 0.190595 49.1676 0.423116V12.1155Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.86015 10.2977H3.26658C2.72581 10.2977 2.28728 9.85888 2.28728 9.31774V6.70082C2.28728 6.15968 2.72497 5.7217 3.26573 5.72085H6.86015V10.2977ZM8.72496 0H7.28263C7.04942 0 6.86015 0.189399 6.86015 0.422765V3.43285H3.15166C2.93874 3.43285 2.73088 3.45399 2.52978 3.49373C1.07816 3.84463 0 5.15351 0 6.71267V9.27462C0 11.1035 1.48204 12.5866 3.30967 12.5866H5.53105C5.62145 12.5866 5.70849 12.5578 5.78031 12.5046C5.79805 12.4927 5.81495 12.4783 5.83016 12.4631L5.831 12.4623L6.861 11.4273V12.1638C6.861 12.3963 7.05111 12.5866 7.28347 12.5866H8.69116C8.90071 12.5866 9.07646 12.4521 9.14067 12.2661C9.14574 12.2433 9.14743 12.2196 9.14743 12.1951V0.422765C9.14743 0.189399 8.95816 0 8.72496 0Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.4482 10.312H39.8428C39.302 10.312 38.8635 9.87321 38.8635 9.33207V6.70078C38.8635 6.15964 39.3012 5.72165 39.8419 5.72081H43.4482V10.312ZM45.313 3.43285H39.7397C39.5268 3.43285 39.3189 3.45399 39.1178 3.49373C37.6662 3.84463 36.588 5.15351 36.588 6.71267V9.27462C36.588 11.1035 38.0701 12.5866 39.8977 12.5866H42.1317C42.2433 12.5866 42.3506 12.5426 42.4292 12.464L43.4718 11.4316V12.1097C43.4718 12.3718 43.6865 12.5866 43.9484 12.5866H45.2792C45.4887 12.5866 45.6645 12.4521 45.7287 12.2661C45.7338 12.2433 45.7355 12.2196 45.7355 12.1951V3.85562C45.7355 3.62225 45.5462 3.43285 45.313 3.43285Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.1702 10.312H53.5648C53.0241 10.312 52.5855 9.87321 52.5855 9.33207V6.70078C52.5855 6.15964 53.0232 5.72165 53.564 5.72081H57.1702V10.312ZM59.035 3.43285H53.4617C53.2488 3.43285 53.0409 3.45399 52.8398 3.49373C51.3882 3.84463 50.3101 5.15351 50.3101 6.71267V9.27462C50.3101 11.1035 51.7913 12.5866 53.6197 12.5866H55.8538C55.9653 12.5866 56.0718 12.5426 56.1512 12.464L57.1939 11.4316V12.1097C57.1939 12.3718 57.4076 12.5866 57.6704 12.5866H59.0012C59.2108 12.5866 59.3865 12.4521 59.4507 12.2661C59.4558 12.2433 59.4575 12.2196 59.4575 12.1951V3.85562C59.4575 3.62225 59.2682 3.43285 59.035 3.43285Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5813 10.2986H16.986C16.4452 10.2978 16.0076 9.85982 16.0076 9.31868V6.70176C16.0076 6.16062 16.4461 5.72179 16.9869 5.72179H20.5813V10.2986ZM22.861 3.7601C22.7968 3.57408 22.621 3.43964 22.4115 3.43964H21.0038C20.7706 3.43964 20.5813 3.62904 20.5813 3.86241V4.57688L20.5745 4.56843L19.5699 3.56309C19.5023 3.49545 19.3679 3.43964 19.2716 3.43964H17.03C15.2023 3.43964 13.7211 4.92186 13.7211 6.75074V9.31354C13.7211 10.8727 14.7993 12.1816 16.2509 12.5325C16.452 12.5722 16.6599 12.5934 16.8728 12.5934H20.5813V12.6483C20.5813 12.8293 20.545 13.0102 20.4579 13.1692C20.272 13.5099 19.9104 13.7407 19.4947 13.7407H16.6785C16.0853 13.7407 15.7837 14.4569 16.2011 14.8788C16.5272 15.2111 16.8593 15.5502 17.1043 15.8005C17.2319 15.929 17.4017 16 17.5817 16H19.5023C19.9062 16 20.2923 15.9298 20.6489 15.8005C21.9543 15.327 22.8677 14.0654 22.8677 12.5841V3.83112C22.8677 3.8066 22.866 3.78293 22.861 3.7601Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5778 3.85579V12.164C12.5778 12.3974 12.3886 12.5867 12.1553 12.5867H10.713C10.4796 12.5867 10.2905 12.3974 10.2905 12.164V3.85579C10.2905 3.62234 10.4796 3.43303 10.713 3.43303H12.1553C12.3886 3.43303 12.5778 3.62234 12.5778 3.85579Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5778 0.423137V1.86612C12.5778 2.09957 12.3886 2.28888 12.1553 2.28888H10.713C10.4796 2.28888 10.2905 2.09957 10.2905 1.86612V0.423137C10.2905 0.189686 10.4796 0.000371571 10.713 0.000371571H12.1553C12.3886 0.000371571 12.5778 0.189686 12.5778 0.423137Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.2984 3.85579V12.164C26.2984 12.3974 26.1092 12.5867 25.8759 12.5867H24.4335C24.2002 12.5867 24.0111 12.3974 24.0111 12.164V3.85579C24.0111 3.62234 24.2002 3.43303 24.4335 3.43303H25.8759C26.1092 3.43303 26.2984 3.62234 26.2984 3.85579Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.2984 0.423137V1.86612C26.2984 2.09957 26.1092 2.28888 25.8759 2.28888H24.4335C24.2002 2.28888 24.0111 2.09957 24.0111 1.86612V0.423137C24.0111 0.189686 24.2002 0.000371571 24.4335 0.000371571H25.8759C26.1092 0.000371571 26.2984 0.189686 26.2984 0.423137Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.7321 7.77347C30.1914 7.28095 33.0116 4.4929 33.8436 3.59571C33.9368 3.49678 34.0678 3.43962 34.2032 3.43962H36.0988C36.5248 3.43962 36.7575 3.95371 36.4582 4.25319C35.2925 5.41977 32.6632 8.01318 32.6632 8.01318L36.4597 11.8479C36.7348 12.1205 36.5399 12.5867 36.1508 12.5867H34.1721C34.0367 12.5867 33.9058 12.5296 33.8125 12.4306C32.9738 11.5291 30.1737 8.763 29.7321 8.28798V7.77347Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 9,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="20"
          viewBox="0 0 85 20"
          fill="none"
        >
          <g clip-path="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.58102 12.872H4.08601C3.4096 12.872 2.86106 12.3234 2.86106 11.6469L2.86106 8.3758C2.86106 7.69949 3.40854 7.15191 4.08496 7.15085H8.58102V12.872ZM10.9136 -3.8147e-06H9.10944C8.81773 -3.8147e-06 8.58099 0.236742 8.58099 0.528446V4.29112H3.94224C3.6759 4.29112 3.41591 4.31755 3.16436 4.36712C1.34861 4.80584 0 6.44181 0 8.39085L0 11.5932C0 13.8792 1.85381 15.733 4.13988 15.733H6.91848C7.03157 15.733 7.14043 15.6971 7.23027 15.6306C7.25246 15.6157 7.2736 15.5978 7.29262 15.5787L7.29368 15.5778L8.58204 14.284V15.2046C8.58204 15.4952 8.81985 15.733 9.11049 15.733H10.8713C11.1334 15.733 11.3532 15.565 11.4336 15.3325C11.4399 15.304 11.442 15.2743 11.442 15.2437L11.442 0.528446C11.442 0.236742 11.2053 -3.8147e-06 10.9136 -3.8147e-06ZM25.7443 12.8735L21.2472 12.8735C20.5708 12.8724 20.0233 12.325 20.0233 11.6486V8.37744C20.0233 7.70103 20.5719 7.15239 21.2483 7.15239H25.7443V12.8735ZM28.0335 4.29972H26.2727C25.981 4.29972 25.7443 4.53636 25.7443 4.82817V5.72125L25.7358 5.71058L24.4792 4.45403C24.3946 4.36948 24.2266 4.29972 24.1061 4.29972H21.3021C19.016 4.29972 17.1633 6.15247 17.1633 8.43855V11.642C17.1633 13.5909 18.5119 15.227 20.3277 15.6656C20.5792 15.7153 20.8392 15.7417 21.1055 15.7417L25.7443 15.7417V15.8104C25.7443 16.0366 25.6988 16.2627 25.59 16.4614C25.3575 16.8873 24.9051 17.176 24.3851 17.176H20.8625C20.1205 17.176 19.7432 18.0712 20.2653 18.5985C20.6733 19.0139 21.0886 19.4376 21.3951 19.7505C21.5547 19.9112 21.7672 20 21.9923 20H24.3946C24.8998 20 25.3828 19.9123 25.8288 19.7505C27.4618 19.1587 28.6043 17.5818 28.6043 15.73V4.78907C28.6043 4.75842 28.6022 4.72872 28.5958 4.70029C28.5155 4.46777 28.2957 4.29972 28.0335 4.29972ZM13.4007 4.29152L15.2048 4.29152C15.4967 4.29152 15.7332 4.52805 15.7332 4.81997L15.7332 15.2051C15.7332 15.4969 15.4967 15.7335 15.2048 15.7335H13.4007C13.1087 15.7335 12.8722 15.4969 12.8722 15.2051L12.8722 4.81997C12.8722 4.52805 13.1087 4.29152 13.4007 4.29152ZM15.2048 0.000818253H13.4007C13.1087 0.000818253 12.8722 0.237354 12.8722 0.52927V2.33287C12.8722 2.62479 13.1087 2.86132 13.4007 2.86132H15.2048C15.4967 2.86132 15.7332 2.62479 15.7332 2.33287V0.52927C15.7332 0.237354 15.4967 0.000818253 15.2048 0.000818253ZM30.563 4.29152H32.3671C32.659 4.29152 32.8956 4.52805 32.8956 4.81997V15.2051C32.8956 15.4969 32.659 15.7335 32.3671 15.7335H30.563C30.271 15.7335 30.0345 15.4969 30.0345 15.2051V4.81997C30.0345 4.52805 30.271 4.29152 30.563 4.29152ZM52.0163 8.58192C51.7245 8.58192 51.4879 8.81846 51.4879 9.11037V10.9145C51.4879 11.2064 51.7245 11.443 52.0163 11.443H58.1109C58.4027 11.443 58.6393 11.2064 58.6393 10.9145V9.11037C58.6393 8.81846 58.4027 8.58192 58.1109 8.58192H52.0163ZM30.563 0.000818253H32.3671C32.659 0.000818253 32.8956 0.237354 32.8956 0.52927V2.33287C32.8956 2.62479 32.659 2.86132 32.3671 2.86132H30.563C30.271 2.86132 30.0345 2.62479 30.0345 2.33287V0.52927C30.0345 0.237354 30.271 0.000818253 30.563 0.000818253ZM41.6277 4.29102H38.8491C38.736 4.29102 38.6272 4.32695 38.5374 4.39354C38.5152 4.40833 38.494 4.4263 38.475 4.44533L38.4739 4.44638L37.1818 5.74003L37.1856 4.81947C37.1856 4.52882 36.9478 4.29102 36.6571 4.29102H34.8963C34.6342 4.29102 34.4144 4.45907 34.3341 4.69158C34.3277 4.72012 34.3256 4.74971 34.3256 4.78036V15.3156C34.3256 15.5461 34.5126 15.733 34.7431 15.733L36.7643 15.733C36.9949 15.733 37.1818 15.5461 37.1818 15.3156V7.15195H41.6816C42.3582 7.15195 42.9066 7.70048 42.9066 8.377V15.3156C42.9066 15.5461 43.0936 15.733 43.3241 15.733H45.3385C45.5691 15.733 45.756 15.5461 45.756 15.3156C45.7634 15.2796 45.7676 15.2426 45.7676 15.2046V8.4309C45.7676 6.14451 43.9141 4.29102 41.6277 4.29102ZM77.7617 4.29102H83.8537C84.1455 4.29102 84.3822 4.52755 84.3822 4.81947V6.61726C84.3822 6.90907 84.1455 7.14571 83.8537 7.14571H80.0933V15.3156C80.0933 15.5461 79.9063 15.733 79.6758 15.733H77.655C77.4244 15.733 77.2375 15.5461 77.2375 15.3156V7.15195L70.0255 7.15195C69.8643 7.15195 69.7119 7.22572 69.6117 7.35191L67.4999 10.0117L71.3249 14.8298C71.5893 15.1629 71.4018 15.7325 71.0278 15.732L68.6684 15.7293C68.5573 15.7292 68.4508 15.6735 68.3722 15.5746L65.7279 12.2437L63.0833 15.5745C63.0051 15.6739 62.8983 15.7288 62.7873 15.7298L60.4273 15.732C60.42 15.732 60.4131 15.7311 60.4061 15.7302C60.4021 15.7297 60.3981 15.7292 60.3941 15.7288H51.2964C49.0336 15.7288 47.1998 13.8951 47.1998 11.6323V8.3918C47.1998 8.01237 47.2516 7.64351 47.3489 7.29473C47.8298 5.56564 49.4172 4.29419 51.2974 4.29419H58.1102C58.4019 4.29419 58.6387 4.53094 58.6387 4.82264V6.61937C58.6387 6.91108 58.4019 7.14782 58.1102 7.14782H51.2974C50.6105 7.14782 50.0535 7.70481 50.0535 8.3918V11.6312C50.0535 12.315 50.6136 12.8752 51.2974 12.8752H61.6819L63.9556 10.0114L60.1307 5.1934C59.8664 4.86058 60.0536 4.29134 60.4273 4.29134H62.7846C62.8959 4.29134 63.0026 4.34693 63.0813 4.44617L65.7278 7.77954L68.3741 4.44638C68.4534 4.34703 68.5601 4.29102 68.6711 4.29102L75.5697 4.29102C75.6828 4.29102 75.7917 4.32695 75.8815 4.39354C75.9037 4.40833 75.9249 4.4263 75.9439 4.44533L75.9449 4.44638L77.2375 5.74003L77.2333 4.81947C77.2333 4.52882 77.4711 4.29102 77.7617 4.29102Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="84.3822" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 10,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="25"
          viewBox="0 0 97 16"
          fill="none"
        >
          <g clip-path="url(#clip0)">
            <g clip-path="url(#clip1)">
              <path
                d="M12.2912 3.18286H10.9555C10.6925 3.18286 10.4822 3.39321 10.4822 3.65616V12.1018C10.4822 12.3648 10.6925 12.5751 10.9555 12.5751H12.2912C12.5542 12.5751 12.7645 12.3648 12.7645 12.1018V3.65616C12.7645 3.39321 12.5542 3.18286 12.2912 3.18286Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M12.249 -0.119629H10.9132C10.6503 -0.119629 10.4399 0.0907244 10.4399 0.353666V1.5632C10.4399 1.82614 10.6503 2.03649 10.9132 2.03649H12.249C12.5119 2.03649 12.7223 1.82614 12.7223 1.5632V0.353666C12.7223 0.0907244 12.5119 -0.119629 12.249 -0.119629Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M26.164 3.18286H24.8283C24.5653 3.18286 24.355 3.39321 24.355 3.65616V12.1018C24.355 12.3648 24.5653 12.5751 24.8283 12.5751H26.164C26.427 12.5751 26.6373 12.3648 26.6373 12.1018V3.65616C26.6373 3.39321 26.427 3.18286 26.164 3.18286Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M26.164 -0.119629H24.8283C24.5653 -0.119629 24.355 0.0907244 24.355 0.353666V1.5632C24.355 1.82614 24.5653 2.03649 24.8283 2.03649H26.164C26.427 2.03649 26.6373 1.82614 26.6373 1.5632V0.353666C26.6373 0.0907244 26.427 -0.119629 26.164 -0.119629Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M47.3781 12.5752H45.4849C45.3376 12.5752 45.2009 12.512 45.1168 12.3964L42.9081 9.64073L40.6993 12.3964C40.6047 12.512 40.4785 12.5752 40.3312 12.5752H38.4486C38.1541 12.5752 37.9963 12.2386 38.1751 12.0072L41.4987 7.87376L38.1751 3.74032C37.9858 3.50893 38.1541 3.17236 38.4486 3.17236H40.3418C40.489 3.17236 40.6152 3.23547 40.7099 3.35116L42.9186 6.06472L45.1273 3.35116C45.222 3.23547 45.3482 3.17236 45.4954 3.17236H47.3886C47.6831 3.17236 47.8408 3.50893 47.662 3.74032L44.3385 7.87376L47.662 12.0072C47.8303 12.2386 47.6726 12.5752 47.3781 12.5752Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M8.87284 -0.119629H7.41088C7.14794 -0.119629 6.93759 0.0907244 6.93759 0.353666V3.18292H3.41417C1.51047 3.18292 -0.0461426 4.72901 -0.0461426 6.64323V9.1254C-0.0461426 11.0396 1.49996 12.5857 3.41417 12.5857H5.75961C6.03307 12.5857 6.28549 12.4595 6.44326 12.2491L6.92707 11.6181V12.1019C6.92707 12.3648 7.13742 12.5752 7.40036 12.5752H8.86232C9.12526 12.5752 9.33562 12.3648 9.33562 12.1019V0.353666C9.34613 0.0907244 9.13578 -0.119629 8.87284 -0.119629ZM6.92707 10.1666H3.46676C2.85674 10.1666 2.35188 9.67232 2.35188 9.05178V6.70634C2.35188 6.09631 2.84622 5.59146 3.46676 5.59146H6.92707V10.1666Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M22.7456 3.18288H21.2837C21.0207 3.18288 20.8104 3.39324 20.8104 3.65618V4.1505L20.3371 3.51944C20.1688 3.29857 19.9164 3.17236 19.6429 3.17236H17.287C15.3728 3.17236 13.8267 4.71846 13.8267 6.63268V9.11484C13.8267 11.0185 15.3728 12.5752 17.287 12.5752H20.8104V12.7329C20.8104 13.3429 20.3161 13.8478 19.6955 13.8478H16.4876C16.2037 13.8478 16.0354 14.1738 16.2142 14.4052L17.2554 15.783C17.4237 16.0039 17.6761 16.1301 17.9496 16.1301H19.7586C21.6728 16.1301 23.2189 14.584 23.2189 12.6698V3.64566C23.2189 3.39323 23.0086 3.18288 22.7456 3.18288ZM20.8104 10.2928H17.3501C16.7401 10.2928 16.2352 9.7985 16.2352 9.17795V6.7063C16.2352 6.09628 16.7295 5.59143 17.3501 5.59143H20.8104V10.2928Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M54.5933 3.18286H52.2374C51.9639 3.18286 51.7115 3.30907 51.5432 3.52994L51.0699 4.161V3.66667C51.0699 3.40373 50.8596 3.19338 50.5966 3.19338H49.1347C48.8717 3.19338 48.6614 3.40373 48.6614 3.66667V7.22164V15.6673C48.6614 15.9303 48.8822 16.1406 49.1662 16.1406H50.5756C50.849 16.1406 51.0804 15.9303 51.0804 15.6673V12.5856H54.6039C56.5181 12.5856 58.0642 11.0396 58.0642 9.12534V6.64317C58.0537 4.72895 56.497 3.18286 54.5933 3.18286ZM55.6346 9.17793C55.6346 9.78795 55.1403 10.2928 54.5197 10.2928H51.0594V7.21113V5.60192H54.5197C55.1297 5.60192 55.6346 6.09625 55.6346 6.71679V9.17793Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M64.9742 3.64566V5.12865C64.9742 5.38108 64.7639 5.59143 64.5115 5.59143H62.2081C61.861 5.59143 61.5665 5.87541 61.5665 6.23301V12.2596C61.5665 12.5226 61.3457 12.7329 61.0617 12.7329H59.6523C59.3789 12.7329 59.1475 12.5226 59.1475 12.2596V3.81394C59.1475 3.551 59.3683 3.34065 59.6523 3.34065H61.0617C61.3351 3.34065 61.5665 3.551 61.5665 3.81394V4.15051L62.0398 3.51945C62.2081 3.29857 62.4605 3.17236 62.734 3.17236C62.734 3.17236 63.7752 3.17236 64.501 3.17236C64.7639 3.18288 64.9742 3.39323 64.9742 3.64566Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M35.8192 10.2718H30.981C30.5183 10.2718 30.1501 9.90367 30.1501 9.4409V8.39965L30.634 9.02019C30.7812 9.20951 31.0126 9.33572 31.2545 9.34624H34.0312C35.7771 9.34624 37.1865 7.8948 37.1128 6.13835V6.1068C37.0392 4.69743 36.0085 3.57203 34.6833 3.2565C34.4414 3.1934 34.1889 3.17236 33.9365 3.17236H30.7917C30.5709 3.17236 30.35 3.1934 30.1396 3.24599C28.7934 3.551 27.7942 4.75002 27.7942 6.18042V9.4409C27.7942 11.1973 29.2141 12.6277 30.981 12.6277H35.8192C36.1137 12.6277 36.345 12.3858 36.345 12.0913V10.7977C36.345 10.5137 36.1137 10.2718 35.8192 10.2718ZM30.1501 6.18042C30.1501 5.82282 30.4446 5.52832 30.8022 5.52832H34.0417C34.3467 5.52832 34.5991 5.70712 34.7148 5.97007C34.7569 6.06473 34.7779 6.15938 34.7779 6.27508C34.7779 6.68526 34.4519 7.01131 34.0417 7.01131H30.1501V6.18042Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M74.1246 10.2718H69.2865C68.8237 10.2718 68.4556 9.90367 68.4556 9.4409V8.39965L68.9394 9.02019C69.0866 9.20951 69.318 9.33572 69.5599 9.34624H72.3366C74.0825 9.34624 75.4919 7.8948 75.4183 6.13835V6.1068C75.3447 4.69743 74.3139 3.57203 72.9887 3.2565C72.7468 3.1934 72.4944 3.17236 72.2419 3.17236H69.0971C68.8763 3.17236 68.6554 3.1934 68.4451 3.24599C67.0988 3.551 66.0996 4.75002 66.0996 6.18042V9.4409C66.0996 11.1973 67.5195 12.6277 69.2865 12.6277H74.1246C74.4191 12.6277 74.6505 12.3858 74.6505 12.0913V10.7977C74.661 10.5137 74.4191 10.2718 74.1246 10.2718ZM68.4556 6.18042C68.4556 5.82282 68.7501 5.52832 69.1077 5.52832H72.3471C72.6521 5.52832 72.9045 5.70712 73.0202 5.97007C73.0623 6.06473 73.0833 6.15938 73.0833 6.27508C73.0833 6.68526 72.7573 7.01131 72.3471 7.01131H68.4556V6.18042Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M85.8623 9.90353C85.8623 11.3339 84.6527 12.5014 83.1592 12.5014H77.5744C77.2799 12.5014 77.0485 12.2595 77.0485 11.9755V10.6818C77.0485 10.3873 77.2904 10.156 77.5744 10.156H83.1592C83.3591 10.156 83.5063 10.0192 83.5063 9.90353C83.5063 9.79835 83.4117 9.70369 83.2749 9.67214L78.563 8.35743C77.3956 8.05242 76.5752 7.02169 76.5752 5.84371C76.5752 4.41331 77.7847 3.24585 79.2782 3.24585H84.4634C84.7579 3.24585 84.9893 3.48776 84.9893 3.77173V5.0654C84.9893 5.3599 84.7474 5.59129 84.4634 5.59129H79.2782C79.0784 5.59129 78.9311 5.72802 78.9311 5.84371C78.9311 5.94889 79.0258 6.04355 79.1625 6.0751L83.8744 7.38981C85.0419 7.70534 85.8623 8.73607 85.8623 9.90353Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
              <path
                d="M96.3062 9.90353C96.3062 11.3339 95.0966 12.5014 93.6031 12.5014H88.0182C87.7237 12.5014 87.4923 12.2595 87.4923 11.9755V10.6818C87.4923 10.3873 87.7342 10.156 88.0182 10.156H93.6031C93.8029 10.156 93.9502 10.0192 93.9502 9.90353C93.9502 9.79835 93.8555 9.70369 93.7188 9.67214L89.0069 8.35743C87.8394 8.05242 87.019 7.02169 87.019 5.84371C87.019 4.41331 88.2286 3.24585 89.7221 3.24585H94.9073C95.2018 3.24585 95.4332 3.48776 95.4332 3.77173V5.0654C95.4332 5.3599 95.1913 5.59129 94.9073 5.59129H89.7221C89.5223 5.59129 89.375 5.72802 89.375 5.84371C89.375 5.94889 89.4697 6.04355 89.6064 6.0751L94.3183 7.40033C95.4963 7.70534 96.3062 8.73607 96.3062 9.90353Z"
                fill="#424750"
                className="dark:fill-neutral-300"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="96.5333" height="16" fill="white" />
            </clipPath>
            <clipPath id="clip1">
              <rect
                width="96.5333"
                height="25.6"
                fill="white"
                transform="translate(-0.16626 -4.80005)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 11,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="20"
          viewBox="0 0 71 17"
          fill="none"
        >
          <g clip-path="url(#clip0_3913_7701)">
            <path
              d="M42.8103 12.4296V0.310962L43.7948 0.306641C44.1324 0.306641 44.4563 0.441876 44.6949 0.682435C44.9337 0.923108 45.0678 1.24943 45.0678 1.58974V15.0128C45.0678 15.3531 44.9337 15.6794 44.6949 15.9201C44.4563 16.1608 44.1324 16.2959 43.7948 16.2959H42.8103V16.2788L33.7887 4.16013V16.3044H32.8041C32.4665 16.3044 32.1427 16.1693 31.904 15.9286C31.6653 15.6881 31.5312 15.3617 31.5312 15.0213V1.59406C31.5312 1.25375 31.6653 0.927431 31.904 0.686758C32.1427 0.446085 32.4665 0.310962 32.8041 0.310962H33.7887L42.8103 12.4296Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              d="M8.03079 7.18189H12.2594C12.4267 7.18098 12.5923 7.2134 12.7471 7.27709C12.9018 7.34079 13.0427 7.43451 13.1615 7.55314C13.2803 7.67165 13.3747 7.81258 13.4395 7.96795C13.5042 8.12331 13.538 8.29005 13.5388 8.4585V15.0235C13.5388 15.3639 13.4047 15.6902 13.166 15.9308C12.9273 16.1714 12.6034 16.3066 12.2659 16.3066H1.27307C0.935424 16.3066 0.611675 16.1714 0.372903 15.9308C0.134131 15.6902 0 15.3639 0 15.0235V1.62822C0 1.28803 0.134131 0.961594 0.372903 0.721035C0.611675 0.480362 0.935424 0.345239 1.27307 0.345239H12.2403C12.5744 0.345125 12.8949 0.477405 13.1331 0.713415C13.3712 0.949424 13.5079 1.27028 13.5134 1.60684L13.5262 2.62481H2.25121V14.0228H11.2665V9.46362H6.75783V8.46487C6.75783 8.12468 6.89196 7.79825 7.13062 7.55769C7.36939 7.31701 7.69314 7.18189 8.03079 7.18189Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              d="M68.9885 0.377172H62.057C61.7191 0.37831 61.397 0.514 61.1586 0.754559C60.9213 0.995005 60.788 1.32075 60.788 1.66027V13.9864L60.7835 13.9865V14.9851C60.7835 15.3254 60.9169 15.6517 61.1564 15.8924C61.3949 16.133 61.7192 16.2682 62.0559 16.2682H68.9841C69.3219 16.2682 69.6451 16.133 69.8835 15.8924C70.1231 15.6517 70.2564 15.3254 70.2564 14.9851V13.9865H63.0105L63.0107 2.6589H70.2609V1.66027C70.2609 1.31996 70.1275 0.99364 69.888 0.752967C69.6495 0.512408 69.3252 0.377172 68.9885 0.377172Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              d="M57.3575 0.345239H53.1498C52.9812 0.345239 52.8143 0.378906 52.6587 0.444534C52.5031 0.510048 52.3621 0.606043 52.2436 0.727062C52.1252 0.847967 52.0318 0.991507 51.9688 1.14915C51.9058 1.30679 51.8746 1.47547 51.8768 1.6454L51.8938 2.62481H56.3642V14.0185H48.6199C48.2823 14.0185 47.9585 14.1537 47.7197 14.3943C47.481 14.6349 47.347 14.9612 47.347 15.3015V16.3003H57.3553C57.6931 16.3003 58.0163 16.165 58.2548 15.9245C58.4943 15.6838 58.6277 15.3575 58.6277 15.0172V1.62617C58.6277 1.28655 58.4932 0.961139 58.2548 0.721034C58.0175 0.48093 57.6943 0.345807 57.3575 0.345239Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              d="M17.0205 0.345239H28.0068C28.343 0.345239 28.6655 0.479225 28.904 0.717964C29.1425 0.956703 29.2776 1.28086 29.2799 1.61969V15.0129C29.2799 15.3532 29.1457 15.6795 28.907 15.9202C28.6682 16.1607 28.3444 16.296 28.0068 16.296H27.0245V2.65472H18.0049V16.3023H17.0205C16.6828 16.3023 16.3589 16.1672 16.1203 15.9265C15.8815 15.686 15.7474 15.3595 15.7474 15.0193V1.62822C15.7474 1.28803 15.8815 0.961594 16.1203 0.721034C16.3589 0.480362 16.6828 0.345239 17.0205 0.345239Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
            <path
              d="M70.2571 7.1821H65.2749V9.46167H70.2571V7.1821Z"
              fill="#424750"
              className="dark:fill-neutral-300"
            />
          </g>
          <defs>
            <clipPath id="clip0_3913_7701">
              <rect
                width="70.2609"
                height="16"
                fill="white"
                transform="translate(0 0.306641)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 12,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="23"
          viewBox="0 0 46 16"
          fill="none"
        >
          <path
            d="M9.36902 0.0135803H7.92815C7.69512 0.0135803 7.50598 0.202718 7.50598 0.435747V3.44078H3.80106C3.58878 3.44078 3.38049 3.46193 3.18018 3.50183C1.73013 3.85178 0.652771 5.15858 0.652771 6.71556V9.27329C0.652771 11.0992 2.13315 12.5796 3.95907 12.5796H6.17843C6.26861 12.5796 6.356 12.5509 6.42742 12.4982C6.44498 12.4858 6.46214 12.4719 6.4773 12.4563L6.4781 12.4555L7.50718 11.4224V12.1578C7.50718 12.3897 7.69711 12.5796 7.92935 12.5796H9.3355C9.54499 12.5796 9.72016 12.4455 9.7848 12.26C9.78959 12.2372 9.79158 12.2137 9.79158 12.1889V0.435747C9.79078 0.202718 9.60205 0.0135803 9.36902 0.0135803ZM7.50598 10.2944H3.91598C3.3757 10.2944 2.93757 9.85627 2.93757 9.31639V6.70359C2.93757 6.16331 3.3753 5.72598 3.91518 5.72479H7.50598V10.2944Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M23.0427 3.44754H21.6362C21.4031 3.44754 21.2144 3.63668 21.2144 3.86971V4.58316L21.2076 4.57478L20.2041 3.57084C20.1366 3.5034 20.0026 3.44754 19.906 3.44754H17.6667C15.8404 3.44754 14.3608 4.92752 14.3608 6.75344V9.31197C14.3608 10.8686 15.4377 12.175 16.8882 12.5257C17.0893 12.5652 17.2968 12.5864 17.5095 12.5864H21.2144V12.641C21.2144 12.8214 21.1781 13.0021 21.0911 13.1609C20.9051 13.5009 20.544 13.7319 20.1286 13.7319H17.3151C16.7226 13.7319 16.4213 14.447 16.8383 14.868C17.1639 15.1999 17.4959 15.5383 17.7405 15.7885C17.8682 15.9166 18.0378 15.9872 18.2177 15.9872H20.1362C20.5396 15.9872 20.9255 15.9174 21.2822 15.7885C22.5862 15.3161 23.4984 14.0559 23.4984 12.5772V3.83858C23.4984 3.81384 23.4972 3.7903 23.492 3.76756C23.4274 3.58201 23.2518 3.44754 23.0427 3.44754ZM21.214 10.2956H17.6224C17.0821 10.2948 16.6448 9.85744 16.6448 9.31716V6.70436C16.6448 6.16408 17.0829 5.72596 17.6236 5.72596H21.2144V10.2956H21.214Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M12.7962 3.44077H11.3549C11.1223 3.44077 10.9332 3.6299 10.9332 3.86293V12.1578C10.9332 12.3908 11.1223 12.5796 11.3549 12.5796H12.7962C13.0292 12.5796 13.2184 12.3908 13.2184 12.1578V3.86293C13.2184 3.6299 13.0292 3.44077 12.7962 3.44077Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M13.0277 0.0706177H11.5968C11.3657 0.0706177 11.1782 0.258557 11.1782 0.489591V1.92009C11.1782 2.15152 11.3657 2.33906 11.5968 2.33906H13.0277C13.2591 2.33906 13.4466 2.15112 13.4466 1.92009V0.489591C13.4466 0.258557 13.2591 0.0706177 13.0277 0.0706177Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M26.5034 3.44077H25.0626C24.8295 3.44077 24.6408 3.6299 24.6408 3.86293V12.1578C24.6408 12.3908 24.8295 12.5796 25.0626 12.5796H26.5034C26.7369 12.5796 26.9256 12.3908 26.9256 12.1578V3.86293C26.9256 3.6299 26.7369 3.44077 26.5034 3.44077Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M26.6375 0.0706177H25.2066C24.9752 0.0706177 24.788 0.258557 24.788 0.489591V1.92009C24.788 2.15152 24.9756 2.33906 25.2066 2.33906H26.6375C26.8693 2.33906 27.0565 2.15112 27.0565 1.92009V0.489591C27.0565 0.258557 26.8689 0.0706177 26.6375 0.0706177Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M34.5545 3.43239H31.4916V2.2848H32.6005C32.6025 2.2848 32.6045 2.2844 32.6065 2.2844H33.0546H33.9843H34.5553C34.7879 2.2844 34.9771 2.09527 34.9771 1.86264V0.422565C34.9771 0.189535 34.7883 0.000399412 34.5553 0.000399412H33.9843H33.0546H32.6033C32.6025 0.000399412 32.6013 0 32.6001 0H32.3543C32.1416 0 31.9341 0.0215476 31.733 0.0602528C31.6193 0.0877853 31.5072 0.120904 31.3994 0.160806C31.1648 0.244601 30.9438 0.353534 30.7379 0.484812C29.8173 1.07137 29.206 2.10125 29.206 3.27438V3.4292H28.4862C28.2531 3.4292 28.064 3.61833 28.064 3.85136V5.29104C28.064 5.52407 28.2531 5.7132 28.4862 5.7132H29.206V12.147C29.206 12.3797 29.3963 12.5696 29.629 12.5696H31.0683C31.3013 12.5696 31.4912 12.3797 31.4912 12.147V6.13896C31.4912 6.12779 31.4916 5.92269 31.4928 5.71959H33.0721V5.71719H34.5541C34.7867 5.71719 34.9767 5.52925 34.9767 5.29622V3.85535C34.9771 3.62232 34.7871 3.43239 34.5545 3.43239Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M45.2587 3.76438C45.194 3.57684 45.0193 3.44516 44.8102 3.44516H43.4032C43.1702 3.44516 42.9795 3.63549 42.9795 3.86892V10.2988H39.3851C38.8412 10.2988 38.4051 9.86224 38.4051 9.32156V3.86892C38.4051 3.6347 38.2151 3.44516 37.9813 3.44516H36.5404C36.3062 3.44516 36.1167 3.6347 36.1167 3.86892V9.31558C36.1167 10.8734 37.1952 12.1818 38.6481 12.5349C38.8512 12.572 39.0571 12.5931 39.2722 12.5931H42.9795V12.6486C42.9795 12.8302 42.9459 13.0109 42.857 13.1709C42.6694 13.5089 42.3099 13.7391 41.8921 13.7391H39.0774C38.4833 13.7391 38.1828 14.4546 38.599 14.8787C38.925 15.2103 39.257 15.5487 39.5028 15.8013C39.6269 15.9286 39.7973 16 39.976 16H41.9017C42.3039 16 42.6914 15.9294 43.0477 15.8005C44.3533 15.3272 45.2687 14.0647 45.2687 12.5844V3.83501C45.2683 3.81027 45.2651 3.78593 45.2587 3.76438Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 13,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="25"
          viewBox="0 0 96 12"
          fill="none"
        >
          <path
            d="M58.307 0.00779359H49.4945V3.00477H58.307V0.00779359Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M0.000133805 2.84443C-0.0045229 2.3418 0.113067 1.84732 0.340153 1.41462C0.561067 0.992053 0.873791 0.639757 1.24889 0.390888C1.6332 0.135728 2.07204 0.00358332 2.5181 0.00869682H10.6112V2.99458H3.26554C3.18416 2.99282 3.10335 3.01002 3.02816 3.04511C2.95296 3.08019 2.88502 3.13241 2.82858 3.19847C2.77113 3.26235 2.72575 3.33866 2.69516 3.42282C2.66458 3.50697 2.64943 3.59723 2.65062 3.68816V3.77347C2.64908 3.86778 2.6649 3.96142 2.69709 4.0485C2.72929 4.13557 2.77715 4.21418 2.83767 4.27936C2.89576 4.34609 2.9652 4.39891 3.04185 4.43468C3.11849 4.47045 3.20075 4.48842 3.28371 4.48752H8.03945C8.49388 4.48239 8.94082 4.61815 9.33137 4.87995C9.71587 5.13568 10.0366 5.49698 10.2636 5.93013C10.4968 6.3722 10.6173 6.87814 10.6119 7.39236V9.04483C10.6172 9.56229 10.4954 10.0713 10.2598 10.5156C10.0309 10.95 9.70848 11.3124 9.32228 11.5692C8.92869 11.831 8.47909 11.9667 8.02203 11.9616H0.000889516V8.97573H7.29655C7.3853 8.97911 7.47375 8.96234 7.55663 8.92641C7.6395 8.89049 7.71512 8.83614 7.77896 8.76661C7.84281 8.69708 7.89358 8.61378 7.92826 8.52168C7.96293 8.42959 7.9808 8.33058 7.9808 8.23054C7.9808 8.1305 7.96293 8.03148 7.92826 7.93938C7.89358 7.84729 7.84281 7.764 7.77896 7.69446C7.71512 7.62493 7.6395 7.57058 7.55663 7.53466C7.47375 7.49873 7.3853 7.48196 7.29655 7.48535H2.38254C1.96087 7.48966 1.54614 7.3643 1.18301 7.12278C0.826134 6.88712 0.528889 6.55226 0.319705 6.15023C0.106072 5.73967 -0.0043941 5.27137 0.000133805 4.79549V2.84443ZM17.6539 3.7402L20.3044 0.00698894H22.9549V11.9599H20.3044V4.48581L17.6539 8.2267L15.0034 4.48581V11.9599H12.3454V0.00698894H15.0034L17.6539 3.7402ZM28.7595 0.00698894H31.4099L35.3917 11.9599H32.7412L30.0908 4.48581L27.4403 11.9599H24.7822L28.7595 0.00698894ZM45.0145 0.00698894C45.4999 0.000944758 45.9775 0.144305 46.3958 0.421601C46.8055 0.693688 47.1471 1.07852 47.3886 1.54003C47.6364 2.01161 47.7647 2.55068 47.7597 3.09866V4.38856C47.7649 4.93575 47.6365 5.47405 47.3886 5.94463C47.1464 6.40532 46.8049 6.78971 46.3958 7.0622C45.9784 7.34228 45.5004 7.48695 45.0145 7.48023H43.7779L47.7597 11.9599H43.784L39.8135 7.48023V11.9599H37.1486V4.47302H39.8135V4.48581H44.5374C44.6123 4.48593 44.6863 4.46941 44.7555 4.43721C44.8246 4.405 44.8874 4.35776 44.9403 4.29816C44.9932 4.23857 45.0352 4.1678 45.0638 4.08992C45.0924 4.01203 45.107 3.92855 45.1069 3.84428V3.63612C45.107 3.55184 45.0924 3.46836 45.0638 3.39048C45.0352 3.31259 44.9932 3.24183 44.9403 3.18223C44.8874 3.12264 44.8246 3.07538 44.7555 3.04318C44.6863 3.01098 44.6123 2.99447 44.5374 2.99458H37.1486V0.00869682L45.0145 0.00698894Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M89.3677 11.9667H86.7172V0.00695413H89.3677V4.48578H93.3495V0.00695413H96V11.9599H93.3495V7.48104H89.3677V11.9667ZM53.5043 11.9667V3.00307L58.1116 0.00695413H60.1374V3.00137H56.1556V11.9667H53.5043ZM72.5311 11.9599H61.92V4.48578H72.5311V7.4802H64.5728V8.97143H72.5311V11.9599ZM84.9997 11.953H76.8468C76.412 11.958 75.9842 11.8294 75.6094 11.5811C75.2423 11.3375 74.9363 10.9925 74.7204 10.5787C74.4999 10.1567 74.3855 9.67515 74.3894 9.18556V4.47981H77.0399V7.38038C77.0367 7.58847 77.0716 7.79508 77.1423 7.98735C77.2131 8.17961 77.3182 8.35342 77.4511 8.49796C77.5804 8.64819 77.7357 8.76685 77.9074 8.84654C78.0791 8.92624 78.2635 8.96526 78.4492 8.96119H84.9975V11.9471L84.9997 11.953ZM72.5311 2.9954H61.92V0.00951335H72.5311V2.9954ZM84.9997 2.98857H74.3894V2.87852C74.3858 2.37012 74.5051 1.8702 74.7348 1.4325C74.9605 1.00239 75.2791 0.6435 75.6609 0.389148C76.0505 0.129727 76.4957 -0.00479185 76.9483 0.000130396H85.0035V2.98601L84.9997 2.98857Z"
            fill="#81858B"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 14,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="23"
          viewBox="0 0 123 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.4372 10.1463H43.9382V5.46341H40.4372C39.8331 5.46341 39.2702 6.02953 39.2702 6.63415V8.97561C39.2702 9.58031 39.8331 10.1463 40.4372 10.1463ZM54.4413 10.1463H57.9423V5.46341H54.4413C53.8372 5.46341 53.2743 6.02953 53.2743 6.63415V8.97561C53.2743 9.58031 53.8372 10.1463 54.4413 10.1463ZM46.2722 3.70732V11.9024C46.2722 12.1607 45.947 12.4878 45.6887 12.4878L44.5219 12.5001C44.2635 12.5001 43.9382 12.1608 43.9382 11.9024V11.5122L43.4087 12.1501C43.2474 12.3701 42.8494 12.4878 42.5767 12.4878H40.4372C38.5599 12.4878 36.9362 10.8545 36.9362 8.97561V6.63415C36.9362 4.75525 38.5599 3.12195 40.4372 3.12195H45.6887C45.9466 3.12195 46.2722 3.44932 46.2722 3.70732ZM60.2763 3.70732V11.9024C60.2763 12.1607 59.951 12.4878 59.6928 12.4878L58.526 12.5001C58.2676 12.5001 57.9423 12.1608 57.9423 11.9024V11.5122L57.4128 12.1501C57.2515 12.3701 56.8535 12.4878 56.5808 12.4878H54.4413C52.564 12.4878 50.9403 10.8545 50.9403 8.97561V6.63415C50.9403 4.75525 52.564 3.12195 54.4413 3.12195H59.6928C59.9506 3.12195 60.2763 3.44932 60.2763 3.70732ZM21.3762 5.46341H17.8752C17.271 5.46341 16.7082 6.02953 16.7082 6.63415V8.97561C16.7082 9.5804 17.271 10.1463 17.8752 10.1463H21.3762V5.46341ZM23.7102 3.70732V12.6829C23.7102 14.5618 22.0865 16 20.2092 16H18.4052C18.1367 16 17.8838 15.874 17.7219 15.6596L16.695 14.2995C16.5244 14.0737 16.6198 13.6585 16.9027 13.6585H20.2092C20.8133 13.6585 21.3762 13.2875 21.3762 12.6829V12.4878H17.8752C15.998 12.4878 14.3742 10.8545 14.3742 8.97561V6.63415C14.3742 4.75533 15.998 3.12195 17.8752 3.12195H20.0147C20.2824 3.12195 20.5742 3.33802 20.7632 3.5122L21.3762 4.09756V3.70732C21.3762 3.44941 21.7021 3.12195 21.9597 3.12195H23.1267C23.3848 3.12195 23.7102 3.44888 23.7102 3.70732ZM2.70412 8.97561C2.70412 9.58023 3.26703 10.1463 3.87113 10.1463H7.37214V5.46341H3.87113C3.26703 5.46341 2.70412 6.02953 2.70412 6.63415V8.97561ZM9.12264 0C9.38095 0 9.70614 0.327014 9.70614 0.585366V11.9024C9.70614 12.1607 9.38095 12.4878 9.12264 12.4878H7.95564C7.69742 12.4878 7.37214 12.1609 7.37214 11.9024V11.5122L6.76028 12.169C6.59451 12.3537 6.27485 12.4878 6.01063 12.4878H3.87113C1.99383 12.4878 0.370117 10.8545 0.370117 8.97561V6.65201C0.370117 4.77311 1.99383 3.12195 3.87113 3.12195H7.37214V0.585366C7.37214 0.327014 7.69742 0 7.95564 0H9.12264ZM33.2407 7.80488L36.4891 3.68004C36.6698 3.45523 36.5099 3.12114 36.2217 3.12114H34.3638C34.2234 3.12114 34.0904 3.18443 34.0015 3.29344L30.7122 7.41463V0.585366C30.7122 0.327014 30.3868 0 30.1287 0H28.9617C28.7035 0 28.3782 0.327014 28.3782 0.585366V11.9024C28.3782 12.1608 28.7035 12.4878 28.9617 12.4878H30.1287C30.3869 12.4878 30.7122 12.1608 30.7122 11.9024V8.19512L34.0032 12.3254C34.092 12.4358 34.2258 12.5001 34.3675 12.5001H36.2234C36.5116 12.5001 36.6716 12.1658 36.4908 11.9411L33.2407 7.80488ZM25.4607 0C25.2026 0 24.8772 0.327014 24.8772 0.585366V1.7561C24.8772 2.01445 25.2026 2.34146 25.4607 2.34146H26.6277C26.8858 2.34146 27.2112 2.01445 27.2112 1.7561V0.585366C27.2112 0.327014 26.8858 0 26.6277 0H25.4607ZM25.4607 3.12195C25.2026 3.12195 24.8772 3.44905 24.8772 3.70732V11.9024C24.8772 12.1607 25.2941 12.5 25.5522 12.5L26.6277 12.4878C26.8858 12.4878 27.2112 12.1607 27.2112 11.9024V3.70732C27.2112 3.44905 26.8858 3.12195 26.6277 3.12195H25.4607ZM11.4566 0C11.1985 0 10.8731 0.327014 10.8731 0.585366V1.7561C10.8731 2.01445 11.1985 2.34146 11.4566 2.34146H12.6237C12.8818 2.34146 13.2072 2.01445 13.2072 1.7561V0.585366C13.2072 0.327014 12.8818 0 12.6237 0H11.4566ZM11.4566 3.12195C11.1985 3.12195 10.8731 3.44905 10.8731 3.70732V11.9024C10.8731 12.1607 11.1985 12.4878 11.4566 12.4878H12.6237C12.8818 12.4878 13.2072 12.1607 13.2072 11.9024V3.70732C13.2072 3.44905 12.8818 3.12195 12.6237 3.12195H11.4566ZM49.7733 0.585366V11.9024C49.7733 12.1607 49.448 12.4878 49.1898 12.4878H48.0227C47.7645 12.4878 47.4392 12.1607 47.4392 11.9024V0.585366C47.4392 0.327014 47.7645 0 48.0227 0H49.1898C49.448 0 49.7733 0.327014 49.7733 0.585366Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M69.428 7.63789C70.2473 8.1114 70.657 8.82613 70.657 9.78209C70.657 10.5772 70.3765 11.2294 69.8154 11.7387C69.2544 12.2479 68.5642 12.5025 67.7448 12.5025H63.7773V3.12168H67.4643C68.2658 3.12168 68.9382 3.37183 69.4814 3.87215C70.0336 4.36352 70.3097 4.99338 70.3097 5.76172C70.3097 6.53899 70.0158 7.16438 69.428 7.63789ZM67.4643 4.85044H65.6208V6.91423H67.4643C67.7493 6.91423 67.9853 6.81595 68.1723 6.6194C68.3682 6.42285 68.4662 6.17716 68.4662 5.88233C68.4662 5.5875 68.3727 5.34181 68.1857 5.14526C67.9986 4.94871 67.7582 4.85044 67.4643 4.85044ZM67.7448 10.7738C68.0565 10.7738 68.3148 10.671 68.5196 10.4656C68.7245 10.2511 68.8269 9.98311 68.8269 9.66148C68.8269 9.34878 68.7245 9.08969 68.5196 8.88421C68.3148 8.66979 68.0565 8.56258 67.7448 8.56258H65.6208V10.7738H67.7448Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M75.2869 12.6902C74.2449 12.6902 73.39 12.3953 72.722 11.8057C72.0541 11.216 71.7202 10.4253 71.7202 9.43366V3.12168H73.5503V9.28624C73.5503 9.77762 73.6883 10.1663 73.9644 10.4522C74.2494 10.738 74.6902 10.881 75.2869 10.881C75.8836 10.881 76.3199 10.738 76.596 10.4522C76.881 10.1663 77.0235 9.77762 77.0235 9.28624V3.12168H78.867V9.43366C78.867 10.4253 78.533 11.216 77.8651 11.8057C77.1972 12.3953 76.3378 12.6902 75.2869 12.6902Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M83.7204 12.6902C82.7942 12.6902 82.015 12.4847 81.3827 12.0737C80.7504 11.6538 80.3051 11.0865 80.0468 10.3717L81.6231 9.44706C81.9883 10.403 82.7052 10.881 83.7738 10.881C84.2904 10.881 84.6689 10.7872 84.9093 10.5996C85.1498 10.4119 85.27 10.1752 85.27 9.8893C85.27 9.55874 85.1231 9.30411 84.8292 9.12543C84.5353 8.93781 84.0098 8.73679 83.2529 8.52237C82.8343 8.39729 82.4781 8.27222 82.1842 8.14714C81.8992 8.02206 81.6098 7.85678 81.3159 7.65129C81.0309 7.43687 80.8127 7.16885 80.6613 6.84722C80.5099 6.52559 80.4342 6.15036 80.4342 5.72152C80.4342 4.87277 80.7325 4.19824 81.3292 3.69793C81.9348 3.18868 82.6606 2.93406 83.5067 2.93406C84.2637 2.93406 84.9271 3.12168 85.4971 3.49691C86.076 3.86321 86.5257 4.37693 86.8463 5.03805L85.2967 5.93594C84.9227 5.13186 84.326 4.72982 83.5067 4.72982C83.1237 4.72982 82.8209 4.81917 82.5983 4.99785C82.3846 5.1676 82.2777 5.39095 82.2777 5.66791C82.2777 5.96274 82.3979 6.20396 82.6384 6.39158C82.8877 6.57026 83.3597 6.76681 84.0544 6.98123C84.3394 7.07057 84.5531 7.14205 84.6956 7.19565C84.847 7.24032 85.0474 7.31626 85.2967 7.42347C85.555 7.52175 85.7509 7.61556 85.8845 7.7049C86.027 7.79424 86.1873 7.91485 86.3654 8.06673C86.5435 8.21861 86.6771 8.37496 86.7662 8.53577C86.8641 8.69659 86.9443 8.89314 87.0066 9.12543C87.0779 9.34878 87.1135 9.59447 87.1135 9.8625C87.1135 10.7291 86.7973 11.417 86.165 11.9263C85.5416 12.4355 84.7268 12.6902 83.7204 12.6902Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M88.2506 3.12168H90.0941V12.5025H88.2506V3.12168Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M97.2353 3.12168H99.0788V12.5025H97.6761L93.6686 6.76681V12.5025H91.8251V3.12168H93.2277L97.2353 8.844V3.12168Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M102.657 10.7336H106.598V12.5025H100.813V3.12168H106.531V4.89064H102.657V6.88742H106.197V8.62958H102.657V10.7336Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M111.09 12.6902C110.164 12.6902 109.384 12.4847 108.752 12.0737C108.12 11.6538 107.674 11.0865 107.416 10.3717L108.992 9.44706C109.358 10.403 110.075 10.881 111.143 10.881C111.66 10.881 112.038 10.7872 112.279 10.5996C112.519 10.4119 112.639 10.1752 112.639 9.8893C112.639 9.55874 112.492 9.30411 112.199 9.12543C111.905 8.93781 111.379 8.73679 110.622 8.52237C110.204 8.39729 109.847 8.27222 109.554 8.14714C109.269 8.02206 108.979 7.85678 108.685 7.65129C108.4 7.43687 108.182 7.16885 108.031 6.84722C107.879 6.52559 107.804 6.15036 107.804 5.72152C107.804 4.87277 108.102 4.19824 108.699 3.69793C109.304 3.18868 110.03 2.93406 110.876 2.93406C111.633 2.93406 112.297 3.12168 112.866 3.49691C113.445 3.86321 113.895 4.37693 114.216 5.03805L112.666 5.93594C112.292 5.13186 111.695 4.72982 110.876 4.72982C110.493 4.72982 110.19 4.81917 109.968 4.99785C109.754 5.1676 109.647 5.39095 109.647 5.66791C109.647 5.96274 109.767 6.20396 110.008 6.39158C110.257 6.57026 110.729 6.76681 111.424 6.98123C111.709 7.07057 111.922 7.14205 112.065 7.19565C112.216 7.24032 112.417 7.31626 112.666 7.42347C112.924 7.52175 113.12 7.61556 113.254 7.7049C113.396 7.79424 113.557 7.91485 113.735 8.06673C113.913 8.21861 114.046 8.37496 114.136 8.53577C114.234 8.69659 114.314 8.89314 114.376 9.12543C114.447 9.34878 114.483 9.59447 114.483 9.8625C114.483 10.7291 114.167 11.417 113.534 11.9263C112.911 12.4355 112.096 12.6902 111.09 12.6902Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
          <path
            d="M118.591 12.6902C117.665 12.6902 116.885 12.4847 116.253 12.0737C115.621 11.6538 115.176 11.0865 114.917 10.3717L116.494 9.44706C116.859 10.403 117.576 10.881 118.644 10.881C119.161 10.881 119.539 10.7872 119.78 10.5996C120.02 10.4119 120.141 10.1752 120.141 9.8893C120.141 9.55874 119.994 9.30411 119.7 9.12543C119.406 8.93781 118.88 8.73679 118.123 8.52237C117.705 8.39729 117.349 8.27222 117.055 8.14714C116.77 8.02206 116.48 7.85678 116.186 7.65129C115.901 7.43687 115.683 7.16885 115.532 6.84722C115.38 6.52559 115.305 6.15036 115.305 5.72152C115.305 4.87277 115.603 4.19824 116.2 3.69793C116.805 3.18868 117.531 2.93406 118.377 2.93406C119.134 2.93406 119.798 3.12168 120.368 3.49691C120.946 3.86321 121.396 4.37693 121.717 5.03805L120.167 5.93594C119.793 5.13186 119.197 4.72982 118.377 4.72982C117.994 4.72982 117.691 4.81917 117.469 4.99785C117.255 5.1676 117.148 5.39095 117.148 5.66791C117.148 5.96274 117.268 6.20396 117.509 6.39158C117.758 6.57026 118.23 6.76681 118.925 6.98123C119.21 7.07057 119.424 7.14205 119.566 7.19565C119.717 7.24032 119.918 7.31626 120.167 7.42347C120.426 7.52175 120.621 7.61556 120.755 7.7049C120.898 7.79424 121.058 7.91485 121.236 8.06673C121.414 8.21861 121.548 8.37496 121.637 8.53577C121.735 8.69659 121.815 8.89314 121.877 9.12543C121.948 9.34878 121.984 9.59447 121.984 9.8625C121.984 10.7291 121.668 11.417 121.036 11.9263C120.412 12.4355 119.597 12.6902 118.591 12.6902Z"
            fill="#424750"
            className="dark:fill-neutral-300"
          />
        </svg>
      </>
    ),
    href: "",
  },
  {
    id: 15,
    title: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="20"
          viewBox="0 0 111 16"
          fill="none"
        >
          <g clip-path="url(#clip0_879_162962)">
            <path
              d="M109.697 7.15719L102.865 13.9331C102.738 14.0602 102.566 14.1316 102.386 14.1316C102.206 14.1316 102.034 14.0602 101.906 13.9331L97.0222 9.04899C96.8968 8.92085 96.8266 8.74871 96.8266 8.56944C96.8266 8.39018 96.8968 8.21804 97.0222 8.0899L98.5663 6.54816C98.6935 6.42107 98.866 6.34969 99.0459 6.34969C99.2257 6.34969 99.3982 6.42107 99.5254 6.54816L101.897 8.92191C102.025 9.04784 102.197 9.11843 102.376 9.11843C102.556 9.11843 102.728 9.04784 102.856 8.92191L109.083 2.58952C108.541 1.79199 107.813 1.13906 106.961 0.687686C106.109 0.236314 105.16 0.000214697 104.196 -1.52588e-05L94.9338 -1.52588e-05C94.7148 0.000619454 94.505 0.0880522 94.3504 0.243116C94.1958 0.39818 94.1089 0.608223 94.1089 0.827199V15.1752C94.1089 15.3939 94.1958 15.6037 94.3505 15.7584C94.5052 15.9131 94.715 16 94.9338 16H104.191C105.758 15.9993 107.26 15.3767 108.368 14.2689C109.476 13.161 110.099 11.6587 110.099 10.092V6.78074C109.898 6.97256 109.735 7.11882 109.697 7.15719Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M88.9035 4.45016H84.6907C84.6035 4.45016 84.52 4.48477 84.4584 4.54638C84.3968 4.60798 84.3622 4.69153 84.3622 4.77865V5.8912C84.3622 5.97832 84.3968 6.06187 84.4584 6.12347C84.52 6.18508 84.6035 6.21968 84.6907 6.21968H88.9658C89.1566 6.21968 89.3395 6.29547 89.4744 6.43037C89.6093 6.56526 89.6851 6.74823 89.6851 6.939V9.0442C89.6851 9.23498 89.6093 9.41794 89.4744 9.55283C89.3395 9.68773 89.1566 9.76352 88.9658 9.76352H84.6907C84.6035 9.76352 84.52 9.79813 84.4584 9.85973C84.3968 9.92133 84.3622 10.0049 84.3622 10.092V11.2213C84.3622 11.3085 84.3968 11.392 84.4584 11.4536C84.52 11.5152 84.6035 11.5498 84.6907 11.5498H88.9035C89.582 11.5498 90.2327 11.2803 90.7125 10.8005C91.1923 10.3207 91.4618 9.66997 91.4618 8.99145V7.00614C91.4612 6.32803 91.1914 5.67792 90.7117 5.19865C90.2319 4.71938 89.5816 4.45016 88.9035 4.45016Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M61.4472 4.45016C62.2408 3.6661 63.0848 2.8317 63.4996 2.41449C63.5501 2.36098 63.5836 2.29377 63.5961 2.22128C63.6086 2.14879 63.5994 2.07424 63.5697 2.00694C63.54 1.93964 63.4911 1.88259 63.4292 1.84292C63.3673 1.80325 63.295 1.78271 63.2215 1.78389H61.7493C61.697 1.7844 61.6455 1.7955 61.5977 1.81652C61.5499 1.83754 61.5068 1.86804 61.4711 1.90618C61.1163 2.28741 59.9774 3.43113 58.9631 4.45016L58.2798 5.13591L57.7571 5.66101C57.7114 5.70751 57.6805 5.76655 57.6685 5.83062C57.6565 5.89468 57.6638 5.96088 57.6895 6.02079C57.7152 6.08069 57.7582 6.13159 57.8129 6.16701C57.8676 6.20243 57.9317 6.22076 57.9968 6.21968H61.2553C61.4822 6.21936 61.707 6.26378 61.9167 6.3504C62.1265 6.43702 62.317 6.56413 62.4776 6.72447C62.6382 6.88481 62.7656 7.07523 62.8525 7.28483C62.9394 7.49444 62.9841 7.71913 62.9841 7.94604V9.76831H55.9468C55.6924 9.76831 55.4485 9.66726 55.2686 9.4874C55.0887 9.30753 54.9877 9.06358 54.9877 8.80922V3.8843C54.9877 3.79718 54.9531 3.71362 54.8915 3.65202C54.8299 3.59042 54.7463 3.55581 54.6592 3.55581H53.5491C53.4623 3.55644 53.3794 3.59133 53.3183 3.65286C53.2572 3.7144 53.223 3.79759 53.223 3.8843V8.98665C53.223 9.66475 53.4922 10.3151 53.9714 10.7948C54.4507 11.2746 55.1008 11.5444 55.7789 11.545H62.2H62.3655H64.4299C64.517 11.545 64.6006 11.5104 64.6622 11.4488C64.7238 11.3872 64.7584 11.3036 64.7584 11.2165V7.76861C64.759 6.88955 64.4106 6.04621 63.7897 5.42395C63.1688 4.80169 62.3262 4.45143 61.4472 4.45016Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M52.0073 3.55582H50.8972C50.8101 3.55582 50.7265 3.59043 50.6649 3.65203C50.6033 3.71363 50.5687 3.79718 50.5687 3.8843V8.80923C50.5687 9.06359 50.4676 9.30754 50.2878 9.4874C50.1079 9.66727 49.864 9.76831 49.6096 9.76831H45.5622C45.5192 9.76831 45.4766 9.77683 45.4369 9.79336C45.3972 9.8099 45.3611 9.83414 45.3308 9.86467C45.3005 9.89521 45.2765 9.93144 45.2603 9.97128C45.244 10.0111 45.2358 10.0538 45.2362 10.0968V11.2213C45.2358 11.2644 45.244 11.307 45.2603 11.3469C45.2765 11.3867 45.3005 11.4229 45.3308 11.4535C45.3611 11.484 45.3972 11.5082 45.4369 11.5248C45.4766 11.5413 45.5192 11.5498 45.5622 11.5498H49.7774C50.1138 11.5498 50.4469 11.4835 50.7576 11.3546C51.0683 11.2257 51.3506 11.0369 51.5882 10.7988C51.8258 10.5607 52.0142 10.2781 52.1424 9.96718C52.2707 9.65623 52.3364 9.32303 52.3358 8.98666V3.8843C52.3352 3.79738 52.3004 3.71419 52.2389 3.65272C52.1774 3.59125 52.0943 3.55644 52.0073 3.55582Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M83.4199 6.54818V8.99145C83.4199 9.66873 83.1514 10.3184 82.6731 10.798C82.1949 11.2775 81.546 11.5479 80.8687 11.5498H79.1232C79.0788 11.5509 79.0347 11.5429 78.9935 11.5264C78.9523 11.5099 78.9148 11.4853 78.8834 11.4539L78.1233 10.6938L78.0898 10.6507V11.1302C78.0919 11.2283 78.0591 11.3239 77.9971 11.3999C77.9352 11.4759 77.8482 11.5274 77.7517 11.545H75.704H75.5434H73.6564V11.6433C73.6564 12.3219 73.3868 12.9726 72.907 13.4524C72.4272 13.9322 71.7765 14.2017 71.098 14.2017H68.2279C67.5498 14.2011 66.8997 13.9312 66.4204 13.4515C65.9412 12.9718 65.6719 12.3214 65.6719 11.6433V8.32249C65.6716 8.27906 65.68 8.236 65.6965 8.19584C65.7131 8.15569 65.7375 8.11924 65.7683 8.08864C65.7991 8.05804 65.8357 8.03391 65.876 8.01766C65.9163 8.0014 65.9594 7.99336 66.0028 7.994H67.1274C67.212 7.99771 67.2919 8.03395 67.3504 8.09516C67.4089 8.15636 67.4415 8.23781 67.4415 8.32249V11.7105C67.4415 11.9012 67.5173 12.0842 67.6522 12.2191C67.7871 12.354 67.97 12.4298 68.1608 12.4298H71.1579C71.3487 12.4298 71.5317 12.354 71.6666 12.2191C71.8015 12.0842 71.8773 11.9012 71.8773 11.7105V11.5498H70.4386C70.3515 11.5498 70.2679 11.5152 70.2063 11.4536C70.1447 11.392 70.1101 11.3085 70.1101 11.2213V10.0968C70.1095 10.0438 70.1222 9.99151 70.1469 9.94462C70.1716 9.89773 70.2076 9.85774 70.2516 9.82826C70.306 9.78895 70.3715 9.76796 70.4386 9.76832H76.313V6.939C76.313 6.74823 76.2373 6.56527 76.1024 6.43037C75.9675 6.29547 75.7845 6.21969 75.5937 6.21969H72.5486C72.4829 6.22127 72.4183 6.20312 72.3631 6.16759C72.3078 6.13206 72.2645 6.08079 72.2387 6.02038C72.2128 5.95998 72.2057 5.89322 72.2182 5.82873C72.2308 5.76425 72.2623 5.70499 72.3088 5.65862L72.7165 5.27499L73.4358 4.55567C73.4668 4.52385 73.5042 4.49887 73.5455 4.48236C73.5868 4.46584 73.6311 4.45814 73.6755 4.45976H75.5506C75.8379 4.45855 76.1233 4.50639 76.3946 4.60123C76.8948 4.77695 77.3281 5.1036 77.6347 5.53608C77.9414 5.96857 78.1062 6.48557 78.1065 7.01573V8.99145C78.1065 9.23123 78.1065 9.74914 78.1065 9.76832H78.7108H78.8163H80.9239C81.1146 9.76832 81.2976 9.69253 81.4325 9.55763C81.5674 9.42274 81.6432 9.23977 81.6432 9.049V6.54818C81.6432 6.46106 81.6778 6.3775 81.7394 6.3159C81.801 6.2543 81.8846 6.21969 81.9717 6.21969H83.0842C83.1713 6.21969 83.2549 6.2543 83.3165 6.3159C83.3781 6.3775 83.4127 6.46106 83.4127 6.54818"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M76.8789 12.4322H75.7616C75.7185 12.4319 75.6759 12.4401 75.636 12.4563C75.5962 12.4726 75.56 12.4965 75.5294 12.5268C75.4989 12.5572 75.4747 12.5932 75.4581 12.6329C75.4416 12.6726 75.4331 12.7152 75.4331 12.7583V13.878C75.4331 13.9651 75.4677 14.0487 75.5293 14.1103C75.5909 14.1719 75.6744 14.2065 75.7616 14.2065H76.8789C76.966 14.2065 77.0496 14.1719 77.1112 14.1103C77.1728 14.0487 77.2074 13.9651 77.2074 13.878V12.7583C77.2074 12.7152 77.1989 12.6726 77.1823 12.6329C77.1658 12.5932 77.1416 12.5572 77.111 12.5268C77.0805 12.4965 77.0443 12.4726 77.0044 12.4563C76.9646 12.4401 76.9219 12.4319 76.8789 12.4322Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M82.2042 12.4322H79.3102C79.2672 12.4319 79.2245 12.4401 79.1846 12.4563C79.1448 12.4726 79.1086 12.4965 79.078 12.5268C79.0475 12.5572 79.0233 12.5932 79.0067 12.6329C78.9902 12.6726 78.9817 12.7152 78.9817 12.7583V13.878C78.9817 13.9651 79.0163 14.0487 79.0779 14.1103C79.1395 14.1719 79.2231 14.2065 79.3102 14.2065H82.2042C82.2914 14.2065 82.3749 14.1719 82.4365 14.1103C82.4981 14.0487 82.5327 13.9651 82.5327 13.878V12.7583C82.5327 12.7152 82.5242 12.6726 82.5077 12.6329C82.4911 12.5932 82.4669 12.5572 82.4364 12.5268C82.4058 12.4965 82.3696 12.4726 82.3298 12.4563C82.2899 12.4401 82.2473 12.4319 82.2042 12.4322Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M48.3292 8.87157H47.2454C47.1769 8.87192 47.11 8.85052 47.0545 8.81045C46.9989 8.77038 46.9574 8.7137 46.9361 8.64858L45.3824 3.98741C45.3656 3.93826 45.3608 3.8858 45.3683 3.83441C45.3759 3.78302 45.3956 3.73418 45.4259 3.69195C45.4562 3.64973 45.4961 3.61535 45.5423 3.59167C45.5885 3.56799 45.6398 3.5557 45.6917 3.55582H46.7755C46.8444 3.55622 46.9116 3.57815 46.9675 3.61856C47.0233 3.65897 47.0652 3.71584 47.0872 3.7812L48.6433 8.44957C48.6602 8.49891 48.665 8.55158 48.6573 8.60317C48.6496 8.65475 48.6297 8.70373 48.5991 8.74601C48.5686 8.78828 48.5284 8.82262 48.4818 8.84614C48.4353 8.86965 48.3838 8.88166 48.3316 8.88116"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M43.1189 6.23406H41.9944C41.9513 6.23406 41.9086 6.24256 41.8687 6.25907C41.8288 6.27558 41.7926 6.29977 41.7621 6.33028C41.7316 6.36078 41.7074 6.39699 41.6909 6.43685C41.6744 6.4767 41.6659 6.51941 41.6659 6.56255V9.00583C41.6659 9.05139 41.6659 9.09934 41.6659 9.1449C41.6469 9.32208 41.5628 9.4859 41.4299 9.60462C41.297 9.72334 41.1248 9.7885 40.9466 9.78749H40.5989C40.4207 9.7885 40.2485 9.72334 40.1156 9.60462C39.9827 9.4859 39.8986 9.32208 39.8796 9.1449C39.8796 9.09934 39.8796 9.05139 39.8796 9.00583V6.55776C39.8784 6.47351 39.8449 6.39293 39.786 6.33268C39.7271 6.27244 39.6473 6.23713 39.5631 6.23406H38.429C38.3419 6.23406 38.2583 6.26867 38.1967 6.33028C38.1351 6.39188 38.1005 6.47543 38.1005 6.56255V9.00583C38.1005 9.05139 38.1005 9.09934 38.1005 9.1449C38.0815 9.32208 37.9974 9.4859 37.8645 9.60462C37.7316 9.72334 37.5594 9.7885 37.3812 9.78749H37.0335C36.8553 9.7885 36.6831 9.72334 36.5502 9.60462C36.4173 9.4859 36.3332 9.32208 36.3142 9.1449C36.3142 9.09934 36.3142 9.05139 36.3142 9.00583V6.55776C36.3132 6.47547 36.2814 6.39654 36.225 6.3366C36.1686 6.27666 36.0918 6.24007 36.0097 6.23406H34.8852C34.798 6.23406 34.7145 6.26867 34.6529 6.33028C34.5913 6.39188 34.5567 6.47543 34.5567 6.56255V9.00583C34.5567 9.05139 34.5567 9.09934 34.5567 9.1449C34.5377 9.32208 34.4536 9.4859 34.3207 9.60462C34.1878 9.72334 34.0155 9.7885 33.8373 9.78749H31.8856V6.55536C31.8838 6.47072 31.8493 6.39006 31.7895 6.3302C31.7296 6.27034 31.6489 6.2359 31.5643 6.23406H30.4422C30.355 6.23406 30.2715 6.26867 30.2099 6.33028C30.1483 6.39188 30.1137 6.47543 30.1137 6.56255V11.4419C30.1137 11.5744 30.0876 11.7055 30.0368 11.8278C29.986 11.9502 29.9116 12.0613 29.8179 12.1549C29.7241 12.2484 29.6128 12.3225 29.4904 12.373C29.3679 12.4235 29.2367 12.4493 29.1042 12.449H28.2267C28.161 12.4474 28.0964 12.4655 28.0411 12.5011C27.9859 12.5366 27.9425 12.5879 27.9167 12.6483C27.8909 12.7087 27.8838 12.7754 27.8963 12.8399C27.9088 12.9044 27.9404 12.9637 27.9869 13.01L29.1066 14.1298C29.1379 14.1613 29.1753 14.1862 29.2165 14.2027C29.2578 14.2192 29.302 14.227 29.3464 14.2257C30.0175 14.2226 30.6605 13.9559 31.1368 13.4832C31.6131 13.0105 31.8846 12.3695 31.8928 11.6985V10.6866L32.6745 11.4707C32.7059 11.502 32.7433 11.5267 32.7845 11.5432C32.8257 11.5597 32.8699 11.5676 32.9142 11.5666H33.7822C34.3982 11.5686 34.9943 11.3481 35.4606 10.9456C35.927 11.3481 36.523 11.5686 37.139 11.5666H37.3524C37.9684 11.5686 38.5645 11.3481 39.0308 10.9456C39.4969 11.3485 40.0931 11.5691 40.7092 11.5666H40.9226C41.5386 11.5682 42.1345 11.3477 42.601 10.9456C42.601 10.9456 43.4858 10.0896 43.4858 9.04419V6.5074C43.4727 6.42282 43.427 6.34675 43.3583 6.29561C43.2897 6.24447 43.2037 6.22237 43.1189 6.23406Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M27.4282 9.78509V8.95068V6.55296C27.4282 6.46584 27.3936 6.38229 27.332 6.32068C27.2704 6.25908 27.1869 6.22447 27.0997 6.22447H22.7838C22.6228 6.22468 22.4622 6.24074 22.3043 6.27243C21.7451 6.40794 21.2477 6.72749 20.892 7.17974C20.5363 7.63198 20.3429 8.19068 20.343 8.76606C20.343 10.1831 21.4915 11.5714 22.9085 11.5714H24.6397C24.6841 11.5727 24.7283 11.5649 24.7695 11.5484C24.8108 11.5319 24.8482 11.5071 24.8794 11.4755L25.6635 10.701V11.4419C25.6635 11.709 25.5574 11.9651 25.3685 12.154C25.1797 12.3429 24.9235 12.449 24.6565 12.449H23.7621C23.6964 12.4474 23.6318 12.4655 23.5766 12.5011C23.5213 12.5366 23.478 12.5879 23.4522 12.6483C23.4263 12.7087 23.4192 12.7754 23.4317 12.8399C23.4443 12.9044 23.4758 12.9637 23.5223 13.01L24.6445 14.1322C24.7053 14.1921 24.7868 14.2265 24.8723 14.2281C25.5239 14.2242 26.1495 13.9721 26.6218 13.523C27.094 13.074 27.3772 12.4618 27.4138 11.8112V11.6961V10.6842V9.78509H27.4282ZM22.8606 9.80667C22.6596 9.80667 22.4669 9.72684 22.3248 9.58475C22.1827 9.44266 22.1029 9.24994 22.1029 9.04899V8.74927C22.1029 8.5481 22.1826 8.35514 22.3247 8.21266C22.4667 8.07019 22.6594 7.98983 22.8606 7.9892H25.6539V8.89793C25.6527 8.9155 25.6527 8.93312 25.6539 8.95068V9.80667H22.8606Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M19.1177 6.21968H18.0052C17.9621 6.21968 17.9195 6.22819 17.8798 6.24473C17.8401 6.26127 17.804 6.2855 17.7737 6.31604C17.7434 6.34657 17.7195 6.3828 17.7032 6.42264C17.687 6.46248 17.6788 6.50514 17.6791 6.54817V9.04899C17.6791 9.23977 17.6033 9.42273 17.4684 9.55763C17.3335 9.69252 17.1505 9.76831 16.9598 9.76831H14.9936V6.54817C14.9936 6.46105 14.959 6.3775 14.8974 6.31589C14.8358 6.25429 14.7523 6.21968 14.6651 6.21968H13.555C13.4679 6.21968 13.3843 6.25429 13.3227 6.31589C13.2611 6.3775 13.2265 6.46105 13.2265 6.54817V9.04899C13.2261 9.18365 13.1879 9.3155 13.1163 9.42952C13.0446 9.54355 12.9424 9.63518 12.8213 9.69398C12.7903 9.70845 12.7582 9.72047 12.7254 9.72995L12.6606 9.75152C12.6407 9.7527 12.6207 9.7527 12.6007 9.75152C12.5696 9.75388 12.5383 9.75388 12.5072 9.75152H12.0276C11.8774 9.72118 11.7408 9.64364 11.6377 9.53021C11.5346 9.41677 11.4705 9.27338 11.4546 9.12092C11.4546 9.07537 11.4546 9.02981 11.4546 8.98425V6.55296C11.4527 6.4669 11.4169 6.38507 11.3549 6.32533C11.2929 6.26558 11.2098 6.23278 11.1237 6.23407H9.99917C9.91205 6.23407 9.8285 6.26868 9.76689 6.33028C9.70529 6.39188 9.67068 6.47543 9.67068 6.56256V9.00104C9.67068 9.0466 9.67068 9.09215 9.67068 9.13771C9.65223 9.31532 9.56837 9.47973 9.43542 9.59894C9.30247 9.71815 9.12993 9.78365 8.95136 9.7827H8.60849C8.4454 9.78301 8.28704 9.72789 8.15939 9.62638C8.03174 9.52487 7.94238 9.383 7.90596 9.22403C7.89352 9.17056 7.88709 9.11587 7.88677 9.06098V6.55296C7.88428 6.46752 7.84857 6.38641 7.78724 6.32686C7.7259 6.26732 7.64377 6.23403 7.55829 6.23407H6.42176C6.341 6.24236 6.26617 6.28028 6.2117 6.3405C6.15724 6.40071 6.12701 6.47897 6.12685 6.56016V11.4371C6.12685 11.7042 6.02075 11.9604 5.83189 12.1492C5.64303 12.3381 5.38689 12.4442 5.1198 12.4442H3.57087C3.30357 12.4442 3.04717 12.3381 2.85793 12.1494C2.6687 11.9606 2.56206 11.7044 2.56143 11.4371V8.32009C2.56175 8.27706 2.55355 8.2344 2.5373 8.19456C2.52105 8.15472 2.49708 8.11849 2.46677 8.08795C2.43646 8.05742 2.40041 8.03318 2.36069 8.01665C2.32096 8.00011 2.27836 7.9916 2.23534 7.9916H1.1132C1.06925 7.99158 1.02573 8.00038 0.985242 8.01749C0.94475 8.03459 0.908102 8.05965 0.877471 8.09117C0.846839 8.1227 0.822846 8.16005 0.806914 8.20102C0.790981 8.24199 0.783433 8.28574 0.784716 8.32968V11.6601C0.784716 12.3395 1.05443 12.9911 1.5346 13.4717C2.01477 13.9523 2.66611 14.2226 3.34549 14.2233H5.34039C6.02041 14.2233 6.6726 13.9533 7.15367 13.4727C7.63474 12.9921 7.90532 12.3401 7.90596 11.6601V11.5378H8.79551V11.5234C8.84259 11.549 8.89539 11.5622 8.94897 11.5618C9.54108 11.5478 10.1099 11.3283 10.5578 10.9408C10.9212 11.2545 11.3659 11.459 11.8406 11.5306C11.8582 11.532 11.8758 11.532 11.8934 11.5306H11.9173C12.0207 11.5439 12.1248 11.5511 12.2291 11.5522H12.3369V11.5354H12.4377C12.5724 11.5367 12.707 11.5279 12.8405 11.5091C13.3764 11.4255 13.8718 11.1735 14.2551 10.7897L14.9169 11.4515C14.9483 11.4829 14.9858 11.5075 15.027 11.524C15.0682 11.5405 15.1123 11.5485 15.1567 11.5474H16.8974C17.2328 11.5465 17.5646 11.4795 17.8741 11.3503C18.1835 11.2211 18.4645 11.0322 18.701 10.7944C18.9374 10.5566 19.1247 10.2746 19.2522 9.96441C19.3796 9.65424 19.4447 9.32199 19.4438 8.98665V6.54817C19.4441 6.50514 19.4359 6.46248 19.4197 6.42264C19.4034 6.3828 19.3795 6.34657 19.3491 6.31604C19.3188 6.2855 19.2828 6.26127 19.2431 6.24473C19.2033 6.22819 19.1607 6.21968 19.1177 6.21968Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
            <path
              d="M18.2306 12.4442H15.3413C15.2983 12.4442 15.2557 12.4527 15.216 12.4692C15.1762 12.4858 15.1402 12.51 15.1099 12.5405C15.0796 12.5711 15.0556 12.6073 15.0393 12.6471C15.0231 12.687 15.0149 12.7296 15.0152 12.7727V13.89C15.0152 13.9765 15.0496 14.0594 15.1107 14.1206C15.1719 14.1817 15.2548 14.2161 15.3413 14.2161H18.2306C18.2736 14.2164 18.3162 14.2082 18.3561 14.192C18.3959 14.1757 18.4322 14.1517 18.4627 14.1214C18.4932 14.0911 18.5175 14.0551 18.534 14.0153C18.5505 13.9756 18.559 13.933 18.559 13.89V12.7727C18.559 12.6855 18.5244 12.602 18.4628 12.5404C18.4012 12.4788 18.3177 12.4442 18.2306 12.4442Z"
              fill="#424242"
              className="dark:fill-neutral-300"
            />
          </g>
          <defs>
            <clipPath id="clip0_879_162962">
              <rect
                width="109.319"
                height="16"
                fill="white"
                transform="translate(0.784729)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
    href: "",
  },
];
export const mobileFooterLinks = [
  {
    id: 1,
    title: "خانه",
    icon: (
      <svg
        fill="#888888"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.555,8.168l-9-6A1,1,0,0,0,12,2h0a1,1,0,0,0-.554.168l-9,6A1,1,0,0,0,3,10H4V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V10h1a1,1,0,0,0,.556-1.832ZM18,20H6V8.2l6-4,6,4Z" />
      </svg>
    ),
    activeIcon: (
      <svg
        fill="#535353"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.168,10.555a1,1,0,0,1,.278-1.387l9-6a1,1,0,0,1,1.11,0l9,6A1,1,0,0,1,21,11H19v9a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V11H3l.019-.019A.981.981,0,0,1,2.168,10.555Z" />
      </svg>
    ),
    href: "/",
  },
  {
    id: 2,
    title: "دسته‌بندی",
    icon: (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
          stroke="#888888"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
          stroke="#888888"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
          stroke="#888888"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
          stroke="#888888"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="26px"
        height="26px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
          fill="#464646"
        />
        <path
          d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
          fill="#464646"
        />
        <path
          d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"
          fill="#464646"
        />
        <path
          d="M17.7099 22.0019C20.0792 22.0019 21.9999 20.0812 21.9999 17.7119C21.9999 15.3426 20.0792 13.4219 17.7099 13.4219C15.3406 13.4219 13.4199 15.3426 13.4199 17.7119C13.4199 20.0812 15.3406 22.0019 17.7099 22.0019Z"
          fill="#464646"
        />
      </svg>
    ),
    href: "/categories",
  },
  {
    id: 3,
    title: "سبد خرید",
    icon: (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6V6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z"
          stroke="#888888"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 3H3.5V3C4.1642 3 4.72218 3.49942 4.79553 4.15955L5.55558 11"
          stroke="#888888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18C8.32843 18 9 18.6716 9 19.5Z"
          stroke="#888888"
          strokeWidth="2"
        />
        <path
          d="M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z"
          stroke="#888888"
          strokeWidth="2"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z"
          fill="#575757"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z"
          fill="#575757"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z"
          fill="#575757"
        />
      </svg>
    ),
    href: "/checkout/cart",
  },
  {
    id: 4,
    title: "دیجی‌کالای من",
    icon: (
      <svg
        width="26px"
        height="26px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z"
          stroke="#888888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="#888888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z"
          fill="#575757"
        />
        <path
          d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z"
          fill="#575757"
        />
      </svg>
    ),
    href: "/profile",
  },
];
