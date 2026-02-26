import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef();
    console.log("render")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
    }
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
};

export default Uncontrolled
