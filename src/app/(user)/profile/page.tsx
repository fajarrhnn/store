import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "@/components/btn-logout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  return (
    <section className="w-full mx-auto min-h-screen flex justify-center items-center">
      {session ? (
        <div className="space-y-5">
          <h1>
            Kamu login sebagai {session?.user?.name} dari email{" "}
            {session?.user?.email}
          </h1>
          <LogoutButton />
        </div>
      ) : (
        <div className="space-y-5">
          <h1>Kamu belum login </h1>
          <Button variant={"link"}>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
