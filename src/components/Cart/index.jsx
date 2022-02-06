import React from "react";
import './style.css'


export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    return( 
    <aside> 
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}

        </div>
        {cartItems.map((item) => (
            <div key={item.id}>
                <div>{item.name}</div>
                <div>
                    <button onClick={()=>onAdd(item)}>+</button>
                    <button onClick={()=>onRemove(item)}>-</button>
                </div>
                <div>{item.qty} x IQD{item.price.toFixed(2)}</div>
            </div>
        ))}
    </aside>
    );
}

