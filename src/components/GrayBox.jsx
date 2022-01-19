import React from "react";
import g1 from "./photo/g1.png"

function GrayBox() {
    return (
        <>
        <div className="graybox1">
            <div>
                <div style={{textAlign :'center',marginBottom : "1rem"}} className="textcenter">
                    <p className="par1">Our mission has always been to excite you with scrunchies as </p>
                    <p className="par1">bold as your confidence. All scrunchies are hand crafted and all </p>
                    <p className="par1">products are designed with care to ensure that any gems you </p>
                    <p className="par1">find at scrunchie is unique, just like you. </p>
                </div>
                <div style={{display:'flex',width : "100%",justifyContent : 'center'}}>
                    <button className="cartbtn2">SHOPPING NOW</button>
                </div>
            </div>
        </div>
        <div style={{marginTop : "-14rem",marginLeft : "8rem",marginRight : "2rem",marginBottom : "4rem"}}>
            <img  width={"25%"} height={"75%"} src={g1} alt="gray scrunchie"/>
        </div>        
        </>
    );
}
export default GrayBox;