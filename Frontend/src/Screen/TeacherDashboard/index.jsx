import { Container, Row, Col} from "react-bootstrap";
import TeacherSideNav from '../../Components/TeacherSideNav';
import { Outlet } from 'react-router-dom';
const TeacherDashboard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2} className='' style={{ backgroundColor: "rgb(234, 241, 255)", height: "100dvh",top:"0",position:"sticky" }}>
                        <div>
                            <img src="/logo.png" style={{ maxWidth: '100px' }} alt="" />
                        </div>
                        <Col>
                            {/* <ButtonGroup className='bg-none d-flex-column '>
      <Button className='ps-6 bg-none'><IoHomeOutline /> <span className='ps-2'>Dashboard</span></Button>
      <Button className='ps-2'><IoBookOutline /> <span className='ps-2'>My classes</span></Button>
      <Button className='ps-2'><GrFormSchedule /> <span className='ps-2'>Schedule</span></Button>
      <Button className='ps-2'><FiMapPin /><span className='ps-2'>Rooms</span> </Button>
      <Button className='ps-2'><GrUserManager /> <span className='ps-2'>Students</span></Button>
      <Button className='ps-2'><GoStack /> <span className='ps-2'>Class Management</span></Button>
      <Button className='ps-2'><AiOutlineSchedule /> <span className='ps-2'>Schedule Requests</span></Button>
      <Button className='ps-2'><GrAnnounce /><span className='ps-2'>  Announcements</span>
    </Button>
    </ButtonGroup> */}
                           <TeacherSideNav/>

                        </Col>

                    </Col>
                    <Outlet></Outlet>
                 
                </Row>

            </Container>
        </>
    )
}

export default TeacherDashboard