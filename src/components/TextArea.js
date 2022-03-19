import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  padding: 5px;
`;

const TextArea = ({ value, onFieldChange, ...props }) => {
  return (
    <StyledTextArea
      value={value}
      {...props}
      onChange={(e) => onFieldChange(e.target.value)}
    />
  );
};

export default TextArea;
