import React,{useState} from 'react'
import { Container, Row, Col, Form, Button, InputGroup,FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const TeacherSupport = () => {
  const[email,setEmail]=useState("");
  const [message,setMessage]=useState("");
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
                    Need Help ?<br />
                   
                   <span className="text-primary">We're Here.</span>
                 </h1>
                 <p style={{color:"rgb(150, 150, 150)"}} className="text-muted mt-2 fs-6">
                Have a question about your schedule, classes, <br></br>
                <span>or account?Reach out to the campus admin team.</span>
              </p>
                       </div>
             
               
                   <Row className='d-flex align-items-center'>
                    <Col xs={6} sm={3} className='w-auto'>
                <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
                      <i class="bi bi-envelope text-secondary fs-5"></i>
                 <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Email<br />Get help with account<br/>or scheduling issuses.</span>
                   </div>
                 </Col>
                             <Col xs={6} sm={3} className='w-auto'>
                   <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
                 <i className="bi bi-telephone text-secondary fs-5"></i>
                    <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Call Admin Office<br />Mon-Fri,9.00 AM-4.00 PM<br/>+91 1800 133 4567</span>
              </div>
                 </Col>
             <Col xs={6} sm={3} className='w-auto'>
                <div className="border rounded-3 p-2 d-flex align-items-center gap-2 bg-light">
                  <i className="bi bi-arrow-repeat text-secondary fs-5"></i>
                    <span className="lh-sm fw-medium" style={{ fontSize: '0.75rem' }}>Admin Office<br />Academic Block. Ground Floor<br/>Visit us for in-person assistance.</span>
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
                       <h3 style={{color:"rgb(80, 101, 255)"}}>Teacher Support</h3>
                       <h1 style={{color:"rgb(43, 58, 103)"}}>Contact Admin</h1>
                       <p style={{color:"rgb(150, 150, 150)"}} className='text-muted'>Fill out the form below and our admin team<br></br>will get back to you as soon as possible.</p>
                     </Col>
                     <Col>
                         <Form onSubmit={handleSubmit}>
                   <Form.Group className="mb-3">
                     <Form.Label className="fw-semibold text-dark small">Email Address</Form.Label>
                     <InputGroup className="rounded-3 border overflow-hidden">
                       <InputGroup.Text className="bg-white border-0 text-muted pe-1">
                        
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
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Tell us how can we help..."
          style={{ height: '100px' }}
             value={message}
                         onChange={(e) => setMessage(e.target.value)}
        />
      </FloatingLabel>    
                 
     
                   </Form.Group>
                   <Button
                     type="submit"
                     className="w-100 py-2 rounded-3 fw-semibold border-0 d-flex align-items-center justify-content-center gap-2"
                     style={{ backgroundColor: '#2B3856' }}
                   >
                    Send Request<i className="bi bi-arrow-right"></i>
                   </Button>
                 </Form>
                   <div className="text-start mt-4">
                   <small className="text-muted">
                    <p ><i className="bi bi-clock">Usually Responds within 1 working day.</i></p>  
                   </small>
                 </div>
                     </Col>
                   </Row>
                
                   </Col>
               </Row>
   
           </Container>
       </div>
  )
}

export default TeacherSupport