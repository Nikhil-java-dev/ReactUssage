import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");
  console.log("render");

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Typed: {name}</p>
    </div>
  );
}

export default Controlled;