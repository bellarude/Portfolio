import React from "react";
import { Col, Row } from "react-bootstrap";
import matlabLogo from "../../Assets/Matlab.png";
import {
  SiMicrosoftoffice,
  SiVisualstudiocode,
  SiSiemens,
  SiPycharm,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSiemens />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        <img
			src={matlabLogo}
		/>
      </Col>
	  
    </Row>
  );
}

export default Toolstack;
