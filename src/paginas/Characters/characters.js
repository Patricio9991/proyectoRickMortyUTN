import {useEffect, useState} from "react";

import "./characteres.css";

import Card from "../../componentes/Card/card.js";
import Nav from "../../componentes/Nav/nav.js";
import Filter from "../../componentes/Filter/filter.js";


export default function Characters(){

    let [characters, setCharacters]=useState([])
    let [FullList, setFullList]=useState([])
    let [filtered, setFiltered]=useState([])
    let switches=[{
        id:"Alive",
        filterName: "Character Alive"
    },{
        id:"Dead",
        filterName: "Character Dead"
    },{
        id:"Female",
        filterName: "Female"
    },{
        id:"Male",
        filterName: "Male"
    },{
        id:"unknown",
        filterName: "Origin Unknown"
    }]

    let promiseCharacters=async()=>{ //me traigo la info y la hago json
        let data=await fetch("https://rickandmortyapi.com/api/character")
        .then((response)=>{ return response.json()})
        .catch((err) => {return console.log("Error en "+err)})

        return data
    }

    let savedCharacters=async()=>{ //la guardo para poder manipularla
        let newData= await promiseCharacters()
        let characters=newData.results
        setCharacters(characters)
        setFullList(characters)
    }
    useEffect(()=>{
        savedCharacters();
    },[])



    let filterApplied=(eventID)=>{
        let response;
        if(eventID==="Alive" || eventID==="Dead"){
            response= characters.filter((ch)=>ch.status === eventID)
            
        }
    
        if(eventID==="Male" || eventID==="Female"){
            response= characters.filter((ch)=>ch.gender === eventID)
        }

        if(eventID==="unknown"){
            response= characters.filter((ch)=>ch.origin.name === eventID)
            
        }
        setCharacters(response)
    }
    useEffect(()=>{
        console.log(filtered)
        filtered.forEach((item)=>{filterApplied(item)})},[filtered])

    let handlerFilters=(event)=>{

        let eventChecked = event.target.checked
        let eventID = event.target.id
       

        if(eventChecked === true){
            setFiltered([...filtered,eventID])
            
        }else{
            let filterUnApplied = filtered.filter((element)=> element !== eventID)
            setCharacters(FullList)
            setFiltered(filterUnApplied)

        }
        
        
    
    }

    return(
        <div>
            <div> <Nav/></div>
        <main className="container">
            
            <h2>Filters</h2>
            <form className="d-flex fs-7 justify-content-between ">
                {switches.map((sw)=>{
                    return <Filter key={sw.id} value={sw.filterName} id={sw.id} handlerFilters={handlerFilters}/>
                })}
            </form >
            
            <section className="row">
               
                {characters.length>0?
                    characters.map((ch)=>{
                        return <Card key={ch.id} data={ch}/> 
                    }): <div className="d-flex gap-2 my-5 alert m-0">
                        <i className="bi bi-exclamation-triangle-fill"></i>
                        <p> Sorry! There are no characters  width all those properties</p>
                        </div>

                }
                
            </section>


        </main>
        </div>
    )
        



}