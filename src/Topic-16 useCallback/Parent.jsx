import {useCallback, useState} from 'react'
import Child from './Child'


const Parent = () => {
    const [count, setCount] = useState(0);
    console.log("Parent Component rendered");

    const handleClick = useCallback(() => {
         console.log("clicked")
        //setCount(prev => prev + 1);
         setCount(count => count + 1);
        
    }, []) 
       
  return (
    <div>
        <h1>Parent Component</h1>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
      <Child/>
    </div>
  )
}

export default Parent
