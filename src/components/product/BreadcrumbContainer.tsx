"use clent";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product, Submenu, SubmenuItem } from "@/types/types";
import { SlashIcon } from "lucide-react";

interface BreadcrumbContainerProps {
  submenu: Submenu;
  item: SubmenuItem;
  product: Product;
}

export default function BreadcrumbContainer({
  submenu,
  item,
  product,
}: BreadcrumbContainerProps) {
  console.log("🧧🧧🧧", product);

  // const breadcrumbs = [
  //   { label: "دیجی‌کالا", href: "/" },
  //   { label: product.category.title, href: product.category.href },
  //   { label: submenu.title, href: submenu.href },
  //   { label: item.title, href: item.href },
  // ];
  return (
    <Breadcrumb>
      {/* <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
          </>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{product.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList> */}
    </Breadcrumb>
  );
}
