import React from "react";
import { Container } from "react-bootstrap";
import Questions from "./sections/Questions";
import Footer from "../../components/common/Footer";
import { Header } from "../donation/sections/Header";
import "./index.css";

export default function PsychoAssess() {
  return (
    <>
      <Header />
      <Container>
        <Questions />
      </Container>
      <Footer />
    </>
  );
}
