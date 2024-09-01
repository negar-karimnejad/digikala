import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Category, Product, Submenu, SubmenuItem } from "@/types/types";
import { SlashIcon } from "lucide-react";
import React from "react";

interface BreadcrumbContainerProps {
  category: Category;
  submenu: Submenu;
  item: SubmenuItem;
  title: string;
}

export default function BreadcrumbContainer({
  category,
  submenu,
  item,
  title,
}: BreadcrumbContainerProps) {
  const breadcrumbs = [
    { label: "دیجی‌کالا", href: "/" },
    { label: category.title, href: category.href },
    { label: submenu.title, href: submenu.href },
    { label: item.title, href: item.href },
  ];
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
