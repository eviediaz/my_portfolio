import { Container, TabContainer, TabContent, TabPane, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg7 from '../../assets/images/Projects/projImg7.png'
import projImg8 from '../../assets/images/Projects/projImg8.png'

function Projects() {
    const projects01 = [
        {
            title: "Lyco",
            description: "Creation of a web platform for live coding sessions with real-time editing capabilities. Includes the functionality to create classrooms and add students.",
            stack: "React.js, Firebase, Node.js, Express.js, Socket.io, CodeMirror, React-Toastify",
            //imgUrl: projImg1,
          },
          {
            title: "Fulbito Landing Page",
            description: "Landing page for a business dedicated to the rental of sports courts.",
            stack: "ASP.NET, Bootstrap",
            //imgUrl: projImg2,
          },
          {
            title: "Pokedex",
            description: "Creation of a form to manage Pokemon characters, allowing to add, edit and delete character information.",
            stack: "Windows Forms, C#, SQL Server",
            //imgUrl: projImg3,
          },
    ]
    const projects02 = [
      {
          title: "Darkwood AFD Draft",
          description: "Development of a Darkwood-themed game in TopDown style. It includes interactions based on a deterministic finite automaton, which implies a state-based operation to recreate different actions and behaviors in the game.",
          stack: "Unity, C#",
          //imgUrl: projImg4,
        },
        {
          title: "Algorithm for organizing weekly tasks",
          description: "Program that automates the organization of weekly tasks considering priority, duration and difficulty using Greedy algorithm.",
          stack: "Java, Java Swing",
          //imgUrl: projImg5,
        },
        {
          title: "PGN Lexical and Syntax Analyzer",
          description: "C++ program based on Flex libraries for lexical analysis and BISON for syntactic analysis. Designed to parse PGN notation (used to transcribe chess moves), verifying its validity.",
          stack: "C++, Flex, Bison"
          //imgUrl: projImg6,
        },
    ]
    const projects03 = [
      {
          title: "Habla Bien (2022)",
          description: "Landing page of a business idea that teaches sex education through games and animations.",
          stack: "HTML, Css, Bootstrap",
          imgUrl: projImg7,
        },
        {
          title: "Portfolio",
          description: "Website to share my portfolio, presenting projects and programming skills. In addition, the page offers the possibility to send emails for contact.",
          stack: "React.js, Bootstrap",
          imgUrl: projImg8,
        },
        /*
        {
          title: "Youtube Mp3 Downloader",
          description: "Desarrollo de una app que permite ingresar enlaces de YouTube y descargar archivos MP3.",
          stack: "Android Studio, Kotlin, Java",
          //imgUrl: projImg9,
        },*/
    ]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                      <h2>Projects</h2>
                      <p>Below are some of the projects I've worked on:</p>
                      <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link  eventKey="first">01</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">02</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">03</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <TabContent>
                          <TabPane eventKey="first">
                            <Row>
                              {
                                projects01.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}{...project}
                                    />
                                  )
                                })
                              }
                            </Row>
                          </TabPane>
                          <TabPane eventKey="second">
                            <Row>
                              {
                                projects02.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}{...project}
                                    />
                                  )
                                })
                              }
                            </Row>
                          </TabPane>
                          <TabPane eventKey="third">
                            <Row>
                              {
                                projects03.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}{...project}
                                    />
                                  )
                                })
                              }
                            </Row>
                          </TabPane>
                          
                        </TabContent>
                      </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right"></img>
        </section>
    );
}

export default Projects;