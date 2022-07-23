import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import React from "react";

export const NavNews = () => {
  return (
    <div className="bg-blue-800 py-3 px-32 text-white   font-bold flex items-center justify-between">
      <div className="icon flex ">
        <a className="mx-1 text-xl" href="https://facebook.com">
          <FaFacebook />
        </a>
        <a className="mx-1 text-xl" href="https://youtube.com">
          <FaYoutube />
        </a>
        <a className="mx-1 text-xl" href="https://instagrame.com">
          <FaInstagram />
        </a>
        <a className="mx-1 text-xl" href="https://whatsapp.com">
          <FaWhatsapp />
        </a>
      </div>

      {/* upcoming event  */}
      <div className="event flex items-center">
        Upcoming Events:
        <div className="flex mx-10">
          <span className=" mx-4 ">
            <p className="text-xl -py-10 -my-2  font-extrabold ">00</p>
            <p className="text-xs -py-6 -my-2 font-normal">Days</p>
          </span>
          <span className=" mx-4 ">
            <p className="text-xl -py-10 -my-2  font-extrabold ">00</p>
            <p className="text-xs -py-6 -my-2 font-normal">Days</p>
          </span>
          <span className=" mx-4 ">
            <p className="text-xl -py-10 -my-2  font-extrabold ">00</p>
            <p className="text-xs -py-6 -my-2 font-normal">Days</p>
          </span>
          <span className=" mx-4 ">
            <p className="text-xl -py-10 -my-2  font-extrabold ">00</p>
            <p className="text-xs -py-6 -my-2 font-normal">Days</p>
          </span>
        </div>
        <a href="/" className="font-bold text-xs text-green-400">
          READ MORE
        </a>
      </div>
      {/* upcoming event  */}
      <a href="/"> My Account</a>
      {/* my account */}
    </div>
  );
};
