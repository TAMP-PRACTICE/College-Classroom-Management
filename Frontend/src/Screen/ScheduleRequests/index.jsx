import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const ScheduleRequests = () => {
  const [formData, setFormData] = useState({
    teacherName: '',
    subject: '',
    class: '',
    date: '',
    timeSlot: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentFormData) => ({ ...currentFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Col className="p-4" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="mb-4" style={{ color: 'rgb(43, 58, 103)' }}>
            Schedule Request
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="teacherName">
              <Form.Label>Teacher Name</Form.Label>
              <Form.Control
                type="text"
                name="teacherName"
                placeholder="Enter teacher name"
                value={formData.teacherName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Select name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a subject</option>
                <option value="Data Structures">Data Structures</option>
                <option value="DBMS">DBMS</option>
                <option value="Java">Java</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="class">
              <Form.Label>Class</Form.Label>
              <Form.Select name="class" value={formData.class} onChange={handleChange} required>
                <option value="">Select a class</option>
                <option value="BCA 1st Year">BCA 1st Year</option>
                <option value="BCA 2nd Year">BCA 2nd Year</option>
                <option value="BCA 3rd Year">BCA 3rd Year</option>
                <option value="MCA 1st Year">MCA 1st Year</option>
                <option value="MCA 2nd Year">MCA 2nd Year</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="timeSlot">
              <Form.Label>Time Slot</Form.Label>
              <Form.Select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                <option value="">Select a time slot</option>
                <option value="09:00 - 10:00">09:00 - 10:00</option>
                <option value="10:00 - 11:00">10:00 - 11:00</option>
                <option value="11:00 - 12:00">11:00 - 12:00</option>
                <option value="01:00 - 02:00">01:00 - 02:00</option>
                <option value="02:00 - 03:00">02:00 - 03:00</option>
                <option value="03:00 - 04:00">03:00 - 04:00</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit Request
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  )
}

export default ScheduleRequests
