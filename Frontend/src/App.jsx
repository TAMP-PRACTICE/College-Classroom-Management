import { Route,Routes } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Login from "./Screen/Login";
function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  
    </>
  )
}

export default App
