import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'

function TopForm() {
    return (
      <div>
        <h1>Resume Information</h1>
        <h2>General Information</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" />
          </Form.Group>
          <ButtonGroup aria-label="change buttons">
          <Button variant="primary" type="button">
            Edit
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </ButtonGroup>
        </Form>
        </div>
      );
    }

export default TopForm;
