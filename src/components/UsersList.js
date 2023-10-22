import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UsersList() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const deleteuser = (userId, userName) => {
        let conf = window.confirm(`Etes-vous sûr de vouloir supprimer ${ userName} ?`);
        if (conf) {
            const user_API_BASE_URL = "http://localhost:8080/user/";
            axios.delete(user_API_BASE_URL + userId);
            // window.location.reload();
        }
    };

    return (
        <>
            <div>
                <h1 className='m-3 text-center'>Liste des utilisateurs</h1>

                <div className='container'>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (user, index) =>
                                            <tr key={index} className='m-3 w-25 mx-auto'>
                                                <td>{index + 1}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button onClick={() => { navigate(`/user_roles/${user.id}`) }} className="btn btn-success">Modifier </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => { deleteuser(user.id, user.userName) }} className="btn btn-danger">Supprimer </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersList;
