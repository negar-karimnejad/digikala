import { DeleteDropdownItem } from "@/components/admin/DeleteDropdownItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminProductsPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const products = await db.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      discount: true,
      thumbnail: true,
    },
    orderBy: { title: "asc" },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>عنوان</TableHead>
          <TableHead>قیمت</TableHead>
          <TableHead>تخفیف</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              <Image alt="" height={100} width={100} src={product.thumbnail} />
            </TableCell>
            <TableCell>
              <p>{product.title}</p>
            </TableCell>
            <TableCell>
              <p className="font-iransans whitespace-nowrap">
                {product.price?.toLocaleString()} تومان
              </p>
            </TableCell>
            <TableCell>
              <div className="bg-red-500 text-white rounded-full text-center px-0.5">
                {product.discount}%
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link
                      className="flex w-full justify-end"
                      href={`/admin/products/${product.id}`}
                    >
                      مشاهده
                      <Eye size={15} className="text-gray-400 mx-4" />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      className="flex w-full justify-end"
                      href={`/admin/products/${product.id}/edit`}
                    >
                      ویرایش
                      <Edit2 size={15} className="text-gray-400 mx-4" />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DeleteDropdownItem id={product.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
