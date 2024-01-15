import "./card.css"

import {useState} from "react";

import InfoCh from "../../componentes/InfoCh/infoCh";
export default function Card({data}){

        let [show,setShow]=useState(false)
       
        

    //creo cada tarjeta
    return(
        
        <div className="card m-2 p-2 d-flex flex-row gap-2 w-100">
                    <div>
                        <img src={data.image} alt={data.name}/>
                        <h3>{data.name}</h3>
                        <button className={show===true? "d-none button txt-btn":"d-block btn button"} onClick={() =>setShow(true)}> know more.. </button>
                    </div>
                    <div className="d-sm-grid ">  
                    {show === true? <InfoCh status={data.status} species={data.species} origin={data.origin.name} gender={data.gender} setShow={setShow}/>: ""  } 
                    </div>
                    

              
        </div>
    )


}