import React from "react";

export const Header = () => {
  return (
    <div className="homePageHeader">
      <div className="homePageHeaderTitle">
        <h2>Feeling Suicidal?</h2>
        <h3>
          We’re Here To Help And
          <br />
          Support You
        </h3>
      </div>

      <img
        className="homePageHeaderImage"
        src={"https://i.ibb.co/wcgjfCY/HP2.png"}
        alt="Home Page Header"
      />
    </div>
  );
};
