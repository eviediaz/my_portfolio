import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mail from '../../assets/images/Main/eevee_mail.png';

function Contact() {
    const formInitialData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };
    
    const [formDetails, setFormDetails] = useState(formInitialData);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        console.log(formDetails);
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        let result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialData);
        if(result.code === 200){
            setStatus({success : true, message: 'Message sent successfully'});
        }
        else{
            setStatus({success : false, message: 'Message not sent, try again'});
        }    
    };



    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img alt="Contact me" src={Mail}></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name" 
                                        onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name" 
                                        onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate("email", e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder="Phone" 
                                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                                        />
                                </Col>
                                <Col>
                                    <textarea rows="6" 
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate("message", e.target.value)}
                                    ></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Row>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Row>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}

export default Contact;