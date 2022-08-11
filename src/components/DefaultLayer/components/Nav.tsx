import logo from "./logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export const Nav = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  
  const handleToggle = () => {
    setOpenNavBar(!openNavBar);
  };

  return (
    <div className="bg-blue-200 p-3 xl:px-28 sm:px-10 text-blue-700  py-3  flex items-center justify-between font-bold ">
      <div className="logo hover:text-blue-500 ">
        <a href="/" className="flex items-center">
          <img className="w-8 " src={logo} alt="logo" />
          <h1 className="pl-4 ">Smart App</h1>
        </a>
      </div>

      {/* nave links */}

      <nav className="flex items-center justify-between">
        <span>
          <BiMenu
            onClick={handleToggle}
            className="font-bold hover:text-blue-500 hover:scale-90 text-4xl lg:hidden "
          />
        </span>
        <ul className={`lg:flex    ${openNavBar ? "block" : "hidden"} `}>
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
          <li className="pl-6">
            <a href="/" className="hover:text-blue-500 hover:scale-750 ">
              Contact
            </a>
          </li>
        </ul>

        <div className="rounded-full w-7 h-7 ml-5 bg-blue-700 hover:scale-90 hover:shadow-md hover:bg-blue-500 text-blue-200 flex justify-center items-center">
          <a href="/">
            <FaUser className="hover:scale-90 hover:pointer" />
          </a>
        </div>
      </nav>
      {/* nave links */}
    </div>
  );
};
