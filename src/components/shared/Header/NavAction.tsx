import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";

const NavAction = async () => {
  const session = await auth();

  const userSession = session?.user?.email;

  const user = await prisma.user.findUnique({
    where: {
      email: userSession ?? "",
    },
  });
  return (
    <>
      {session ? (
        <div className="flex gap-4">
          {user?.roles === "admin" && (
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          )}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}>
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      ) : (
        <Button asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
      )}
    </>
  );
};
export default NavAction;
