import React, { useState } from 'react'

const Controlled1 = () => {
    const [username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("email", email);
        console.log("password", password);

        alert("Form submitted");
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const handleFormReset = () => {
        console.log("Form Reset");
        setUsername("");
        setEmail("");
        setPassword("");
    }
    console.log("Controlled1 Component Render")




  return (
    <form action="" onSubmit={handleFormSubmit} onReset={handleFormReset}autoComplete="off">
        <label htmlFor='input1'>Username&nbsp;</label>
        <input type='text'
        id='input1'
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor='input2'>
            Email<sup style={{color:"red"}}>*</sup>
        </label>
        <input type='email'
        id='input2'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="input3">
        Password<sup style={{ color: "red" }}>*</sup> &nbsp;
      </label>
      <input
        type="password"
        placeholder="at least 8 characters"
        id="input3"
        name="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value.trim())}
        required
      />
      <br />
      <br />

      <button type="submit">Register</button>&nbsp;
      <button type="reset">Cancel</button>
    </form>
  );
};

export default Controlled1;


  