import React from 'react'
import {
     BsBook, BsGeoAlt,
    BsPeople, BsLayers, BsClipboardCheck, BsMegaphone,
} from 'react-icons/bs';
import { IoHomeOutline } from "react-icons/io5";
import { GrFormSchedule } from "react-icons/gr";
import {Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
const TeacherSideNav = () => {
  return (
    <>
     <Nav variant="pills"
// activeKey={activeKey}   // onSelect={(selectedKey) => setActiveKey(selectedKey)}
// 
   className="flex-column gap-2 navlinks"
                            >
    <Nav.Item>
     <Nav.Link eventKey="dashboard" as={Link} to="/teacher-dashboard/dashboard" className="d-flex align-items-center py-2 px-3">
               <IoHomeOutline className="me-3 fs-5" /> Dashboard
               </Nav.Link>
      </Nav.Item>

        <Nav.Item>
         <Nav.Link eventKey="my-classes"  as={Link} to="/teacher-dashboard/my-classes" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
             <BsBook className="me-3 fs-5" /> My Classes
                  </Nav.Link>
            </Nav.Item>

             <Nav.Item>
                   <Nav.Link eventKey="schedule" as={Link} to="/teacher-dashboard/schedule" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
                  <GrFormSchedule className='me-3 fs-5' /> Schedule
           </Nav.Link>
            </Nav.Item>

         <Nav.Item>
        <Nav.Link eventKey="rooms" as={Link} to="/teacher-dashboard/rooms" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
            <BsGeoAlt className="me-3 fs-5" /> Rooms
                               
                 </Nav.Link>
         </Nav.Item>

           <Nav.Item>
         <Nav.Link eventKey="students" as={Link} to="/teacher-dashboard/students" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
                                     
           <BsPeople className="me-3 fs-5" /> Students
                                    </Nav.Link>
          </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="class-management" as={Link} to="/teacher-dashboard/class-management" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
              <BsLayers className="me-3 fs-5" /> Class Management
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                 <Nav.Link eventKey="schedule-requests" as={Link} to="/teacher-dashboard/schedule" className="d-flex align-items-center py-2 px-3" style={{ color: "rgb(43, 58, 103)" }}>
                 <BsClipboardCheck className="me-3 fs-5" /> Schedule Requests
                     </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                      <Nav.Link eventKey="announcements"  as={Link}  to="/teacher-dashboard/announcements" className="d-flex align-items-center py-2 px-3 " style={{ color: "rgb(43, 58, 103)" }}>
                  <BsMegaphone className="me-3 fs-5" /> Announcements
                  </Nav.Link>
         </Nav.Item>
     </Nav>
    </>
  )
}

export default TeacherSideNav