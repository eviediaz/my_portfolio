import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Circle01 from '../../assets/images/Skills/circle01.svg';
import Circle02 from '../../assets/images/Skills/circle02.svg';
import Circle03 from '../../assets/images/Skills/circle03.svg';

function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>This are some of my skills</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img alt="Image" src={Circle01}/>
                                    <h5>Rapid-Learning</h5>
                                </div>
                                <div className="item">
                                    <img alt="Image" src={Circle02}/>
                                    <h5>Problem-solving</h5>
                                </div>
                                <div className="item">
                                    <img alt="Image" src={Circle03}/>
                                    <h5>Adaptability</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"/>
        </section>
      );
}

export default Skills;