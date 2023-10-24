import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AddStudent from './AddStudent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function StudentsUserList() {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleBackButtonClick = () => {
    navigate(-1); // cela ramène l'utilisateur à la page précédente
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/class_student/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Il y avait une erreur en récupérant les étudiants:", error);
      });
  }, [id]);

  const deleteStudent = (studentId, lastName) => {
    let conf = window.confirm(`Etes-vous sûr de vouloir supprimer ${lastName} ?`);
    if (conf) {
      const STUDENT_API_BASE_URL = "http://localhost:8080/student/";
      axios.delete(STUDENT_API_BASE_URL + studentId);
      // window.location.reload();
    }
  };

  // console.log(data)

  return (
    <>
      <div>
        <button onClick={handleBackButtonClick} className="btn btn-secondary m-3">
          Retour
        </button>
        <AddStudent/>
        <h1 className='m-3 text-center'>{data.classLevel }</h1>

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
                  data.students && data.students.length > 0 ? (
                    data.students.map((student, index) => (
                      <tr key={index} className='m-3 w-25 mx-auto'>
                        <td>{index + 1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>
                          <button style={{ marginRight: "10px" }}
                            onClick={() => { navigate(`/studentinfo/${student.studentId}`) }}
                            className="btn btn-dark rounded-pill">
                            Fiche élève <FontAwesomeIcon icon={faChild} />
                          </button>
                          <button onClick={() => { navigate(`/student/${student.studentId}`) }} className="btn btn-success">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button style={{ marginLeft: "10px" }} onClick={() => { deleteStudent(student.studentId, student.lastName) }} className="btn btn-danger">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">Pas d'élève</td>
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



export default StudentsUserList