import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className="space-y-5">
      <div className="space-y-2">
        <label>
          Email
          <Input
            name="email"
            type="email"
            placeholder="Masukkan email Anda"
            className="mt-2"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label>
          Password
          <Input
            name="password"
            type="password"
            placeholder="Masukkan password Anda"
            className="mt-2"
          />
        </label>
      </div>
      <Button type="submit" className="w-full text-lg">
        Login
      </Button>
    </form>
  );
};
export default LoginForm;
