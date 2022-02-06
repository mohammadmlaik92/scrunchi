import React from "react";
import img1 from "./photo/logo.svg";
import img2 from "./photo/cart.svg";
import Navtext from "./Navtext";
import {Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <img className="headerImg1" src={img1} alt="logo"/> 
                <Navtext/>
            <Link className="headerImg2" to={"/cart"} ><img className="headerImg2" src={img2} alt="cart"/></Link>

        </header>
    )
}

export default Header;