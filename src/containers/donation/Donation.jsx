import React from "react";
import { Header } from "./sections/Header";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./index.css";
import Footer from "../../components/common/Footer";

export const Donation = () => {
  return (
    <div>
      <Header />

      <Container className="w-75">
        <Row className="donationPageTitle">
          <Col xs={12} md={12} lg={12}>
            <h1>Make A Difference, Be A Part Of Our Community</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className="secondaryTitle">We can all help prevent suicide.</h2>

            <article className="introParagraph">
              Live Support provides 24/7, free and confidential support for
              people in distress, prevention and crisis resources for you or
              your loved ones, and best practices for professionals. And we are
              constantly expanding our work because it is literally a matter of
              life or death for countless people.
              <br />
              You can help keep us growing as a free, non-profit website that
              doesn’t run ads, we rely on support from our readers. If you
              believe in Suljak’s mission, please consider donating.
            </article>

            <article className="donateParagraph">
              <h3>How to donate</h3>
              Suicide and mental health conditions affect millions. Together, we
              can bring these issues out of the Darkness and create awareness
              about mental health. Suljak provides the opportunity for also
              companies to take an active role in suicide prevention. please
              send us your email. Your generosity helps us strengthen our
              growing infrastructure, support Lifeline callers, and change the
              conversation around suicide prevention.
              <br />
              <p className="mailingPargraph">
                Due to the situation around COVID-19, we are requesting you
                provide email addresses for all donation communications
                including notification letters, if possible.
                <br />
                mailto:donation@suljak.com
              </p>
            </article>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <section>
              <div className="mainTable">
                <div className="leftTableSection">
                  <div className="tableBlueSection">
                    <p className="leftCountNumbers">
                      5
                      <br />
                      <span className="leftActivityType">years</span>
                    </p>
                  </div>

                  <div className="tableBlueSection">
                    <p className="leftCountNumbers">
                      3.1M
                      <br />
                      <span className="leftActivityType">dollars</span>
                    </p>
                  </div>

                  <div className="tableBlueSection">
                    <p className="leftCountNumbers">
                      20K
                      <br />
                      <span className="leftActivityType">donors</span>
                    </p>
                  </div>
                </div>

                <div className="rightTableSection">
                  <div className="tableBlueSection">
                    <p className="rightCountNumbers">
                      3000
                      <br />
                      <span className="rightActivityType">survivors</span>
                    </p>
                  </div>

                  <div className="tableBlueSection">
                    <p className="rightCountNumbers">
                      28
                      <br />
                      <span className="rightActivityType">countries</span>
                    </p>
                  </div>

                  <div className="tableBlueSection">
                    <p className="rightCountNumbers">
                      220
                      <br />
                      <span className="rightActivityType">employees</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tableSection">
                <div className="darkGreySection">
                  <img
                    className="tableSymbol"
                    src="https://i.ibb.co/0M25Rzj/tick-mark.png"
                    alt="Trick mark icon"
                  />
                  <p className="darkGreyColumn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>

                <div className="lightGreySection">
                  <img
                    className="tableSymbol"
                    src="https://i.ibb.co/LDKPgmn/gift-icon.png"
                    alt="Gift icon"
                  />
                  <p className="lightGreyColumn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>

              <div className="tableSection">
                <div className="darkGreySection">
                  <img
                    className="tableSymbol"
                    src="https://i.ibb.co/85qjgNG/heart-icon.png"
                    alt="Heart icon"
                  />
                  <p className="darkGreyColumn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>

                <div className="lightGreySection">
                  <img
                    className="tableSymbol"
                    src="https://i.ibb.co/34RCGp3/earth-icon.png"
                    alt="Earth icon"
                  />
                  <p className="lightGreyColumn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </section>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <section className="helpParagraph">
              <h3>How can you help us?</h3>
              <article>
                Close to 800,000 people die due to suicide every year, which is
                one person every 40 seconds. Suicide is a global phenomenon and
                occurs throughout the lifespan. Effective and evidence-based
                interventions can be implemented at population, sub-population
                and individual levels to prevent suicide and suicide attempts.
                There are indications that for each adult who died by suicide
                there may have been more than 20 others attempting suicide.
                Suicide occurs throughout the lifespan and is the second leading
                cause of death among 15-29 year olds globally. Suicide is a
                global phenomenon. Suicide accounted for 1.4% of all deaths
                worldwide, making it the 18th leading cause of death in 2016. To
                help change this, we need your support.
                <br />
                In much of the world, suicide is stigmatized and condemned for
                religious or cultural reasons. In some countries, suicidal
                behavior is a criminal offence punishable by law. Suicide is
                therefore often a secretive act surrounded by taboo, and may be
                unrecognized, misclassified or deliberately hidden in official
                records of death.[5] — World Health Organization (2002) To
                change this, you can also do something.
              </article>
            </section>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="wholeCarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/xs5rwZj/survivor2.png"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/n85FZdS/survivor3.png"
                    alt="second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 quotes"
                    src="https://i.ibb.co/bRXGS5T/survivor1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <section>
              <article className="introParagraph">
                Since the foundation of Suljak, we have raise more than blabla $
                for suicide prevention. Every dollar you donate, goes directly
                to support our programs and services for survivors. Suljak help
                thousands of survivors and we depend on the generosity of
                supporters like you!
                <br />
                Approximately 11 people iight services. A donation to the Canada
                Suicide Prevention Service allows us to connect individuals in
                distress and individuals with suicidal thoughts with local
                Crisis Centres to receive immediate support.
              </article>
            </section>
          </Col>
        </Row>

        <Row>
          <div className="socialMedia">
            <a href="http://www.facebook.com">
              <img
                src="https://i.ibb.co/Jp1M5vp/Facebook-button-in-donation-page.png"
                alt="Facebook icon"
              />
            </a>

            <a href="http://www.twitter.com">
              <img
                src="https://i.ibb.co/DMV3TM9/Twitter-for-donation-page.png"
                alt="Twitter icon"
              />
            </a>

            <a href="http://www.instgram.com">
              <img
                src="https://i.ibb.co/7zkfzL2/Instgram-for-donation-page.png"
                alt="Instgram icon"
              />
            </a>
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
