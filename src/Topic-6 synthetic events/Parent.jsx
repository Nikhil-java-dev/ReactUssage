import React from 'react'
import Button from './Button'

const Parent = () => {
      const handleClick = () => {
        const h1 = document.querySelector('h1')
        h1.textContent = "Namaste Developers...🕵️‍♀️";
        h1.style.color = "red";
      }
      return <div>
        <h1>Hello Developer...🤹‍♀️</h1>
        <button className='btn' onClick={handleClick}>Click Me</button>
      </div>
}

export default Parent;
