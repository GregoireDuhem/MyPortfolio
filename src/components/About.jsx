import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF4D4D]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Grégoire, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about new technologies, the developpement, sport,
              mangas and gaming.
            </p>
            <p>
              In my fourth year in Epitech I'll be going to Keimyung an Gaming
              University in Korea.
            </p>
            <p> I have a great interest in UI UX.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
