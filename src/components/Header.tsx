import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { DarkMode } from "./ui/DarkMode";
import { Button } from "./ui/button";
import Container from "./ui/container";
import ProfileButton from "./ui/ProfileButton";

const routes = [
  { label: "Products", href: "/" },
  { label: "Categories", href: "/" },
  { label: "On Sale", href: "/" },
];
export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <Link href="/">STORE NAME</Link>
          </h1>
          <nav className="max-md:hidden flex mx-6 items-center space-x-4 lg:space-x-6 ">
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
