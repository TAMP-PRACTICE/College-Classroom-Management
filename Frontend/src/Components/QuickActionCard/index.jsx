import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import {
      BsGeoAlt,
    BsLayers, BsClipboardCheck, BsMegaphone,
} from 'react-icons/bs';
import { GrFormSchedule } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa";
const QuickActionCard = () => {
  return (
    <>
      <Card className="border-0 shadow-sm p-3" style={{ width: '400px', borderRadius: '15px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold m-0 d-flex align-items-center gap-2">
       {/* <FaBoltLightning  className="text-warning" /> */}
       <i className="bi bi-lightning"></i> Quick Actions
        </h6>
        <Button variant="link" className="text-decoration-none btn-sm p-0">View All &rarr;</Button>
      </div>
      <Row className="g-2">
         <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
             <GrFormSchedule className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Schedule Class</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Book a new class</div>
              </div>
            </div>
          </Col>
              <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
          <BsClipboardCheck className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Manage Schedule</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Edit & adjust timings</div>
              </div>
            </div>
          </Col>
           <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
           < BsGeoAlt className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Room Availability</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Check free spaces</div>
              </div>
            </div>
          </Col>
          <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
           <FaUserTie  className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>View Student</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Academic records</div>
              </div>
            </div>
          </Col>
           <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
          <BsLayers className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Class Management</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Batches & courses</div>
              </div>
            </div>
          </Col>
            <Col xs={6} >
            <div className="d-flex align-items-center p-2 border rounded-3 bg-light" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-2 rounded-3 shadow-sm me-2 d-flex align-items-center justify-content-center">
          <BsMegaphone className="text-info fs-5" />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Announcements</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Post updates</div>
              </div>
            </div>
          </Col>
       </Row>
    </Card>
    </>
  )
}

export default QuickActionCard