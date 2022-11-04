import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function TopBar() {
    return (

<div>

<Navbar bg="light" expand="lg" >
<Stack direction="horizontal" gap={3}>
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="./instacart-logo.png" alt=""/> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
    </Stack>
</Navbar>

</div>
    )
}