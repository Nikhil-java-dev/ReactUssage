import { memo } from 'react'

const Child = () => {
    console.log("child render");
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}
export default memo(Child)
 