import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GoogleAction from "../../_components/GoogleAction";
import Link from "next/link";
import RegisterForm from "../../_components/RegisterForm";

const Register = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Isi formulir di bawah ini untuk mendaftar.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <RegisterForm />
        <div className="text-center text-sm">Or continue with</div>
        <GoogleAction />
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-2 text-sm">
        <p>Sudah mempunyai akun?</p>
        <Link href={"/auth/login"} className="text-primary">
          Login
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Register;
