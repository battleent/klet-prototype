import styled from 'styled-components';

import { Flex, Text } from 'rebass';
import Wrapper from '@/components/Wrapper';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

const Profile = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const My: React.FC = () => {
  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Flex flexDirection="column">
        <Spacer size={80} />
        <Flex flexDirection="column" alignItems="center">
          <Profile />
          <Text fontSize="17px" fontWeight="600" mt="24px">
            Your Id
          </Text>
          <div>프로필 사진 바꾸기</div>
        </Flex>
        <Spacer size={48} />
        <Stack gap={20}>
          <Stack>
            <Flex sx={{ py: '8px' }}>
              <Label>이메일</Label>
              <Text style={{ flex: 1, marginLeft: '30px' }}>
                lckdodive@battleent.com
              </Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex alignItems="center">
              <Label>닉네임</Label>
              <Input style={{ flex: 1, marginLeft: '30px' }} />
            </Flex>
          </Stack>
          <Stack>
            <Flex alignItems="center">
              <Label>언어</Label>
              <Select style={{ flex: 1, marginLeft: '43px' }}>
                <option>한글</option>
                <option>English</option>
                <option>中國語</option>
              </Select>
            </Flex>
          </Stack>
          <Stack>
            <Flex alignItems="center">
              <Label>국가</Label>
              <Select style={{ flex: 1, marginLeft: '43px' }}>
                <option>한국</option>
                <option>US</option>
                <option>CHINA</option>
                <option>UK</option>
              </Select>
            </Flex>
          </Stack>
          <Button
            style={{
              marginLeft: 'auto',
              marginTop: '48px',
              marginBottom: '40px',
            }}
          >
            저장
          </Button>
        </Stack>

        <Flex
          flexDirection="column"
          py="40px"
          sx={{
            borderTop: '1px solid #EBEBEB',
            borderBottom: '1px solid #EBEBEB',
          }}
        >
          <Text fontWeight="700" fontSize="18px" mb="12px">
            Wallet
          </Text>
          <Flex>
            <Label style={{ marginRight: '48px' }}>내 지갑 주소</Label>
            <Text>0xe3d92072d8b9a59a0427485a1b5f459271df</Text>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default My;
