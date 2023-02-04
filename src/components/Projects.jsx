import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Gigsasa",
      description:
        "Gigsasa is a human resource application solution that helps employers manage and asses the productivity of their employees",
      imgUrl: projImg1,
      projectUrl: "https://www.gigsasa.com",
    },
    {
      title: "G-roll",
      description:
        "G-roll is a payroll application that can process monthly, weekly and off cycle payruns",
      imgUrl: projImg2,
      projectUrl: "https://www.groll.gigsasa.com",
    },
    {
      title: "DigiFarm",
      description:
        "Digifarm is a combination of both an e-commerce platform and an information sysytem that aims to help farmers cut out the middleman by providing both farm inputs and agri information",
      imgUrl: projImg3,
      projectUrl: "https://www.gigsasa.com",
    },
    {
      title: "Xsocial",
      description:
        "Xsocial is a social media application that aims to provide secure, beautiful and seamless communication between its users",
      imgUrl: projImg1,
      projectUrl: "https://www.gigsasa.com",
    },
    {
      title: "Ace Shoes",
      description:
        "This is an e-commerce application that helps people both young and old get their favourite apparell",
      imgUrl: projImg2,
      projectUrl: "https://www.gigsasa.com",
    },
    {
      title: "parcelDrop",
      description:
        "parcelDrop came about from the pandemic.Its a highly secure delivery application",
      imgUrl: projImg3,
      projectUrl: "https://www.gigsasa.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Ability to collaborate and provide clear instructions to
                    the project team, clearly explaining how the software looks
                    to the customer. Available to answer any questions using
                    exceptional communication skills..
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__bounce" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        other projects under works....
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        other projects under works....
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
