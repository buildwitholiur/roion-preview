import { navLinks } from "@/data/navLinks";
import type { SidebarProps } from "@/types/types";
import { Link, useLocation } from "react-router";

const Sidebar = ({ isMobileMenuOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={`w-full max-w-[228px] h-[calc(100vh-70px)] md:h-[calc(100vh-90px)] bg-custom-white-500 lg:sticky top-[70px] md:top-[90px] lg:left-0 p-5 border-r border-custom-gray-50 fixed  z-50 ${
        isMobileMenuOpen ? "left-0" : "-left-full"
      }`}
    >
      {/* Nav Links */}
      <nav>
        <ul className="space-y-2.5">
          {navLinks.length > 0 &&
            navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`nav__link ${
                    location.pathname === item.path ? "nav__link--active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

          <li>
            <button className="nav__link">Logout</button>
          </li>
        </ul>
      </nav>
      {/* Nav Links */}
    </aside>
  );
};

export default Sidebar;
