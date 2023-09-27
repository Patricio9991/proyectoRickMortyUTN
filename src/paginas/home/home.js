import "./home.css"
import {Link} from "react-router-dom"
import Button from "../../componentes/Button/button"

export default function Home(){

    return(
        <header className="canvas">
            <div className="main">

                <h1 className="home-text">Proyect Rick & Morty</h1>
                <h2 className="home-text">Helcome to Rick & Morty Proyect!</h2>
                <p className="home-text">This proyect was made for practising React and to made a functional website</p>
                <p className="home-text">In this website you can know information of the characters of this animated</p>
                <p className="home-text">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className="home-text">Lets go!</h2>

                <div className="btnContainer gap-3">
                <Link to="/characters"><Button btName={"Characters"}/></Link>
                <Link to="/contact"><Button btName={"Contact"}/></Link>
                </div>


            </div>
        </header>
    )


}