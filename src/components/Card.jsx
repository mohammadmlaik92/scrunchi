import React from "react";
import starimg from "./photo/star.svg"

export default function Card (props) {
    const {product, onAdd } = props;
    return (
    <div className="card">
        <div className="cardimg">
        <img className="cardimg1" src={props.img} alt="propsimge"/>
        </div>
        <div className="cardcomp">
        <p className="par">{props.title}</p>
        <p>Price: {props.price} IQD</p>
        <p>In Stock: {props.stock} </p>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        <img className="star" width={"20px"} src={starimg} alt="star"/>
        </div>
        <button className="cartbtn" onClick={() => onAdd(product)}>ADD TO CART</button>
    </div>
    );
}
