import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublicationsCard from "./PublicationCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Publication </strong> list
        </h1>
		

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J7]"
              title="Diffusion-weighted MR spectroscopy of the prostate"
              description="Stamatelatou A, Rizzo R, Simsek K, Van Asten J, Heershap A, Scheenen T, Kreis R."
			  journal ="Magnetic Resonance in Medicine 92(4):1323-1337, 2024"
              ghLink="https://pubmed.ncbi.nlm.nih.gov/38775024/"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J6]"
              title="Water removal in MR spectroscopic imaging with Casorati singular value decomposition"
              description="Shamaei A, Starcukova J, Rizzo R, Starcuk JZ."
			  journal ="Magnetic Resonance in Medicine, 91(4):1694-1706, 2024"
              ghLink="https://pubmed.ncbi.nlm.nih.gov/38181180/"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J5]"
              title="Multi-echo single-shot spectroscopy combined with simultaneous 2D model fitting for fast and accurate measurement of metabolite-specific concentrations and T2 relaxation times"
              description="Rizzo R, Kreis R. "
			  journal ="NMR in Biomedicine, 36(12):e5016, 2023"
              ghLink="https://pubmed.ncbi.nlm.nih.gov/37587062/"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J4]"
              title="Denoising single MR spectra by deep learning: miracle or mirage?"
              description="Dziadosz M, Rizzo R, Kyathanahally SP, Kreis R."
			  journal ="Magnetic Resonance in Medicine,  90(5):1749-1761, 2023"
              ghLink="https://pubmed.ncbi.nlm.nih.gov/37332185/"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J3]"
              title="Quantification of MR spectra by deep learning in an idealized setting: investigation of forms of input, network architectures, optimization by ensembles of networks and training bias"
              description="Rizzo R, Dziadosz M, Kyathanahally SP, Shamaei A, Kreis R."
			  journal ="Magnetic Resonance in Medicine, 89:1707-1727, 2023"
              ghLink="https://pubmed.ncbi.nlm.nih.gov/36533881/"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J2]"
              title="Reliability of Quantification Estimates in MR Spectroscopy: CNNs vs. traditional model fitting"
              description="Rizzo R, Dziadosz M, Kyathanahally SP, Kreis R."
			  journal ="Lecture Notes in Computer Science 13438, 715-724, 2022"
              ghLink="https://link.springer.com/chapter/10.1007/978-3-031-16452-1_68"
            />     
        </Row>
		
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <PublicationsCard
			  number = "[J1]"
              title="Non-parallelism of needles in electroporation: 3D computational model and experimental analysis"
              description="Campana LG, Di Barba P, Dughiero F, Forzan M,  Mognaschi ME, Rizzo R, Sieni E."
			  journal ="COMPEL – the International Journal for computation and mathematics in electrical and electronic engineering, Vol. 38 No.1, pp 348-361, 2019"
              ghLink="https://www.researchgate.net/publication/328546022_Non-parallellism_of_needles_in_electroporation_3D_computational_model_and_experimental_analysis"
            />     
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
