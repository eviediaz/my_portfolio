import { Container, TabContainer, TabContent, TabPane } from "react-bootstrap";

function Projects() {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg3,
          },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                      <h2>Hi</h2>
                      <p>lorem ipsum etc</p>
                      <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                          <Nav.Item>
                            <Nav.Link  eventKey="first" href="/home">Active</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Option 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Option 3</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <TabContent>
                          <TabPane eventKey="first">
                            <Row>
                              {
                                projects.map((project, index) => {
                                  return (
                                    <p>{project.title}</p>
                                  )
                                })
                              }
                            </Row>
                          </TabPane>
                          <TabPane eventKey="second"></TabPane>
                          <TabPane eventKey="third"></TabPane>
                          
                        </TabContent>
                      </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;