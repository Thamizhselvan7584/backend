import { Route, Routes } from "react-router-dom"
import NavBar from "../componet/NavBar"
import ArrObj from "../pages/ArrObj"


const AppRoutes = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route  path="/" element={<ArrObj/>}/>
   </Routes>
   </>
  )
}

export default AppRoutes
