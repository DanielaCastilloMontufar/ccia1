import React from "react";
import LogInForm from "./LogInForm";

const BotonLogIn = () => {
    return(
        <>
        <a href="#modal" id="login">
          <button
          class="px-3 py-[10.5px] border-[1px] rounded-full button-logIn"
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pr-2 w-50 h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>Ingresar</button></a>

          
        </>
        
        
    )
}
export default BotonLogIn