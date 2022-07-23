import logo from "./logo.png";
import { FaUser } from "react-icons/fa";

export const Nav = () => {
  return (
    <div className="bg-blue-200 p-3 px-32 text-blue-700 py-2  flex items-center justify-between font-bold ">
      <div className="logo  ">
        <a href="/" className="flex items-center">
          <img className="w-8 " src={logo} alt="logo" />
          <h1 className="pl-4 ">Smart App</h1>
        </a>
      </div>

      {/* nave links */}

      <nav className="flex items-center  justify-between">
        <ul className="flex">
          <li className="px-3">
            <a href="/">Home</a>
          </li>
          <li className="px-3">
            <a href="/">About Us</a>
          </li>
          <li className="px-3">
            <a href="/"> Gospel</a>
          </li>
          <li className="px-3">
            <a href="/">Event</a>
          </li>
          <li className="px-3">
            <a href="/">Gallary</a>
          </li>
          <li className="px-3">
            <a href="/">Blog</a>
          </li>
          <li className="px-3">
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="rounded-full w-7 h-7 ml-5 bg-blue-700 text-blue-200 flex justify-center items-center">
          <a href="/">
            <FaUser />
          </a>
        </div>
      </nav>

      {/* nave links */}
    </div>
  );
};
