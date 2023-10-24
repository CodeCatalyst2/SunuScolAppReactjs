import { Route, Routes } from "react-router-dom";

import NavbarScol from './components/NavbarScol';
import Home from './components/Home';
import UsersList from './components/UsersList';
import ClassStudent from './components/ClassStudent';
import StudentsList from './components/StudentsList';
import RolesList from './components/RolesList';
import AddUser from './components/AddUser';
import AddStudent from './components/AddStudent';
import StudentInfo from './components/StudentInfo';
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
        <Route path="/addclassstudents" element={<AddClassStudents />} />
        <Route path="/roles" element={<RolesList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/studentinfo/:id" element={<StudentInfo />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/studentsuserlist/:id" element={<StudentsUserList />} />
        <Route path="/studentsclasslist/:id" element={<StudentsClassList />} />
      </Routes>
    </div>
  );
}

export default App;
