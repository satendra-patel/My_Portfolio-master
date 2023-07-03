import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiExtjs,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        Javascpt
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        Nodejs
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiExtjs />
        Express
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        Mongodb
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        Bootstrap
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
       CSS
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        
      </Col>
     
    </Row>
  );
}

export default Techstack;
