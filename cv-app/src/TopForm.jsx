import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'



function TopForm() {

  const[showForm, setShowForm] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

    return (
      <div>
        <h1>Resume Information</h1>
        <h2>General Information</h2>
        {showForm && <Form id="genInfo">
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name}
        onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email}
        onChange={(event) => setEmail(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" value={phone}
        onChange={(event) => setPhone(event.target.value)}/>
      </Form.Group>
      </Form>}

      {!showForm && 
      <div>
      <h4>Name</h4>
      <p>{name}</p>
      <h4>Email</h4>
      <p>{email}</p>
      <h4>Phone Number</h4>
      <p>{phone}</p>
      </div>}
    
          <ButtonGroup aria-label="change buttons">
          <Button variant="primary" type="button" onClick={() => setShowForm(true)}>Edit</Button>
          <Button variant="primary" type="submit" form="genInfo" onClick={() => setShowForm(false)}>Submit</Button>
          </ButtonGroup>
        </div>
      );
    }

   export default TopForm;

   
