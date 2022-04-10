import { React } from "react";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5c230a30-cf72-4758-867e-5b7518822e61"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div data-aos="fade-right" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF4D4D] text-gray-300">
            Contact
          </p>
          <p data-aos="fade-right" className=" text-gray-300 py-4">
            Submit the form below or shoot me an email :
            gregoire.duhem@outlook.fr
          </p>
        </div>
        <input
          style={{ color: "white" }}
          className="bg-[#151515] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          style={{ color: "white" }}
          className="my-4 p-2 bg-[#151515]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          style={{ color: "white" }}
          className="bg-[#151515] p-2"
          type="message"
          rows="10"
          placeholder="Message"
          name="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#FF4D4D] hover:border-[#FF4D4D] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
