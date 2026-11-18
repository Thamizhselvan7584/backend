import { useState } from "react"
const Add_Update_Delete = () => {

  const [student ,setStudent] = useState([
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 }
  ])

  const handleAdd =()=>{
        const newStudent = { id: 4, name: "Vijay",marks:67 };
    
      setStudent([...student, newStudent]);
  }
  return (
<>
<div className="bg-pink-400 flex justify-center items-center flex-col-2 gap-10 p-4 ">
{student.map((e,i)=>(
  <div key={i} className="bg-white w-30 p-2 rounded-2xl">
    <h1>ID : {e.id}</h1>
    <h1>NAME : {e.name}</h1>
    <h1>MARKS : {e.marks}</h1>
  </div>
))}
</div>
<div className="flex justify-center items-center gap-8">
  <button onClick={handleAdd} className="bg-black rounded-2xl text-white p-5">add</button>
</div>
</>
  )
}

export default Add_Update_Delete
