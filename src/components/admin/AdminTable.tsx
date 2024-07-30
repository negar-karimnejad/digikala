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
import { Category, Product, Submenu, SubmenuItem, User } from "@prisma/client";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "./../../../public/avatar/avatar1.png";

export default function AdminTable({
  products,
  categories,
  users,
  submenus,
  submenuItems,
}: {
  products?: Product[] | null;
  users?: User[] | null;
  categories?: Category[] | null;
  submenus?: Submenu[] | null;
  submenuItems?: SubmenuItem[] | null;
}) {
  return (
    <div>
      <Table className="max-sm:overflow-x-auto">
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
          {categories && (
            <TableRow>
              <TableHead className="text-right">کاور</TableHead>
              <TableHead className="text-right">نام</TableHead>
              <TableHead className="text-right">آیکون</TableHead>
              <TableHead className="text-right">آدرس لینک</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
          {submenus && (
            <TableRow>
              <TableHead className="text-right">نام</TableHead>
              <TableHead className="text-right">آدرس لینک</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
          {submenuItems && (
            <TableRow>
              <TableHead className="text-right">نام</TableHead>
              <TableHead className="text-right">آدرس لینک</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={product.title}
                      height={100}
                      width={100}
                      className="rounded-full w-16 h-16 object-cover"
                      src={product.thumbnail}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="w-52 max-w-64">{product.title}</p>
                </TableCell>
                <TableCell>
                  <p className="font-iransans text-center whitespace-nowrap">
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
                        <DeleteDropdownItem productId={product.id} />
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
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={user.name ? user.name : "user image"}
                      height={100}
                      width={100}
                      src={user.avatar ? user.avatar : avatar}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{user.name}</p>
                </TableCell>
                <TableCell>
                  <p>{user.email}</p>
                </TableCell>
                <TableCell>
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
                        <DropdownMenuItem asChild>
                          <Link
                            className="flex w-full justify-end items-center"
                            href={`/admin/users/${user.id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteDropdownItem userId={user.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {categories &&
            categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={category.title}
                      height={100}
                      width={100}
                      className="rounded-full w-16 h-16 object-cover"
                      src={category.cover}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{category.title}</p>
                </TableCell>
                <TableCell>
                  <div>
                    <Image
                      alt={category.title}
                      height={100}
                      width={100}
                      className="w-8 h-8 object-cover"
                      src={category.icon}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{category.href}</p>
                </TableCell>

                <TableCell>
                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical />
                        <span className="sr-only">Actions</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link
                            className="flex w-full justify-end items-center"
                            href={`/admin/categories/${category.id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteDropdownItem categoryId={category.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {submenus &&
            submenus.map((submenu) => (
              <TableRow key={submenu.id}>
                <TableCell>
                  <p className="whitespace-nowrap">{submenu.title}</p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{submenu.href}</p>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical />
                        <span className="sr-only">Actions</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DeleteDropdownItem submenuId={submenu.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {submenuItems &&
            submenuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <p className="whitespace-nowrap">{item.title}</p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{item.href}</p>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical />
                        <span className="sr-only">Actions</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DeleteDropdownItem itemId={item.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
