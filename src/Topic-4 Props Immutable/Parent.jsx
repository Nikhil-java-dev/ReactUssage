import Child from "./Child";
const Parent = () => {
    const person = {
        fullName: "John Doe",
        age: 30
    };
    return <div>
        <h1>Parent Component</h1>
        <Child person = {person}/>
    </div>
    };
    export default Parent;