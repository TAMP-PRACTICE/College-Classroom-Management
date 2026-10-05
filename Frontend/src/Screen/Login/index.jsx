import React, { useState,useEffect} from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchDataPost } from '../../APIs';
const Login = () => {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate=useNavigate();
  const [loginSuccess,setLoginSuccess]=useState(false);
  const [error,setError]=useState("");

  const loginHandler=async()=>{
    let response;
    try{
      if(role=="student"){
       response=await fetchDataPost("http://localhost:3000/student/login",{email,password});
      }else{
         response=await fetchDataPost("http://localhost:3000/teacher/login",{email,password});
      }
      //const result=JSON.parse(response);
      if(response.success){
        return true;
      }else{
        console.log("unsuccessfull login");
        return false;
      }

    }catch(err){
      console.log(err);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const success=loginHandler();
    if(success===true){
    if(role=='student'){
      navigate('/student-dashboard');
    }else{
      navigate('/teacher-dashboard/dashboard');
    }
    console.log({ role, email, password, rememberMe });
  }else{
      console.log("unsuccessfull login");
      setError("email or password wrong");
  }
  return;
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
     width:"700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
                    <div className='d-flex align-items-center justify-content-between'>
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
                 <span>one</span>
                <span className="text-primary"> clear schedule</span>
              </h1>
              <p style={{color:"rgb(150, 150, 150)"}} className="text-muted mt-2 fs-6">
             Book classes, manage lab sessions, and view your schedule <br></br>
             <span>— all in one place.</span>
           </p>
                    </div>
          
            
                <Row className='d-flex align-items-center'>
                 <Col xs={6} sm={3} className='w-auto'>
             <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
                   <i className="bi bi-calendar-event text-secondary "></i>
              <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>View<br />Schedule</span>
                </div>
              </Col>
                          <Col xs={6} sm={3} className='w-auto'>
                <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
              <i className="bi bi-flask text-secondary fs-5"></i>
                 <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Manage<br />Lab Session</span>
           </div>
              </Col>
          <Col xs={6} sm={3} className='w-auto'>
             <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
               <i className="bi bi-arrow-repeat text-secondary fs-5"></i>
                 <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Stay<br />Updated</span>
               </div>
        
            
            </Col>
             <Col xs={6} sm={3} className='w-auto'>
             <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
               <i className="bi bi-arrow-repeat text-secondary fs-5"></i>
              <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>No<br />Double Booking</span>
               </div>
            </Col>
                </Row>
                </div>
                </Col>
                <Col>
                <Row className='d-flex flex-column'>
                  <Col className='d-flex justify-content-end my-4'>
                    <div>
                         <span style={{color:"rgb(150, 150, 150)"}} className="text-muted small d-none d-sm-inline">Learn • Grow • Succeed</span>
                    </div>
                  </Col>
                  <Col>
                    <h3 style={{color:"rgb(80, 101, 255)"}}>Welcome Back!!</h3>
                    <h1 style={{color:"rgb(43, 58, 103)"}}>Login to your Account</h1>
                    <p style={{color:"rgb(150, 150, 150)"}} className='text-muted'>Your classes,sessions and schedule<br></br>-all in one place.</p>
                  </Col>
                  <Col className='d-flex justify-content-center gap-3'>
                  
                       <Button className='rounded-4 p-2 px-4 ' style={
                        {
                          backgroundColor:(role==="student")?"rgb(43, 58, 103)":"#f8f9fa",
                            color:
                                 (role === "student") ? "white" : "rgb(150, 150, 150)",
                        }
                      } onClick={()=>setRole('student')}><i className="bi bi-mortarboard-fill"></i> Students</Button>
                  
                   
                         <Button className='rounded-4 p-2 px-4' 
                         style={
                        {
                          backgroundColor:(role==="teacher")?"rgb(43, 58, 103)":"#f8f9fa",
                            color:
                                 role === "teacher" ? "white" : "rgb(150, 150, 150)",
                        }}
                        onClick={()=>{setRole('teacher')}}><i style={{color:"rgb(150, 150, 150)"}} className="bi bi-person-fill"  ></i>Teachers</Button>
                     
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
                  <Link to="/forgot-password" className="text-primary text-decoration-none small">
                    Forget Password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="w-100 py-2 rounded-3 fw-semibold border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#2B3856' }}
                >
                  Login <i className="bi bi-arrow-right"></i>
                </Button>
                <span style={{color:"red"}}>{error}</span>
              </Form>
                <div className="text-center mt-4">
                <small className="text-muted">
                  Not here? <Link to={role==='student'?"/contact-admin":'/teacher-support'} className="text-primary text-decoration-none">Contact to Admin</Link>
                </small>
              </div>
                  </Col>
                </Row>
             
                </Col>
            </Row>

        </Container>
    </div>
  );
};

export default Login;