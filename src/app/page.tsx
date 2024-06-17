import Link from "next/link";

export default function App() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="flex space-x-5">
        <Link href={"/"} className="hover:text-blue-500">
          Home
        </Link>
        <Link href={"/login"} className="hover:text-blue-500">
          Login
        </Link>
        <Link href={"/profile"} className="hover:text-blue-500">
          Profile
        </Link>
      </div>
    </section>
  );
}
