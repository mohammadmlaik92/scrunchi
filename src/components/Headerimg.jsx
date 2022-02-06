import React from "react";
import {Link } from "react-router-dom";
// import imgh from "./photo/h22.jpg";

function Headerimg() {
    return (
        <div className="headerimg">
            {/* <img width={"100%"} height={"100%"} src={imgh} alt="logo"/> */}
            <div className="divheaderimg">
            <h1 className="scrunchiehh1">scrunchie</h1>
            {/* <button className="cartbtn1">SHOPPING NOW</button> */}
            <Link className="headerItem" to={"/shop"} ><button className="cartbtn1">SHOPPING NOW</button></Link>
            
            </div>
        </div>
    )
}

export default Headerimg;