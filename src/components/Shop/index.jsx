import React from "react";
import Card from "../Card";
import './style.css';
import data from "../data";

function Shop() {
    return (
        <div className="shop">
            <div className="divtext">
            <h1> Shop </h1>
            </div>
            <div className="cardconti">

    {data.productData.map((item,index)=>{
        return(
            <Card 
            img={item.img} 
            title={item.title} 
            desc={item.desc} 
            price={item.price}
            stock={item.stock}
            key={index.id}
            item={item}  
            />
        )
    })}


            </div>
        </div>

    )
}

export default Shop;