import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import Header from "./sections/Header";
import { Row, Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";
function BlogsPage() {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
        <Header />
      <Container>
        <BlogsDisplay className="alooo" />
      </Container>
    </Fragment>
  );
}

export default BlogsPage;
