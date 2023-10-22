import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Student() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const deleteStudent = (studentId, lastName) => {
        let conf = window.confirm(`Etes-vous sûr de vouloir supprimer ${lastName} ?`);
        if (conf) {
            const STUDENT_API_BASE_URL = "http://localhost:8080/student/";
            axios.delete(STUDENT_API_BASE_URL + studentId);
            // window.location.reload();
        }
    };

    return (
        <>
            <div>
                <h1 className='m-3 text-center'>Liste des élèves</h1>

                <div className='container'>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Prénom</th>
                                    <th>Nom</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (student, index) =>
                                            <tr key={index} className='m-3 w-25 mx-auto'>
                                                <td>{index + 1}</td>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                                <td>
                                                    <button onClick={() => { navigate(`/student_roles/${student.id}`) }} className="btn btn-success">Modifier </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => { deleteStudent(student.studentId, student.lastName) }} className="btn btn-danger">Supprimer </button>
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

export default Student;
