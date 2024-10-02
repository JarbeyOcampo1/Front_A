import { useEffect, useState } from "react"
import axios from "axios"
import ClienteTable from "./clientescomponentes/ClienteTable";
import ClienteForm from "./clientescomponentes/ClienteForm";
import './css/Clientes.css'; 
import { Link } from "react-router-dom";


function Clientes () {

    const [cliente,setCliente] = useState ([])
    const [editingCliente,SetEditingCliente] = useState (null)

    //actualizar clientes
    useEffect (() => {
        fetchCliente ()
    },[]);

    //recorrer y retonar clientes
    const fetchCliente = async() => {
        try {
            const response = await axios.get('http://localhost:8080/api/clientes');
            setCliente(response.data);
            console.log(response.data)
        } catch (error) {
            console.log ('Error a cargar clientes: ',error);
        }
    }

    //crear actualizar
    const CreateorUpdateCliente = async (clienteData) =>{
        if (editingCliente) {
            await axios.put(`http://localhost:8080/api/clientes/${editingCliente.clienteID}`,clienteData);
        } else {
            await axios.post(`http://localhost:8080/api/clientes`,clienteData);
        }
        fetchCliente();
        SetEditingCliente(null);
    };

    //editar
    const handleEditCliente =(cliente) =>{
        SetEditingCliente(cliente);
    };

    //eliminar
    const handleDeleteCliente = async (clienteID) => {
        try {
            console.log("ID del cliente a eliminar:", clienteID);  // Verifica la ID
            await axios.delete(`http://localhost:8080/api/clientes/${clienteID}`);
            fetchCliente();  // Actualiza la lista de clientes
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            alert('Error al eliminar el cliente.');
        }
    };

    return (
        <div>
            <h1>Cliente</h1>
            <Link className="home-button" to="/">Inicio</Link>
            
            <br />
            <ClienteTable clientes={cliente} onEdit={handleEditCliente} onDelete={handleDeleteCliente} />
            <h3>{editingCliente ? 'Editar cliente' : 'Crear cliente'}</h3>
            <ClienteForm onSubmit={CreateorUpdateCliente} initialCliente={editingCliente}/>
        </div>
    );

}

export default Clientes