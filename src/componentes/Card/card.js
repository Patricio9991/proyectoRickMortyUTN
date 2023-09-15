import "./card.css"

export default function Card(){

    //creo cada tarjeta
    return(
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align items-center">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <img src="" alt="img personaje"/>
                <h3>Nombre Personaje</h3>
                <button className="btn btn-active align-self-end"> know more.. </button>
            </div>
        </div>
    )


}