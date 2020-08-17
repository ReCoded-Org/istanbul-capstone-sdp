import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t } = useTranslation();
  return (
    // <<<<<<< HEAD
    <div className="stories">
      <div>
        <h1>{t("stories.heading")}</h1>
        <p>{t("stories.shareYourStory")}</p>
        <p>{t("stories.quote")}</p>
        <p>{t("stories.quoteOwner")}</p>
        <br />
        <div>
          <Link to="/blogs">
            <span className="readMore">{t("stories.readMore")}</span>
          </Link>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/HqmDtgk/Stories-Image.png"
          alt={t("stories.imageAlt")}
        />
      </div>
      {/* =======
    <div className="storiesSection">
    <Container>
      <Row className="storiesText">
        <Col xs={10} sm={10}  md={6} lg={6} className="storiesTitle">
        <h1>STORIES<br />ABOUT HOPE</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. <br />
          <span className= "rediectLink">Read more >></span>
          </p>

        </Col>
        <Col xs={10} sm={10}  md={6} lg={6} className="two">
          <img
            className="halfFullImage"
            src="https://i.ibb.co/xmsJbZt/Stories-Image.png"
            alt="Stories about hope"
          />
        </Col>
      </Row>
    </Container>
>>>>>>> origin/responsive-home-page */}
    </div>
  );
};
export default Stories;
