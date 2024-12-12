import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="text-white flex justify-center bg-gray-800 p-1">
      <CodeBracketSquareIcon className="mr-1 w-6 h-auto text-white" />
      <p>Made by </p>
      <a
        className="hover:text-red-300 ml-1"
        href="https://github.com/FredH2O"
        target="_blank"
      >
        FredH2O
      </a>
    </div>
  );
};

export default Footer;
