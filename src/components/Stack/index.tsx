import styled from 'styled-components';

interface StackProps {
  gap?: number;
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-flow: column;
  > * {
    margin-top: ${({ gap }) => gap}px;
  }
  &::before {
    content: '';
    margin-top: -${({ gap }) => gap}px;
  }
`;

export default Stack;
