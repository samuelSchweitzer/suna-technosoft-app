import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles/contact.scss";

const ContactForm = ({ target }) => {
  return (
    <div>
      <Form className="contact-form">
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
        </Row>

        {target === "training" && (
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="text"
                placeholder="Course (ex: java, react, javascript)"
              />
            </Form.Group>
          </Row>
        )}

        <Row>
          <Form.Group controlId="formGridAddress2">
            <Form.Control
              as="textarea"
              placeholder="Message"
              className="textarea-input"
              {...(target === "development" && {
                placeholder: "Describe your project",
              })}
            />
          </Form.Group>
        </Row>

        <Button className="submit-btn" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
