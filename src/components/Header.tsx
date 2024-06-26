import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { DarkMode } from "./ui/DarkMode";
import ProfileButton from "./ui/ProfileButton";
import { Button } from "./ui/button";
import Container from "./ui/container";

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
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger>
                <Menu className="md:hidden" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col items-start gap-4">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-lg font-bold">
              <Link href="/">STORE NAME</Link>
            </h1>
          </div>
          <nav className="max-md:hidden flex mx-6 items-center space-x-4 lg:space-x-6 ">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <DarkMode />
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
