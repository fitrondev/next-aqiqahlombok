import { auth } from "@/auth";
import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Aqiqah Lombok | Auth",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="flex-1 h-full flex items-center justify-center">
        {children}
      </div>
      <div className="flex-1 h-full flex items-center justify-center bg-gray-100">
        <div className="relative size-[600px]">
          <Image src={"/auth.svg"} alt="" fill className="" />
        </div>
      </div>
    </div>
  );
}
