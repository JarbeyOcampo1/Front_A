import { Link } from "react-router-dom"

function Principal () {
    return (
        <>
            <h1>Direcciones</h1>

            <Link to="/planes"> Ver planes del Gimnasio </Link>
            <Link to="/clientes"> Ver Clientes </Link>
        </>
    )
}

export default Principal