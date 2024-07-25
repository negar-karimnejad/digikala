import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";

import { AuthProvider } from "@/lib/AuthProvider";
import { getServerSession } from "next-auth";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import MobileFooter from "@/components/mobile-footer/MobileFooter";

const iranSans = localFont({ src: "../fonts/IranianSans.ttf" });

export const metadata = {
  title: "فروشگاه اینترنتی دیجی‌کالا",
  description:
    "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" dir="rtl">
      <body
        className={cn(
          "bg-background min-h-screen antialiased",
          iranSans.className
        )}
      >
        <AuthProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <MobileFooter />
            <Toaster position="top-center" reverseOrder={false} />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
