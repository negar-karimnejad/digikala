import Header from "@/components/header/Header";
import MobileFooter from "@/components/mobile-footer/MobileFooter";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <MobileFooter />
    </>
  );
}
