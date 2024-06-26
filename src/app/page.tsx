import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <>
      <h1>home page</h1>
      <Link href="/about">Blog</Link>
      <Link href="/about">About</Link>
      <Button size="lg" variant={"destructive"}>
        Click me
      </Button>
    </>
  );
}

export default Home;
