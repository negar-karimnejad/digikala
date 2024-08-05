import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Category, Submenu, Product, SubmenuItem } from "@prisma/client";
import { SlashIcon } from "lucide-react";

interface BreadcrumbContainerProps {
  category: Category;
  submenu: Submenu;
  item: SubmenuItem;
  product: Product;
}

export default function BreadcrumbContainer({
  category,
  submenu,
  item,
  product,
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
      </BreadcrumbList>
    </Breadcrumb>
  );
}
