import React from "react";
import "../index.css";
import PersonDisplay from "./PersonDisplay";
import { Row } from "react-bootstrap";

const STAFF_SPECS = [
  {
    name: "nasser",
    title: "managerAssistant",
    photo: require("././images/staff0.png"),
    index: 0,
  },
  {
    name: "jawdat",
    title: "generalManager",
    photo: require("././images/staff1.png"),
    index: 1,
  },
  {
    name: "turgut",
    title: "psychotherapist",
    photo: require("././images/staff2.png"),
    index: 2,
  },
];

export default function peopleDisplay() {
  return (
    <Row>
      {STAFF_SPECS.map((staff, i) => {
        return (
          <PersonDisplay
            name={staff.name}
            photo={staff.photo}
            translationKey={staff.title}
            index={staff.index}
            key={i}
          />
        );
      })}
    </Row>
  );
}
