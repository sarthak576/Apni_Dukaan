import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./SignupForm.css";

const SignupForm = () => {
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div id='signup-form' className="signup-form">
    <Container className="mt-5">
      <h2 className="text-center font-weight-bold" >Sign Up</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <fieldset disabled={step !== 1}>
          <legend>Step 1: Personal Details</legend>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter name" />
          </Form.Group>
          <Button onClick={() => setStep(2)}>Next</Button>
        </fieldset>
        <fieldset disabled={step !== 2}>
          <legend>Step 2: Upload Documents</legend>
          <Form.Group className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control required type="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
          </Form.Group>
          <Button onClick={() => setStep(3)}>Next</Button>
        </fieldset>
        <fieldset disabled={step !== 3}>
          <legend>Step 3: Confirm & Submit</legend>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </Container>
    </div>
  );
};

export default SignupForm;
