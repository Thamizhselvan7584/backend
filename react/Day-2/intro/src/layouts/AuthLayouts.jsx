import { Outlet } from "react-router-dom"
import NavBar from "../Componte/NavBar"


const AuthLayouts = () => {
  return (
    <>
    <div>
        <NavBar/>
        <Outlet/>
    </div>
    </>
  )
}

export default AuthLayouts
