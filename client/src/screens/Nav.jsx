import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav= () => {
  return (
    <>
    
      <Navbar expand="lg" bg="dark" className="bg-body-primary">
        
          <Navbar.Brand href="#" style={{color:'white', paddingLeft:'15px'}}>VideoX</Navbar.Brand>
          <Container>
          <Navbar href="#" style={{color:'whitesmoke'}}>One to One Video Call App</Navbar>
          </Container>
        
      </Navbar>
      
    
  </>
  )
}

export default Nav;