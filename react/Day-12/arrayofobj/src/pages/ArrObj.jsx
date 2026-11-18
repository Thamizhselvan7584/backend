import { useState } from "react"


const ArrObj = () => {

    const [obj, setObj] = useState({ userName: "", date: "", Age: "" })

    const handleChange = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }
const handleAdd =(e)=>{
    e.prv

}
    return (
        <>
            <div>

                <form>
                    <input type="text" placeholder="enter name " name="userName" className="border" onChange={handleChange} value={obj.userName} />
                    <input type="date" name="date" onChange={handleChange} className="border" value={obj.date} />
                    <input type="number" placeholder="age " name="Age" onChange={handleChange} className="border" value={obj.Age} />
<button onClick={handleAdd}>Add</button>
                </form>
            </div>
        </>
    )
}

export default ArrObj
