import "./filter.css"


export default function Filter({value,id,handlerFilters}){

    return(
        
            <div className="filter d-flex gap-2 form-check form-switch py-2 px-5">
                <input className="form-check-input" type="checkbox" role="switch" id={id} onChange={handlerFilters}/>
                <label className="form-check-label" htmlFor={id}>{value}</label>
            </div>
        
    )



}