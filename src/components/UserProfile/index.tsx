import styled from 'styled-components';
import { Flex, Text } from 'rebass';

import useUserData from '@/hooks/useUserData';

const Profile = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const BlueUnderLine = styled.div`
  color: #007aff;
  text-decoration: underline #007aff;
`;

const UserProfile = () => {
  const userData = useUserData();

  return (
    <Flex flexDirection="column" alignItems="center">
      <Profile />
      <Text fontSize="17px" fontWeight="bold" mt="24px" mb="10px">
        {userData[0].nickName}
      </Text>
      <BlueUnderLine>프로필 사진 바꾸기</BlueUnderLine>
    </Flex>
  );
};

export default UserProfile;
