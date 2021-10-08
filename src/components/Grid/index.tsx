import styled, { css } from 'styled-components';

const GridStyle = css`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 28px 48px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Grid = styled.div`
  ${GridStyle}
`;

export default Grid;
