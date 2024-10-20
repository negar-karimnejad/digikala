import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileFooter from "@/components/mobile-footer/MobileFooter";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "شرایط و قوانین",
  };
}

export default async function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-lg:hidden sticky top-0 bg-white dark:bg-neutral-950 z-40">
        <Header />
      </div>
      <div className="lg:hidden sticky top-0 bg-white dark:bg-neutral-950 z-40">
        <MobileStickyHeader />
      </div>
      {children}
      <div className="max-lg:hidden">
        <Footer />
      </div>
      <MobileFooter />
    </div>
  );
}
