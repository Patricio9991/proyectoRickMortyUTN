import "./card.css"

import {useState} from "react";

import InfoCh from "../../componentes/InfoCh/infoCh";
export default function Card({data}){

        let [show,setShow]=useState(false)
        const classBtn= "btn btn-active"
        

    //creo cada tarjeta
    return(
        
        <div className="card m-2 p-2">
                <img src={data.image} alt={data.name}/>
                <h3>{data.name}</h3>
                <button className={show===true? "d-none":"d-block btn btn-active"} onClick={()=>setShow(true)}> know more.. </button>
              {show === true? <InfoCh status={data.status} species={data.species} origin={data.origin.name} gender={data.gender} setShow={setShow}/>: " "  }  
        
        </div>
    )


}