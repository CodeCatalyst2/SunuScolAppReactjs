import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function RolesList() {

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/roles')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const deleterole = (roleId, roleName) => {
    let conf = window.confirm(`Etes-vous sûr de vouloir supprimer ${roleName} ?`);
    if (conf) {
      const role_API_BASE_URL = "http://localhost:8080/role/";
      axios.delete(role_API_BASE_URL + roleId);
      // window.location.reload();
    }
  };

  return (
    <>
      <div>
        <h1 className='m-3 text-center'>Liste des rôles</h1>

        <div className='container'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Rôles</th>
                  <th>Permissions</th>
                  <th> Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    (role, index) =>
                      <tr key={index} className='m-3 w-25 mx-auto'>
                        <td>{index + 1}</td>
                        <td>{role.roleName}</td>
                        <td>{role.permissions}</td>
                        <td>
                          <button onClick={() => { navigate(`/role_roles/${role.id}`) }} className="btn btn-success">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button style={{ marginLeft: "10px" }} onClick={() => { deleterole(role.roleId, role.roleName) }} className="btn btn-danger">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
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

export default RolesList;
