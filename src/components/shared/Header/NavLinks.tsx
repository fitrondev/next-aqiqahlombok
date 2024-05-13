"use client";

import { navLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({
  className,
  scroll,
}: {
  className?: string;
  scroll?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "text-lg hover:text-primary transition-colors duration-300 ease-in-out",
            pathname === item.href && "text-primary",
            className
          )}>
          {item.title}
        </Link>
      ))}
    </>
  );
};
export default NavLinks;
