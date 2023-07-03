import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatAPP from '../../Assets/Projects/chatAPP.png'
import expense from '../../Assets/Projects/expense.png'
import ecomm from '../../Assets/Projects/ecomm.png'
import codepen from '../../Assets/Projects/codepen.png'
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
              imgPath={chatAPP}
              isBlog={false}
              title="Chat App"
              description=" Chat is an application where users can send and receive messages same as WhatsApp.
              Each user has their own account and users cannot access other users data "
              ghLink="https://github.com/satendra-patel/Mern-chat-app"
              demoLink=''
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Created a web application for tracking personal expenses using React.js. Used React hooks like useState and useEffect to manage state and perform side effects respectively. Incorporated error handling using try/catch blocks and displaying error messages to the user."
              ghLink="https://github.com/satendra-patel/expensetracker1"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="E-Commerce Website"
              description="E-commerce website is an application that gives users the option to see
              different products and add them to the cart, manipulating cart data"
              ghLink="https://github.com/satendra-patel/E-commerce"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepen}
              isBlog={false}
              title="Code Pen"
              description="CodePen is a social development environment. At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating online code editor for developers of any skill, and particularly empowering for people learning to code."
              ghLink="https://github.com/satendra-patel/codepen"
              demoLink=""              
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
