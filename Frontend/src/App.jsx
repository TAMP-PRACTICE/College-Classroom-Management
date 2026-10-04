import { Route,Routes } from "react-router-dom";
import Login from "./Screen/Login";
import Studentsupport from "./Screen/Studentsupport";
import TeacherSupport from "./Screen/TeacherSupport";
import ForgotPassword from "./Screen/ForgotPassword";
import TeacherDashboard from "./Screen/TeacherDashboard";
import MyClasses from "./Screen/MyClasses";
import TeacherSchedule from "./Screen/TeacherSchedule";
import Rooms from "./Screen/Rooms";
import ScheduleRequests from "./Screen/ScheduleRequests";
import ClassManagement from "./Screen/ClassManagement";
import Students from "./Screen/Students";
import Announcements from "./Screen/Announcements";
import DashboardBody from "./Screen/DashboardBody";
import AdminDashboard from "./Screen/AdminDashboard";
import AdminMain from "./Screen/AdminMain";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/teacher-dashboard' element={<TeacherDashboard/>}>
        <Route path="dashboard" element={<DashboardBody/>}></Route>
        <Route path='my-classes' element={<MyClasses></MyClasses>}></Route>
        <Route path='schedule' element={<TeacherSchedule/>}></Route>
        <Route path='rooms' element={<Rooms/>}></Route>
        <Route path="schedule-requests" element={<ScheduleRequests/>}></Route>
        <Route path="class-management" element={<ClassManagement/>}/>
        <Route path="students" element={<Students/>}/>
        <Route path="announcements" element={<Announcements/>}/>
      </Route>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}>
        <Route path="dashboard" element={<AdminMain/>}></Route>
      </Route>
    <Route path="/contact-admin" element={<Studentsupport/>}></Route>
    <Route path='/teacher-support' element={<TeacherSupport/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    </Routes>
  
    </>
  )
}

export default App
