import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.ul`
  border: 1px solid;
  padding: 0;
  margin: 0;
  background-color: #fff;
  width: 100%;
`;

const CheckBoxItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  padding: 0;
  margin-right: 5px;

  &:focus {
    outline: none;
  }
`;

const CheckBoxList = ({ options, value, onFieldChange, ...props }) => {
  const { name } = props;
  const [selectedValues, setSelectedValues] = useState(value);

  const handleOnChange = (e) => {
    const val = e.target.value;
    let arr = [];
    if (selectedValues.includes(val)) {
      arr = selectedValues.filter(s => s !== val);
    } else {
      arr = [...selectedValues, val];
    }
    setSelectedValues(arr);
    onFieldChange(arr);
  };

  return (
    <CheckBoxContainer>
      {options.map((item, index) => (
        <CheckBoxItem key={`cbl-${item.value}-${index}`} value={item.value}>
          <Input name={`${name}.${item.value}`} type="checkbox" value={item.value} checked={selectedValues && selectedValues.includes(item.value)} onChange={handleOnChange} />
          <label>{item.label}</label>
        </CheckBoxItem>
      ))}
    </CheckBoxContainer>
  );
};

export default CheckBoxList;
