import Link from "next/link";

function page() {
  return (
    <ul className="flex flex-col gap-2 m-5 list-disc">
      <li className="text-blue-500 font-bold">
        <Link href="/products/1">Product 1</Link>
      </li>
      <li className="text-blue-500 font-bold">
        <Link href="/products/2">Product 2</Link>
      </li>
      <li className="text-blue-500 font-bold">
        <Link href="/products/3">Product 3</Link>
      </li>
    </ul>
  );
}

export default page;
