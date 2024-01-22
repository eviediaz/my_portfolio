import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import Logo from '../../assets/images/Main/logo.png';
import Github from '../../assets/images/Social Icons/Github.png';
import Gmail from '../../assets/images/Social Icons/Gmail.png';
import Linkedin from '../../assets/images/Social Icons/Linkedin.webp';

function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if( window.scrollY > 50 ){
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        <Router>
            <Navbar expand="lg" className = { scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img alt = "Logo" src={Logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = { activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onActiveLink('home') }>Home</Nav.Link>
                    <Nav.Link href="#projects" className = { activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#skills" className = { activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onActiveLink('skills') }>Skills</Nav.Link>
                </Nav>
                <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/evie-diaz-quevedo-30241b228/"><img src={Linkedin} /></a>
                    <a href="https://github.com/eviediaz"><img src={Github} /></a>
                    <a href="mailto:eviediazq@gmail.com"><img src={Gmail} /></a>
                </div>
                <HashLink to='#connect'>
                    <button className="vvd"><span>Contact me</span></button>
                </HashLink>
                </span>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar;
