/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Darkmodecontext } from "./App";

export default function Header()
{
    let {mode,setMode} = useContext(Darkmodecontext)

    return (

        <header className={mode.elementMode}>
            <div><h1 id="which-country">Where in the world</h1></div>
            <div onClick={()=>{
                 if(mode.bodyMode == 'lightbody') 
                 {
                 
                    setMode({bodyMode:'darkbody',elementMode:'darkElement'})
                    document.getElementsByTagName('body')[0].style.background = 'hsl(207, 26%, 17%)';
                    
                 }
                 else{
                  
                  
                    setMode({bodyMode:'lightbody',elementMode:'lightElement'})
                    document.getElementsByTagName('body')[0].style.background = 'hsl(0,0%, 98%)';
                  
                 }
            
            }} className="darkmode"><svg id="darkmode-img"
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
          </svg>
          <h4>Dark Mode</h4></div>
        </header>
    )
}
