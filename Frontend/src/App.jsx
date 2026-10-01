import { Route,Routes } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Login from "./Screen/Login";
import Studentsupport from "./Screen/Studentsupport";
import ForgotPassword from "./Screen/ForgotPassword";
function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/contact-admin" element={<Studentsupport/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    </Routes>
  
    </>
  )
}

export default App
