import { Col, Container, Row } from "react-bootstrap";
import Logo from '../../assets/images/Main/logo2.png';
import Github from '../../assets/images/Social Icons/Github.png';
import Gmail from '../../assets/images/Social Icons/Gmail.png';
import Linkedin from '../../assets/images/Social Icons/Linkedin.webp';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img alt="Logo" src={Logo}/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/evie-diaz-quevedo-30241b228/"><img src={Linkedin}/></a>
                            <a href="https://github.com/eviediaz"><img src={Github}/></a>
                            <a href="mailto:eviediazq@gmail.com"><img src={Gmail}/></a>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;