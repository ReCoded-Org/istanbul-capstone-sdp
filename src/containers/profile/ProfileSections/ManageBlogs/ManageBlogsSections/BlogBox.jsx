import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { updateProfile } from "../../../../../actions/authActions";
import { Dropdown, Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import "./BloxBox.css";
import anonymousImage from "../../../../../images/anonymousImage.png";

const BlogBox = (props) => {
  const { profile, auth } = props;
  const photoSrc = profile.imageURL ? profile.imageURL : anonymousImage;

  const handleBlockAndActivateButton = () => {
    if (!profile.isBlocked) {
      return (
        <Button
          variant="danger"
          className="w-75"
          onClick={() =>
            props.updateProfile({ userId: profile.id, isBlocked: true })
          }
        >
          Decline
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          className="w-75"
          onClick={() =>
            props.updateProfile({ userId: profile.id, isBlocked: false })
          }
        >
          Approve
        </Button>
      );
    }
  };

  return (
    <div className="profileBox">
      <Row>
        <Col xs={8}>
          <Link to={"/profiles/" + profile.id} key={profile.id}>
            <ListGroup defaultActiveKey="none">
              <ListGroup.Item action className="d-flex">
                <Image
                  src={photoSrc}
                  alt="Profile"
                  roundedCircle
                  width="100"
                  height="100"
                  className="mr-5"
                />
                <div class="profileBoxInfo">
                  <h4>{profile.fullName}</h4>
                  <h6>
                    {profile.jobTitle
                      ? profile.jobTitle
                      : "No job title available"}
                  </h6>
                  <h5>{profile.userType}</h5>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Link>
        </Col>
        <Col
          xs={4}
          className="d-flex flex-column pt-2 pb-2 justify-content-around"
        >
          {handleBlockAndActivateButton()}
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileInfo) => dispatch(updateProfile(profileInfo)),
  };
};

export default connect(null, mapDispatchToProps)(BlogBox);
