import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import React from 'react';

const FormSection = ({ index, schoolName, major, startDate, endDate, isVisible, toggleVisibility, onSchoolChange, onMajorChange, onStartChange, onEndChange }) => (
    <div>
      {isVisible && (
        <div>
        <Form.Label>School</Form.Label>
          <input
          type="text"
          className="form-control"
          name="schoolName"
          placeholder="School Name"
            value={schoolName}
            onChange={e => onSchoolChange(index, e.target.value)}
          />
          <Form.Label>College Major</Form.Label>
          <input
            type="text"
            className="form-control mt-2"
            name="major"
            placeholder="College Major"
            value={major}
            onChange={e => onMajorChange(index, e.target.value)}
          />
          <Form.Label>Start Date</Form.Label>
          <input
            type="date"
            className="form-control mt-2"
            name="startDate"
            value={startDate}
            onChange={e => onStartChange(index, e.target.value)}
          />
          <Form.Label>End Date</Form.Label>
          <input
            type="date"
            className="form-control mt-2"
            name="endDate"
            value={endDate}
            onChange={e => onEndChange(index, e.target.value)}
          />
        </div>
      )}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Section {index + 1}
      </button>
    </div>
  );

function MidForm() {
  const [fields, setFields] = useState([]);

  const handleAddFields = () => {
    const newField = {
        id: fields.length,
        isVisible: true,
        schoolName: '',
        major: '',
        startDate: '',
        endDate: ''

      };
    setFields([...fields, { newField}]);
  };

  const toggleVisibility = id => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, isVisible: !field.isVisible } : field
    ));
  };

  const handleSchoolChange = (index, newValue) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, schoolName: newValue } : field
    ));
  };

  const handleMajorChange = (index, newValue) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, major: newValue } : field
    ));
  };

  const handleStartChange = (index, newValue) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, major: newValue } : field
    ));
  };

  const handleEndChange = (index, newValue) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, major: newValue } : field
    ));
  };

  const handleRemoveFields = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', fields);
    // You can send the data to a server here
  };

  return (
    <div>
      <button onClick={handleAddFields}>Add Section</button>
      {fields.map((field, index) => (
        <div key={field.id}>
        <FormSection
          key={field.id}
          index={index}
          schoolName={field.schoolName}
          major={field.major}
          startDate={field.startDate}
          endDate={field.endDate}
          isVisible={field.isVisible}
          toggleVisibility={() => toggleVisibility(field.id)}
          onSchoolChange={handleSchoolChange}
          onMajorChange={handleMajorChange}
          onStartChange={handleStartChange}
          onEndChange={handleEndChange}
        />
        <div class="d-flex flex-column align-items-center">
<ButtonGroup aria-label="change buttons">
<Button variant="primary" type="button" disabled>Edit</Button>
<Button variant="primary" type="submit" onClick={() => toggleVisibility(index)}>Submit</Button>
</ButtonGroup>
<button
  type="button"
  className="btn btn-danger mt-2"
  onClick={() => handleRemoveFields(index)}
>
  Remove
</button>
</div>
        </div>
      ))}
    </div>
  );
}

export default MidForm;