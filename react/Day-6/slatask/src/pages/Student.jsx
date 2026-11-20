const Student = () => {
  const students = ["Arun", "Priya", "Karthik", "Divya", "Sanjay"]
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        {students.map((e, i) => (
          <div key={i}>{i}  {e}</div>
        ))}
      </div>
    </>
  );
};

export default Student;