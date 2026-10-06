import React from "react";
import {
  BsBook,
  BsGeoAlt,
  BsPeople,
  BsLayers,
  BsClipboardCheck,
} from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GrFormSchedule } from "react-icons/gr";
import { Nav } from "react-bootstrap";
import { LuBolt } from "react-icons/lu";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <>
      <Nav
        variant="pills"
        // activeKey={activeKey}   // onSelect={(selectedKey) => setActiveKey(selectedKey)}
        //
        className="flex-column gap-2 navlinks"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="dashboard"
            as={Link}
            to="/admin-dashboard/dashboard"
            className="d-flex align-items-center py-2 px-3"
          >
            <IoHomeOutline className="me-3 fs-5" /> Dashboard
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="users"
            as={Link}
            to="/admin-dashboard/users"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <BsPeople className="me-3 fs-5" />
            Users
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="classess"
            as={Link}
            to="/admin-dashboard/classes"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <BsBook className="me-3 fs-5" /> Classes
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="rooms"
            as={Link}
            to="/admin-dashboard/rooms"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <BsGeoAlt className="me-3 fs-5" /> Rooms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="timetable"
            as={Link}
            to="/admin-dashboard/timetable"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <GrFormSchedule className="me-3 fs-5" /> Timetable
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="attendance"
            as={Link}
            to="/admin-dashboard/attendance"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <CiCircleCheck className="me-3 fs-5" />
            Attendance
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="reports"
            as={Link}
            to="/admin-dashboard/reports"
            className="d-flex align-items-center py-2 px-3"
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <BsClipboardCheck className="me-3 fs-5" /> Reports
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="settings"
            as={Link}
            to="/teacher-dashboard/settings"
            className="d-flex align-items-center py-2 px-3 "
            style={{ color: "rgb(43, 58, 103)" }}
          >
            <LuBolt className="me-3 fs-5" /> Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default AdminNav;
