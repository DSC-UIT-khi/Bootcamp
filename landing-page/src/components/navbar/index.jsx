import React from "react";
import Logo from "../../images/logoWhite.png";

const Navbar = () => {
  return (
    <section className="bg-slate-800 h-20 flex items-center justify-center w-full shadow-xl">
      <div className="max-w-7xl w-full mx-auto flex items-center gap-9">
        {/* Logo */}
        <div className="w-60 cursor-pointer">
          <img src={Logo} alt="Google Developer Student Club - UIT" />
        </div>

        {/* links */}
        <ul className="flex items-center gap-9">
          <li className="text-blue-500 hover:underline p-4">
            <a href="/">Home</a>
          </li>
          <li className="text-blue-500  hover:underline p-4">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
