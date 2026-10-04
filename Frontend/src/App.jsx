import { Route,Routes } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Login from "./Screen/Login";
import Studentsupport from "./Screen/Studentsupport";
import TeacherSupport from "./Screen/TeacherSupport";
import ForgotPassword from "./Screen/ForgotPassword";
import TeacherDashboard from "./Screen/TeacherDashboard";
import MyClasses from "./Screen/MyClasses";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/teacher-dashboard' element={<TeacherDashboard/>}>
        <Route path='my-classes' element={<MyClasses></MyClasses>}></Route>
      </Route>
    <Route path="/contact-admin" element={<Studentsupport/>}></Route>
    <Route path='/teacher-support' element={<TeacherSupport/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    </Routes>
  
    </>
  )
}

export default App
