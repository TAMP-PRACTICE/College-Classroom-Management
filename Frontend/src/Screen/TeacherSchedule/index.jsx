import React from 'react'
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import { BsBook } from 'react-icons/bs';
const TeacherSchedule = () => {
  const timeSlots = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "01:00 - 02:00", "02:00 - 03:00"];
  const schedule = [
    ["Data Structures (Rm 105)", "DBMS (Rm 202)", "Data Structures (Rm 105)", "DBMS (Rm 202)", "Java (Rm 204)"],
    ["—", "Java (Rm 204)", "—", "Java (Rm 204)", "—"],
    ["Data Structures (Rm 108)", "—", "Data Structures (Rm 102)", "—", "Data Structures (Lab 1)"],
    ["—", "DBMS (Rm 202)", "—", "Java (Rm 204)", "—"],
    ["DBMS (Rm 202)", "—", "Java (Rm 204)", "—", "Data Structures (Rm 105)"]
  ];
  return (
    <> <Col className='' style={{ backgroundColor: "rgb(247, 249, 253)" }}>
      <Row>
        <Col>
          <h1 style={{ color: "rgb(43, 58, 103)" }}>Academic Schedule</h1>
          <p className='text-muted'>View and manage your complete time table.</p>
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
        <Col md={9}>

          <Table responsive className="text-center align-middle" >
            <thead className="">
              <tr>
                <th>Time</th>
                <th>Mon </th>
                <th>Tue </th>
                <th>Wed </th>
                <th>Thu </th>
                <th>Fri </th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, index) => (
                <tr key={index}>
                  <td className="fw-bold">{time}</td>
                  {schedule[index].map((cell, idx) => (
                    <td key={idx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={3}>
          <Card className="mb-3 text-center p-2">
            <Card.Body>
              <Card.Title className="fs-6  fw-6 text-muted" style={{ color: "rgb(43, 58, 103)" }}>  <BsBook className="me-3 fs-5 text-info" />Today's Schedule</Card.Title>
              <h2 className=" m-0">2</h2>
              <small>Classes Today</small>
            </Card.Body>
          </Card>

          <Card className="mb-3 p-2">
            <Card.Body>
              <Card.Title className="fs-6  fw-6 mb-2" style={{ color: "rgb(43, 58, 103)" }}>  <BsBook className="me-3 fs-5 text-info" />Next Class</Card.Title>
              <h6 className=" mb-1" style={{ color: "rgb(43, 58, 103)" }}>Data Structures</h6>
              <div style={{ fontSize: '13px' }} className="text-secondary">
                <div>BCA 5A • CS-301</div>
                <div>11:00 AM - 12:00 PM</div>
                <div>Room 108</div>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3 text-center p-2">
            <Card.Body>
              <Card.Title className="fs-6 " style={{ color: "rgb(43, 58, 103)" }}><BsBook className="me-3 fs-5 text-info" variant="info" />Room Availability</Card.Title>
              <p className="text-muted text-secondary  m-0">12 Available</p>
            </Card.Body>
          </Card>

          <Button variant="" style={{ backgroundColor: "#1508a7", color: "#ffffff" }} className="w-100 py-2">+ Add New Class</Button>
        </Col>
      </Row>
    </Col>
    </>
  )
}

export default TeacherSchedule