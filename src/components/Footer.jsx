import React from "react";


function Footer() {
    const currentYear = new Date().getFullYear();

    return(
    <div className="footer1">
        <p>Copyright © {currentYear} SCRUNCHIE</p>  
    </div> 
    )
}
export default Footer;