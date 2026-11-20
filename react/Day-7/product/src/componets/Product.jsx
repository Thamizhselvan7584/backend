import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const nav = useNavigate()
        const student = [
        { name: "tamil", Age: 23, status: "pass" },
        { name: "vicky", Age: 24, status: "fail" },
        { name: "aksh", Age: 74, status: "pass" },
        { name: "thangam", Age: 25, status: "fail" }
    ]
const handleBack =()=>{
    nav(-1)
}
const {pid} = useParams()
let copy = [...student]
copy = copy.find((e,i)=>i==pid)

  return (
    <>
      <div>
<button onClick={handleBack}>Back</button>
      </div>
      <div>
<h2>{copy.name}</h2>
<h2>{copy.Age}</h2>
<h2>{copy.status}</h2>
      </div>
    </>
  );
};

export default Product;