import React from "react";
import { Link } from "react-router-dom";

function DefaultPage({props, children}){
    return (
     <div className="App">
      <div id="header">
        <nav>
          <ul>
            <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
                </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link to={"/product"}>Product</Link>
            </li>
          </ul> 
        </nav>
      </div>
      <div id="content">
        {children}

      </div>
    </div>
  )
}

export default DefaultPage;