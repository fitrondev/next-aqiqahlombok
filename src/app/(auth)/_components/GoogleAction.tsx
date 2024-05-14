import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleAction = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          callbackUrl: "/",
        });
      }}
      className="flex items-center justify-center">
      <Button variant={"outline"} type="submit">
        <FcGoogle className="size-6 mr-2" />
        Continue with Google
      </Button>
    </form>
  );
};
export default GoogleAction;
