import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// async function getBreadcrumbs(productId) {
//   const product = await prisma.product.findUnique({
//     where: { id: productId },
//     include: { categories: { include: { parent: true } } }
//   });

//   const breadcrumbs = [];
//   const category = product.categories[0]; 

//   while (category) {
//     breadcrumbs.unshift(category.name);
//     category = category.parent;
//   }

//   breadcrumbs.push(product.title); 
//   return breadcrumbs;
// }

export default function ProductPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
