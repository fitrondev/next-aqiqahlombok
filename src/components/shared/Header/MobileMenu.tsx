"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignRight className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <nav className="h-full flex flex-col justify-center gap-5">
          <NavLinks className="text-2xl font-semibold" />
          <Link
            href={"/login"}
            className="text-2xl font-semibold text-start hover:text-primary transition-colors duration-300 ease-in-out">
            Sign In
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
