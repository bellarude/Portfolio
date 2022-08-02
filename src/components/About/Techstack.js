import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import matlabLogo from "../../Assets/Matlab.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
  SiLatex,
  SiAdobephotoshop,
  SiJava
} from "react-icons/si";

import {
	GiArtificialIntelligence
} from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        <img
			src={matlabLogo}
		/>
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        < SiAdobephotoshop/>
      </Col>
	  
	  <Col xs={4} md={2} className="tech-icons">
        < SiJava/>
      </Col>
	  
    </Row>
  );
}

export default Techstack;


