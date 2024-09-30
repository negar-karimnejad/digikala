import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Loading from "./loading";
import { CartProvider } from "@/context/cartItemsContext";

const iranSans = localFont({ src: "../fonts/IranianSans.ttf" });

export const metadata = {
  title: {
    default: "فروشگاه اینترنتی دیجی‌کالا",
    template: "%s | فروشگاه اینترنتی دیجی‌کالا",
  },
  description:
    "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={cn(
          "bg-background min-h-screen antialiased",
          iranSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </CartProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
