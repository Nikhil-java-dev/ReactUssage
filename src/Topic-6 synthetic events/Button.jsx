import "../index.css";
import React from "react";

const Button = ({ handleClick, text }) => {
    return <div>
        <button className="btn" onClick={handleClick}>{text}</button>
    </div>
}
export default Button;