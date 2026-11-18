import { Route, Routes } from "react-router-dom"
import Navbar from "../componte/Navbar"
import Todo from "../pages/Todo"

const AppRoutes = () => {
  return (
  <>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Todo/>}/>
  </Routes>
  </>
  )
}

export default AppRoutes
