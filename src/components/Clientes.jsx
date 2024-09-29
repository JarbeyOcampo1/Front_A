import { useEffect, useState } from "react"
import axios from "axios"
import ClienteTable from "./clientescomponentes/ClienteTable";
import ClienteForm from "./clientescomponentes/ClienteForm";

function Clientes () {

    const [cliente,setCliente] = useState ([])
    const [editingCliente,SetEditingCliente] = useState (null)

    //actualizar clientes
    useEffect (() => {
        fetchCliente ()
    },[]);

    //recorrer y retonar planes
    const fetchCliente = async() => {
        try {
            const response = await axios.get('http://localhost:8080/api/clientes');
            setCliente(response.data);
        } catch (error) {
            console.log ('Error a cargar clientes: ',error);
        }
    }

    //crear actualizar
    const CreateorUpdateCliente = async (clienteData) =>{
        if (editingCliente) {
            await axios.put(`http://localhost:8080/api/clientes/${editingCliente.id}`,clienteData);
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
    const handleDeleteCliente = async (clienteId) => {
        await axios.delete(`http://localhost:8080/api/clientes/${clienteId}`);
        fetchCliente ();
    };

    return (
        <div>
            <h1>Cliente</h1>
            <br />
            <ClienteTable clientes={cliente} onEdit={handleEditCliente} onDelete={handleDeleteCliente} />
            <h3>{editingCliente ? 'Editar cliente' : 'Crear cliente'}</h3>
            <ClienteForm onSubmit={CreateorUpdateCliente} initialCliente={editingCliente}/>
        </div>
    );

}

export default Clientes