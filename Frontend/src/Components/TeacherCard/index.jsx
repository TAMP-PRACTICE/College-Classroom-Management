import React from 'react'
import {Card,Button} from "react-bootstrap";
import { GoClock,GoArrowRight, GoClockFill } from "react-icons/go";
const TeacherCard = () => {
  return (
    <>
        <Card style={{ width: '16rem', height: '100%', backgroundColor: 'rgb(16, 6, 135)', color: 'white' }}>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
      
          <Card.Title className="mb-3 d-flex align-items-center gap-2">
            <GoClock /> Next class
          </Card.Title>
          
        
          <p className="fs-6 fw-bold mb-1">Data Structures</p>
          <p className="small mb-1 text-white-50">BCA 5B CS. 301</p>
          <p className="small mb-1 text-white-50">Dr. Rahul Mehta</p>
          <p className="small mb-0 text-white-50">Room 108</p>
        </div>

        <div className="d-flex flex-column gap-2 mt-4">
          <Button 
            className="d-flex align-items-center justify-content-center gap-2 border-0" 
            style={{ backgroundColor: '#2a3b7c', color: '#68cfff', borderRadius: '50px' }}
          >
            <GoClockFill /> Starts in 24 mins
          </Button>
      
          <Button 
            variant="light" 
            className="fw-semibold d-flex align-items-center justify-content-center gap-2"
            style={{ color: 'rgb(16, 6, 135)' }} 
          >
            View All <GoArrowRight />
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default TeacherCard