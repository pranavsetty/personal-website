import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { FaCameraRetro, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PhotoGallery from "./PhotoGallery";

function Home() {
  const [showCountries, setShowCountries] = useState(false);
  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "India", flag: "🇮🇳" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Luxembourg", flag: "🇱🇺" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Vatican-City", flag: "🇻🇦" },
  ].sort((a, b) => a.name.localeCompare(b.name));
  const navigate = useNavigate();

  const links = [
    {
      color: "bg-purple-300",
      text: "Photography",
      link: "#",
      icon: <FaCameraRetro className="w-6 h-6 inline-block mr-2" />,
      onClick: (event) => {
        event.preventDefault();
        setShowCountries(!showCountries);
      },
      hasDropdown: true,
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

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Trader", "Traveller", "Forever Learner"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    typedRef.current = new Typed("#typed-summary", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div className={`w-full min-h-screen bg-gray-300 flex justify-center items-center ${showCountries ? 'pt-10 pb-10' : ''}`}>
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className={`h-48 w-48 mx-auto ${showCountries ? 'mt-10' : ''}`}>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="https://avatars.githubusercontent.com/pranavsetty"
              className="rounded-full object-cover object-center"
              alt="Pranav Bheemsetty"
            />
          </div>
        </div>
        <div className="text-center p-3">
          <h1 className="text-4xl font-bold text-gray-800 ">Pranav Bheemsetty</h1>
          <div style={{ height: "1.5em", overflow: "hidden" }}>
            <p id="typed-summary" className="text-lg mt-3 inline-block" style={{ lineHeight: "0.25", whiteSpace: "nowrap" }}></p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link, icon, onClick, hasDropdown }, index) => (
            <div key={index}>
              <a
                href={link}
                onClick={onClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-gray-800"
              >
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} flex items-center justify-between text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
                >
                  <span className="flex items-center justify-center w-full">
                    {icon}
                    {text}
                  </span>
                  {hasDropdown && (
                    <span className="mr-3">
                      {showCountries ? (
                        <FiChevronUp className="w-6 h-6" />
                      ) : (
                        <FiChevronDown className="w-6 h-6" />
                      )}
                    </span>
                  )}
                </div>
              </a>
              {hasDropdown && showCountries && (
                <div className="mt-3 mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  {countries.map((country, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(`/photos/${country.name}`)}
                      className="cursor-pointer w-full bg-gray-300 text-lg py-2 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1"
                    >
                      <span>{country.flag} {country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos/:country" element={<PhotoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
