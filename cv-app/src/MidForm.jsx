import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormSection = ({
    index,
    schoolName,
    major,
    startDate,
    endDate,
    onSchoolChange,
    onMajorChange,
    onStartChange,
    onEndChange,
    changeFormVisibility,
    isFormVisible,
    onRemove
  }) => (
    <div>
      {isFormVisible ? (
        <>
          {/* Form inputs */}
          <Form.Label>School</Form.Label>
          <input
            type="text"
            className="form-control"
            name="schoolName"
            placeholder="School Name"
            value={schoolName}
            onChange={e => onSchoolChange(index, e.target.value)}
          required/>
          <Form.Label>College Major</Form.Label>
          <input
            type="text"
            className="form-control mt-2"
            name="major"
            placeholder="College Major"
            value={major}
            onChange={e => onMajorChange(index, e.target.value)}
          required/>
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
        </>
      ) : (
        <div>
          {/* HTML representation of the form data */}
          <h4>School</h4>
          <p>{schoolName}</p>
          <h4>Major</h4>
          <p>{major}</p>
          <h4>Start Date</h4>
          <p>{startDate}</p>
          <h4>End Date: {endDate}</h4>
          <p></p>
        </div>
      )}
      <ButtonGroup aria-label="Form actions">
      <Button variant="primary" onClick={() => changeFormVisibility(index, true)} disabled={isFormVisible}>Edit</Button>
        <Button variant="primary" onClick={() => changeFormVisibility(index, false)} disabled={!isFormVisible}>Submit</Button>
      </ButtonGroup>
      <Button variant="danger" onClick={() => onRemove(index)}>Remove</Button>
    </div>
  );

function MidForm() {
  const [fields, setFields] = useState([]);

  const handleAddFields = () => {
    const newField = {
        id: uuidv4(),
        isFormVisible: true,
        schoolName: '',
        major: '',
        startDate: '2024-01-01',
        endDate: '2024-01-01'
    };
    setFields([...fields, newField]); // Fixed: remove the extra braces around newField
};

  const changeFormVisibility = (index, visible) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, isFormVisible: visible } : field
    ));
  };

  const handleRemoveSection = index => {
    // Filter out the section that matches the index
    setFields(fields.filter((_, idx) => idx !== index));
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
      idx === index ? { ...field, startDate: newValue } : field
    ));
  };

  const handleEndChange = (index, newValue) => {
    setFields(fields.map((field, idx) => 
      idx === index ? { ...field, endDate: newValue } : field
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', fields);
    // You can send the data to a server here
  };

  return (
    <div>
        <h2>Educational Information</h2>
      {fields.map((field, index) => (
        <div key={field.id}>
        <FormSection
          key={field.id}
          index={index}
          schoolName={field.schoolName}
          major={field.major}
          startDate={field.startDate}
          endDate={field.endDate}
          isFormVisible={field.isFormVisible}
          changeFormVisibility={changeFormVisibility}
          onSchoolChange={handleSchoolChange}
          onMajorChange={handleMajorChange}
          onStartChange={handleStartChange}
          onEndChange={handleEndChange}
          onRemove={handleRemoveSection}
          onSubmit={handleSubmit}
        />
        </div>
      ))}
      {}
      <button onClick={handleAddFields}>Add Section</button>
    </div>
  );
}

export default MidForm;