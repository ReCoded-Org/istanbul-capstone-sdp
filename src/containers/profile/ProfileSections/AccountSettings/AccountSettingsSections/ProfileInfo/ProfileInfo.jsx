import React from "react";
import "./ProfileInfo.css";
import editButtonIcon from "../../../../../../images/editButton.png";
import ShowProfileInfo from "./ProfileInfoSections/ShowProfileInfo";
import EditProfileInfo from "./ProfileInfoSections/EditProfileInfo";
import { Modal, Button } from "react-bootstrap";

const UserInfo = (props) => {
  const { id } = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const [editButtonOpacity, setEditButtonOpacity] = React.useState("1");
  const [successModalShow, setSuccessModalShow] = React.useState(false);

  const editButton = () => {
    return (
      <img
        alt="Edit button"
        src={editButtonIcon}
        className="editButton"
        onClick={() => {
          setIsEditing(true);
          setEditButtonOpacity("0.2");
        }}
        style={{ opacity: editButtonOpacity }}
      />
    );
  };

  // Handle personal info editing
  const handleEditingStatus = (isEdited) => {
    setIsEditing(false);
    setEditButtonOpacity("1");
    if (isEdited) {
      setSuccessModalShow(true);
    }
  };

  const SuccessModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Updating your personal info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your personal info have been updated successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <div className="userInfoTitle">
        <h5>Personal Info:</h5> {editButton()}
      </div>
      {isEditing ? (
        <EditProfileInfo handleEditingStatus={handleEditingStatus} id={id} />
      ) : (
        <ShowProfileInfo id={id} />
      )}
      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
      />
    </div>
  );
};

export default UserInfo;
