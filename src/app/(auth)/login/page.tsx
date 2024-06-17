"use client";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>("");

  const handleLoginCreedentials: FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
    if (res?.status === 401) {
      setMessage("Incorrect Email or Password");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        <div className="space-y-4">
          {message && (
            <p className="text-red-500 text-center text-sm">{message}</p>
          )}
          <form onSubmit={handleLoginCreedentials}>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={data.email}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, password: e.target.value }));
                  }}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-2">
              Sign in
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign in with Google
          </Button>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="#"
              className="font-medium underline underline-offset-2"
              prefetch={false}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
