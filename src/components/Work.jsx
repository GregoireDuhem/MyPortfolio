import React from "react";
import redditproject from "../assets/redditproject.jpeg";
import areaproject from "../assets/areaproject.png";
import sidekickproject from "../assets/sidekickproject.png";
import dashboardproject from "../assets/dashboardproject.png";
import rpgproject from "../assets/rpgproject.png";
import bomberman from "../assets/bomberman.gif";

const Work = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF4D4D]">
            Works
          </p>
          <p className="py-6">Checkout my recent works</p>
        </div>

        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}

          <div
            style={{ backgroundImage: `url(${redditproject})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                Reddit like app
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="https://github.com/GregoireDuhem/Redditech-Epitech-">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}

          <div
            style={{ backgroundImage: `url(${areaproject})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                Area (IFTTT)
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="https://github.com/GregoireDuhem/Area-Epitech">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div
            style={{ backgroundImage: `url(${sidekickproject})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                Sport mobile app
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="https://github.com/GregoireDuhem/Sidekick-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}

          <div
            style={{ backgroundImage: `url(${dashboardproject})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="https://github.com/GregoireDuhem/Dashboard-Epitech">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}

          <div
            style={{ backgroundImage: `url(${bomberman})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                Bomberman in CPP
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}

          <div
            style={{ backgroundImage: `url(${rpgproject})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                RPG in C
              </span>
              <div className="pt-8 text-center">
                <a href="#/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    [Work in progress]
                  </button>
                </a>
                <a href="https://github.com/GregoireDuhem/MyRpg">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
