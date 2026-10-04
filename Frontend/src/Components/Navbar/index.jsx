import React from 'react'
import { Navbar} from 'react-bootstrap'
const NavBar = () => {
  return (
    <>
       <Navbar bg="light" data-bs-theme="light">
    
          <Navbar.Brand href="#" className='d-flex justify-content-between '>
            <img src="logo.png" alt="logo" fluid style={{ maxWidth: '180px' }} />
            <div>Smart . Organized . Connected</div>
            <div>Learn . Grow . Succeed</div>
          </Navbar.Brand>

    
      </Navbar>
    </>
  )
}

export default NavBar