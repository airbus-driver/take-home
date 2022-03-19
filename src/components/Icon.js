import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color || 'inherit'};
  margin-right: 5px;
`;

const Icon = ({ color, icon, ...props }) => {
  return (
    <StyledIcon color={color} icon={icon} {...props} />
  );
};

export default Icon;
