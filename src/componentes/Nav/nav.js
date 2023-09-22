import "./nav.css"

export default function Nav(){
    return(
        <header>
            <nav>
                <h1>Rick & Morty</h1>
                    <ul>
                        <li>
                            <a className="btn p-2">Characters</a>
                        </li>
                        <li>
                            <a className="btn p-2">Contacts</a>
                        </li>
                    </ul>
                
            </nav>
        </header>

    )
}