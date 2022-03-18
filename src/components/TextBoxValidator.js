import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputHeader = styled.div`
  border: 1px solid;
  display: flex;
  padding: 5px;
`;

const Input = styled.input`
  border: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const RulesContainer = styled.ul`
  border: 1px solid;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #fff;
  width: 100%;
`;

const RuleItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color || 'inherit'};
  margin-right: 5px;
`;

const TextBoxValidator = ({ rules }) => {
  const [isOpen, setIsOpen] = useState();
  const [validators, setValidators] = useState();

  const isTextError = useMemo(() => (validators && validators.filter(x => !x.isValid).length), [validators]);

  const handleOnChange = (e) => {
    const text = e.target.value;
    const arr = [];
    rules.forEach(rule => {
      const re = new RegExp(rule.expression);
      const { label } = rule;
      arr.push({
        label,
        isValid: re.test(text),
      });
    });
    setValidators(arr);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <InputHeader>
          <Input type="text" onChange={handleOnChange} />
          {/* {validators && <IconButton onClick={handleIconClick}><Icon color={isTextError ? '#d32f2f' : '#2e7d32'} icon={isTextError ? faTimesCircle : faCheckCircle} /></IconButton>} */}
          {validators && <Icon color={isTextError ? '#d32f2f' : '#2e7d32'} icon={isTextError ? faTimesCircle : faCheckCircle} onClick={handleIconClick} />}
        </InputHeader>
      </Container>
      {isOpen
        && <RulesContainer>
          {validators && validators.map((item, index) => (
            <RuleItem key={index}>
              <Icon color={!item.isValid ? '#d32f2f' : '#2e7d32'} icon={!item.isValid ? faTimesCircle : faCheckCircle} onClick={handleIconClick} />
              {item.label}
            </RuleItem>
          ))}
        </RulesContainer>
      }
    </>
  );
};

export default TextBoxValidator;
