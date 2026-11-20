const Student_Profile = () => {
    const name = "Tamil"
    const age = 22
    const coures = "React Js"
    const city = "Chennai"

  return (
    <>
      <div  className="flex justify-center items-center flex-col ">
        <h1>Student Profile</h1>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Coures : {coures}</p>
        <p>City  {city}</p>
      </div>
    </>
  );
};

export default Student_Profile;