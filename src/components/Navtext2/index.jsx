import React from "react";
import './style.css';
import {Link } from "react-router-dom";
    

function Navtext2() {
    return (
        <div className="navtext2">
            <Link className="headerItem2" to={"/"} ><p className="headerItem2">Home</p></Link>
            <Link className="headerItem2" to={"/new"} ><p className="headerItem2">New</p></Link>
            <Link className="headerItem2" to={"/shop"} ><p className="headerItem2">Shop</p></Link>
            <Link className="headerItem2" to={"/community"} ><p className="headerItem2">Community</p></Link>
            <Link className="headerItem2" to={"/about"} ><p className="headerItem2">About</p></Link>
        </div>
    )
}

export default Navtext2;