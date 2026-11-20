const Employee = () => {
  const empName = "Tamil"
  const empId = 101
  const designation = "Frontend Developer"
  const salary = 25000
  const company = "ABC Technologies"

  return (
    <>
    <div  className="flex justify-center items-center flex-col ">
      <h1>Employee Details</h1>

      <p>Name: {empName}</p>
      <p>ID: {empId}</p>
      <p>Designation: {designation}</p>
      <p>Salary: {salary}</p>
      <p>Company: {company}</p>
    </div>

    </>
  );
};

export default Employee;