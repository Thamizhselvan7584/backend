import { Route, Routes } from "react-router-dom";
import NavBar from "../componet/NavBar";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Approuter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
    </>
  );
};

export default Approuter;