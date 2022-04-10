import { React } from "react";
import Reactjs from "../assets/Reactjs.png";
import ReactNative from "../assets/ReactNative.png";
import Nodejs from "../assets/Nodejs.png";
import FireBase from "../assets/firebase.png";
import Flutter from "../assets/Flutter.png";
import GitHub from "../assets/github.png";
import Python from "../assets/Python.png";
import Postman from "../assets/Postman.png";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-gray-300">
      {/*  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF4D4D]">
            Skills
          </p>
          <p data-aos="fade-right" className="py-4 text-gray-500">
            These are the technologies I've worked with
          </p>
        </div>

        {/* icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Flutter} alt="Flutter icon" />
            <p className="my-4">Flutter</p>
          </div>
          <div
            data-aos="flip-right"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Reactjs} alt="Reactjs icon" />
            <p className="my-4">Reactjs</p>
          </div>
          <div
            data-aos="flip-right"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img
              className="w-22 h-20 mx-auto"
              src={ReactNative}
              alt="ReactNative icon"
            />
            <p className="my-4">ReactNative</p>
          </div>
          <div
            data-aos="flip-left"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-25 h-20 mx-auto" src={Nodejs} alt="Nodejs icon" />
            <p className="my-4">NodeJs</p>
          </div>
          <div
            data-aos="flip-up"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div
            data-aos="flip-down"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div
            data-aos="flip-up"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img
              className="w-30 h-20 mx-auto"
              src={Postman}
              alt="Postman icon"
            />
            <p className="my-4">Postman</p>
          </div>
          <div
            data-aos="flip-down"
            className="shadow-md shadow-[#1c1c1c] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
