import { ChevronLeft, LogOut, LogOutIcon, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const sidebarMenu = [
  { label: "محصول جدید", icon: <Plus /> },
  { label: "محصولات", icon: <Plus /> },
  { label: "سفارشات", icon: <Plus /> },
  { label: "دسته بندی ها", icon: <Plus /> },
  { label: "مشخصات دسته بندی ها", icon: <Plus /> },
  { label: "کاربران", icon: <Plus /> },
  { label: "دیدگاه ها", icon: <Plus /> },
];
export default function Sidebar() {
  return (
    <div className="border rounded-lg p-5">
      <ul>
        {sidebarMenu.map((item, index: number) => (
          <li key={index} className="border-t py-4">
            <Link href="" className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>{item.icon}</span>
                <span className="text-gray-700">{item.label}</span>
              </div>
              <span>
                <ChevronLeft size={14} />
              </span>
            </Link>
          </li>
        ))}
        <Button variant={"secondary"} className=" w-full py-4">
          <Link href="" className="flex  gap-4">
            <span>
              <LogOut />
            </span>
            <span className="text-gray-700">خروج از حساب کاربری</span>
          </Link>
        </Button>
      </ul>
    </div>
  );
}
