import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleted, setIsDeleted ] = useState(false);
    const toRotate = [ "Hola", "Developer", "Designer"];
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
            //setIndex(prevIndex => prevIndex - 1);
            setDelta(time);
        }
        else if(isDeleted && updatedText === ''){
            setIsDeleted(false);
            setLoopNum(loopNum + 1);
            //setIndex(1);
            setDelta(300);
        }
        /*else {
            setIndex(prevIndex => prevIndex + 1);
        }*/
    }
    return (
        <section className="banner" id="home">


            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome!</span>
                        <h1>{'My name is Evie Diaz'}</h1><span className="wrap">{text}</span>
                        <p>Lorem Ipsum abc abc abc aqbc</p>
                        <button onClick={() => console.log('connect')} >Let's connect<ArrowRightCircle size = {25}/></button>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img alt = 'Header Image'></img>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Banner;