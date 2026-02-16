import {useState, useEffect} from 'react'

const Parent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        function handleClick(){
            console.log(count);
        }
        window.addEventListener("click", handleClick);
    }, [count]);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}

export default Parent
