import React from "react";
import starimg from "./photo/star.svg"

function Card() {
    return (
    <div className="card">
        <div className="cardimg"></div>
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
export default Card;