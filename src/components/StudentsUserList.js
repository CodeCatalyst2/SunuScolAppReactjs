import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function StudentsUserList() {

  const navigate = useNavigate();
  const { id } = useParams();


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${id}`)
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
        <h1 className='m-3 text-center'>M. {data.userName }</h1>

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
                          <button onClick={() => { navigate(`/student/${student.studentId}`) }} className="btn btn-success">Modifier</button>
                          <button style={{ marginLeft: "10px" }} onClick={() => { deleteStudent(student.studentId, student.lastName) }} className="btn btn-danger">Supprimer</button>
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