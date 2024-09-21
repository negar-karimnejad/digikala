import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileFooter from "@/components/mobile-footer/MobileFooter";

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-lg:hidden sticky top-0 bg-white dark:bg-neutral-950 z-40">
        <Header />
      </div>
      {children}
      <div className="max-lg:hidden">
        <Footer />
      </div>
      <MobileFooter />
    </>
  );
}
