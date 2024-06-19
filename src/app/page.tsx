import Link from "next/link";

function Home() {
  return (
    <>
      <h1>home page</h1>
      <Link href="/about">Blog</Link>
    </>
  );
}

export default Home;
