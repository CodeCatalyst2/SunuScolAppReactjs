import { Route, Routes } from "react-router-dom";

import NavbarScol from './components/NavbarScol';
import Home from './components/Home';
import UsersList from './components/UsersList';
import ClassStudent from './components/ClassStudent';
import Student from './components/Student';
import Role from './components/Role';
import AddUser from './components/AddUser';
import AddStudent from './components/AddStudent';
import AddClassStudents from './components/AddClassStudents';
import StudentsUserList from './components/StudentsUserList'
import StudentsClassList from './components/StudentsClassList'
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
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/student" element={<AddStudent />} />
        <Route path="/Addclassstudents" element={<AddClassStudents />} />
        
        <Route path="/studentsuserlist/:id" element={<StudentsUserList />} />
        <Route path="/studentsclasslist/:id" element={<StudentsClassList />} />
      </Routes>
    </div>
  );
}

export default App;
