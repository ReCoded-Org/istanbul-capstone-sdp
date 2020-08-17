import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Questions from "./sections/Questions";
import { Header } from "./sections/Header";
import Footer from "../../components/common/Footer";

export default function PsychoAssess() {
  return (
    <div>
    <Header />
    <Container>
      <Questions />
    </Container>
    <Footer />
    </div>
  );
}
