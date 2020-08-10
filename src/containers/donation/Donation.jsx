import React from "react";
import { Header } from "./sections/Header";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export const Donation = () => {
  return (
    <div>
      <Header />

      <Container className="w-75">
        <Row className="title">
          <Col xs={12} md={12} lg={12}>
            <h1>Support Suljak Suicide Prevention Organization</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className="secondaryTitle">
              Together with your support and your help, we will be able to raise
              awareness of suicide prevention to save lives
            </h2>

            <article className="introParagraph">
              Try and keep things in perspective. Let's be positive, help each
              other out, and we will get through all of this. In this world,
              there has never been a storm that lasted. This too, shall pass,
              bla bla bla blaaaa bla. bla hall pass, bla blabladfnisbn
              negativity yj.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.
            </article>

            <article className="donateParagraph">
              <h3>How to donate</h3>
              please write your check to Suljak Suicide Prevention Organization
              and mail it to: 43 Foundry Avenue, Basaksehir Istotc, Istanbul,
              Turkey.. For further questions, please contact the Development
              team at development@suljak.org or call (+90) 533-382-094. You can
              also transfere money to the listed account banks:
              <br />
              Kvnrfgnjnrkkg
              <br />
              Dvfd harguirug uaguherig
              <br />
              Hnfdrhorkdentb grnunurh
            </article>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <section>
              <div className="tableSection">
                <div className="tableBlueSection">
                  <p className="countNumbers">
                    5<br />
                    <span className="activityType">years</span>
                  </p>
                </div>

                <div className="tableBlueSection">
                  <p className="countNumbers">
                    3.1M
                    <br />
                    <span className="activityType">dollars</span>
                  </p>
                </div>

                <div className="tableBlueSection">
                  <p className="countNumbers">
                    20K
                    <br />
                    <span className="activityType">donors</span>
                  </p>
                </div>

                <div className="tableBlueSection">
                  <p className="countNumbers">
                    3000
                    <br />
                    <span className="activityType">survivors</span>
                  </p>
                </div>

                <div className="tableBlueSection">
                  <p className="countNumbers">
                    28
                    <br />
                    <span className="activityType">countries</span>
                  </p>
                </div>

                <div className="tableBlueSection">
                  <p className="countNumbers">
                    220
                    <br />
                    <span className="activityType">employees</span>
                  </p>
                </div>
              </div>

              <div className="tableSection">
                <div className="darkGreySection">
                  <img
                    src="https://i.ibb.co/0M25Rzj/tick-mark.png"
                    alt="Trick mark icon"
                  />
                  <p className="darkGreyColumn">
                    LLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>

                <div className="lightGreySection">
                  <img
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

                <div className="darkGreySection">
                  <img
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
                Approximately 11 people in Canada die by suicide every day.
                That’s over 4,000 people a year, making suicide a leading cause
                of death in Canada. We can help prevent suicide with the right
                services. A donation to the Canada Suicide Prevention Service
                allows us to connect individuals in distress and individuals
                with suicidal thoughts with local Crisis Centres to receive
                immediate support.
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
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="wholeCarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/4p24Dd4/Quotes2-in-Donation-Page.png"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/4p24Dd4/Quotes2-in-Donation-Page.png"
                    alt="second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 quotes"
                    src="https://i.ibb.co/4p24Dd4/Quotes2-in-Donation-Page.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>

        <Row>
          <section>
            <article className="introParagraph">
              Approximately 11 people in Canada die by suicide every day. That’s
              over 4,000 people a year, making suicide a leading cause of death
              in Canada. We can help prevent suicide with the right services. A
              donation to the Canada Suicide Prevention Service allows us to
              connect individuals in distress and individuals with suicidal
              thoughts with local Crisis Centres to receive immediate support.
              <br />
              Approximately 11 people iight services. A donation to the Canada
              Suicide Prevention Service allows us to connect individuals in
              distress and individuals with suicidal thoughts with local Crisis
              Centres to receive immediate support.
            </article>
          </section>
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
    </div>
  );
};
