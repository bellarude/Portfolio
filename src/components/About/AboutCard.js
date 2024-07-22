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
            I am currently a postdoctoral researcher for the <span className="purple"> Michigan Institute for Imaging and Technology  </span>
			affiliated with the Department of Radiology at the <span className="purple"> University of Michigan </span>, 
			working under the guidance of <span className="purple"> Prof. Nicole Seiberlich </span>. 
			<br/>
			<br/>
			My expertise and research interests span several pivotal areas:
			</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
