"use client";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button
        className="bg-red-500 w-32 rounded-md text-white p-2 m-5"
        onClick={clickHandler}
      >
        order
      </button>
    </div>
  );
}

export default Login;
