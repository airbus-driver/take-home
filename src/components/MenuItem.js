import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
`;

const MenuItem = ({ label, value, onClick, icon }) => {
  return (
    <Item
      value={value}
      onClick={() => onClick && onClick(value)}
    >
      {icon}
      {label}
    </Item>
  );
};

export default MenuItem;
