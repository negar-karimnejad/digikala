import { DeleteDropdownItem } from "@/components/admin/DeleteDropdownItem";
import ProductDetails from "@/components/admin/ProductDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  const products = await db.product.findMany({ orderBy: { title: "asc" } });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>عنوان</TableHead>
          <TableHead>قیمت</TableHead>
          <TableHead>تخفیف</TableHead>
          <TableHead></TableHead>
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
              <Dialog>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <DialogTrigger className="flex w-full justify-end items-center">
                        مشاهده
                        <Eye size={15} className="text-gray-400 mx-4" />
                      </DialogTrigger>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        className="flex w-full justify-end items-center"
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
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="w-4/6 mx-auto text-center text-red-500 mb-5 mt-10 leading-8">
                      {product.title}
                    </DialogTitle>
                    <DialogDescription>
                      <ProductDetails product={product} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
