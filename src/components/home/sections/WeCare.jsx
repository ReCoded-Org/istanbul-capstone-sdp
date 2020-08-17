import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Col, Row, Button } from "react-bootstrap";

const WeCare = () => {
  const { t } = useTranslation();
  return (
    // <<<<<<< HEAD
    // <div className="weCare">
    //   <div>
    //     <h1>{t("weCare.heading")}</h1>
    //     <p>
    //       <span className="firstWord"> {t("weCare.firstWord")} </span>
    //       {t("weCare.motivationalText")}
    //       <span className="pinkText"> {t("weCare.pinkText")}</span>
    //       {t("weCare.supportiveText")}
    //       <span className="pinkText">{t("weCare.pinkTextWord")}</span>.
    //       {t("weCare.hopefulText")}
    //     </p>
    //     <br />
    //   </div>

    //   <div>
    //     <Link to="/contact">
    //       <Button
    //         className="pinkButtonWithWhiteText"
    //         variant="primary"
    //         size="lg"
    //       >
    //         {t("weCare.reachUsButton")}
    //       </Button>
    //     </Link>
    //     <br />
    //     <Link to="/psychoAssess">
    //       <Button
    //         className="blueButtonWithWhiteText"
    //         size="lg"
    //         variant="primary"
    //       >
    //         {t("weCare.assessmentButton")}
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
    // =======
    <Container className="w-75">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="weCareSection">
          <h1>We Care About You</h1>
          <article>
            <span className="initialWordStyle">Let's</span> try and keep things
            in perspective. Let's be{" "}
            <span className="positiveWordStyle">positive</span>, help each get
            through all of this. In this world, there has never been a storm
            that lasted. This too, shall pass. each other out, and we will get
            through all of this.bla bladfnisbn and we will get through all{" "}
            <span className="negativeWordStyle">negativity</span> never again.
            Let's try and keep things in{" "}
            <span className="positiveWordStyle">positivity.</span> Let's be
            friendly, help each other out, and we will get through, aa bla. bla
            bladfnisbn has never been a storm that lasted. This too, shall pass.
            bla bladfnisbn.
            <span className="positiveWordStyle">positivity.</span> Let's be
            friendly, help each other out, and we will get through, aa bla. bla
            bladfnisbn. and we will get through all of this. In this world.
          </article>
          <Button className="talkToUsButton">TALK TO US</Button>
          <br />
          <Button className="testButton">
            If you are not sure, take the test
          </Button>
        </Col>
      </Row>
    </Container>
    // >>>>>>> origin/responsive-home-page
  );
};
export default WeCare;
