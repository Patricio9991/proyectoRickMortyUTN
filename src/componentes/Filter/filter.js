


export default function Filter({value,id,handlerFilters}){

    return(
        
            <div className=" d-flex gap-2 bg-primary form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id={id} onChange={handlerFilters}/>
                <label className="form-check-label" htmlFor={id}>{value}</label>
            </div>
        
    )



}