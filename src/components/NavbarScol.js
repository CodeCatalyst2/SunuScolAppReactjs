import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import imgUser from './icons/user-solid.svg'
import iconHome from './icons/house-solid.svg'
import iconCollege from './icons/building-columns-solid.svg'
import styles from './NavbarScol.module.css'
// import DropdownUser from './DropdownNav/DropdownUser';



function NavbarScol() {
    const navigate = useNavigate();


    return (
        <div> 
            <div className={styles.centerContent}>
                <div className={styles.iconMargin}>
                <img src={imgUser} alt="User Icon" width="50" height="50" />
                </div>
                <div>
                    <h3 className={styles.collegeIcon}>
                        <img src={iconCollege} alt="College Icon" width="" height="25" className='me-1 mb-2' />
                        Collège Dakar
                    </h3>
                    <h4>Espace Professeur : M. Dev</h4>
                </div>
                {/* <div className='me-2 ms-auto'>
                    <h4 className=''>SunuScol</h4>
                </div> */}
            </div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src={iconHome} alt="User Icon" width="" height="40"  className={`${styles.invertedIcon} ms-1`} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    {/*  <DropdownUser/> */}
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/users")}>Utilisateurs</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/classes")}>Classes</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/students")}>Elèves</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/roles")}>Rôles</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/adduser")}>Ajouter un utilisateur</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default NavbarScol;