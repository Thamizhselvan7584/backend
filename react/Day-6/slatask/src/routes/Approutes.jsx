import { Route, Routes } from "react-router-dom";
import Navbar from "../componte/Navbar";
import Student_Profile from "../pages/Student_Profile";
import Employee from "../pages/Employee";
import Product from "../pages/Product";
import Student from "../pages/Student";
import Course  from "../pages/Course";

const Approutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Student_Profile/>}/>
        <Route path="/empolyee" element={<Employee/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/coures" element={<Course/>}/>
      </Routes>
    </>
  );
};

export default Approutes;