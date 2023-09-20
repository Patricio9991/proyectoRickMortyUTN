

export default function InfoCh({status,species,origin,gender,setShow}){


    return(
        <div>
                <button onClick={()=>setShow(false)}>X</button>
                <ul className="list-group">
                    <li className="list-group-item">{status} </li>
                    <li className="list-group-item">{species}</li>
                    <li className="list-group-item">{origin}</li>
                    <li className="list-group-item">{gender}</li>
                    
                </ul>


        </div>
    )





}