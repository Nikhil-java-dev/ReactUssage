import { useState } from 'react'
import Child from './Child';


const Parent = () => {
  const[text, setText] = useState("")
  const[emp, setEmp] = useState({username:"abc", age:21})

  console.log("parent render");

  const handleChange= (e) => {
    console.log(e.target.value);
    setText(e.target.value)

  }

  const handleClick = () => {
    setEmp({...emp, username:"xyz", age:24})
  };

  return (
    <div id="parent-component">
      <h1>Parent component</h1>
      <input type="text" value={text} onChange={handleChange}/>
      <h1>count</h1>
      <button onClick={handleClick}>Click Me</button>
      <Child user={emp}/>
    </div>
  )
}

export default Parent
