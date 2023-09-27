import "./infoch.css"

export default function InfoCh({status,species,origin,gender,setShow}){


    return(
        <div >
            <div className="d-flex flex-column m-5">
            <button className="btn"onClick={()=>setShow(false)}>X</button>
                <ul className="list-group ">
                    <li className=" li list-group-item">Character Status {status} </li>
                    <li className=" li list-group-item"><p>Species</p>{species}</li>
                    <li className=" li list-group-item"><p>Origin</p>{origin}</li>
                    <li className=" li list-group-item"><p>Gender</p>{gender}</li>
                    
                </ul>
        
            </div>




        </div>
    )





}