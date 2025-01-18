import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; 

const NavBar = () => {
  return (
    <nav className="w-full bg-gray-900 p-4 shadow-md flex items-center">
      {/* Home Icon on the Left */}
      <Link to="/" className="text-white text-2xl hover:text-gray-300">
        <FaHome />
      </Link>

      {/* Movie Title in the Center */}
      <div className="flex-grow text-center">
        <h1 className="text-white text-2xl font-bold">Movies</h1>
      </div>
    </nav>
  );
};

export default NavBar;
