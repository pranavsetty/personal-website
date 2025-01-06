import React, { useEffect } from "react";
import { FaCameraRetro, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Typed from "typed.js";

function App() {
  const links = [
    {
      color: "bg-purple-300",
      text: "Photography",
      link: "#",
      icon: <FaCameraRetro className="w-6 h-6 inline-block mr-2" />,
    },
    {
      color: "bg-red-300",
      text: "Github",
      link: "https://github.com/pranavsetty",
      icon: <FaGithub className="w-6 h-6 inline-block mr-2" />,
    },
    {
      color: "bg-sky-300",
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/pranavsetty/",
      icon: <FaLinkedin className="w-6 h-6 inline-block mr-2" />,
    },
    {
      color: "bg-pink-300",
      text: "Twitter",
      link: "https://x.com/pranav_setty",
      icon: <FaTwitter className="w-6 h-6 inline-block mr-2" />,
    },
    {
      color: "bg-teal-300",
      text: "Contact",
      link: "https://pranavbheemsetty.typeform.com/to/ttyZrq",
      icon: <MdOutlineMailOutline className="w-6 h-6 inline-block mr-2" />,
    },
  ];

  useEffect(() => {
    const typed = new Typed("#typed-summary", {
      strings: [
        "Software Engineer",
        "Trader",
        "Traveller",
        "Lifelong Learner",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up Typed.js instance
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          <div className="h-48 w-48 mx-auto">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://avatars.githubusercontent.com/pranavsetty"
                className="rounded-full object-cover object-center"
              />
            </div>
          </div>
          <div className="text-center p-3">
            <h1 className="text-4xl font-bold">Pranav Bheemsetty</h1>
            <p className="text-lg mt-3">
              <span id="typed-summary" className="font-semibold"></span>
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {links.map(({ text, color, link, icon }, index) => (
              <a href={link} key={index} target="_blank">
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
                >
                  {icon}
                  {text}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
