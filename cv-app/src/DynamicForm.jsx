import React, { useState } from 'react';

const FormSection = ({ index, textValue, numberValue, isVisible, toggleVisibility, onTextChange, onNumberChange }) => (
  <div>
    <button onClick={toggleVisibility}>
      {isVisible ? 'Hide' : 'Show'} Section {index + 1}
    </button>
    {isVisible && (
      <div>
        <input
          type="text"
          value={textValue}
          onChange={e => onTextChange(index, e.target.value)}
        />
        <input
          type="number"
          value={numberValue}
          onChange={e => onNumberChange(index, e.target.value)}
        />
      </div>
    )}
  </div>
);

const DynamicForm = () => {
  const [sections, setSections] = useState([]);

  const addSection = () => {
    const newSection = {
      id: sections.length,
      isVisible: true,
      textValue: '',
      numberValue: '',
    };
    setSections([...sections, newSection]);
  };

  const toggleVisibility = id => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, isVisible: !section.isVisible } : section
    ));
  };

  const handleTextChange = (index, newValue) => {
    setSections(sections.map((section, idx) => 
      idx === index ? { ...section, textValue: newValue } : section
    ));
  };

  const handleNumberChange = (index, newValue) => {
    setSections(sections.map((section, idx) => 
      idx === index ? { ...section, numberValue: newValue } : section
    ));
  };

  return (
    <div>
      <button onClick={addSection}>Add Section</button>
      {sections.map((section, index) => (
        <FormSection
          key={section.id}
          index={index}
          textValue={section.textValue}
          numberValue={section.numberValue}
          isVisible={section.isVisible}
          toggleVisibility={() => toggleVisibility(section.id)}
          onTextChange={handleTextChange}
          onNumberChange={handleNumberChange}
        />
      ))}
    </div>
  );
};

export default DynamicForm;