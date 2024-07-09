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
import { Product, User } from "@prisma/client";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminTable({
  products,
  users,
}: {
  products?: Product[] | null;
  users?: User[] | null;
}) {
  return (
    <Table>
      <TableHeader>
        {products && (
          <TableRow>
            <TableHead className="text-right">تصویر</TableHead>
            <TableHead className="text-right">عنوان</TableHead>
            <TableHead className="text-right">قیمت</TableHead>
            <TableHead className="text-right max-sm:hidden">تخفیف</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        )}
        {users && (
          <TableRow>
            <TableHead className="text-right">آواتار</TableHead>
            <TableHead className="text-right">نام</TableHead>
            <TableHead className="text-right">ایمیل</TableHead>
            <TableHead className="text-right">نقش</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        )}
      </TableHeader>
      <TableBody>
        {products &&
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="w-24">
                <Image
                  alt={product.title}
                  height={200}
                  width={200}
                  src={product.thumbnail}
                  className=""
                />
              </TableCell>
              <TableCell>
                <p>{product.title}</p>
              </TableCell>
              <TableCell>
                <p className="font-iransans text-center">
                  {product.price?.toLocaleString()} تومان
                </p>
              </TableCell>
              <TableCell className="max-sm:hidden">
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
        {users &&
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-24">
                {/* <Image
                  alt={user.name}
                  height={200}
                  width={200}
                  src={product.thumbnail}
                  className=""
                /> */}
              </TableCell>
              <TableCell>
                <p>{user.name}</p>
              </TableCell>
              <TableCell>
                <p>{user.email}</p>
              </TableCell>
              <TableCell className="max-sm:hidden">
                <p>{user.role === "USER" ? "کاربر" : "ادمین"}</p>
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
                          ویرایش
                          <Edit2 size={15} className="text-gray-400 mx-4" />
                        </DialogTrigger>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />
                      <DeleteDropdownItem id={user.id} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="w-4/6 mx-auto text-center text-red-500 mb-5 mt-10 leading-8">
                        {user.name}
                      </DialogTitle>
                      <DialogDescription>
                        <UserUpdateForm user={user} />
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

