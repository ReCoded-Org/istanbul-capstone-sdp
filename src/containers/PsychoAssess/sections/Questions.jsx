import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { useState } from "react";

const OPTION_QUANTITY = 4;
const QUESTION_QUANTITY = 13;

export default function Questions() {
  const [isSubmitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  let questionCount = 0;
  const renderQuestions = () => {
    const questions = [];
    for (let j = 0; j < QUESTION_QUANTITY; j++) {
      questions.push(
        <Row key={`question${questionCount}`} className="questionContainer">
          <Col xs={12} md={12} lg={12}>
            <h3 className="questionTitle">{t(`questions.${j}.title`)}</h3>
          </Col>
          <Col xs={12} md={12} lg={12} className="questionAnswers">
            <ul>{renderQuestionAnswers()}</ul>
          </Col>
        </Row>
      );
      questionCount++;
    }
    return questions;
  };

  const renderQuestionAnswers = () => {
    const options = [];
    for (let i = 0; i < OPTION_QUANTITY; i++) {
      options.push(
        <li key={`question${questionCount}.${i}`} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={`question${questionCount}`}
            value="0"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            {t(`questions.${questionCount}.multiple.${i}`)}
          </label>
        </li>
      );
    }
    return options;
  };

  return (
    <>
      <Col className="assessContainer">
        <div className="assessExplanation">
          <p>{t("assessExplanation.0")}</p>
          <p>{t("assessExplanation.1")}</p>
        </div>
        {renderQuestions()}
        <Row className="testSubmitButtonRow">
          <Form.Label>{t("testSubmit.email")}</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">{t("testSubmit.email")}</Form.Text>
          <Button
            variant="primary"
            className="testSubmitButton"
            onClick={() => {
              setSubmitted(true);
              setInterval(() => {
                setSubmitted(false);
              }, 3000);
            }}
          >
            Submit
          </Button>
        </Row>
        {isSubmitted && (
          <div class="alert alert-primary submitAlert" role="alert">
            {t("testSubmit.message")}
          </div>
        )}
      </Col>
    </>
  );
}
