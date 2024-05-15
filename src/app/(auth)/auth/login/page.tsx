import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GoogleAction from "../../_components/GoogleAction";
import LoginForm from "../../_components/LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Isi formulir di bawah ini untuk masuk.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <LoginForm />
        <div className="text-center text-sm">Atau menggunakan</div>
        <GoogleAction />
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-2 text-sm">
        <p>Belum mempunyai akun?</p>
        <Link href={"/auth/register"} className="text-primary">
          Register
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Login;
