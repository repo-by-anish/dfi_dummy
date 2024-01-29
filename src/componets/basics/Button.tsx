import React from "react";
import "./basic.css";
const Button = ({size: {width, height}, color, backgroundColor, name, fontSize}:{size: {width: number, height: number}, color: string, backgroundColor: string, name: string, fontSize: string})=>{

    return(
        <button className="button__primary" style={{width, height, backgroundColor: backgroundColor, color: color, fontSize}}>{name}</button>
    )
}

export default Button;