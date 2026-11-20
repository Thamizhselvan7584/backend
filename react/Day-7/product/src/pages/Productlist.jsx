import { useNavigate } from "react-router-dom";

const Productlist = () => {
    const student = [
        { name: "tamil", Age: 23, status: "pass" },
        { name: "vicky", Age: 24, status: "fail" },
        { name: "aksh", Age: 74, status: "pass" },
        { name: "thangam", Age: 25, status: "fail" }
    ]
    const nav = useNavigate()

    const handleClike = (eid) => {
        nav(`/singleProduct/${eid}`)
    }
    return (
        <>
            <div className="bg-yellow-500 flex justify-around items-center p-2">
                {student.map((e, i) => (
                    <div key={i}>
                        <h2>{e.name}</h2>
                        <h2>{e.Age}</h2>
                        <h2>{e.status}</h2>
                        <button onClick={()=>handleClike(i)} className="bg-white rounded p-1">View Details</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Productlist;