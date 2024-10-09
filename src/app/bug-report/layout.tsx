import MobileFooter from "@/components/mobile-footer/MobileFooter";

export default async function BugReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <MobileFooter />
    </div>
  );
}
