import React from "react";
import { Container, Col, Nav } from "react-bootstrap";

const Info = () => {
  return (
    <Container>
      <Col className="infoSection">
        <Nav.Link href="#">CONTACTS:</Nav.Link>
        <p>
          (+90) 533-382-094 <br />
          suljak@suljak.com <br />
          43 Foundry Avenue, Basaksehir, istotc, Istanbul, Turkey
        </p>
      </Col>
      <Col className="infoSection">
        <Nav.Link href="#">BUSINESS HOURS:</Nav.Link>
        <p>
          Our support hotline is available 24 hours a day: 11401 <br />
          Monday-Friday: 5pm to 9pm <br />
          Saturday: 10am to 2pm <br />
          Sunday: Closed
        </p>
      </Col>
    </Container>
  );
};

export default Info;
