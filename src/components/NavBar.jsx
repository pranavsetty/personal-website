import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; 

const NavBar = () => {
  return (
    <nav className="w-full bg-gray-900 p-4 shadow-md flex items-center">
      {/* Home Icon on the Left */}
      <Link to="/" className="text-white text-2xl hover:text-gray-300">
        <FaHome />
      </Link>

    </nav>
  );
};

export default NavBar;
