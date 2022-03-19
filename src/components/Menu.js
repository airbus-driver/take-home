import React, { useState } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';

import useClickOutside from '../hooks';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  list-style: none;
`;

const Menu = ({ el, children, onClose }) => {
  const [popperRef, setPopperRef] = useState(null);
  const { styles, attributes } = usePopper(el, popperRef, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const handleClickOutside = (isOutside) => {
    if (isOutside) {
      onClose();
    }
  };

  useClickOutside(popperRef, el, handleClickOutside);

  return (
    <Container ref={setPopperRef} style={styles.popper} {...attributes.popper}>
      {children}
    </Container>
  );
};

export default Menu;
