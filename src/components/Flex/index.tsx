import styled, { css } from 'styled-components';

const FlexStyle = css`
  display: flex;
`;

export const Flex = styled.div`
  ${FlexStyle}
`;

const ColumnStyle = css`
  flex-direction: column;
`;

export const Column = styled(Flex)`
  ${ColumnStyle}
`;

export default Flex;
