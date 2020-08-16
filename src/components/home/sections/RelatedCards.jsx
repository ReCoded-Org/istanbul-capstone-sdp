import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import logo1 from "../logos/logo0.png";
import logo2 from "../logos/logo1.png";
import logo3 from "../logos/logo2.png";
import logo4 from "../logos/logo3.png";

const RelatedCards = (props) => {
  return (
    <div className="relatedCardsContainer">
      <CardDeck>
        <Card className="relatedCard">
          <Card.Body>
            <Card.Img variant="top" className="cardLogo" src={logo1} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a
              href="http://teenmentalhealth.org/mental-disorders/"
              className="readMoreCardBtn"
            >
              Read more >>
            </a>
          </Card.Body>
        </Card>

        <Card className="relatedCard">
          <Card.Body>
            <Card.Img variant="top" className="cardLogo" src={logo2} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a
              href="https://www.nimh.nih.gov/health/topics/depression/index.shtml"
              className="readMoreCardBtn"
            >
              Read more >>
            </a>
          </Card.Body>
        </Card>

        <Card className="relatedCard">
          <Card.Body>
            <Card.Img className="cardLogo" src={logo3} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a
              href="https://www.youtube.com/watch?v=bYGO43Ukqus"
              className="readMoreCardBtn"
            >
              Read more >>
            </a>
          </Card.Body>
        </Card>
        <Card className="relatedCard">
          <Card.Body>
            <Card.Img variant="top" className="cardLogo" src={logo4} />
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <a
              href="https://www.thehindu.com/opinion/open-page/living-is-the-solution-suicide-is-not/article29668400.ece"
              className="readMoreCardBtn"
            >
              Read more >>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default RelatedCards;
