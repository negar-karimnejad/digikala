import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileFooter from "@/components/mobile-footer/MobileFooter";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileFooter />
    </>
  );
}
