import React from 'react';
import {
     BsBook,
    BsPeople
} from 'react-icons/bs';
import { GoClock,GoArrowRight } from "react-icons/go";
import { GrFormSchedule } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { Row, Col, Button,Table } from "react-bootstrap";
import TeacherCard from '../../Components/TeacherCard';

import QuickActionCard from '../../Components/QuickActionCard';

const DashboardBody = () => {
  return (
    <>   <Col className='' style={{ backgroundColor: "rgb(247, 249, 253)" }}>
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
                                <div className='d-flex-column align-items-start p-2' style={{backgroundColor:"rgb(220, 237, 254)",border:"1px solid rgb(104, 207, 255)",borderRadius:"5px"}}>
                                    <GrFormSchedule className="me-3 fs-5" />
                                    <h3 style={{ color: "rgb(43, 58, 103)" }} >Today's Classes</h3>
                                    <h4 style={{ color: "rgb(43, 58, 103)" }}>4</h4>
                                    <p className='text-muted'></p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='d-flex-column p-2 align-items-start'style={{backgroundColor:"rgb(213, 249, 218)",border:"1px solid rgb(157, 252, 161)",borderRadius:"5px"}}>
                                    <BsPeople className="me-3 fs-5" />
                                    <h3 style={{ color: "rgb(43, 58, 103)" }} >Today's Students</h3>
                                    <h4 style={{ color: "rgb(43, 58, 103)" }}>128</h4>
                                    <p className='text-muted'></p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='d-flex-column p-2 align-items-start'style={{backgroundColor:"rgb(251, 206, 255)",border:"1px solid rgb(139, 0, 152)",borderRadius:"5px"}}>

                                    <BsBook className="me-3 fs-5" />
                                    <h3 style={{ color: "rgb(43, 58, 103)" }} >My Subjects</h3>
                                    <h4 style={{ color: "rgb(43, 58, 103)" }}>3</h4>
                                    <p className='text-muted'></p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='d-flex-column p-2 align-items-start' style={{backgroundColor:"rgb(252, 221, 222)",border:"1px solid rgb(254, 88, 89)",borderRadius:"5px"}}>

                                    <GoClock />
                                    <h3 style={{ color: "rgb(43, 58, 103)" }} >pending Request</h3>
                                    <h4 style={{ color: "rgb(43, 58, 103)" }}>2</h4>
                                    <p className='text-muted'></p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='m-3'>
                            <Col  md={6}>
                               <Table responsive="sm" className='border-none' style={{borderRadius:"5px"}}>
        <thead>
          <tr>
            <th colSpan={2}><GrFormSchedule className='fs-3' /> <span style={{ color: "rgb(43, 58, 103)" }} >Today's Teaching schedule</span> 
            <p className='text-muted'>Thursday 01,october</p></th>
            
            <th colSpan={2}><Button style={{backgroundColor:"rgb(220, 237, 254)",color:"rgb(104, 207, 255)",borderRadius:"5px",border:"none"}} >View Schedule<GoArrowRight /></Button></th>
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

                            <Col md={6}>
                                    <TeacherCard/>
                            </Col>
                        </Row>
                        <Row>
                          
                             <Col md={6}>
                               <Table responsive="sm" className='border-none' style={{borderRadius:"5px"}}>
        <thead>
          <tr>
        
            <th colSpan={2}><IoBookOutline className='fs-3' /> <span style={{ color: "rgb(43, 58, 103)" }} >Upcoming classes</span> 
           </th>
            
            <th colSpan={2}><Button style={{backgroundColor:"rgb(220, 237, 254)",color:"rgb(104, 207, 255)",borderRadius:"5px",border:"none"}} >View All<GoArrowRight /></Button></th>
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
                              <Col md={6}>
                                    <QuickActionCard></QuickActionCard>
                            
                            </Col>
                        </Row>
                    </Col></>
  )
}

export default DashboardBody