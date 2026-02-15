import { useState } from "react";
import Button from "./Button";
import User from "./User";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div id="counter-component">
      <h1>Counter Component 🔢</h1>

      <h2>Count: {count}</h2>
      <h2>Username: {username}</h2>
      <h2>Age: {age}</h2>


      <button onClick={() => setUsername("Nikhil Srivastava")}>
        Username
      </button>

      <button onClick={() => setAge(21)}>Age</button>

      {/* Custom Button Component */}
      <Button text="Increment +" increment={increment} />
      <User />
    </div>
  );
};

export default Counter;