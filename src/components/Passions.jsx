import { React } from "react";
import gradiant1 from "../assets/gradiant1.png";
import gradiant2 from "../assets/gradiant2.png";
import gradiant3 from "../assets/gradiant3.png";
import gradiant4 from "../assets/gradiant4.png";
import gradiant5 from "../assets/gradiant5.png";
import gradiant6 from "../assets/gradiant6.png";
import Rathalos from "../assets/zinogre.gif";
import Pcsetup from "../assets/pcsetup.gif";
import Guts from "../assets/guts.gif";
import Lifestyle from "../assets/lifestyle.gif";
import Training from "../assets/training.gif";
import Zoro from "../assets/zoro.gif";
import "aos/dist/aos.css";

const Passions = () => {
  return (
    <div
      name="Passions"
      className="w-full md:h-screen text-gray-300 bg-[#000000]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF4D4D]">
            Passions
          </p>
          <p data-aos="fade-right" className="py-6">
            Checkout my Passions
          </p>
        </div>

        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}

          <div
            data-aos="zoom-in-right"
            style={{ backgroundImage: `url(${gradiant1})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Rathalos}
                  alt="Rathalos"
                />
              </span>
            </div>
          </div>

          {/* Project 2 */}

          <div
            data-aos="zoom-in-down"
            style={{ backgroundImage: `url(${gradiant2})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Pcsetup}
                  alt="PcSetup"
                />
              </span>
            </div>
          </div>

          {/* Project 3 */}

          <div
            data-aos="zoom-in-left"
            style={{ backgroundImage: `url(${gradiant3})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Training}
                  alt="Training"
                />
              </span>
            </div>
          </div>

          {/* Project 4 */}

          <div
            data-aos="zoom-in-right"
            style={{ backgroundImage: `url(${gradiant4})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Guts}
                  alt="Guts"
                />
              </span>
            </div>
          </div>

          {/* Project 5 */}

          <div
            data-aos="zoom-in-up"
            style={{ backgroundImage: `url(${gradiant5})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Lifestyle}
                  alt="Lifestyle"
                />
              </span>
            </div>
          </div>

          {/* Project 6 */}

          <div
            data-aos="zoom-in-left"
            style={{ backgroundImage: `url(${gradiant6})` }}
            className="shadow-lg shadow-[#010101] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                <img
                  className="group container rounded-md flex justify-center items-center mx-auto content-div"
                  src={Zoro}
                  alt="Zoro"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passions;
