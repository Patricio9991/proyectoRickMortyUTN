import "./card.css"

import {useState} from "react";

import InfoCh from "../../componentes/InfoCh/infoCh";
export default function Card({data}){

        let [show,setShow]=useState(false)
       
        

    //creo cada tarjeta
    return(
        
        <div className="card m-2 p-2 d-flex flex-row">
                    <div >
                        <img src={data.image} alt={data.name}/>
                        <h3>{data.name}</h3>
                        <button className={show===true? "d-none":"d-block btn"} onClick={() =>setShow(true)}> know more.. </button>
                    </div> 

                    {show === true? <InfoCh status={data.status} species={data.species} origin={data.origin.name} gender={data.gender} setShow={setShow}/>: ""  } 
                    

              
        </div>
    )


}