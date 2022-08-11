import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export const NavNews = () => {
  return (
    <div className="bg-blue-800 py-3 px-3 xl:px-28 sm:px-10 text-white  font-bold flex items-center justify-between">
      <div className="icon flex ">
        <a
          className="mx-1 hover:hover:text-blue-300 text-xl"
          href="https://facebook.com">
          <FaFacebook />
        </a>
        <a
          className="mx-1 hover:hover:text-blue-300 text-xl"
          href="https://youtube.com">
          <FaYoutube />
        </a>
        <a
          className="mx-1 hover:hover:text-blue-300 text-xl"
          href="https://instagrame.com">
          <FaInstagram />
        </a>
        <a
          className="mx-1 hover:hover:text-blue-300 text-xl"
          href="https://whatsapp.com">
          <FaWhatsapp />
        </a>
      </div>

      {/* upcoming event  */}
      <div className="event ">
        <a href="/" className="event flex items-center">
          <span className="hover:text-blue-300">Upcoming Events:</span>
          <div className="md:flex mx-10 hidden">
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
          <span className="font-bold hidden -mx-4 md:block hover:text-green-200 text-xs text-green-400">
            READ MORE
          </span>
        </a>
      </div>
      {/* upcoming event  */}

      {/* my account */}
    </div>
  );
};
