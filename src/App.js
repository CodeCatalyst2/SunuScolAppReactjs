import { Route, Routes } from "react-router-dom";

import NavbarScol from './components/NavbarScol';
import Home from './components/Home';
import UsersList from './components/UsersList';
import ClassStudent from './components/ClassStudent';
import Student from './components/Student';
import Role from './components/Role';
// import 'bootstrap/dist/js/bootstrap';


import './App.css';

function App() {
  return (
    <div className="App ">
      <NavbarScol />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/classes" element={<ClassStudent />} />
        <Route path="/students" element={<Student />} />
        <Route path="/roles" element={<Role />} />
      </Routes>
    </div>
  );
}

export default App;
