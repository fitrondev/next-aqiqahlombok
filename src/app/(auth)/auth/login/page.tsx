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
        <CardDescription>Login to your account to continue</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <LoginForm />
        <div className="text-center text-sm">Or continue with</div>
        <GoogleAction />
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-2 text-sm">
        <p>Don&apos;t have an account?</p>
        <Link href={"/auth/register"} className="text-primary">
          Register
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Login;
