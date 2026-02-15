// props = {
//     user:{
//         username: "Tinku",
//         Skills: ["Frontend", "Backend", "Database", "DevOps", "Cloud"],
//         Designation: "SDE-2",
//         Salary: "15 LPA"
//     }
// }

// props : {
//         Username : "Tinku",
//         Skills: ["Frontend", "Backend", "Database", "DevOps", "Cloud"],
//         Designation: "SDE-2",
//         Salary: "15 LPA",
// }

// object.value()



// const Employee = (props) => {
//     const {username, skills, designation, salary} = props;
//     return( 
//         <>
//             <h1>Employee Details</h1>
//             <h2>Username: {username}</h2>
//             <h3>Skills: {skills}</h3>
//             <h3>designation: {designation}</h3>
//             <h3>salary: {salary}</h3>

//         </>
//     );
// };

// export default Employee;






const Employee = ({ username, skills, designation, salary }) => {
  return (
    <>
      <h1>Employee Details</h1>
      <h2>Username: {username}</h2>

      <h3>Skills: {skills.join(", ")}</h3>

      <h3>Designation: {designation}</h3>
      <h3>Salary: {salary}</h3>
    </>
  );
};

export default Employee;
