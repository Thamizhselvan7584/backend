import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import AuthLayouts from "../layouts/AuthLayouts"


 const AppRoutes = () => {
  return (
    <>


   <Routes>
    <Route element={<AuthLayouts/>}>

    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>

    </Route>

    <Route path="/contact" element={<Contact />}/>

   </Routes>

   


     </>
  )
}
export default AppRoutes 
