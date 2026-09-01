import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { FaCameraRetro, FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaPhotoFilm } from "react-icons/fa6";
import PhotoGallery from "./PhotoGallery";
import Movies from "./pages/Movies";
import Snapshots from "./pages/Snapshots";
import Projects from "./pages/Projects";

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
      text: "Photography",
      link: "#",
      icon: <FaCameraRetro className="w-5 h-5 inline-block mr-2" />,
      onClick: (event) => {
        event.preventDefault();
        setShowCountries(!showCountries);
      },
      hasDropdown: true,
      external: false,
    },
    {
      text: "Snapshots",
      link: "/snapshots",
      icon: <FaPhotoFilm className="w-5 h-5 inline-block mr-2" />,
      onClick: (event) => {
        event.preventDefault();
        navigate("/snapshots");
      },
      external: false,
    },
    {
      text: "Movies",
      link: "/movies",
      icon: <BiSolidCameraMovie className="w-5 h-5 inline-block mr-2" />,
      onClick: (event) => {
        event.preventDefault();
        navigate("/movies");
      },
      external: false,
    },
    {
      text: "Projects",
      link: "/projects",
      icon: <FaCode className="w-5 h-5 inline-block mr-2" />,
      onClick: (event) => {
        event.preventDefault();
        navigate("/projects");
      },
      external: false,
    },
    {
      text: "Github",
      link: "https://github.com/pranavsetty",
      icon: <FaGithub className="w-5 h-5 inline-block mr-2" />,
      external: true,
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/pranavsetty/",
      icon: <FaLinkedin className="w-5 h-5 inline-block mr-2" />,
      external: true,
    },
    {
      text: "Twitter",
      link: "https://x.com/pranav_setty",
      icon: <FaTwitter className="w-5 h-5 inline-block mr-2" />,
      external: true,
    },
    {
      text: "Contact",
      link: "https://pranavbheemsetty.typeform.com/to/ttyZrq",
      icon: <MdOutlineMailOutline className="w-5 h-5 inline-block mr-2" />,
      external: true,
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
    <div className="w-full min-h-screen bg-neutral-950 flex justify-center items-start px-4">
      {/* Content Wrapper */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 pt-16 pb-16">
        {/* Profile Image */}
        <div className="h-24 w-24">
          <img
            src="https://avatars.githubusercontent.com/pranavsetty"
            className="h-full w-full rounded-full object-cover object-center ring-2 ring-emerald-500"
            alt="Pranav Bheemsetty"
          />
        </div>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-100">Pranav Bheemsetty</h1>
          <div style={{ height: "1.4em", overflow: "hidden" }} className="mt-1">
            <p
              id="typed-summary"
              className="text-sm text-neutral-400 inline-block"
              style={{ lineHeight: "1.4", whiteSpace: "nowrap" }}
            ></p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map(({ text, link, icon, onClick, hasDropdown, external }, index) => (
            <div key={index}>
              <a
                href={link}
                onClick={onClick}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="block w-full"
              >
                <div className="w-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-base font-medium text-neutral-100 py-3.5 rounded-xl border border-neutral-800 hover:border-emerald-500/60 transition-colors relative">
                  <span className="flex items-center justify-center [&_svg]:text-emerald-400">
                    {icon}
                    {text}
                  </span>
                  {hasDropdown && (
                    <span className="absolute right-4">
                      {showCountries ? (
                        <FiChevronUp className="w-5 h-5 text-neutral-400" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-neutral-400" />
                      )}
                    </span>
                  )}
                </div>
              </a>
              {hasDropdown && showCountries && (
                <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                  {countries.map((country, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(`/photos/${country.name}`)}
                      className="cursor-pointer w-full bg-neutral-900 hover:bg-neutral-800 text-sm text-neutral-200 py-2.5 rounded-xl border border-neutral-800 hover:border-emerald-500/60 transition-colors"
                    >
                      <span>
                        {country.flag} {country.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-neutral-600 mt-4">
          © {new Date().getFullYear()} Pranav Bheemsetty
        </p>
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
        <Route path="/movies" element={<Movies />} />
        <Route path="/snapshots" element={<Snapshots />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;
