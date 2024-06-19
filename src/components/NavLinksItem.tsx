"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinksItem({ link }: { link: { name: string; href: string } }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.href);
  
  return (
    <Link
      className={`p-2 text-blue-800 ${isActive ? "bg-yellow-400" : ""}`}
      href={link.href}
    >
      {link.name}
    </Link>
  );
}

export default NavLinksItem;
