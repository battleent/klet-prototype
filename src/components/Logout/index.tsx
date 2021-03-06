import styled from 'styled-components';
import { Flex } from 'rebass';

const BlueUnderLine = styled.div`
  color: #007aff;
  text-decoration: underline #007aff;
`;

const Logout = () => {
  return (
    <Flex justifyContent="center" mt="32px">
      <BlueUnderLine>๋ก๊ทธ์์</BlueUnderLine>
    </Flex>
  );
};

export default Logout;
