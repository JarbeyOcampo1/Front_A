import { useState } from "react";

function LoginsForm ({onSubmit}) {
    const [nombreusuario,setNombreusuario] = useState ('');
    const [password,setPassword] = useState ('');
    const [rol,setRol] = useState ('');

    const handleNombreUsuarioChange = (event) =>{
        setNombreusuario(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const handleRolChange = (event) =>{
        setRol(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({nombreusuario,password,rol});
        setNombreusuario('');
        setPassword('');
        setRol('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="nombreusuario" value={nombreusuario} onChange={handleNombreUsuarioChange} required/>
            <input type="text" placeholder="password" value={password} onChange={handlePasswordChange} required/>
            <input type="text" placeholder="rol" value={rol} onChange={handleRolChange} required/>
            <button type="submit">Guardar </button>
        </form>
    );

};

export default LoginsForm;