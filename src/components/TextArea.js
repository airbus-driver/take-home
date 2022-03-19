import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px;
  background: inherit;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderFocus};
  }
`;

const TextArea = ({ value, onFieldChange, ...props }) => {
  return (
    <StyledTextArea
      value={value}
      {...props}
      rows={props.rows || 3}
      onChange={(e) => onFieldChange(e.target.value)}
    />
  );
};

export default TextArea;
