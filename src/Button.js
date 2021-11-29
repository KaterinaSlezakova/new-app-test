import React from "react";

export default function Button ({ text, subText, date }) {
    return (
        <div className = "Button">
        <button className="testButton">{text}
        <br />
        <span>
            {subText}
        </span>
        </button>
        <small>{date}</small>
        </div>
    )   
}