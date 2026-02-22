import { useState, useMemo } from 'react'
import Child from './Child'
import "./style.css"



const Parent = () => {
  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState(false)

  const count = useMemo(() => {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
      sum = sum + 1;
      if (sum % 2 === 0) {
        count = count + 1;
      }
    }

    return count;
  }, []) // ✅ runs only when number changes

  return (
    <div>
      <h1>Parent Component</h1>

      <input
        type='text'
        value={number}
        placeholder='enter number'
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        type='button'
        className={theme ? 'dark' : 'light'}
        onClick={() => setTheme(!theme)}
      >
        {theme ? 'light' : 'dark'}
      </button>

      <Child count={count} />
    </div>
  )
}

export default Parent
