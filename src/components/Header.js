import React  from "react";
import  ReactDOM  from "react-dom/client";

const Header = () => {
    return <div className = "container">
     <div className = "logo-container">
     <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt = "Logo"/>
     </div>
         <div className = "nav-items">
             <ul>
                 <li>Home</li>
                 <li>About us</li>
                 <li>Contact us</li>
                 <li>Cart</li>
             </ul>
 
         </div>
 
     </div>
 }

 export default Header;