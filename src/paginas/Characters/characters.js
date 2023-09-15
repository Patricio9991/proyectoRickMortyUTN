import {useState} from "react";

import "./characteres.css";
import Card from "../../componentes/Card/card.js";
import Nav from "../../componentes/Nav/nav.js";

export default function Characters(){

    let [itemMenu, setItemMenu]=useState("Characters")

    return(
        <div>
            <Nav ></Nav>
        <main className="container">
            
            <h2>Filters</h2>
            <p>Lugar para filtros</p>

            <section className="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>


        </main>
        </div>
    )
        



}