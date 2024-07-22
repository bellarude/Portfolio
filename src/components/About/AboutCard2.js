import React from "react";
import Card from "react-bootstrap/Card";
import { VscCircleFilled } from "react-icons/vsc";
import { BsEmojiLaughing } from "react-icons/bs";

function AboutCard2() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>         
			 <li className="about-activity">
              <VscCircleFilled /> <span className="purple">Multi-parametric quantitative</span> MR imaging (MRI) and spectroscopy (MRS)
            </li>
			<li className="about-activity">
              <VscCircleFilled /> <span className="purple">Physics</span> and mathematical preparation of radio-frequency pulse sequences for commercial MR scanners
            </li>
			<li className="about-activity">
              <VscCircleFilled /> <span className="purple">Clinical translation</span> for MRI: from mathematical and physics background to the patient bed
            </li>
			<li className="about-activity">
              <VscCircleFilled /> <span className="purple">Mathematical modeling</span> of biological data and phenomena
            </li>
			<li className="about-activity">
              <VscCircleFilled /> Quantification of biological data, with a focus on the <span className="purple">accuracy</span> and <span className="purple">uncertainty measures</span> of various methods
            </li>
			<li className="about-activity">
              <VscCircleFilled /> Application of <span className="purple">Machine Learning</span> for quantification purposes, with a specific interest in <span className="purple">Deep Learning</span> and its 
			  impact on <span className="purple">reliability and robustness</span> compared to traditional model-driven quantitative methods.
            </li>
			</p>
			
			
            Apart from coding and research, some other activities that I love to do!
          
          <ul>
		  
            <li className="about-activity">
              <VscCircleFilled /> Playing Dungeons & Dragons!
            </li>
			
            <li className="about-activity">
              <VscCircleFilled /> Playing and designing games, especially boardgames!
			  </li>
			  
            <li className="about-activity">
              <VscCircleFilled /> Cooking (a must have in Italy! <BsEmojiLaughing />)
            </li>
			
			<li className="about-activity">
              <VscCircleFilled /> Hiking, camping and BBQ
            </li>
			
            <li className="about-activity">
              <VscCircleFilled /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Logic will get you from A to B. <br /> Imagination will take you everywhere"{" "}
          </p>
          <footer className="blockquote-footer">Alber Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard2;
