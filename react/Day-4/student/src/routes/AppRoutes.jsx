import { Route, Routes } from "react-router-dom";
import NavBar from "../componet/NavBar";
import Assignments from "../pages/Assignments";
import Courses from "../pages/Courses.jsx";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Assignments/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/dashbord" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;