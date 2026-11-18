import { Route, Routes } from "react-router-dom"
import NavBar from "../componte/Nav"
import ArrayProcess from "../pages/Array"
import ObjectProcess from "../pages/Obj"

export const AppRouter = () => {
  return (
 <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Array/>} />
        <Route path="/obj" element={<Obj/>} />
     </Routes>
 </>
  )
}
export default AppRouter