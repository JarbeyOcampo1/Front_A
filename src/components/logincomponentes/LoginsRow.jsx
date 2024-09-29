const LoginsRow =({login,onEdit,onDelete}) =>{
    
    const handleEdit = () => {
        onEdit(login);
    };

    const handleDelete = () => {
        onDelete(login.usuarioID);
    };


    return (
        <tr>
            <td>{login.nombreusuario}</td>
            <td>{login.password}</td>
            <td>{login.rol}</td>

            <td>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    );
};

export default LoginsRow;