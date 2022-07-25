import logo from "./logo.png";
import { FaUser } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

export const Nav = () => {
  return (
    <div className="bg-blue-200 p-3 xl:px-28 sm:px-10 text-blue-700  py-2  flex items-center justify-between font-bold ">
      <div className="logo hover:text-blue-500 ">
        <a href="/" className="flex items-center">
          <img className="w-8 " src={logo} alt="logo" />
          <h1 className="pl-4 ">Smart App</h1>
        </a>
      </div>

      {/* nave links */}

      <nav className="flex items-center justify-between">
        <span>
          <BiMenu className="font-bold text-4xl md:hidden" />
        </span>
        <ul className="md:flex sm:hidden ">
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              About Us
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              {" "}
              Gospel
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              Event
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              Gallery
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              Blog
            </a>
          </li>
          <li className="px-6">
            <a href="/" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="rounded-full w-7 h-7 ml-5 bg-blue-700 text-blue-200 flex justify-center items-center">
        <a href="/">
          <FaUser />
        </a>
      </div>

      {/* nave links */}
    </div>
  );
};
