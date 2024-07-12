import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { DarkMode } from "./ui/DarkMode";
import ProfileButton from "./ui/ProfileButton";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const routes = [
  { label: "Products", href: "/" },
  { label: "Categories", href: "/" },
  { label: "On Sale", href: "/" },
];
const NavLinks = () => {
  return (
    <>
      {routes.map((route) => (
        <Button key={route.label} variant="ghost" asChild>
          <Link
            href={route.href}
            className="font-medium text-sm transition-colors"
          >
            {route.label}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="scale-75 mr-0 float-right">
              <Logo />
            </div>
            <div>
              <label
                htmlFor="search"
                className="w-[35rem] h-10 py-3 bg-gray-200 border-0"
              >
                <Input
                  type="text"
                  id="search"
                  placeholder="جستجو"
                  className="bg-gray-200 border-0 w-full"
                />
              </label>
            </div>
            {/* <Sheet>
              <SheetTrigger>
                <Menu className="md:hidden" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col items-start gap-4">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet> */}
          </div>

          {/* <nav className="max-md:hidden flex mx-6 items-center space-x-4 lg:space-x-6 ">
            <NavLinks />
          </nav> */}
          <div className="flex items-center gap-2">
            <DarkMode />
            <div className="w-[0.5px] h-6 bg-gray-300 ml-2"></div>
            <ProfileButton />
            <div className="w-[0.5px] h-6 bg-gray-300 mr-2"></div>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
