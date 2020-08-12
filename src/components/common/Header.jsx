import React from "react";
import "./index.css";
import { Image, Container } from "react-bootstrap";
import profilePhotoButton from "../../images/profilePhotoButton.png";

const Header = (props) => {
  const { headerBG, imagePath, headerPage, isProfile, extraComponents } = props;
  return (
    <div
      className="dynamicHeader"
      style={{ backgroundImage: `url(${headerBG})` }}
    >
      <Container className={headerPage}>
        {isProfile ? (
          <div className={headerPage + "ImgContainer"}>
            <Image src={imagePath} roundedCircle width="200" />
            <img src={profilePhotoButton} alt="" className="photoBtn" />
          </div>
        ) : (
          <Image src={imagePath} className={headerPage + "Img"} />
        )}
        <div className={headerPage + "Extra"}>{extraComponents}</div>
      </Container>
    </div>
  );
};

export default Header;
