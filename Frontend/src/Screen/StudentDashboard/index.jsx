import React from 'react'
import { GoClock, GoArrowRight } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { GrFormSchedule } from "react-icons/gr";
import { Container, Row, Col, Table, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
    BsBook,
    BsLayers,
    BsClipboardCheck,
    BsPeople,
} from 'react-icons/bs';
const StudentDashboard = () => {
    return (
        <>   <Container fluid>
            <Row>
                <Col md={2} className='' style={{ backgroundColor: "rgb(234, 241, 255)", height: "100dvh", top: "0", position: "sticky" }}>
                    <div>
                        <img src="/logo.png" style={{ maxWidth: '100px' }} alt="" />
                    </div>
                    <Col>
                        <Nav variant="pills"
                            className="flex-column gap-2 navlinks"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="dashboard" as={Link} to="/student-dashboard" className="d-flex align-items-center py-2 px-3">
                                    <IoHomeOutline className="me-3 fs-5" /> Dashboard
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="my-classes" as={Link} to="/student-dashboard/my-classes" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
                                    <BsBook className="me-3 fs-5" /> My Classes
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="schedule" as={Link} to="/student-dashboard/attendance" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
                                    <GrFormSchedule className='me-3 fs-5' /> Attendance
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                    </Col>

                </Col>
                <Col className='' style={{ backgroundColor: "rgb(247, 249, 253)" }}>
                    <Row>
                        <Col>
                            <h1 style={{ color: "rgb(43, 58, 103)" }}>Good morning,Mr. Shrama</h1>
                            <p className='text-muted'>Here's your schedule for today.</p>
                        </Col>
                        <Col>

                            {/* <Form.Control
                                type="text"
                                      Search bar
                                className=" mr-sm-2"
                              /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <div className='d-flex-column align-items-start p-2' style={{ backgroundColor: "#ffffff", borderRadius: "5px" ,height:"10rem"}}>

                                <h3 style={{ color: "rgb(43, 58, 103)" }} ><BsBook className="me-3 fs-6 bg-info" />Today's Classes</h3>
                                <h4 style={{ color: "rgb(43, 58, 103)" }} className='ps-4'>4</h4>
                                <p className='text-muted'></p>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "#ffffff", borderRadius: "5px",height:"10rem" }}>

                                <h3 style={{ color: "rgb(43, 58, 103)" }} className='ps-4' >                                 <BsLayers className="me-3 fs-6 bg-info" />Attendance</h3>
                                <h4 style={{ color: "rgb(43, 58, 103)" }} className='ps-4'>128</h4>
                                <p className='text-muted'></p>
                            </div>
                        </Col>

                        <Col xs={12} md={3}>
                            <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "#ffffff", borderRadius: "5px",height:"10rem" }}>

                                <h3 style={{ color: "rgb(43, 58, 103)" }} >
                               <BsClipboardCheck className="me-3 fs-6 bg-info" />pending Assignments</h3>
                                <h4 style={{ color: "rgb(43, 58, 103)" }} className='ps-4'>2</h4>
                                <p className='text-muted'></p>
                            </div>
                        </Col>
                                                <Col xs={12} md={3}>
                            <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "#ffffff", borderRadius: "5px" ,height:"10rem"}}>

                             
                                <h3 style={{ color: "rgb(43, 58, 103)" }} >   <BsBook className="me-3 fs-5 bg-info" />Upcoming Exams</h3>
                                <h4 style={{ color: "rgb(43, 58, 103)" }} className='ps-4'>3</h4>
                                <p className='text-muted'></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='m-3'>
                        <Col md={6}>
                            <Table responsive="sm" className='border-none' style={{ borderRadius: "5px" }}>
                                <thead>
                                    <tr>
                                        <th colSpan={2}><GrFormSchedule className='fs-3' /> <span style={{ color: "rgb(43, 58, 103)" }} >Today's classes</span>
                                            <p className='text-muted'>Thursday 01,october</p></th>

                                        <th colSpan={2}><Button style={{ backgroundColor: "rgb(220, 237, 254)", color: "rgb(104, 207, 255)", borderRadius: "5px", border: "none" }} >View Schedule<GoArrowRight /></Button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>

                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Col>

            </Row>

        </Container></>
    )
}

export default StudentDashboard