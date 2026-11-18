import { useState } from "react"

const Todo = () => {

  const [todo,setTodo] = useState("")
  const [save,setSave] = useState([])
  const [edit,setEdit] = useState(null)


const handleChange =(e)=>{
setTodo(e.target.value)

} 

const handelAdd =(e)=>{

  const data = {id:Date.now(),todo}

  if(!todo){
    alert('place file the form')
    return
  }
  setSave((p)=>[...p,data])
  setTodo("")
}
const handelEdit =(e)=>{
  setTodo(e.todo)
  setEdit(e.id)


}
const handelDelete = (eid)=>{
  const copy = [...todo]
  console.log(copy);
  
  const filtered = copy.filter((e)=>e.id !== eid)
  setSave(filtered)

}
const handelupdate =()=>{
  setSave((p)=>[...p].map((e,i)=>e.id==edit?{...e,todo}:e))
  setEdit(null)
  setTodo("")

}
  return (
<>

<div>

  <input value={todo}  type="text" className="border mx-40 my-5 p-3 rounded-2xl" onChange={handleChange} />
  {edit==null?<button onClick={handelAdd} className="bg-black text-white rounded-2xl p-2">Add</button>
  :<button onClick={handelupdate} className="bg-black text-white rounded-2xl p-2">Update</button>}
  
  
</div>
<div className="bg-blue-400 flex justify-around items-center ">
  {save.map((e)=>(
<div key={e.id} className="p-3 bg-white rounded-2xl flex gap-2.5 flex-col">
<h2>{e.id}</h2>
  <h1>{e.todo}</h1>
  <button onClick={()=>handelEdit(e)} className="bg-black text-white rounded-2xl p-2">Edit</button>
  <button onClick={()=>handelDelete(e.id)} className="bg-black text-white rounded-2xl p-2">Delete</button>
</div>
  ))}
</div>
</>
  )
}

export default Todo
