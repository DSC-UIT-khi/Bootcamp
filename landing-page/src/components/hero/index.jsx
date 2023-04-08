import React from "react";

// Images
import Laptop from "../../images/laptop.png";

const HomeHero = () => {
  return (
    <section className="bg-slate-800 h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto flex items-center flex-col md:flex-row">
        {/* first-col (content) */}
        <div className="max-w-xl text-white flex flex-col gap-5">
          <h1 className="text-5xl font-bold leading-normal">
            Google Developer Student Clubs{" "}
            <span className="text-blue-500">UIT</span>
          </h1>
          <p className="text-xl text-gray-200">
            ⚡GDSC-UIT empowers all the students to not only build solutions for
            the community but to overcome their technical barriers too by
            Connecting, Learning, and Growing together.
          </p>
          <button className="bg-blue-500 rounded-3xl px-6 py-3 font-mono max-w-[200px]">
            Discover GDSC
          </button>
        </div>

        {/* hero image*/}
        <div className="max-w-xl">
          <img src={Laptop} alt="Laptop" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
