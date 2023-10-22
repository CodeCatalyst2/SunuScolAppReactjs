import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ClassStudent() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/class_students')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const deleteclassStudents = (classStudentsId, classStudentsName) => {
        let conf = window.confirm(`Etes-vous sûr de vouloir supprimer ${classStudentsName} ?`);
        if (conf) {
            const classStudents_API_BASE_URL = "http://localhost:8080/class_student/";
            axios.delete(classStudents_API_BASE_URL + classStudentsId);
            // window.location.reload();
        }
    };

    return (
        <>
            <div>
                <h1 className='m-3 text-center'>Liste des classes</h1>

                <div className='container'>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Classes</th>
                                    <th className='w-50'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (classStudents, index) =>
                                            <tr key={index} className='m-3 w-25 mx-auto'>
                                                <td>{index + 1}</td>
                                                <td>{classStudents.classLevel}</td>
                                                <td>
                                                    <button onClick={() => { navigate(`/classStudents_roles/${classStudents.id}`) }} className="btn btn-success">Modifier </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => { deleteclassStudents(classStudents.id, classStudents.classStudentsName) }} className="btn btn-danger">Supprimer </button>
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

export default ClassStudent;