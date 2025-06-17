import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { HeaderProps } from "@/types/types";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Header = ({ setisMobileMenuOpen, isMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-custom-blue px-5 md:px-10 py-[15px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden"
          onClick={() => setisMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X className="text-custom-white" />
          ) : (
            <Menu className="text-custom-white" />
          )}
        </button>

        <Link to="/" className="w-[105px] md:w-[118px] align-middle">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>

      <button>
        <Avatar className="w-10 md:w-15 h-auto aspect-square">
          <AvatarImage src="" />
          <AvatarFallback className="bg-custom-teal !text-custom-white text-font-24 md:text-font-32 font-bold">
            F
          </AvatarFallback>
        </Avatar>
      </button>
    </header>
  );
};

export default Header;
