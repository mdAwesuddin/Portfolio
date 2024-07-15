import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todolist from "../../Assets/Projects/todolist.png";
import gameholic from "../../Assets/Projects/gameholic.png";
import Newsworld from "../../Assets/Projects/Newsworld.png";
import jntuhapp from "../../Assets/Projects/jntuhapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameholic}
              isBlog={false}
              title="Gameholic"
              description="Here you can Browse all the Related information about games whether it is a PC game anything and you can choose from multiple categories I have used Free-to-Play Games Database API from Rapid API with React.js and React Bootstrap."
              ghLink="https://github.com/mdAwesuddin/gameholic"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jntuhapp}
              isBlog={false}
              title="JNTUH Notes App"
              description="It is Build with an Open-Source Tool called App Smith where you can build your websites and Customize the website. JNTUH Notes App for engineering students where they can download the notes related to the subject in form of pdf file."
              ghLink=""
              demoLink="https://app.appsmith.com/app/jntuh-notes/home-6292423bb4c51656bfeabee9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsworld}
              isBlog={false}
              title="Newsworld"
              description="Newsworld is the News feeding web app it is build using React.js and for styling bootstrap build using NEWS API which feeds the live news from all over the web structred in different news categories for user convience and users can search the news articles for search section."
              ghLink="https://github.com/mdAwesuddin/NewsApp-Reactjs"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="My-Todolist"
              description="My-Todolist is a modern, efficient, and user-friendly application designed to help you manage your daily tasks with ease. Built using React.js for its powerful and flexible UI capabilities and Bootstrap for sleek and responsive design, this app offers a seamless experience across all devices."
              ghLink="https://github.com/mdAwesuddin/TodoApp-Reactjs-"
              demoLink="https://mytodolist5.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
