import React from 'react'
import { Row, Col, Card, Form, Button,Table } from "react-bootstrap"
import {
  BsGeoAlt,
  BsPeople
} from 'react-icons/bs';
const Rooms = () => {
    const rooms = [
    { name: "Room 101", cap: "60 Capacity", loc: "Main Building • Floor 1", status: "Available" },
    { name: "Room 102", cap: "60 Capacity", loc: "Main Building • Floor 1", status: "Available" },
    { name: "Room 103", cap: "60 Capacity", loc: "Main Building • Floor 1", status: "Occupied" },
    { name: "Room 104", cap: "60 Capacity", loc: "Main Building • Floor 1", status: "Available" }
  ];
  return (
    <>
        <Col className="p-4 bg-light" style={{ backgroundColor: "rgb(247, 249, 253)" }}>
      <div className="mb-4">
        <h3 style={{ color: "rgb(43, 58, 103)" }}>Available Rooms</h3>
        <p className="text-muted">View and manage all available classrooms and labs.</p>
      </div>
      <Row className="mb-4 g-2">
        <Col md={3}>
        <Form.Select><option>All Buildings</option>
        </Form.Select>
        </Col>
        <Col md={3}><Form.Select><option>All Types</option>
           <option value="Available">Available</option>
                <option value="occupied">Occupied</option></Form.Select></Col>
        <Col md={3}><Form.Select><option>All Capacities</option>
          <option value="50">50</option>
                <option value="100">100</option>
        </Form.Select></Col>
        <Col md={3}><Form.Control type="text" placeholder="Search rooms..." /></Col>
      </Row>
      <Row>
        <Col md={9}>
          <Row className="g-3">
            {rooms.map((room, idx) => (
              <Col sm={6} md={3} key={idx}>
                <Card className="p-3 border-0 shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <BsPeople className="me-2 text-primary fs-5" />
                    <h6 className="m-0 fw-bold">{room.name}</h6>
                  </div>
                  <div className="small text-muted mb-2">
                    <div>{room.cap}</div>
                    <div style={{ fontSize: '11px' }}>{room.loc}</div>
                  </div>
                  <span className={`small fw-bold ${room.status === 'Available' ? 'text-success' : 'text-danger'}`}>
                    ● {room.status}
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <Card className="p-3 border-0 shadow-sm">
            <Card.Title className="fs-6 fw-bold mb-3">
              <BsGeoAlt className="me-2 text-info" />Room Overview
            </Card.Title>
            <Table borderless size="sm" className="m-0 text-center">
              <tbody>
                <tr>
                  <td><small className="text-muted">Total</small><h5>16</h5></td>
                  <td><small className="text-success">Available</small><h5 className="text-success">12</h5></td>
                </tr>
                <tr>
                  <td><small className="text-danger">Occupied</small><h5 className="text-danger">3</h5></td>
                  <td><small className="text-warning">Maint.</small><h5 className="text-warning">1</h5></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Col>
    
    </>
  )
}

export default Rooms