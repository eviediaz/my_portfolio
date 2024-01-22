import { Col } from "react-bootstrap";
function ProjectCard({title, description, stack, imgUrl}) {
    return(
        <Col sm={6} md={4}>
            <img src={imgUrl}></img>
            <h4>{title}</h4>
            <h6>{stack}</h6>
            <span>{description}</span>
        </Col>
    );
}

export default ProjectCard;