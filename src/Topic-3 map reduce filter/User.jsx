import List from './List';



const User = () => {
     const users = ["Amit","Tinku", "Rinku", "Pinku", "Minku", "Linku"];
     return <ul>
                {
                    users.map((element,index)=>{
                        return <List  username={element} key={index} />
                    })
                }
          </ul>
}

export default User;




//  Persons.map((element) => {
//      return <h2>Username:{element}</h2>;

// const User = () => {

//     /* 1st type */ 
//     const Persons = ["Amit", "Tinku", "Rinku", "Pinku", "Minku", "Linku"];
//     return <ol id="user-component">
//         <Li username = {Persons[0]} />
//         <Li username = {Persons[1]} />
//         <Li username = {Persons[2]} />
//         <Li username = {Persons[3]} />
//         <Li username = {Persons[4]} />
//         <Li username = {Persons[5]} />
//     {
//         /* 2nd type */
//         Persons.map((element, index) => {
//             return <Li username={element} index={index} />;
//         })
//     }
//     </ol>
// };


// {
//  const User = () => {
//     const Persons = ["Amit","Tinku", "Rinku", "Pinku", "Minku", "Linku"];
//     return <ol id="user-component">
//         {
//             Persons.map((element, index) => {
//                 return <h2><li key = {index}>Username:{element}</li></h2>;
//             })
//         }

//     </ol>
// };


 