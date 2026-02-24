import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    console.log(userRouteError())
  return (
    <div>
      <h1>Oops Something Went Wrong!!</h1>
    </div>
  )
}

export default Error
