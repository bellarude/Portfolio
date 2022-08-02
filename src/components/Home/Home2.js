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

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a young engineer passionate about science, nature and politics.
			  
              <br />
              <br />I enjoy figure out any sort of problem
			  <br />
              <i>
                <b className="purple"> that would require any visual aid or logic to be applied </b>
              </i>
              <br />
              <br />
              Currently I am a PhD. candidate at <br /> the Graduate School of Biomedical Sciences, University of Bern. <br />
              I am part of the <b className="purple"> Magnetic Resonance Methodology group (MRM) </b> <br /> and working with <b className="purple"> Prof. Roland Kreis </b>.
			  <br />
			  <br />
			  My research interests are:<br />
			  <VscCircleFilled /><b className="purple">Multi-parametric MR </b> spectroscopy (MRS) and Spectroscopy Imaging<br />
			  <VscCircleFilled />Model of biological data<br />
			  <VscCircleFilled />Biological data quantification, with particular interest in methods' accuracy and uncertanty<br />
			  <VscCircleFilled />Artificial Intelligence for quantification, with a specific interest in <b className="purple">Deep Learning </b>
              
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
