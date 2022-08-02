import React from "react";
import Card from "react-bootstrap/Card";
import { VscCircleFilled } from "react-icons/vsc";
import { BsEmojiLaughing } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rudy Rizzo </span>
            from <span className="purple"> Treviso, Italy.</span>
            <br />I am a PhD. candidate at the Graduate School of Biomedical Sciences @ University of Bern, Switzerland.
            <br />
            <br />
            Apart from coding and research, some other activities that I love to do!
          </p>
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
              <VscCircleFilled /> Hiking, with particular interest in Via Ferratas
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

export default AboutCard;
