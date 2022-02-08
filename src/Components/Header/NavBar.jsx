import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const categories = [
    {name:'Travelling', slug:'travelling'},
    {name:'Education', slug:'education'},
    {name:'Entertainment', slug:'entertainment'}
];

const NavBar = () => {


    return (
        <Fragment>
            <div className="bg-light pt-3 pb-2">
                <h2 className="h1 text-center mb-0" >Ice Blog</h2>
            </div>
            <Navbar bg="light" expand="md" className="mb-2">
                <Container>
                    {/* <Navbar.Brand href="#home">Ice Blog</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {categories.map((category) => 
                            (<Nav.Link href={`category/${category.slug}`} key={category.slug}>{category.name}</Nav.Link>)
                        )}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;