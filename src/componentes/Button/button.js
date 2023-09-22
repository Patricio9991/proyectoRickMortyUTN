import "./button.css"

export default function Button({btName}){

    return(
        <div>
            <button className="btn border">
                {btName}
            </button>
        </div>
    )


}