import React from "react";
import Navtext2 from "./Navtext2";
import aaa from "./photo2/paylogo.png"

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
    <div className="footer1">
    <Navtext2/>
    <br/>
        <div className="footer2">
            <img className="paylogo" src={aaa} alt="pay logo"/>
            <p>Copyright © {currentYear} SCRUNCHIE</p>
        </div>  
    </div> 
    )
}
export default Footer;