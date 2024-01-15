import "./filter.css"


export default function Filter({value,id,handlerFilters}){

    return(
        
            <div className="filter d-sm-flex d-flex gap-2 form-check form-switch  px-5 align-items-center">
                <input className="bgColour form-check-input" type="checkbox" role="switch" id={id} onChange={handlerFilters}/>
                <label className="form-check-label" htmlFor={id}>{value}</label>
            </div>
        
    )



}