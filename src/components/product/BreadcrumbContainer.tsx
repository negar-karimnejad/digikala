import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Category, Submenu, SubmenuItem } from "@/utils/types";
import React from "react";

interface BreadcrumbContainerProps {
  category: Category;
  submenu: Submenu;
  item?: SubmenuItem;
  title?: string;
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
    { label: item?.title, href: item?.href },
  ].filter((breadcrumb) => breadcrumb.label);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem className="text-xs">
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}{" "}
          </React.Fragment>
        ))}
        {title && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-xs">
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
