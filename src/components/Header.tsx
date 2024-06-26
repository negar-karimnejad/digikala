import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { DarkMode } from "./DarkMode";
import { Button } from "./ui/button";
import Container from "./ui/container";

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <Link href="/">STORE NAME</Link>
          </h1>
          <div className="max-sm:hidden">
            <Button variant="ghost">
              <Link href="">Products</Link>
            </Button>
            <Button variant="ghost">
              <Link href="">Categories</Link>
            </Button>
            <Button variant="ghost">
              <Link href="">On Sale</Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart />
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
