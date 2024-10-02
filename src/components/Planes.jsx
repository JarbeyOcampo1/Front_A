import axios from "axios";
import { useEffect, useState } from "react";
import PlanTable from "./planescomponentes/PlanTable";
import PlanesForm from "./planescomponentes/PlanesForm";
import { Link } from "react-router-dom";


function Planes() {
    const [planes,setPlanes] = useState([]);
    const [editingPlanes,setEditingPlanes] =useState (null) ;

    //actualizar la lista por cada plan nuevo
    useEffect (()=>{
        fetchPlanes();
    },[]);

    //recorrer y retonar planes
    const fetchPlanes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/planes');
            setPlanes(response.data);
        } catch (error) {
            console.log ('Error a consultar planes: ',error);
        }
    }
    //crear actualizar planes
    const handleCreateOrUpdatePlane = async(planeData) => {
        if (editingPlanes) {
            await axios.put(`http://localhost:8080/api/planes/${editingPlanes.planID}`,planeData)
        } else {
            await axios.post(`http://localhost:8080/api/planes`,planeData)
        }
        fetchPlanes();
        setEditingPlanes(null);
    };

    //editar planes
    const handleEditPlane = (plane) => {
        setEditingPlanes(plane);
    };

    //eliminar cliente a partir id 
    const handleDeletePlane = async (planID) => {
        await axios.delete(`http://localhost:8080/api/planes/${planID}`);
        fetchPlanes();
    };

    return (
        <div className="Planes">
            <h1> Planes del Gimnasio</h1>
            <br/>
            <Link className="home-button" to="/">Inicio</Link>
            <h2>Lista Planes</h2>
            <PlanTable planes={planes} onEdit={handleEditPlane} onDelete={handleDeletePlane} />
            <h3>{editingPlanes ? 'Editar plan' : 'Crear plan'}</h3>
            <PlanesForm onSubmit={handleCreateOrUpdatePlane} initialPlane={editingPlanes}/>
        </div>
    );
}

export default Planes