import axios from "axios";
import { useEffect, useState } from "react";
import LoginsTable from "./logincomponentes/LoginsTable";
import LoginsForm from "./logincomponentes/LoginsForm";


function Login () {
    const [logins,setLogin] = useState ([])
    const [editingLogin,setEditingLogin] = useState (null)

    //actualizar la lista por cada login nuevo 
    useEffect (()=>{
        fetchLogins();
    },[]);

    //recorrer y retonar logins
    const fetchLogins = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/logins');
            setLogin(response.data);
        } catch (error) {
            console.log('Error a cargar logins: ',error);
        }
    };

    const handleCreateOrUpdateLogins = async (loginData) => {
        if (editingLogin) {
            await axios.put(`http://localhost:8080/api/logins/${editingLogin.usuarioID}`,loginData)
        } else {
            await axios.post(`http://localhost:8080/api/logins`,loginData)
        }
        fetchLogins();
        setEditingLogin(null);
    };

    //editar
    const handleEditLogin = (login) => {
        setEditingLogin(login);
    };

    //eliminar
    const handleDeleteLogin = async(usuarioID) => {
        try {
            await axios.delete(`http://localhost:8080/api/logins/${usuarioID}`);
            fetchLogins();
          } catch (error) {
            console.log('Error al eliminar login: ', error);
        }
    };

    return (
        <div>
            <h1>Logins</h1>
            <br />
            <h2> Lista planes</h2>
            <LoginsTable logins={logins} onEdit={handleEditLogin} onDelete={handleDeleteLogin}/>
            <h3>{editingLogin ? 'Editar login' : 'Crear login'}</h3>
            <LoginsForm onSubmit={handleCreateOrUpdateLogins} initialLogin={editingLogin}/>
        </div>
    )
};

export default Login;

