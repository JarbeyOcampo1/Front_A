import { Link } from "react-router-dom"

function Principal () {
    return (
        <>
            <h1>Direcciones</h1>

            <Link to="/planes"> Ver planes del Gimnasio </Link>
            <br/>
            <Link to="/clientes"> Ver Clientes </Link>
            <br/>
            <Link to="/logins"> Ver Logins</Link>
        </>
    )
}

export default Principal