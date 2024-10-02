import { Link } from "react-router-dom";
import './css/Principal.css'; 

function Principal() {
    return (
        <div>
            <div className="header">
                <h1>Bienvenido al sistema</h1>
                <img className="header-logo" src='LogoA.jpeg' alt="Logo" />
            </div>
            <div className="main-container">
                <div className="sidebar">
                    <div className="intro">
                        <p>El sistema Atlon permite tener un control sobre nuestros clientes, planes y la facturación.

                        </p>
                        <p>Haz click sobre uno de los botones.</p>
                    </div>
                    <div className="button-container">
                        <Link className="button" to="/planes">Crear planes</Link>
                        <Link className="button" to="/clientes">Crear clientes</Link>
                        <Link className="button" to="/logins">Login</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Principal;



