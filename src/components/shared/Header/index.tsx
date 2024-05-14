import Logo from "@/components/atoms/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import NavAction from "./NavAction";

const Header = () => {
  return (
    <header className="shadow-sm">
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

        <div className="hidden lg:block space-x-5">
          <NavAction />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
