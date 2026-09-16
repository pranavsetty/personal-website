import NavBar from "../components/NavBar";
import { FaExternalLinkAlt } from "react-icons/fa";
import actionaryImg from "../assets/projects/actionary.png";

const projects = [
  {
    name: "Actionary",
    description: "Your to-do list, on steroids. A fast, keyboard-first task manager for organizing projects and staying on top of your day.",
    image: actionaryImg,
    link: "https://actionaryapp.com",
  },
];

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen flex flex-col items-center bg-neutral-950 text-white p-4 pt-10 pb-16">
        <div className="w-full max-w-md mx-auto flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-neutral-100 text-center">Projects</h1>

          {projects.map(({ name, description, image, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-800 hover:border-emerald-500/60 transition-colors overflow-hidden"
            >
              <img src={image} alt={`${name} preview`} className="w-full h-44 object-cover object-top" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-neutral-100">{name}</h2>
                  <FaExternalLinkAlt className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-sm text-neutral-400 mt-1">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
