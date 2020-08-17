import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t } = useTranslation();
  return (
    // <<<<<<< HEAD
    <div className="assessment">
      <div>
        <h1>{t("assessmentHomepage.heading")}</h1>
        <p>{t("assessmentHomepage.assessmentDetails")}</p>
        <br />
        <div>
          <Link to="psychoAssess">
            <Button
              className="blueButtonWithWhiteText"
              size="lg"
              variant="primary"
            >
              {t("assessmentHomepage.assessmentButton")}
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/17fcbqD/assessment-image.png"
          alt={t("assessmentHomepage.imageAlt")}
        />
      </div>
      {/* =======
    <div className="assessmentSection">
    <Container>
      <Row className="storiesText">
        <Col xs={10} sm={10}  md={6} lg={6} className="storiesTitle">
        <h1>Psychological<br />Assessment</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. <br />
          <span className= "rediectLink">Read more >></span>
          </p>

        </Col>
        <Col xs={10} sm={10}  md={6} lg={6} className="two">
          <img
            className="halfFullImage"
            src="https://i.ibb.co/K9F59fD/Assessment-image.png"
            alt="Stories about hope"
          />
        </Col>
      </Row>
    </Container>
>>>>>>> origin/responsive-home-page */}
    </div>
  );
};
export default Assessment;
