import styled from 'styled-components';
import { Flex } from 'rebass';

const BlueUnderLine = styled.div`
  color: #007aff;
  text-decoration: underline #007aff;
`;

const Logout = () => {
  return (
    <Flex justifyContent="center" mt="32px">
      <BlueUnderLine>로그아웃</BlueUnderLine>
    </Flex>
  );
};

export default Logout;
