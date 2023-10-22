import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'



function AddUser() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');

  const saveUser = (e) => {
    e.preventDefault();
    
    let dataJsonUser = { userName: userName, email: email };
    console.log('User => ' + JSON.stringify(dataJsonUser));

    // Traiter les données du formulaire ici, par exemple les envoyer à une API
      const USER_API_BASE_URL = "http://localhost:8080/user/id";
    axios.post(USER_API_BASE_URL , dataJsonUser)
      .then(response => {
        console.log(response.data); // Affiche la réponse du backend

      })
      .catch(error => {
        console.error(error);
      });

    // Réinitialiser les champs du formulaire
    setuserName('');
    setEmail('');
    handleClose();
    navigate('/users');
    window.location.reload();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
      saveUser(event);
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container mt-5'>
      <Button  variant="primary" onClick={handleShow}>
        Ajouter un utilisateur
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                      <Form.Group className="mb-3">
              <Form.Label >Nom</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </Form.Group>
                      <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="success" type="submit" onClick={saveUser}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddUser;