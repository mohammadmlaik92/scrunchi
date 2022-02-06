import React from "react";
import CardCont from "./CardCont";
import Headerimg from "./Headerimg";
import GrayBox from "./GrayBox";
import CardCont2 from "./CardCont2";
import Collection from "./Collection";
import ArtPic from "./ArtPic";
import Divtext from "./Divtext";
import Divtext2 from "./Divtext2";
import Divtext3 from "./Divtext3";
import Divtext4 from "./Divtext4";
import { CartProvider } from "react-use-cart"


function Home () {
    return (
     <div>
     <Headerimg/>
     <Divtext/>
     <CartProvider>
     <CardCont />
     </CartProvider> 
     <GrayBox/> 
     <Divtext2/>
     <CardCont2/>
     <Divtext3/>
     <Collection/>
     <Divtext4/>
     <ArtPic/>
     </div>
      )
  }
  
  export default Home;
