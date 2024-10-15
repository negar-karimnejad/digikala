import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authUser } from "@/utils/auth";
import { Product, User } from "@/utils/types";
import connectToDB from "config/mongodb";
import { Bell, Box, Check, UserRound } from "lucide-react";
import ProductModel from "models/Product";
import UserModel from "models/User";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default async function AdminPage() {
  connectToDB();
  const users: User[] = await UserModel.find({});
  const user: User = await authUser();
  const products: Product[] = await ProductModel.find({}).lean();
  const topProducts = products
    .slice()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <div className="h-screen flex">
      <div className="flex-1">
        <header className="h-16 border border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-between px-4">
          <div className="text-lg text-neutral-700 dark:text-neutral-100 font-semibold">
            پیشخوان
          </div>
          <div className="flex items-center gap-2">
            <Bell
              size={20}
              className="p-2.5 dark:bg-neutral-700 bg-neutral-100 w-10 h-10 rounded-full flex items-center justify-center"
            />
            <div className="border dark:border-neutral-600 rounded-lg px-3 py-1.5 flex items-center gap-2 dark:text-white font-irsansb text-neutral-600 border-neutral-100">
              {user.avatar ? (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar} className="object-cover" />
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
                  className="grayscale rounded-full w-8 h-8 border"
                />
              )}
              {user.name}
            </div>
          </div>
        </header>

        <div className="flex-1 mt-3">
          <main className="py-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="dark:shadow-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 border-neutral-50 dark:border-neutral-900 border-2 relative p-4 pt-8 rounded-2xl shadow-md flex flex-col items-start">
                <span className="absolute right-0 left-0 mx-auto -top-5 bg-white dark:bg-neutral-950 rounded-full w-10 h-10 bg-transparent shadow flex items-center justify-center border-2 border-green-100 dark:border-green-500">
                  <Check className="text-green-500" size={25} />
                </span>

                <div className="text-neutral-400">درآمد ماهانه</div>
                <div className="text-2xl font-semibold items-center gap-1 flex">
                  12,345,000
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-neutral-600 dark:fill-neutral-300"
                  >
                    <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                    <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                    <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
                  </svg>
                </div>
                <span className="text-green-500 text-sm">
                  +5% نسبت به ماه قبل
                </span>
              </div>
              <div className="dark:shadow-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 border-neutral-50 dark:border-neutral-900 border-2 relative p-4 pt-8 rounded-2xl shadow-md flex flex-col items-start">
                <span className="absolute right-0 left-0 mx-auto -top-5 bg-white dark:bg-neutral-950 rounded-full w-10 h-10 bg-transparent dshadow flex items-center justify-center border-2 border-rose-100 dark:border-rose-500">
                  <Box className="text-rose-500" size={25} />
                </span>
                <div className="text-neutral-400">تعداد سفارشات</div>
                <div className="text-2xl font-semibold">567</div>
                <span className="text-red-500 text-sm">
                  -2% نسبت به ماه قبل
                </span>
              </div>
              <div className="dark:shadow-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 border-neutral-50 dark:border-neutral-900 border-2 relative p-4 pt-8 rounded-2xl shadow-md flex flex-col items-start">
                <span className="absolute right-0 left-0 mx-auto -top-5 bg-white dark:bg-neutral-950 rounded-full w-10 h-10 bg-transpare0 shadow flex items-center justify-center border-2 border-yellow-100 dark:border-yellow-500">
                  <UserRound className="text-yellow-500" size={25} />
                </span>
                <div className="text-neutral-400">تعداد کاربران</div>
                <div className="text-2xl font-semibold">
                  {users.length.toLocaleString()}
                </div>
                <span className="text-green-500 text-sm">
                  +10% نسبت به ماه قبل
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md border-2 border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  محصولات برتر هفته
                </h3>
                <p className="text-neutral-400 text-sm">
                  برترین ها از نگاه شما
                </p>
              </div>

              <Table className="max-sm:overflow-x-auto">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">تصویر</TableHead>
                    <TableHead className="text-right">عنوان</TableHead>
                    <TableHead className="text-right">
                      میزان رضایت کاربران
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product: Product) => (
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
                        <p className="max-w-96">{product.title}</p>
                      </TableCell>
                      <TableCell>
                        <div className="w-36 relative flex items-center h-2">
                          <div className="w-28 absolute top-0 h-full right-0 bg-neutral-300 rounded">
                            <div
                              className="bg-green-500 rounded h-full"
                              style={{
                                width: `${product.recommended_percent}%`,
                              }}
                            ></div>
                          </div>
                          <p className="absolute -top-1.5 -left-2">
                            {product.recommended_percent}%
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
