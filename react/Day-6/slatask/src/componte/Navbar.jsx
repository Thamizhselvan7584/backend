import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-400 p-2 flex justify-center items-center gap-10">
        <Link to="/">Student Profile</Link>
        <Link to="/empolyee">Employee </Link>
        <Link to="/product">Product </Link>
        <Link to="/student">Student </Link>
        <Link to="/coures">Course </Link>
      </div>
    </>
  );
};

export default Navbar;