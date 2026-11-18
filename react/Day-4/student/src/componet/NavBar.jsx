import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="flex bg-gray-200 justify-between items-center  bg-center p-4  ">
                <div className="mx-15 border border-b-4  rounded-2xl p-2 font-bold">
                    Student Portal
                </div>
                <div className="flex gap-5 font-medium mx-15">
                    <NavLink className={({ isActive }) => isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" : "bg-gray-200"} to="/">Assignments</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" : "bg-gray-200"}to="/courses">Courses</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" : "bg-gray-200"} to="/dashbord">Dashbord</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" : "bg-gray-200"}to="/profile">Profile</NavLink>
                </div>
            </div>

        </>
    );
};

export default NavBar;