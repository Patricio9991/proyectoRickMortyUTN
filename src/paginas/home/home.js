import "./home.css"

import Button from "../../componentes/Button/button"

export default function Home(){

    return(
        <header>
            <main>

                <h1>Proyect Rick & Morty</h1>
                <h2>Helcome to Rick & Morty Proyect!</h2>
                <p>This proyect was made for practising React and to made a functional website</p>
                <p>In this website you can know information of the characters of this animated</p>
                <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2>Lets go!</h2>

                <div className="btnContainer gap-3">
                <Button btName={"Characters"}/>
                <Button btName={"Contact"}/>
                
                </div>


            </main>
        </header>
    )


}