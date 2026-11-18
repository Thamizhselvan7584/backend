import { Link } from "react-router-dom"

 const NavBar = () => {
  return (
    <>
    <div className="bg-amber-400 text-cyan-50 flex justify-between items-center p-4">
    <div>logo</div>
    <div>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        
    </div>
    </div>
    </>
  )
}
export default NavBar
