import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-custom-blue px-10 py-[15px] flex items-center justify-between">
      <Link to="/" className="w-[118px]">
        <img src="/images/logo.svg" alt="logo" />
      </Link>

      <button>
        <Avatar className="w-15 h-15">
          <AvatarImage src="" />
          <AvatarFallback className="bg-custom-teal !text-custom-white text-font-32 font-bold">
            F
          </AvatarFallback>
        </Avatar>
      </button>
    </header>
  );
};

export default Header;
