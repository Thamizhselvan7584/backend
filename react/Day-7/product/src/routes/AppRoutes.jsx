import { Route, Routes } from "react-router-dom";
import NavBar from "../componets/NavBar";
import Productlist from "../pages/Productlist";
import Count from "../pages/Count";
import Updated from "../pages/Updated";
import Product from "../componets/Product";

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/Count" element={<Count/>}/>
        <Route path="/Update" element={<Updated/>}/>
        <Route path="/singleProduct/:pid" element={<Product/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;