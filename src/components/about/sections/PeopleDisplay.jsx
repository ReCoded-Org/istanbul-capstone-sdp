import React from "react";
import "../index.css";
import PersonDisplay from "./PersonDisplay";
import { Row } from "react-bootstrap";

// i18n translations might still be loaded by the http backend
// use react's Suspense

export default function peopleDisplay() {
  const peopleData = [
    {
      name: "nasser",
      index: 0,
    },
    {
      name: "jawdat",
      index: 1,
    },
    {
      name: "turgut",
      index: 2,
    },
  ];

  const renderPeople = (peopleDataList = peopleData) => {
    const renderElements = peopleDataList.map((person, i) => {
      return (
        <PersonDisplay
          name={person.name}
          photoLink={person.photoLink}
          index={person.index}
          key={i}
        />
      );
    });
    return renderElements;
  };

  return <Row>{renderPeople(peopleData)}</Row>;
}
