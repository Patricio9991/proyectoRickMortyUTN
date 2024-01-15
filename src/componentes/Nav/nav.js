
import {Link} from "react-router-dom";

import "./nav.css"


export default function Nav(){
    
    
    
  
 
    return(

        <header className="header-nav mb-sm-4">
            <nav>
                 <Link to="/"><h1>Rick & Morty</h1></Link>
                    <ul className="g-3">
                        <li>
                        <Link to="/characters"> <p className="btn p-2">Characters</p></Link>
                        </li>
                        <li>
                        <Link to="/contact"><p  className="btn p-2">Contact</p></Link>
                        </li>
                    </ul>
                
            </nav>
        </header>

    )
}