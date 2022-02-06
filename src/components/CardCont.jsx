import React from "react";
import Card from './Card'
// import Ncard from "./Ncard";
import data from "./data";

function CardCont(props) {
    const {onAdd} = props;
    return <div className="cardcont">
    {data.productData.map((item,index)=>{
        return(
            <Card 
            img={item.img} 
            title={item.title} 
            desc={item.desc} 
            price={item.price}
            stock={item.stock}
            key={index}
            item={item}  
            onAdd={onAdd}
            />
        )
    })}

    </div>
}

export default CardCont;