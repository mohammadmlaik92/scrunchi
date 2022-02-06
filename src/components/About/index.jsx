import React from "react";
import img1 from "../photo/logo.svg";
import './style.css';

function About() {
    return (
        <div className="about">
            <div className="divtext">
                <h1> About us </h1>
                <div className="divpar1">
                <p className="par1">We will always first and foremost be a family business. With my mom helping me choose & cut fabric and my dad handling the deliveries, there’s an incredible amount of love that goes into creating each and every scrunchie.</p>
                </div>

                <div className="a-img">
                <img className="imgg" src={img1} alt="logo"/> 
                <div className="divtext1">
                <h1> Our Story </h1>
                <p className="par1">Scrunchie. is a clothing brand and home of the  Scrunchie.
                But it’s more than just a brand — Scrunchie has grown into a community of friends.
                It all started with a Christmas gift!

                As a mural artist, I often made scrunchies for myself to match my outfits and keep my hair up as I painted.
                I’d sew them by hand with a needle and thread, and it would take me almost an entire day to make just one scrunchie.
                One year, in the spirit of Christmas, I decided to make a scrunchie for my cousin Anh Lan, with one key difference to suit her super long locks-I made it big. Suddenly,  Scrunchie was born.</p>
                </div>
                
                </div>
            </div>
            <div className="cardconti">

            </div>
        </div>

    )
}

export default About;