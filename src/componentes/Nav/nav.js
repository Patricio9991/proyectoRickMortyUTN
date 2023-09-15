import "./nav.css"

export default function Nav(){
    return(
        <header>
            <nav>
                <h1 className="navbar-brand">Rick & Morty</h1>
                    <ul>
                        <li>
                            <a className="nav-link btn btn-active p-2">Characters</a>
                        </li>
                        <li>
                            <a className="nav-link p-2">Contacts</a>
                        </li>
                    </ul>
                
            </nav>
        </header>

    )
}