import "./button.css"

export default function Button({btName}){

    return(
        <div>
            <button className="btn border">
            <p className="p-btn">{btName}</p>
            </button>
               
        </div>
    )


}