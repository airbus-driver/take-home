import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: default;
`;

const StartIcon = styled.span`
  margin-right: 5px;
`;

const EndIcon = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-left: 5px;
`;
const MenuItem = ({ label, value, onClick, startIcon, endIcon }) => {
  return (
    <Item
      value={value}
      onClick={() => onClick && onClick(value)}
    >
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      {label}
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </Item>
  );
};

export default MenuItem;
