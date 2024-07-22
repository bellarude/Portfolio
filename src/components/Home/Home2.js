import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rr_pic_circle_p.png";
import Tilt from "react-parallax-tilt";
import { VscCircleFilled } from "react-icons/vsc";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "justify"}}>
              <span className="purple"> WELCOME </span> to my website!
            </h1>
            <p className="home-about-body" >
			<p style={{ textAlign: "justify"}}>
              I am a biomedical engineer deeply passionate about science, nature, sports and boardgames!
			  
              <br />
              <br />I thrive on solving intricate problems that require <b className="purple"> creative solutions </b> and <b className="purple"> analytical thinking </b>.
              <br />
              <br />
			  
			  <div>
              Whether it's unraveling puzzles in my leisure time or tackling complex issues professionally, 
			  I find immense satisfaction in <b className="purple"> navigating uncertainties to achieve breakthroughs </b>. 
			  I am eager to apply my problem-solving skills to contribute to projects that <b className="purple"> push the boundaries 
			  of knowledge and innovation </b>. My enthusiasm drives me to continuously explore new approaches and research fields, 
			  collaborating with diverse teams <b className="purple"> to integrate different areas of expertise </b> and deliver meaningful outcomes.  
			  
              </div>
			  </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bellarude"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Rudy__Rizzo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rudy-rizzo-tv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bellarude/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
			  <li className="social-icons">
                <a
                  href="https://scholar.google.ch/citations?user=7vT3PLUAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <HiAcademicCap />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
