import { useState, useEffect, useEffectEvent } from 'react'

const Parent1 = () => {
  const [count, setCount] = useState(0)

  // ✅ create stable event handler
  const handleClick = useEffectEvent(() => {
    console.log(count)
  })

  useEffect(() => {
    window.addEventListener("click", handleClick)

    // ✅ cleanup
    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, []) // ✅ empty dependency

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}

export default Parent1;
