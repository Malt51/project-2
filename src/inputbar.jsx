import React, { useState } from 'react';

const InputBar = ({ onInputChange, airtableData }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Pass the input value to the parent component
    onInputChange(value);

    // Filter the airtableData based on the input value
    const filteredResults = airtableData.filter(record => {
      // Customize this condition according to your search criteria
      return record.fields.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {/* Render search results */}
      <ul>
        {searchResults.map((record, index) => (
          <li key={index}>
            {/* Customize how you want to display the search results */}
            Name:{record.fields.name}
            Height :{record.fields.height}
            Mass : {record.fields.mass}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputBar;
