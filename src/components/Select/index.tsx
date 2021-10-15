import styled from 'styled-components';

const Select = styled.select`
  position: relative;
  padding: 14px 18px;
  background-color: white;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-size: 15px;

  option {
    color: black;
    background-color: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Select;
