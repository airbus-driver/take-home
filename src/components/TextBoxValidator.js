import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Icon from './Icon';
import { theme } from '../common/theme';

const InputHeader = styled.div`
  border: 1px solid;
  display: flex;
  padding: 5px;
`;

const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const TextBoxValidator = ({ validationRules, value, onFieldChange, ...props }) => {
  const [referenceRef, setReferenceRef] = useState(null);
  const [isOpen, setIsOpen] = useState();
  const [validators, setValidators] = useState();

  const isTextError = useMemo(() => (validators && validators.filter(x => !x.isValid).length), [validators]);

  const handleOnChange = (e) => {
    const val = e.target.value;
    const arr = [];
    validationRules.forEach(rule => {
      const re = new RegExp(rule.expression);
      const { label } = rule;
      arr.push({
        label,
        isValid: re.test(val),
      });
    });
    setValidators(arr);
    onFieldChange(val);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <InputHeader ref={setReferenceRef} >
        <Input type="text" value={value} {...props} onChange={handleOnChange} />
        {validators && <Icon color={isTextError ? '#d32f2f' : '#2e7d32'} icon={isTextError ? faTimesCircle : faCheckCircle} onClick={handleIconClick} />}
      </InputHeader>
      {isOpen
      && <Menu el={referenceRef} onClose={handleClose}>
        {validators && validators.map((item, index) => (
          <MenuItem
            key={`tbv-${index}`}
            label={item.label}
            icon={
              <Icon
                color={!item.isValid ? theme.colors.negative : theme.colors.positive}
                icon={!item.isValid ? faTimesCircle : faCheckCircle}
              />
            }
          />
        ))}
      </Menu>
      }
    </Container>
  );
};

export default TextBoxValidator;
