import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 20px;
  width: 500px;
  //border: 1px solid;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Card = ({ title, children }) => {
  return (
    <StyledCard>
      <h4>{title}</h4>
      {children}
    </StyledCard>
  );
};

export default Card;
