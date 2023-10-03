"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    password: "",
  });
  React.useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/admin/create-blog");
    }
  });
  const onLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await signIn("credentials", { ...userDetails, redirect: false }).then(
        (callback) => {
          if (callback?.error) toast.error(callback.error);
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in successfully!");
            router.push("/admin/create-blog");
          }
        }
      );
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error("Error logging in!");
    }
  };
  return (
    <form className="justify-items-center" onSubmit={onLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              username: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
