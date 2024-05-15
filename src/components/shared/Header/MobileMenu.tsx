import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileAction from "./MobileAction";

const MobileMenu = async () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignRight className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <nav className="h-full flex flex-col justify-center gap-5">
          <NavLinks className="text-2xl font-semibold" />
          <MobileAction />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
