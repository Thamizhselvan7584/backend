import { useState } from "react"


const Sumofvalue = () => {

  const [emp, setEmp] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Kumar", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Priya", salary: 55000 }
  ])

  const [print, setPrint] = useState([])
  const handelfilter = () => {
    const copy = [...emp]


    const handelfilter = copy.filter((e) => e.salary >= 40000)
    setEmp(handelfilter)
  }

  const handelprint = () => {
    const copy = [...emp]
    console.log(copy);
    setPrint(copy)

  }
  return (
    <>
      <div className="bg-pink-400 flex justify-center items-center flex-col-2 gap-10 p-4 ">
        {emp.map((e, i) => (
          <div key={i} className="bg-white w-16 p-2 rounded-2xl">
            <h3>{e.id}</h3>
            <h3>{e.name}</h3>
            <h3>{e.salary}</h3>
          </div>
        ))}
        
      </div>  
      <div className="flex justify-center items-center gap-8">  
          <button onClick={handelfilter} className="bg-black rounded-2xl text-white p-5">filter</button>
          <button onClick={handelprint} className="bg-black rounded-2xl text-white p-5">print</button>
        </div>
      
      <div className="bg-pink-400 flex justify-center items-center flex-col-2 gap-10 ">
        {print.map((e) => (
          <div key={e.id} className="bg-white w-16 p-2 rounded-2xl">
            <h1>{e.name}</h1>
            <h1>{e.salary}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sumofvalue
