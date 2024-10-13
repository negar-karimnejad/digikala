"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarList from "./SidebarList";

export default function Sidebar() {
  const [sheet, setSheet] = useState(false);

  const toggleSheet = () => setSheet((prev) => !prev);
  const closeSheet = () => setSheet(false);

  return (
    <div className="border rounded-lg">
      <div className="max-lg:hidden">
        <SidebarList />
      </div>
      <div
        className="lg:hidden max-lg:flex max-lg:justify-between items-center max-lg:px-5 max-lg:flex-row-reverse"
        style={{ direction: "rtl" }}
      >
        <h1 className="font-bold py-5 text-center text-5xl">
          <Logo />
        </h1>
        <Sheet open={sheet} onOpenChange={toggleSheet}>
          <SheetTrigger>
            <Menu className="lg:hidden" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="h-screen overflow-y-auto hidden-scrollbar p-0 w-[300px] sm:w-[400px]"
          >
            <SidebarList closeSheet={closeSheet} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
