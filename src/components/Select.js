import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCaretDown, faCaretUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Icon from './Icon';

const Container = styled.div`
  width: 150px;
  cursor: default;
`;

const SelectHeader = styled.div`
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const Select = ({ options, value, onFieldChange }) => {
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
    <Container>
      <SelectHeader onClick={() => setIsOpen(!isOpen)} ref={setReferenceRef}>
        <span>{selectedOption.label}</span>
        <FontAwesomeIcon icon={!isOpen ? faCaretDown : faCaretUp } />
      </SelectHeader>
      {isOpen
        && <Menu el={referenceRef} onClose={handleClose}>
          {options.map((item, index) => (
            <MenuItem
              key={`select-${item.value}-${index}`}
              label={item.label}
              value={item.value}
              onClick={handleClick}
              icon={item.value === selectedValue && <Icon icon={faCheck} />}
            />
          ))}
        </Menu>
      }
    </Container>
  );
};

export default Select;
