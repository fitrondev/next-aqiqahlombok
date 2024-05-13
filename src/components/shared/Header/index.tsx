"use client";

import Logo from "@/components/atoms/Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <header
      className={cn(
        "shadow-sm",
        scroll &&
          "bg-background sticky top-0 left-0 shadow-sm transition-all duration-500 ease-in-out z-50"
      )}>
      <div className="container h-16 sm:h-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-10">
          <div className="inline-flex items-center gap-2">
            <Logo />
            <h1 className="text-xl lg:text-2xl font-bold">
              Aqiqah <span className="text-primary">Lombok</span>
            </h1>
          </div>

          <nav className="hidden lg:block space-x-5">
            <NavLinks />
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button>Sign In</Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
