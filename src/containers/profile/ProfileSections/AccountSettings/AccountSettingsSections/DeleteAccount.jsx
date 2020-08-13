import React from "react";
import { connect } from "react-redux";
import "./AccountSettingsSections.css";
import { Button, Modal, Form } from "react-bootstrap";
import { deleteProfileAuth } from "../../../../../actions/authActions";
import { deleteProfileData } from "../../../../../actions/authActions";
import { useTranslation } from "react-i18next";

const DeleteAccount = (props) => {
  const [confirmModalShow, setConfirmModalShow] = React.useState(false);
  const { id } = props;
  const { t } = useTranslation();

  const handleAccountDeletion = () => {
    props.deleteProfileAuth();
    props.deleteProfileData(id);
  };

  const ConfirmModal = (props) => {
    const [isConfirmed, setIsConfirmed] = React.useState(false);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("accountSettings.deleteAccount.0")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{t("accountSettings.deleteAccount.1")}</h4>
          <p>{t("accountSettings.deleteAccount.2")}</p>
          <Form.Check
            type="checkbox"
            label="I agree"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            {t("accountSettings.deleteAccount.3")}
          </Button>
          <Button
            variant="danger"
            disabled={!isConfirmed}
            onClick={handleAccountDeletion}
          >
            {t("accountSettings.deleteAccount.4")}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="mt-5 mb-5 deleteAccount">
      <h4 className="title">{t("accountSettings.deleteAccount.5")}</h4>
      <p>{t("accountSettings.deleteAccount.6")}</p>
      <Button variant="danger" onClick={() => setConfirmModalShow(true)}>
        {t("accountSettings.deleteAccount.5")}
      </Button>

      <ConfirmModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    errMessage: state.auth.errMessage,
    errKey: state.auth.errKey,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProfileAuth: () => dispatch(deleteProfileAuth()),
    deleteProfileData: (userID) => dispatch(deleteProfileData(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
