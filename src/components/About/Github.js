import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "0px" }}>
        Days I <strong className="purple">Code</strong> 
      </h1>
	  
	<Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
	  ** Open-Source code that I do not forget to git-commit! **
	</Row>
	  
      <GitHubCalendar
        username="bellarude"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
