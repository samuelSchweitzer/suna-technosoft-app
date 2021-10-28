import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-section-card">
        <div className="contact-card-left"></div>

        <div className="contact-card-right">
          <h3>Get in touch</h3>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write your query"
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Button className="submit-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
