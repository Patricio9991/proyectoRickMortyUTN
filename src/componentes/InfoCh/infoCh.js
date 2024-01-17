import "./infoch.css"

export default function InfoCh({status,species,origin,gender,setShow}){


    return(
        <div >
            <div className="d-flex flex-row">
            
                <ul className="list-group">
                    <li className=" li list-group-item"><p>Character Status: {status}</p></li>
                    <li className=" li list-group-item"><p>Species:</p>{species}</li>
                    <li className=" li list-group-item"><p>Origin:</p>{origin}</li>
                    <li className=" li list-group-item"><p>Gender:</p>{gender}</li>
                    
                </ul>

                <button className="btn align-self-start cross"onClick={()=>setShow(false)}>X</button>
        
            </div>




        </div>
    )





}