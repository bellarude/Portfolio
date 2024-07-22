import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";

function PublicationsCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
		<Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
			<Col 
			md={1}
			style={{
              justifyContent: "justify",
              paddingTop: "15px",
              paddingBottom: "10px",
			  fontSize: "30px",
            }}>
			
			<Card.Text>{props.number}</Card.Text>
			</Col>
			<Col md={10}>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
				  {props.description}
				</Card.Text>
				<Card.Text>
				  {props.journal}
				</Card.Text>
			</Col>
			<Col md={1}
			style={{
              justifyContent: "justify",
              paddingTop: "20px",
              paddingBottom: "10px",
			  fontSize: "30px",
            }}>
				<Button variant="primary" size="lg" href={props.ghLink} target="_blank">
				  <HiAcademicCap /> 
				</Button>
			</Col>
				{"\n"}
				{"\n"}

				{/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
		</Row>	
      </Card.Body>
    </Card>
  );
}
export default PublicationsCards;
