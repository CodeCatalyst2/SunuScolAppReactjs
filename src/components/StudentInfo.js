import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import imgStudent from './icons/user-regular.svg'
import styles from './StudentInfo.module.css'


function StudentsUserList() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [dataStudent, setDataStudent] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [view, setView] = useState('student'); // 'student' ou 'guardian'

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${id}`)
            .then(response => {
                setDataUser(response.data);
            })
            .catch(error => {
                console.error("Il y avait une erreur en récupérant du user :", error);
            });
    }, [id]);


    useEffect(() => {
        axios.get(`http://localhost:8080/student/${id}`)
        .then(response => {
            setDataStudent(response.data);
        })
        .catch(error => {
            console.error("Il y avait une erreur en récupérant les étudiants:", error);
        });
    }, [id]);

    const handleBackButtonClick = () => {
        navigate(-1); // cela ramène l'utilisateur à la page précédente
    };

    // console.log("dataUser : " + JSON.stringify(dataUser))
    // console.log("dataStudent : " + JSON.stringify(dataStudent))

    return (
        <>
            <button onClick={handleBackButtonClick} className="btn btn-secondary m-3">
                Retour
            </button>

            <div className={`${styles.containerCenter}`}>
                <div className={` w-50  ${styles.containerStudent}`}>
                    <div className={`p-1  ${styles.titleUser}`}>
                        <h4>Fiche de renseignements : {dataStudent.firstName} {dataStudent.lastName}</h4>
                    </div>
                    <div className='mt-1'>
                        <button className='btn btn-secondary rounded-0 me-1'
                            onClick={() => setView('student')}
                        >
                            Identité & Scolarité
                        </button>
                        <button
                            className='btn btn-secondary rounded-0 '
                            onClick={() => setView('guardian')}
                        >
                            Responsables
                        </button>
                    </div>
                    <hr className='m-0' />
                    {view === 'student' ? (
                        <div className={`m-3 ${styles.infoStudent}`}>
                            <div className='pt-2'>
                                <img src={imgStudent} alt="User Icon" width="100" height="100" />
                            </div>
                            <div className={`m-3 ${styles.infoStudDetails}`}>
                                <p className='m-0 '><span className='fw-bold'>Identifiant</span> : {dataStudent.studentId}</p>
                                <p className='m-0'>Prénom : {dataStudent.firstName}</p>
                                <p className='m-0'>Nom : {dataStudent.lastName}</p>
                                <p className='m-0'>Date de naissance : xx/xx/xxxx</p>
                                <p className='m-0'>Téléphone : xxxx</p>
                                <p className='m-0'>Adresse : xxxx</p>
                                <p className='m-0'>Email : xxxx</p>
                            </div>
                        </div>
                    ) : (
                        <div className={`m-3 ${styles.infoStudent}`}>
                            {/* ... informations des responsables ... */}
                            <div className='pt-2'>
                                <img src={imgStudent} alt="User Icon" width="100" height="100" />
                            </div>
                            <div className={`m-3 ${styles.infoStudDetails}`}>
                                <p className='m-0'>Identifiant : {dataUser.userId}</p>
                                <p className='m-0'>Prénom : {dataUser.userName}</p>
                                <p className='m-0'>Nom : xxx</p>
                                <p className='m-0'>Téléphone : xxxx</p>
                                <p className='m-0'>Profession : xxxx</p>
                                <p className='m-0'>Adresse : xxxx</p>
                                <p className='m-0'>Email : xxxx</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};



export default StudentsUserList