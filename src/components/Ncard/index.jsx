import React from "react";
import starimg from "../photo/star.svg"
import './style.css'

function Ncard() {
    return (
    <div className="card">
        <div className="cardimg">
            <div className="new">New</div>
        </div>
        <div className="cardcomp">
        <p className="par">SCRUNCHIE</p>
        <p>price 5000 IQD</p>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        </div>
        <button className="cartbtn">ADD TO CART</button>
    </div>
    );
}
export default Ncard;