import { authUser } from "@/utils/auth";
import connectToDB from "config/mongodb";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connectToDB();
  const user = await authUser();
  if (user) redirect("/");

  return <div>{children}</div>;
}
