import { CubeIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <CubeIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-bold">MySite</span>
        </div>

        {/* Links */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </nav>
      {isMenuOpen ? (
        <ul className="lg:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Header;
