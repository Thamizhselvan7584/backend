import { Route, Routes } from "react-router-dom"
import Navbar from "../componets/Navbar"
import Sumofvalue from "../pages/Sumofvalue"
import Emp_salary_filter from "../pages/Emp_salary_filter"
import Add_Update_Delete from "../pages/Add_Update_Delete"


const Approutes = () => {
  return (
   <>
   <Navbar/>
       <Routes>
        <Route path="/" element={<Sumofvalue/>}/>
        <Route path="/emp_salary_filter" element={<Emp_salary_filter/>}/>
        <Route path="/Add_Update_Delete" element={<Add_Update_Delete/>}/>
    </Routes>
   </>
  )
}

export default Approutes
