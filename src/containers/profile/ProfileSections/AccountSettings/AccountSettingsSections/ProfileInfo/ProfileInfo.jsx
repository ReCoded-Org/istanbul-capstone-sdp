import React from "react";
import "./ProfileInfo.css";
import editButtonIcon from "../../../../../../images/editButton.png";
import ShowProfileInfo from "./ProfileInfoSections/ShowProfileInfo";
import EditProfileInfo from "./ProfileInfoSections/EditProfileInfo";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const UserInfo = (props) => {
  const { t } = useTranslation();
  const { id, auth } = props;
  const isOwner = id === auth.uid ? true : false;

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

  const ownerDisplay = isEditing ? (
    <EditProfileInfo handleEditingStatus={handleEditingStatus} id={id} />
  ) : (
    <ShowProfileInfo id={id} />
  );
  const adminDisplay = <ShowProfileInfo id={id} />;

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
            {t("accountSettings.profileInfo.0")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("accountSettings.profileInfo.1")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>
            {t("accountSettings.profileInfo.2")}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <div className="userInfoTitle">
        <h5>{t("accountSettings.profileInfo.3")}</h5> {editButton()}
      </div>
      {isOwner ? ownerDisplay : adminDisplay}

      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
      />
    </div>
  );
};

export default UserInfo;
