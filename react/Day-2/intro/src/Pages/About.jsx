import { useState } from "react"


const About = () => {

 const [arrObj,SetArrObj] = useState(
   [
     {name:"tamil", age:20, salary:50000},
    {name:"vicky", age:28, salary:60000},
    {name:"akash", age:26, salary:70000},
    {name:"bharathi", age:24, salary:30000}
   ]
  );

const [sum,setSum] = useState(null)
const handelClick =()=>{

   const copy = [...arrObj]

    const obj = {name:"node 1",age:20,salary:70000}
   copy.push(obj)

   SetArrObj(copy)
}


const handelupdated = (eid)=>{
  SetArrObj((p)=>[...p].map((e,i)=>i==eid?{...e,age:45}:e))
}



const handedeleted =(did)=>{
  const copy = [...arrObj]
  const handelupdated = copy.filter((e,i)=>i !== did)
  SetArrObj(handelupdated)

}
const handelfilter =()=>{
  const copy = [...arrObj]
  const handelfilter = copy.filter((e,i)=>e.salary >= 50000)
 SetArrObj(handelfilter)
  
}
const handelSum = ()=>{
  const copy = [...arrObj]
var sumOf = copy.reduce((acc,curr)=>acc + curr.salary,0)
setSum(sumOf)
document.getElementById("result").innerText = sumOf;
}


  return (
    <>
    
    <div className=" p-6" >
     {arrObj.map((e,i)=>(
      <div  key={i} className="  bg-blue-400 p-5 flex gap-6 text-white  " >
        <p>{e.name}</p>
        <p>{e.age}</p>
        <p>{e.salary}</p>
        <button onClick={()=>{handelupdated(i)}} className="bg-black text-white p-2 rounded-2xl mx-3">updata</button>
        <button onClick={()=>handedeleted(i)} className="bg-black text-white p-2 rounded-2xl mx-3">deleted</button>
      </div>

     ))}

    </div>
    <div className="felx justify-center items-center gap-2">
    <button onClick={handelClick} className="bg-black text-white p-2 rounded-2xl mx-30">add</button>
     <button onClick={handelfilter} className="bg-black text-white p-2 rounded-2xl mx-30">filter</button>
      <button onClick={handelSum} className="bg-black text-white p-2 rounded-2xl mx-30">Sum Of Salary</button>
    </div>
    <div>
      <h1> State Method = {sum}</h1>
      <h1 id ="result"></h1>
    </div>
    
    </>
  )
}
export default About