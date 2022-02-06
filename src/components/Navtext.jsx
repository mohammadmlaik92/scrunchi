import React from "react";
import {Link } from "react-router-dom";


function Navtext() {
    return (
        <div className="navtext">
            <Link className="headerItem" to={"/"} ><p className="headerItem">Home</p></Link>
            <Link className="headerItem" to={"/new"} ><p className="headerItem">New</p></Link>
            <Link className="headerItem" to={"/shop"} ><p className="headerItem">Shop</p></Link>
            <Link className="headerItem" to={"/community"} ><p className="headerItem">Community</p></Link>
            <Link className="headerItem" to={"/about"} ><p className="headerItem">About</p></Link>
        </div>
    )
}

export default Navtext;