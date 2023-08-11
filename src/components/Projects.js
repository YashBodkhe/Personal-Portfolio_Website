import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImgIM from "../assets/img/IM.png";
import projImgSI from "../assets/img/SI.png";
import projImgSC from "../assets/img/Stackoverflow_clone.png";
import projImgB from "../assets/img/bowling.png";
import projImgER from "../assets/img/ER.png";
import projImgRE from "../assets/img/real_estate.png";
import projImgP from "../assets/img/pong.png";
import projImgPlat from "../assets/img/platformer.png";

export const Projects = () => {

  const projects = [
    {
      title: "Invisible Maze",
      description: "Game Development",
      imgUrl: projImgIM,
    },
    {
      title: "Star Indurance",
      description: "Game Development",
      imgUrl: projImgSI,
    },
    {
      title: "Stackoverflow Clone",
      description: "Web Development",
      imgUrl: projImgSC,
    },
    {
      title: "Escape Room",
      description: "Virtual Reality",
      imgUrl: projImgER,
    },
    {
      title: "Bowling",
      description: "Virtual Reality",
      imgUrl: projImgB,
    },
    {
      title: "Real Estate",
      description: "Web Development",
      imgUrl: projImgRE,
    },
    {
      title: "Platformer",
      description: "Game Development",
      imgUrl: projImgPlat,
    },
    {
      title: "Pong Game",
      description: "Game Development",
      imgUrl: projImgP,
    },
  ];

  const Gameprojects = [
    {
      title: "Invisible Maze",
      description: "Game Development",
      imgUrl: projImgIM,
    },
    {
      title: "Star Indurance",
      description: "Game Development",
      imgUrl: projImgSI,
    },
    
    {
      title: "Escape Room",
      description: "Virtual Reality",
      imgUrl: projImgER,
    },
    {
      title: "Bowling",
      description: "Virtual Reality",
      imgUrl: projImgB,
    },
    
    {
      title: "Platformer",
      description: "Game Development",
      imgUrl: projImgPlat,
    },
    {
      title: "Pong Game",
      description: "Game Development",
      imgUrl: projImgP,
    },
  ];

  const Webprojects = [
    {
      title: "Stackoverflow Clone",
      description: "Web Development",
      imgUrl: projImgSC,
    },
    
    {
      title: "Real Estate",
      description: "Web Development",
      imgUrl: projImgRE,
    },
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to a glimpse of my projects, where I've harnessed my passion for software development to craft captivating 2D games,web applications, and explore Java frameworks like Spring Boot. Each project reflects my dedication to innovation and my commitment to delivering meaningful user experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Webprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Gameprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Spring Boot Projects</h3>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
