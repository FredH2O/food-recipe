import { Bars3Icon, BookOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-bold">Random Recipe</span>
        </div>

        {/* Links */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/survey" className="hover:text-gray-300">
              Survey
            </Link>
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
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="lg:hidden flex flex-col items-center space-y-4 mt-4 mb-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/survey" className="hover:text-gray-300">
              Survey
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
