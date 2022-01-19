import React from "react";
import img1 from "./photo/logo.svg";
import img2 from "./photo/cart.svg";
import Navtext from "./Navtext";

function Header() {
    return (
        <header>
            <img className="headerImg1" src={img1} alt="logo"/> 
                <Navtext/>
            <img className="headerImg2" src={img2} alt="cart"/>
        </header>
    )
}

export default Header;