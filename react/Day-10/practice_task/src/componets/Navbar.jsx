import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
   <div className="bg-blue-300 flex justify-between items-center p-7 ">
    <Link to={"/"}>Sumofvalue</Link>
    <Link to={"/Emp_salary_filter"}>salary_filter</Link>
    <Link to={"/Add_Update_Delete"}>Add_Update_Delete</Link>
   </div>
   
   </>
  )
}

export default Navbar
