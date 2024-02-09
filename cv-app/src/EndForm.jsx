import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormSection = ({
    index,
    companyName,
    positionTitle,
    mainResponsibilities,
    startDate, 
    endDate,
    onCompanyChange,
    onPositionChange,
    onRespChange,
    onStartChange,
    onEndChange,
    changeFormVisibility,
    isFormVisible,
    onRemove
}) => (
    <div>{isFormVisible ? (<>
    <Form.Label>Company Name</Form.Label>
    <input
      type="text"
      className="form-control"
      name="companyName"
      placeholder="Company Name"
      value={companyName}
      onChange={e => onCompanyChange(index, e.target.value)}
    required/>
    <Form.Label>Job Position</Form.Label>
    <input
    type="text"
    className="form-control"
    name="positionTitle"
    placeholder="Job Position"
    value={positionTitle}
    onChange={e => onPositionChange(index, e.target.value)}
    required/>
    <Form.Label>Main Responsibilities</Form.Label>
    <textarea
    className="form-control"
    name="mainResponsibilities"
    placeholder="Main Responsibilities"
    value={mainResponsibilities}
    onChange={e => onRespChange(index, e.target.value)}
    required/>
    <Form.Label>Start Date</Form.Label>
    <input
    type="date"
    className="form-control"
    name="startDate"
    placeholder="Start Date"
    value={startDate}
    onChange={e => onStartChange(index, e.target.value)}
    required/>
    <Form.Label>End Date</Form.Label>
    <input
    type="date"
    className="form-control"
    name="endDate"
    placeholder="End Date"
    value={endDate}
    onChange={e => onEndChange(index, e.target.value)}
    required/></>
    ) : (
    <><div>
    <h4>Company Name</h4>
    <p>{companyName}</p>
    <h4>Job Position</h4>
    <p>{positionTitle}</p>
    <h4>Main Responsibilities</h4>
    <p>{mainResponsibilities}</p>
    <h4>Start Date</h4>
    <p>{startDate}</p>
    <h4>End Date</h4>
    <p>{endDate}</p>
    </div></>
    )}
    <div>
    <ButtonGroup aria-label="Form actions">
      <Button variant="primary" onClick={() => changeFormVisibility(index, true)} disabled={isFormVisible}>Edit</Button>
        <Button variant="primary" onClick={() => changeFormVisibility(index, false)} disabled={!isFormVisible}>Submit</Button>
      </ButtonGroup>
      <Button variant="danger" onClick={() => onRemove(index)}>Remove</Button>
      </div>
      </div>
);

function EndForm() {
    const [fields, setFields] = useState([]);

    const handleAddFields = () => {
        const newField = {
            id: uuidv4(),
            isFormVisible: true,
            companyName: '',
            positionTitle: '',
            mainResponsibilities: '',
            startDate: '2024-01-01',
            endDate: '2024-01-01'
        };
        setFields([...fields, newField]);
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

      const handleCompanyChange = (index, newValue) => {
        setFields(fields.map((field, idx) => 
          idx === index ? { ...field, companyName: newValue } : field
        ));
      };

      const handlePosChange = (index, newValue) => {
        setFields(fields.map((field, idx) => 
          idx === index ? { ...field, positionTitle: newValue } : field
        ));
      };

      const handleRespChange = (index, newValue) => {
        setFields(fields.map((field, idx) => 
          idx === index ? { ...field, mainResponsibilities: newValue } : field
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
      }
    
      return (
        <div>
        <h2>Work Experience</h2>
        {fields.map((field, index) => (
            <div key={field.id}>
                <FormSection
                key={field.id}
                index={index}
                companyName={field.companyName}
                positionTitle={field.positionTitle}
                mainResponsibilities={field.mainResponsibilities}
                startDate={field.startDate}
                endDate={field.endDate}
                onCompanyChange={handleCompanyChange}
                onPositionChange={handlePosChange}
                onRespChange={handleRespChange}
                onStartChange={handleStartChange}
                onEndChange={handleEndChange}
                onRemove={handleRemoveSection}
                onSubmit={handleSubmit}
                changeFormVisibility={changeFormVisibility}
                isFormVisible={field.isFormVisible}
                />
            </div>
        ))}
        <button type="button" onClick={handleAddFields}>Add Section</button>
        </div>
      )
}

export default EndForm;