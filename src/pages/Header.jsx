import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar style={{background: "#748D92",}}>
        <Container >
          <Navbar.Brand href="/Landing">
          <i className="fa-solid fa-address-book fa-flip fa-2xl" style={{color: "#212A31",}} />
            {' '}
            Contact Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header