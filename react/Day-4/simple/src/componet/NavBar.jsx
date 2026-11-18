import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-blue-300 p-3 flex justify-around items-center">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">concat</Link>
      </div>
    </>
  );
};

export default NavBar;