import { React, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p data-aos="zoom-out-right" className="text-[#FF4D4D]">
          Hi, my name is
        </p>
        <h1
          data-aos="zoom-out-right"
          className="text-4xl sm:text-8xl font-bold text-white"
        >
          Grégoire Duhem
        </h1>
        <h2
          data-aos="zoom-out-right"
          className="text-4xl sm:text-6xl font-bold text-gray-700"
        >
          I'm a developer
        </h2>
        <p
          data-aos="zoom-out-right"
          className="text-gray-700 py-4 max-w-[700px]"
        >
          I'm a mobile and web developer, Currently looking for an Intenrship
        </p>
        <div data-aos="fade-up" className="flex text-center">
          {/* button */}
          <Link
            to="works"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex hover:bg-[#FF4D4D] hover:border-[#FF4D4D]"
          >
            View Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
      {/* <Logo /> */}
    </div>
  );
};

export default Home;
