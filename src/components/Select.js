import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Icon from './Icon';

const SelectHeader = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  &:focus-within {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderFocus};
  }
`;

const Select = ({ options, value, onFieldChange, ...props }) => {
  const { tabIndex } = props;
  const [referenceRef, setReferenceRef] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [selectedValue, setSelectedValue] = useState(value);

  const selectedOption = useMemo(() => (options.find((x) => x.value === selectedValue)), [options, selectedValue]);

  const handleClick = (val) => {
    setSelectedValue(val);
    setIsOpen(false);
    onFieldChange(val);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SelectHeader onClick={() => setIsOpen(!isOpen)} ref={setReferenceRef} tabIndex={tabIndex}>
        <span>{selectedOption.label}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </SelectHeader>
      {isOpen
        && <Menu el={referenceRef} onClose={handleClose}>
          {options.map((item, index) => (
            <MenuItem
              key={`select-${item.value}-${index}`}
              label={item.label}
              value={item.value}
              onClick={handleClick}
              endIcon={item.value === selectedValue && <Icon icon={faCheck} />}
            />
          ))}
        </Menu>
      }
    </>
  );
};

export default Select;
