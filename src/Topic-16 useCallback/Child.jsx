import React from 'react'

const Child = () => {
    console.log("Child Component rendered");

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default React.memo(Child)
// export default 
