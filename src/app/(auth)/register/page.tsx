"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (res.ok) {
//         toast.success("You registered successfully.", {
//           //   autoClose: 1200,
//         });
//         // router.push("/login");
//       }
//     } catch (error: any) {
//       toast.error(error, {
//         // autoClose: 1200,
//       });
//     }
//   };

  return (
    <div className="flex items-center justify-center">
      <div className="p-5 w-[350px] mt-16 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-primary font-extrabold">Register</h1>
        <form className="flex flex-col gap-2 w-full">
          <Input
            type="text"
            placeholder="email"
            className="bg-gray-50"
          />
          <Input
            type="password"
            placeholder="password"
            className="bg-gray-50"
          />
          <Button type="submit" className="rounded-lg">
            Register
          </Button>
        </form>
        <p className="text-gray-600">or login with providers</p>
        <Button
          onClick={() => signIn("github")}
          className="w-full bg-transparent rounded-lg text-slate-800 border"
        >
          <Github />
          <span className="ml-2">Login with github</span>
        </Button>
      </div>
    </div>
  );
}
