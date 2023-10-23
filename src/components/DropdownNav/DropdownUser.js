// DropdownUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropdownUser() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
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
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <NavDropdown
            title="Utilisateurs"
            id="basic-nav-dropdown"
            className="text-white me-2"
            show={open}
            onMouseEnter={handleOpen}   // nouvel gestionnaire d'événements
            onMouseLeave={handleClose}  // nouvel gestionnaire d'événements
            onClick={() => navigate("/users")}
        >
            {data.map((student, index) => (
                <NavDropdown.Item key={student.studentId} href={`student/${index + 1}`}>
                    Elève {index + 1} : {student.lastName} {student.firstName} 
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
}

export default DropdownUser;
