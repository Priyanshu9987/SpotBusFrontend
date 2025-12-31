import React, { useEffect } from "react";
import {useState, useRef} from 'react';
import LocationPanel from "../components/LocationPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Home = () => {

    const [panelOpen, setPanelOpen] = useState(false);
    let panelRef= useRef(null);

    // Animation
    useGSAP( function () {
      if(panelOpen) {
        gsap.to(panelRef.current, {
            translateY: '-600px',
            duration:'0.5',
            ease:'power2.out'
        })
      } else {
        gsap.to(panelRef.current, {
            translateY: '0px',
            duration:'0.5',
            ease:'power2.out'
        })
      }
    }, [panelOpen])

    return (
        <>

        <div className="w-full h-[750px] bg-green-300"
        onClick= {() => setPanelOpen(false)}>
            {/* <LocationPanel /> */}
            

        </div>
        
        {/* // Information for the Bus Will be show here. */}
        <div ref= {panelRef} 
        className="w-full h-[100px]  bg-pink-400"
        onClick={() => setPanelOpen(true)}>

            </div>
        
        </>
    ) 

}

export default Home;