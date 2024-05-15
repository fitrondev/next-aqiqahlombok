import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";

const MobileAction = async () => {
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
        <>
          {user?.roles === "admin" && (
            <Link
              href={"/dashboard"}
              className="text-2xl font-semibold text-start hover:text-primary transition-colors duration-300 ease-in-out">
              Dashboard
            </Link>
          )}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}>
            <Button
              type="submit"
              className="p-0 bg-transparent text-foreground text-2xl font-semibold text-start hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out">
              Sign Out
            </Button>
          </form>
        </>
      ) : (
        <Link
          href={"/auth/login"}
          className="text-2xl font-semibold text-start hover:text-primary transition-colors duration-300 ease-in-out">
          Sign In
        </Link>
      )}
    </>
  );
};
export default MobileAction;
