import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card } from 'react-bootstrap';


const Login = () => {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, email, password, rememberMe });
  };

  return (
    <div>
        <Container fluid>
            <Row className='my-5'>
                <Col>
                    <div
  style={{
    backgroundImage: "url('/sidepanel.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
                    <div>
                         <div>
                        <img src="logo.png" style={{maxWidth:'100px'}} alt="" />
                    </div>
                    <div>
                         <span className="text-muted small d-none d-sm-inline">Smart • Organized • Connected</span>
                    </div>
                    </div>
                    <div>
                     <h1 className="display-5 fw-bold text-dark lh-sm">
                 Every class and lab, <br />
                <span className="text-primary">one clear schedule</span>
              </h1>
              <p className="text-muted mt-2 fs-6">
             Book classes, manage lab sessions, and view your schedule — all in one place.
           </p>
                    </div>
          
             <Col xs={6} sm={3}>
             <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
                   <i className="bi bi-calendar-event text-secondary fs-5"></i>
              <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>View<br />Schedule</span>
                </div>
              </Col>
              <Col xs={6} sm={3}>
                <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
              <i className="bi bi-flask text-secondary fs-5"></i>
                 <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Manage<br />Lab Session</span>
           </div>
              </Col>
          <Col xs={6} sm={3}>
             <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
               <i className="bi bi-arrow-repeat text-secondary fs-5"></i>
              <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Stay<br />Updated</span>
               </div>
            </Col>
                </div>
                </Col>
                <Col>
                 <Form onSubmit={handleSubmit}>
          
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold text-dark small">Email Address</Form.Label>
                  <InputGroup className="rounded-3 border overflow-hidden">
                    <InputGroup.Text className="bg-white border-0 text-muted pe-1">
                      <i className="bi bi-person"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="border-0 shadow-none ps-2 py-2 text-muted"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold text-dark small">Password</Form.Label>
                  <InputGroup className="rounded-3 border overflow-hidden">
                    <InputGroup.Text className="bg-white border-0 text-muted pe-1">
                      <i className="bi bi-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Your password"
                      className="border-0 shadow-none ps-2 py-2 text-muted"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <InputGroup.Text 
                      className="bg-white border-0 text-muted cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                     <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check
                    type="checkbox"
                    id="remember-me"
                    label={<span className="text-muted small">Remember Me</span>}
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <a href="#forgot" className="text-primary text-decoration-none small">
                    Forget Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-100 py-2 rounded-3 fw-semibold border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#2B3856' }}
                >
                  Login <i className="bi bi-arrow-right"></i>
                </Button>
              </Form>
                <div className="text-center mt-4">
                <small className="text-muted">
                  Not here? <a href="#admin" className="text-primary text-decoration-none">Contact to Admin</a>
                </small>
              </div>
                </Col>
            </Row>

        </Container>
    </div>
  );
};

export default Login;