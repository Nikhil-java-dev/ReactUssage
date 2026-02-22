import React from 'react'

const Child = ({count=0}) => {
  console.log("Child Component rendered");


  return (
    <div>
      <h1>Child Component</h1>
      <p>count: {count}</p>
    </div>
  )
}

export default React.memo(Child)
// export default 
