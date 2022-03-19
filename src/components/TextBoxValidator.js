import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Icon from './Icon';
import Input from './Input';
import { colors } from '../common/theme';

const InputHeader = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  padding: 5px;

  &:focus-within {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderFocus};
  }
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
    <>
      <InputHeader ref={setReferenceRef} >
        <Input width="100%" type="text" value={value} {...props} onChange={handleOnChange} />
        {validators && <Icon color={isTextError ? colors.negative : colors.positive} icon={isTextError ? faTimesCircle : faCheckCircle} onClick={handleIconClick} />}
      </InputHeader>
      {isOpen
      && <Menu el={referenceRef} onClose={handleClose}>
        {validators && validators.map((item, index) => (
          <MenuItem
            key={`tbv-${index}`}
            label={item.label}
            startIcon={
              <Icon
                color={!item.isValid ? colors.negative : colors.positive}
                icon={!item.isValid ? faTimesCircle : faCheckCircle}
              />
            }
          />
        ))}
      </Menu>
      }
    </>
  );
};

export default TextBoxValidator;
