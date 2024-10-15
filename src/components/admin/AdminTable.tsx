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
import {
  Article,
  Category,
  Order,
  Product,
  Story,
  Submenu,
  SubmenuItem,
  User,
} from "@/utils/types";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "./../../../public/users/avatar1.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AdminTable({
  products,
  categories,
  users,
  submenus,
  submenuItems,
  stories,
  articles,
  orders,
}: {
  products?: Product[];
  users?: User[];
  categories?: Category[];
  submenus?: Submenu[];
  submenuItems?: SubmenuItem[];
  stories?: Story[];
  articles?: Article[];
  orders?: Order[];
}) {
  return (
    <div>
      <Table className="max-sm:overflow-x-auto">
        <TableHeader>
          {products && (
            <TableRow>
              <TableHead className="text-right">تصویر</TableHead>
              <TableHead className="text-right">عنوان</TableHead>
              <TableHead className="text-right">امتیاز</TableHead>
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
          {stories && (
            <TableRow>
              <TableHead className="text-right">نام</TableHead>
              <TableHead className="text-right">کاور</TableHead>
              <TableHead className="text-right">تصویر</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
          {orders && (
            <TableRow>
              <TableHead className="text-right">تعداد</TableHead>
              <TableHead className="text-right">شناسه سفارش</TableHead>
              <TableHead className="text-right">شناسه محصول</TableHead>
              <TableHead className="text-right">شناسه کاربر</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
          {articles && (
            <TableRow>
              <TableHead className="text-right">کاور</TableHead>
              <TableHead className="text-right">عنوان</TableHead>
              <TableHead className="text-right">نویسنده</TableHead>
              <TableHead className="text-right">منبع</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                زمان مطالعه
              </TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {products &&
            products.map((product: Product) => (
              <TableRow key={product._id.toString()}>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={product.title}
                      height={100}
                      width={100}
                      className="w-16 h-16 object-cover"
                      src={product.thumbnail}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="w-52 max-w-64">{product.title}</p>
                </TableCell>
                <TableCell>
                  <p>{product.rating}</p>
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
                            href={`/admin/products/${product._id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteDropdownItem
                          productId={product._id.toString()}
                        />
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
              <TableRow key={user._id.toString()}>
                <TableCell>
                  <div className="w-20">
                    {user.avatar ? (
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={user?.avatar}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-red-500 p-0.5">
                          {user.name.split(" ")[0].slice(0, 1)}{" "}
                          {user.name.split(" ")[1].slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src="/users/avatar1.png"
                        alt="admin"
                        className="grayscale rounded-full w-16 h-16 border"
                      />
                    )}
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
                            href={`/admin/users/${user._id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteDropdownItem userId={user._id.toString()} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {categories &&
            categories.map((category) => (
              <TableRow key={category._id.toString()}>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={category.title}
                      height={100}
                      width={100}
                      className="rounded-full w-16 h-16 object-cover"
                      src={category.cover[0]}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{category.title}</p>
                </TableCell>
                <TableCell>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
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
                            href={`/admin/categories/${category._id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DeleteDropdownItem
                          categoryId={category._id.toString()}
                        />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {submenus &&
            submenus.map((submenu) => (
              <TableRow key={submenu._id.toString()}>
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
                        <DeleteDropdownItem
                          submenuId={submenu._id.toString()}
                        />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {submenuItems &&
            submenuItems.map((item) => (
              <TableRow key={item._id.toString()}>
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
                        <DeleteDropdownItem itemId={item._id.toString()} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {stories &&
            stories.map((story) => (
              <TableRow key={story._id.toString()}>
                <TableCell>
                  <p className="whitespace-nowrap">{story.title}</p>
                </TableCell>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={story.title}
                      height={100}
                      width={100}
                      className="rounded-full w-16 h-16 object-cover"
                      src={story.cover}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={story.title}
                      height={100}
                      width={100}
                      className="rounded-full w-16 h-16 object-cover"
                      src={story.post}
                    />
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
                        <DeleteDropdownItem storyId={story._id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {orders &&
            orders.map((order, index) => (
              <TableRow key={order._id.toString()}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <p className="whitespace-nowrap font-sans">
                    {order._id.toString()}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap font-sans">
                    {order.productId.toString()}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap font-sans">
                    {order.userId.toString()}
                  </p>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical />
                        <span className="sr-only">Actions</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DeleteDropdownItem order={order} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          {articles &&
            articles.map((article) => (
              <TableRow key={article._id.toString()}>
                <TableCell>
                  <div className="w-20">
                    <Image
                      alt={article.title}
                      height={100}
                      width={100}
                      className="w-16 h-16 object-cover"
                      src={article.cover}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{article.title}</p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{article.author}</p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">{article.source}</p>
                </TableCell>
                <TableCell>
                  <p className="whitespace-nowrap">
                    {article.readingTime} دقیقه
                  </p>
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
                            href={`/admin/articles/${article._id}/edit`}
                          >
                            ویرایش
                            <Edit2 size={15} className="text-gray-400 mx-4" />
                          </Link>
                        </DropdownMenuItem>
                        <DeleteDropdownItem
                          articleId={article._id.toString()}
                        />
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
