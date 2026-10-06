import React, { useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Form, Button, InputGroup, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Container fluid>
        <Row className=''>
          <Col >
            <div
              style={{
                backgroundImage: "url('/sidepanel.png')",
                backgroundSize: "cover",
                minHeight: '100vh',
                width: "700px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <img src="logo.png" style={{ maxWidth: '100px' }} alt="" />
                </div>
                <div>
                  <span className="text-muted small d-none d-sm-inline">Smart • Organized • Connected</span>
                </div>
              </div>
              <div>
                <h1 className="display-5 fw-bold text-dark lh-sm">
                  Forgot Your<br />

                  <span className="text-primary">Password ?</span>
                </h1>
                <p style={{ color: "rgb(150, 150, 150)" }} className="text-muted mt-2 fs-6">
                  No worries.Enter your registered college email and we'll send you <br></br>
                  <span>a secure link to reset your password.</span>
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <Row className='d-flex flex-column'>
              <Col className='d-flex justify-content-end my-4'>
                <div>
                  <span style={{ color: "rgb(150, 150, 150)" }} className="text-muted small d-none d-sm-inline">Learn • Grow • Succeed</span>
                </div>
              </Col>
              <Col>
                <h3 style={{ color: "rgb(80, 101, 255)" }}>Forgot Password</h3>

              </Col>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold text-dark small">College Registered Email</Form.Label>
                    <InputGroup className="rounded-3 border overflow-hidden">
                      <InputGroup.Text className="bg-white border-0 text-muted pe-1">

                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Registered Email Address"
                        className="border-0 shadow-none ps-2 py-2 text-muted"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100 py-2 rounded-3 fw-semibold border-0 d-flex align-items-center justify-content-center gap-2"
                    style={{ backgroundColor: '#2B3856' }}
                  >
                    Send reset link<i className="bi bi-arrow-right"></i>
                  </Button>
                </Form>
              </Col>
            </Row>

          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default ForgotPassword