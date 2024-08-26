import { authUser } from "@/utils/auth";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default async function Header() {
  const user = await authUser();
  
  return (
    <>
      <Topbar user={user} />
      <Navbar />
    </>
  );
}
