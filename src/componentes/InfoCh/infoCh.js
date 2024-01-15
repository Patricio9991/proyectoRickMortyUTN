import "./infoch.css"

export default function InfoCh({status,species,origin,gender,setShow}){


    return(
        <div >
            <div className="d-flex flex-row ssm">
            
                <ul className="list-group ps-2">
                    <li className=" li list-group-item">Character Status {status} </li>
                    <li className=" li list-group-item"><p>Species</p>{species}</li>
                    <li className=" li list-group-item"><p>Origin</p>{origin}</li>
                    <li className=" li list-group-item"><p>Gender</p>{gender}</li>
                    
                </ul>

                <button className="btn align-self-start cross"onClick={()=>setShow(false)}>X</button>
        
            </div>




        </div>
    )





}