import React from "react";
import { Header } from "./sections/Header";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Donation = () => {
  return (
    <div>
      <Header />

      <section className="pageMarings">
        <p className="address">
          Support SULJAK Suicide Prevention Organization
        </p>

        <p className="subAddress">
          Together with your support and your help, we can raise awareness of
          suicide prevention to save lives
        </p>

        <p className="textBody1">
          Try and keep things in perspective. Let's be positive, help each other
          out, and we will get through all of this. In this world, there has
          never been a storm that lasted. This too, shall pass, bla bla bla
          blaaaa bla. bla hall pass, bla blabladfnisbn negativity yj.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don't look even
          slightly believable. If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the
          middle of text.
        </p>

        <p className="textBody2">
          please write your check to Suljak Suicide Prevention Organization and
          mail it to: 43 Foundry Avenue, Basaksehir Istotc, Istanbul, Turkey..
          For further questions, please contact the Development team at
          development@suljak.org or call (+90) 533-382-094. You can also
          transfere money to the listed account banks:
          <br />
          Kvnrfgnjnrkkg
          <br />
          Dvfd harguirug uaguherig
          <br />
          Hnfdrhorkdentb grnunurh
        </p>
      </section>

      <div className="wholeCarousel">
        <Carousel>
          <Carousel.Item class="carousel-indicators">
            <img
              className="d-block w-100 quotes"
              src="https://i.ibb.co/4p24Dd4/Quotes2-in-Donation-Page.png"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 quotes"
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

      <section className="pageMarings">
        <p className="textBody1">
          Approximately 11 people in Canada die by suicide every day. That’s
          over 4,000 people a year, making suicide a leading cause of death in
          Canada. We can help prevent suicide with the right services. A
          donation to the Canada Suicide Prevention Service allows us to connect
          individuals in distress and individuals with suicidal thoughts with
          local Crisis Centres to receive immediate support.
          <br />
          Approximately 11 people iight services. A donation to the Canada
          Suicide Prevention Service allows us to connect individuals in
          distress and individuals with suicidal thoughts with local Crisis
          Centres to receive immediate support.
        </p>

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
      </section>
    </div>
  );
};
