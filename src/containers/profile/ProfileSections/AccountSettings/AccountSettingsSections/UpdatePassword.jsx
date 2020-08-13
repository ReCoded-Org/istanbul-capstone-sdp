import React from "react";
import { connect } from "react-redux";
import "./AccountSettingsSections.css";
import { useTranslation } from "react-i18next";
import {
  updatePasswordAndEmail,
  resetPassword,
} from "../../../../../actions/authActions";
import { Form, Container, Button, Col, Modal } from "react-bootstrap";

const UpdatePassword = (props) => {
  const { t } = useTranslation();
  const { auth, authError, errMessage, errKey } = props;
  const operations = [
    [
      t("accountSettings.passwordUpdate.operations.0"),
      t("accountSettings.passwordUpdate.operations.1"),
    ],
    [
      t("accountSettings.passwordUpdate.operations.2"),
      t("accountSettings.passwordUpdate.operations.3"),
    ],
  ];

  const [newPassword, setNewPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const [confirmModalShow, setConfirmModalShow] = React.useState(false);
  const [successModalShow, setSuccessModalShow] = React.useState(false);
  const [successKeys, setSuccessKeys] = React.useState("");
  const [doesPasswordMatch, setDoesPasswordMatch] = React.useState(true);
  const [doesPasswordValid, setDoesPasswordValid] = React.useState(true);

  const handleUdpatePassword = (password) => {
    const data = {
      currentEmail: auth.email,
      currentPassword: password,
      newPassword,
      userID: auth.uid,
      key: "updatePassword",
    };
    if (newPassword === passwordRepeat && newPassword.length > 5) {
      setDoesPasswordMatch(true);
      setDoesPasswordValid(true);
      props.updatePasswordAndEmail(data);
    } else {
      if (newPassword !== passwordRepeat) {
        setDoesPasswordMatch(false);
      }
      if (newPassword.length < 6) {
        setDoesPasswordValid(false);
      }
    }
  };

  const ConfirmModal = (props) => {
    const [currentPassword, setCurrentPassword] = React.useState("");
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("accountSettings.passwordUpdate.updating")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{t("accountSettings.passwordUpdate.passwordConfirmation")}</h6>
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            {t("accountSettings.passwordUpdate.cancelButton")}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onHide();
              handleUdpatePassword(currentPassword);
              setSuccessKeys({
                operation: operations[0][0],
                msg: operations[0][1],
              });
              setSuccessModalShow(true);
            }}
          >
            {t("accountSettings.passwordUpdate.updatePasswordMsg")}
          </Button>
        </Modal.Footer>
      </Modal>
    );
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
            {successKeys.operation}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{successKeys.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>
            {t("accountSettings.passwordUpdate.success")}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="updatePassword">
      <h4 className="title">
        {t("accountSettings.passwordUpdate.changePasswordMsg")}
      </h4>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>
              {t("accountSettings.passwordUpdate.newPasswordMsg.0")}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder={t("accountSettings.passwordUpdate.newPasswordMsg.1")}
              onInput={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="email">
            <Form.Label>
              {t("accountSettings.passwordUpdate.confirmNewMsg.0")}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder={t("accountSettings.passwordUpdate.confirmNewMsg.1")}
              onInput={(e) => {
                setPasswordRepeat(e.target.value);
                setDoesPasswordMatch(true);
                setDoesPasswordValid(true);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {!doesPasswordMatch && (
            <div className="passwordMatch">
              {t("accountSettings.passwordUpdate.passwordMatchMsg")}
            </div>
          )}
        </Form.Row>
        <Form.Row>
          {!doesPasswordValid && (
            <div className="passwordValid">
              {t("accountSettings.passwordUpdate.characterMatchMsg")}
            </div>
          )}
        </Form.Row>
        <Container>
          {/* Show error message when fails to sign up */}
          {authError && errKey === "updatePassword" && (
            <div className="errMsgContainer">
              <b>{authError}</b>
              <div className="errMsg">{errMessage}</div>
            </div>
          )}
        </Container>
      </Form>
      <div className="resetPassword">
        <p>
          {t("accountSettings.passwordUpdate.forgotPasswordMsg")}{" "}
          <b
            onClick={() => {
              props.resetPassword(auth.email);
              setSuccessKeys({
                operation: operations[1][0],
                msg: operations[1][1],
              });
              setSuccessModalShow(true);
            }}
          >
            {t("accountSettings.passwordUpdate.resetPasswordMsg.0")}
          </b>{" "}
          {t("accountSettings.passwordUpdate.resetPasswordMsg.1")}
        </p>
      </div>
      <Button variant="primary" onClick={() => setConfirmModalShow(true)}>
        {t("accountSettings.passwordUpdate.updatePasswordMsg")}
      </Button>
      <ConfirmModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />
      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
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
    updatePasswordAndEmail: (data) => dispatch(updatePasswordAndEmail(data)),
    resetPassword: (email) => dispatch(resetPassword(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
