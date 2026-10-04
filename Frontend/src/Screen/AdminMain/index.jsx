import React from 'react'
import {
    BsBook,
    BsPeople
} from 'react-icons/bs';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { Row, Col, Table, Card,Button } from "react-bootstrap";
const AdminMain = () => {
    return (
        <>
            <Col className='' style={{ backgroundColor: "rgb(247, 249, 253)" }}>
                <Row>
                    <Col>
                        <h1 style={{ color: "rgb(43, 58, 103)" }}>Welcome Back, Admin</h1>
                        <p className='text-muted'>Here's what's happening at your campus today.</p>
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
                        <div className='d-flex-column align-items-start p-2' style={{ backgroundColor: "rgb(220, 237, 254)", border: "1px solid rgb(104, 207, 255)", borderRadius: "5px" }}>
                            <GrUserManager className="me-3 fs-5" />
                            <h3 style={{ color: "rgb(43, 58, 103)" }} >Today's Students</h3>
                            <h4 style={{ color: "rgb(43, 58, 103)" }}>4</h4>
                            <p className='text-muted'></p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "rgb(213, 249, 218)", border: "1px solid rgb(157, 252, 161)", borderRadius: "5px" }}>
                            <BsPeople className="me-3 fs-5" />
                            <h3 style={{ color: "rgb(43, 58, 103)" }} >Total Teachers</h3>
                            <h4 style={{ color: "rgb(43, 58, 103)" }}>128</h4>
                            <p className='text-muted'></p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "rgb(251, 206, 255)", border: "1px solid rgb(139, 0, 152)", borderRadius: "5px" }}>

                            <BsBook className="me-3 fs-5" />
                            <h3 style={{ color: "rgb(43, 58, 103)" }} >Total Classes</h3>
                            <h4 style={{ color: "rgb(43, 58, 103)" }}>3</h4>
                            <p className='text-muted'></p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='d-flex-column p-2 align-items-start' style={{ backgroundColor: "rgb(252, 221, 222)", border: "1px solid rgb(254, 88, 89)", borderRadius: "5px" }}>

                            <CiLocationOn />
                            <h3 style={{ color: "rgb(43, 58, 103)" }} >Total Rooms</h3>
                            <h4 style={{ color: "rgb(43, 58, 103)" }}>2</h4>
                            <p className='text-muted'></p>
                        </div>
                    </Col>
                </Row>
                <Row className='m-3'>
                    <Col md={6}>
                        <Card>
                            <h1>
                                Enrollment Trend
                            </h1>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card >
                            <h1>Class wise Distribution</h1>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    <Col md={8}>
                        <Table responsive="sm" className='border-none' style={{ borderRadius: "5px" }}>
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Roll No.</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Semester</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><FaRegUserCircle />Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td></td>
                                    <td></td>
                                    <td><Button variant="outline-light"><RiDeleteBin6Line /></Button></td>
                                </tr>
                                <tr>

                                    <td><FaRegUserCircle />Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><FaRegUserCircle />3</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        {/* <QuickActionCard></QuickActionCard> */}

                    </Col>
                </Row>
            </Col></>

    )
}

export default AdminMain