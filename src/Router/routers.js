import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "../paginas/home/home"
import Characters from "../paginas/Characters/characters"   
import Contact from "../paginas/Contact/contact"

export default function Router(){
    

    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="characters" element={<Characters/>}/>
                <Route path="contact" element={<Contact/>}/>

            </Routes>
        
        
        </BrowserRouter>




    )

}