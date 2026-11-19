import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ username:"", useremail:"", age:"" })
  const handlechange =()=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div>
        <form>
          <input type="text" name="username" placeholder="enter name " onChange={handlechange} value={data.username} className="border m-5" />
          <input type="email" name="useremail" placeholder="enter emaail " onChange={handlechange} value={data.useremail} className="border m-5" />
          <input type="number" name="age" placeholder="enter age " onChange={handlechange} value={data.age}className="border m-5" />

        </form>
      </div>
    </>
  );
};

export default App;