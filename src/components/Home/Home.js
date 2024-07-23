import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { getCalApi } from "@calcom/embed-react";

function Home() {
  useEffect(() => {
    let cal;
    (async function () {
      cal = await getCalApi();
      cal("floatingButton", {
        calLink: "mohammed-awesuddin/15min",
        config: {
          name: "Jhon",
          email: "jhon@example.com",
          "metadata[employeeId]": "101"
        },
        buttonColor:"#918ea1",
        buttonTextColor:"#000000",
        buttonText:"Schedule a Meet",
      });
      cal("ui", {
        styles: {
          branding: { brandColor: "#000000" }
        }
      });
    })();

    return () => {
      const button = document.querySelector('cal-floating-button');
      if (button) {
        button.remove();
      }
      if (cal) {
        cal("destroy");
      }
    };
  }, []);
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Awesuddin Mohammed</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
