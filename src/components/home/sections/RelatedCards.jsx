import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import logo1 from "../related-cards-logos/Logo1.png";
import logo2 from "../related-cards-logos/Logo2.png";
import logo3 from "../related-cards-logos/Logo3.png";
import logo4 from "../related-cards-logos/Logo4.png";

const RelatedCards = (props) => {
  return (
    <div className="relatedCardsContainer">
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={logo1} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a href="#!" className="readMoreCardBtn">
              Read more >>
            </a>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Img variant="top" id="scondAndThirdCardLogo" src={logo2} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a href="#!" className="readMoreCardBtn">
              Read more >>
            </a>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Img id="scondAndThirdCardLogo" src={logo3} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a href="#!" className="readMoreCardBtn">
              Read more >>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={logo4} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a href="#!" className="readMoreCardBtn">
              Read more >>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default RelatedCards;
