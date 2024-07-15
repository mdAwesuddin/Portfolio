import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResourceCard from "./ResourceCard";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import Particle from "../Particle";
import Toaster from "./Toast";
import java from "../../Assets/Resources/java.png";
import javascript from "../../Assets/Resources/javascript.png";
import react from "../../Assets/Resources/React.png";
import dsa from "../../Assets/Resources/DSA.png";
import database from "../../Assets/Resources/Database.png";
import git from "../../Assets/Resources/Git.png";
import axios from "axios";
import Autotype from "./Autotype";

const Resources = () => {
  const [token, setToken] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [logouttoast, setLogoutToast] = useState(false);
  const [logintoast, setLoginToast] = useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);
    setToken(token);
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data.name);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    setToken(response.access_token);
    localStorage.setItem("Token", response.access_token);
    setLoginToast(true);
    const timer = setTimeout(() => setLoginToast(false), 3000);
    return () => clearTimeout(timer);
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
    flow: "implicit",
  });

  const logout = () => {
    googleLogout();
    setToken(null);
    localStorage.clear();
    setLogoutToast(true);
    const timer = setTimeout(() => setLogoutToast(false), 3000);
    return () => clearTimeout(timer);
  };

  return (
    <Container fluid className="resource-section" id="home">
      <div className="d-flex justify-content-between align-items-center login-btn-section">
        {token === null ? (
          <>
          <div/>
          <Button className="fork-btn-inner" onClick={() => login()}>
            <FaGoogle className="pb-1" /> &nbsp; Login
          </Button>
          </>
        ) : (
          <>
            <div className="d-flex  wrapper">
              <Autotype/>
              <h5 className="resource-heading">{profile}</h5>
            </div>
            <div>
              <Button className="fork-btn-inner" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </>
        )}
      </div>
      <Container className="resource-content">
      <Particle />
        <h1 className="project-heading">
          My Recent <strong className="purple">Collections </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few resources which you might like⭐
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={java}
              isBlog={false}
              title="Programming with JAVA"
              disable={token === null}
              description="This Pack Provides you the in depth concepts of Java Programming which was curated by me."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/16f5TuxzfqYoNL2F5bPVVJAlDdFqCADzK?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={javascript}
              isBlog={false}
              title="Ultimate Guide for JavaScript"
              description="This Pack Provides you all the neccessary concepts to learn JavaScript and it's Frameworks."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/1wPEDV2WOH7mtJfsbyALzOED_8fbfaM7Y?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={react}
              isBlog={false}
              title="ReactJS Full Guide"
              disable={token === null}
              description="In this Pack you will get all you need related to ReactJS from basics to advanced."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/150D6Svl34WIVfjR-vXrMgropYZ3D_peA?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={dsa}
              isBlog={false}
              title="DSA Guide"
              disable={token === null}
              description="An Ultimate Data Structures & Algorithms Guide which will make your learning easy and well prepared for future."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/1sY1zGD27D6X-n73Rsljrei4drFs87i7V?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={database}
              isBlog={false}
              title="All you Need is Database"
              disable={token === null}
              description="In this Pack you will get all the necessary topics to get you prepare for your backend work includes basics of DBMS, sql & nosql databases."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/1DlZMHRP_C06iaitglheRCjQs4q_Zlx8H?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourceCard
              imgPath={git}
              isBlog={false}
              title="GIT in one Go!"
              description="GIT is very essential in managing any project you will learn all the basics of Git commands and their use."
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              downloadlink="https://drive.google.com/drive/folders/1YLQRcPfgPosA90JsyPTPXDeoKwIQt8B9?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
      <Toaster
        show={logintoast}
        content={"Yay you have"}
        supercontent={"Logged In :D "}
      />
      <Toaster
        show={logouttoast}
        content={"Logout Successfull"}
        supercontent={"See you Sooon :)"}
      />
      <Toaster
        show={showToast && token === null}
        content={"Please Login to Enable"}
        supercontent={"Premium Content"}
      />
    </Container>
  );
};

export default Resources;
