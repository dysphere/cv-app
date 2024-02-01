import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'
import { useForm } from 'react-hook-form';

function TopForm() {

  const[showForm, setShowForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setShowForm(true);
    }
    else {
    setValidated(true);
    setShowForm(false);
    }
  };


    return (
      <div>
        <h1>Resume Information</h1>
        <h2>General Information</h2>
        {showForm && <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name}
                  onChange={(event) => setName(event.target.value)} required/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email}
                  onChange={(event) => setEmail(event.target.value)} required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" value={phone}
                  onChange={(event) => setPhone(event.target.value)} required/>
              </Form.Group>

              <ButtonGroup aria-label="change buttons">
          <Button variant="primary" type="button" onClick={() => setShowForm(true)} disabled>Edit</Button>
          <Button variant="primary" type="submit" >Submit</Button>
          </ButtonGroup>
            </Form></div>
      }
        </div>
      );
    }

   export default TopForm;

   
