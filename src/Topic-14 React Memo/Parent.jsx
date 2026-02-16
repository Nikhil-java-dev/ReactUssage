import { useState } from 'react'
import Child from './Child';


const Parent = () => {
  const[text, setText] = useState("")
  const[count, setCount] = useState(0)

  console.log("parent render");

  const handleChange= (e) => {
    console.log(e.target.value);
    setText(e.target.value)

  }

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div id="parent-component">
      <h1>Parent component</h1>
      <input type="text" value={text} onChange={handleChange}/>
      <h1>count:{count}</h1>
      <button onClick={handleClick}>Click Me</button>
      <Child />

    </div>
  )
}

export default Parent
