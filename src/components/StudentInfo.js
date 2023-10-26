import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import imgStudent from './icons/user-regular.svg'
import styles from './StudentInfo.module.css'


function StudentsUserList() {
    const navigate = useNavigate();

    const { idStud, idUser } = useParams();
    const [dataStudent, setDataStudent] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [view, setView] = useState('student');


    useEffect(() => {
        axios.get(`http://localhost:8080/student/${idStud}`)
            .then(response => {
                setDataStudent(response.data);
            })
            .catch(error => {
                console.error("Il y avait une erreur en récupérant l'étudiant :", error);
            });
    }, [idStud]);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/user/${idUser}`)
            .then(response => {
                setDataUser(response.data);
            })
            .catch(error => {
                console.error("Il y avait une erreur en récupérant de l'utilisateur :", error);
            });
    }, [idUser]);




    const handleBackButtonClick = () => {
        navigate(-1); // cela ramène l'utilisateur à la page précédente
    };


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
                        <button
                            className={`rounded-0 me-1 ${styles.identityBtn} ${view === 'student' ? styles.identityBtnStudent : styles.identityBtnResponsible}`}
                            onClick={() => setView('student')}
                        >
                            Identité & Scolarité
                        </button>

                        <button
                            className={`rounded-0 ${styles.identityBtn} ${view === 'responsible' ? styles.identityBtnStudent : styles.identityBtnResponsible}`}
                            onClick={() => setView('responsible')}
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
                                <p className='m-0'>Adresse : xxx</p>
                                <p className='m-0'>Email :  {dataUser.email}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};



export default StudentsUserList