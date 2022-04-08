import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF4D4D]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Grégoire Duhem
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-700">
          I'm a developer
        </h2>
        <p className="text-gray-700 py-4 max-w-[700px]">
          lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor
          lorem ipsum dolor sit amet
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF4D4D] hover:border-[#FF4D4D]">
            View Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
