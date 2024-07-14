import {
  Armchair,
  BadgePercent,
  Book,
  CreditCard,
  Flame,
  GalleryHorizontalEnd,
  Gem,
  HeartPulse,
  Home,
  Laptop,
  MapPin,
  Menu,
  PencilRuler,
  Phone,
  Refrigerator,
  Shirt,
  ShoppingBasket,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    label: "شگفت انگیزها",
    href: "/",
    icon: <BadgePercent size={18} />,
  },
  { label: "سوپرمارکت ", href: "/", icon: <ShoppingBasket size={18} /> },
  { label: "کارت هدیه ", href: "/", icon: <CreditCard size={18} /> },
  { label: "پرفروش ترین ها ", href: "/", icon: <Flame size={18} /> },
];

export default function Navbar() {
  return (
    <nav className="border-b shadow-sm max-lg:hidden duration-700 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative group flex items-center gap-2 py-3 cursor-pointer">
            <Menu size={17} />
            <span className="font-medium ">دسته بندی کالاها</span>
            <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
            <div className="fixed w-full h-full mt-12 bg-black/50 right-0 top-20  group-hover:opacity-100 transition-all">
              <div className="mr-4 grid grid-cols-12 top-12 border bg-white right-0 max-w-4xl shadow-sm">
                <div className="bg-gray-100 max-h-[25.5rem] overflow-y-auto col-span-3">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={category.href}
                          className="transition-all px-3 py-4 border border-gray-100 hover:border-gray-200 hover:font-bold hover:text-red-500 hover:bg-white text-gray-600 flex items-center gap-2 text-sm"
                        >
                          {category.icon}
                          {category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-9">j</div>
              </div>
            </div>
          </div>
          <div className="w-[0.5px] h-4 bg-gray-200 mr-4"></div>
          <NavLinks />
          <div className="w-[0.5px] h-4 bg-gray-200"></div>
          <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 text-[13px] group">
            <Link href="" className="font-medium transition-colors">
              سوالی دارید؟
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
          </button>
          <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 text-[13px] group">
            <Link href="" className="font-medium transition-colors">
              در دیجی کالا بفروشید!
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
          </button>
        </div>
        <div
          title="لطفا شهر خود را انتخاب کنید"
          className="flex items-center gap-2 text-gray-500 cursor-pointer"
        >
          <MapPin size={18} />
          <span className="text-[12px]">لطفا شهر خود را انتخاب کنید</span>
        </div>
      </div>
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <button
          key={link.label}
          className="relative flex mx-2.5 py-3 items-center gap-1 text-gray-500 text-[13px] group"
        >
          <span>{link.icon}</span>
          <Link href={link.href} className="font-medium transition-colors">
            {link.label}
          </Link>
          <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
        </button>
      ))}
    </>
  );
};

const categories = [
  { id: 1, title: "موبایل", icon: <Smartphone size={16} />, href: "/" },
  {
    id: 2,
    title: "کتاب، لوازم التحریر",
    icon: <PencilRuler size={16} />,
    href: "/",
  },
  { id: 3, title: "کالای دیجیتال", icon: <Laptop size={16} />, href: "/" },
  { id: 4, title: "مد و پوشاک", icon: <Shirt size={16} />, href: "/" },
  { id: 5, title: "آرایشی بهداشتی", icon: <HeartPulse size={16} />, href: "/" },
  {
    id: 6,
    title: "لوازم خانگی برقی",
    icon: <Refrigerator size={16} />,
    href: "/",
  },
  { id: 7, title: "خانه و آشپزخانه", icon: <Armchair size={16} />, href: "/" },
  {
    id: 8,
    title: "طلا و نقره",
    icon: <Gem size={16} />,
    href: "/",
  },
];
