import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVite,
  SiJira,
  SiEclipseide,
  SiWoocommerce,
  SiXcode,
  SiMacos,
  SiDocker,
  SiGithubcopilot  
} from "react-icons/si";
import { BsClaude } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaWindows, FaLinux } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubcopilot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsClaude />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzureDevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWoocommerce />
      </Col>
    </Row>
  );
}

export default Toolstack;
