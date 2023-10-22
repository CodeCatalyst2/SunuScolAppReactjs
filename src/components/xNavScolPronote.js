// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import imgUser from './icons/user-solid.svg'
import iconHome from './icons/house-solid.svg'
import iconCollege from './icons/building-columns-solid.svg'

function NavScol() {
    const navigate = useNavigate();


    return (
        <div> 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
                    <div style={{ margin: '0 10px' }}>
                        <img src={imgUser} alt="User Icon" width="50" height="50" />
                    </div>
                    <div>
                    <h3 style={{ margin: '0' }}>
                            <img src={iconCollege} alt="College Icon" width="" height="25" className='me-1 mb-2' />
                            Collège Dakar
                        </h3>
                        <h4>Espace Professeur : M. Dev</h4>
                    </div>
                </div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/employers">
                    <img src={iconHome} alt="User Icon" width="" height="40" style={{ filter: "invert(1)" }} className='ms-1' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Mes données</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Cahier de textes</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Notes</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Résultats</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Vie Scolaire</Nav.Link>
                    </Nav>
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Communication</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default NavScol;