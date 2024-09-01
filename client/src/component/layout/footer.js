import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";


function Footer (){
 return(
    <div className="footer p-3">
       <input type="range" className="trackRange"/>
       <div className="d-flex footer-div">
           <div className="songDtl d-flex">
               <div className="me-3">
                 <img  className="img" src="/spotify.png" alt="song img" style={{maxHeight: "7vh", maxWidth:"15vh"}}/>
               </div>
               <div className="song-info">
                 <p className="p1">Agar tum kaho</p>
                 <p className="p2">Mohit Chohaun</p>
               </div>
           </div>
           
           <div className="songControls d-flex">
                <FaStepBackward className="con back"/>
                <FaPlay className="con play"/>
                <FaStepForward className="con ford" /> 

           </div>

           <div className="durationInfo">
            <span>0:00/4:34</span>
           </div>
       </div>
    </div>
 )
}

export default Footer;