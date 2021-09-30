import styled, { css } from 'styled-components';

const GridStyle = css`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
`;

export const Grid = styled.div`
  ${GridStyle}
`;

export default Grid;
