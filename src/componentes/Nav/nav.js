import {useState} from "react";
import {Link} from "react-router-dom";

import "./nav.css"


export default function Nav(){
    
    
    
  
 
    return(

        <header className="header-nav mb-sm-4">
            <nav>
                 <Link to="/"><h1>Rick & Morty</h1></Link>
                    <ul className="g-3">
                        <li>
                        <Link to="/characters"> <a className="btn p-2">Characters</a></Link>
                        </li>
                        <li>
                        <Link to="/contact"><a className="btn p-2">Contact</a></Link>
                        </li>
                    </ul>
                
            </nav>
        </header>

    )
}