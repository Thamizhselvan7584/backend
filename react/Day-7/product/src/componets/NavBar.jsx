import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
<div className="bg-blue-400 flex justify-center items-center gap-10 p-3">
      <Link to={"/"} >Product List</Link>
  <Link to={"/Count"} >Count</Link>
  <Link to={"/Update"} >Update </Link>
</div>
    </>
  );
};

export default NavBar;