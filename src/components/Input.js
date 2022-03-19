import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  ${({ width }) => width && `
    width: ${width};
  `}
  background: inherit;

  &:focus {
    outline: none;
  }
`;

export default Input;
