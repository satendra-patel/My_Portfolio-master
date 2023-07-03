import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone , I am <span className="green">Satendra Patel </span>
            from <span className="purple"> Jhansi , Uttar Pradesh India.</span>
            <br />I am graduating from an IT Engineering program and am looking for a role where 
            I can grow and use my skills. I am a FullStack Developer(MERN). I have done a 3 month internship in Attire Valley pvt. ltd as a Backend Developer .
            <br />
            <br />
           
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
