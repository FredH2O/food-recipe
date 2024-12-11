import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-800 p-1">
      <CodeBracketSquareIcon className="w-6 h-auto text-white" />
      <a
        className="hover:text-red-300 ml-1 text-white"
        href="https://github.com/FredH2O"
        target="_blank"
      >
        FredH2O
      </a>
    </div>
  );
};

export default Footer;
