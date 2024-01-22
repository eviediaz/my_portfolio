import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

import "animate.css";
import TrackVisibility from "react-on-screen";
import Header from '../../assets/images/Main/eevee_logo.png';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleted, setIsDeleted ] = useState(false);
    const toRotate = ["Full Stack", "POO and Functional Programming", "DevOps"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const time = 2000;
    
    useEffect(() => {
        let tick = setInterval(() => {
           ticker() 
        }, delta);

        return () => {clearInterval(tick)};
    }, [text])
    
    const ticker = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleted) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleted && updatedText === fullText){
            setIsDeleted(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(time);
        }
        else if(isDeleted && updatedText === ''){
            setIsDeleted(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome</span>
                                <h1>{'My name is Evie Diaz'}</h1>
                                <h3><span className="txt-rotate" dataPeriod="1000" data-rotate='["Full Stack Dev", "POO and Functional Programming", "DevOps"]'><span className="wrap">{text}</span></span></h3>
                                <p>As a Software Engineering student at USIL in my seventh academic cycle, my passion for problem-solving and mathematics drives my pursuit in this field. </p>
                                <p> I've actively participated in diverse projects utilizing technologies such as React, Firebase, SQL, Java, C++, Unity, C# and ASP.NET, covering both frontend and backend development. 
                                    My interest also extends to artificial intelligence.</p>
                                <p>My work ethos prioritizes effective teamwork, clean and efficient code, and a knack for quick learning and adaptation. 
                                    Eager to contribute my skills to challenging projects, I aim to deliver innovative solutions while continuously growing my expertise in software development.</p>
                                <Router>
                                    <HashLink to='#connect'>
                                        <button>Contact me<ArrowRightCircle size = {25}/></button>
                                    </HashLink>
                                </Router>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img alt="Header Img" src={Header}/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Banner;