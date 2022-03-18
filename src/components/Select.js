import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCaretDown, faCaretUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  width: 150px;
  cursor: pointer;
`;

const SelectHeader = styled.div`
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const SelectListContainer = styled.ul`
  border: 1px solid;
  padding: 0;
  margin: 0;
`;

const SelectListItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const CheckIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

const ListItem = ({
  label, value, isChecked,
  onClick,
}) => (
  <SelectListItem onClick={() => onClick(value)}>
    {label}
    {isChecked && <CheckIcon icon={faCheck} />}
  </SelectListItem>
);

const Select = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(null);

  const selectedOption = useMemo(() => (options.find((x) => x.value === selectedValue)), [options, selectedValue]);

  const handleClick = (v) => {
    onChange(v);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectHeader onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption.label}</span>
        <FontAwesomeIcon icon={!isOpen ? faCaretDown : faCaretUp } />
        <input type="hidden" value={selectedValue} />
      </SelectHeader>
      {isOpen
        && <SelectListContainer>
          {options.map((item, index) => (
            <ListItem key={index} label={item.label} value={item.value} isChecked={item.value === selectedValue} onClick={handleClick} />
          ))}
        </SelectListContainer>
      }
    </Container>
  );
};

export {
  Select,
  ListItem,
};
