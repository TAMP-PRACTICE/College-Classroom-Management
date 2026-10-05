import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container, Row, Col} from "react-bootstrap";
import AdminNav from '../../Components/AdminNav';
const AdminDashboard = () => {
  return (
    <>
         <Container fluid>
                <Row>
                    <Col md={2} className='' style={{ backgroundColor: "rgb(234, 241, 255)", height: "100dvh",top:"0",position:"sticky" }}>
                        <div>
                            <img src="/logo.png" style={{ maxWidth: '100px' }} alt="" />
                        </div>
                        <Col>
                           <AdminNav/>

                        </Col>

                    </Col>
                    <Outlet></Outlet>
                 
                </Row>

            </Container>
    </>
  )
}

export default AdminDashboard