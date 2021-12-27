import React from "react";
import { Modal } from "react-bootstrap";
import { ContactForm } from "../index";
import "./styles/modal.scss";

const ModalComponent = (props) => {
  return (
    <Modal {...props} centered>
      <div className="modal-container">
        {props.target === "development" ? (
          <h3 className="modal-title">Let's build your project</h3>
        ) : props.target === "training" ? (
          <>
            <h3 className="modal-title">Leave a message</h3>
            <p className="modal-subTitle">
              Let us know what course you're looking for and we will get back to
              you soon.
            </p>
          </>
        ) : null}
        <ContactForm target={props.target} />
      </div>
    </Modal>
  );
};

export default ModalComponent;
