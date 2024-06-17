import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/btn-logout";
export default async function Profile() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <div className="w-11/12 mx-auto space-y-5">
          <h1>
            Kamu login sebagai {session?.user?.name} dari email{" "}
            {session?.user?.email}
          </h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Kamu belum login </h1>
        </div>
      )}
    </>
  );
}
