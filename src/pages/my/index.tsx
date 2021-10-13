import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Flex, Text } from 'rebass';
import Wrapper from '@/components/Wrapper';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

import User from '@/entities/User';

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

const UserData = [
  {
    email: 'lck@battleent.com',
    id: '닉네임',
    pasword: 'password',
    nation: '한국',
    language: '한글',
    klaytnAddress: '0xe3d92072d8b9a59a0427485a1b5f459271df',
  },
];

const My: React.VFC<User> = () => {
  const { register, handleSubmit } = useForm();
  const onProfileSubmit = (data: {
    id: string;
    language: string;
    nation: string;
  }) => {
    console.log(
      `id: ${data.id}, lang: ${data.language}, nation: ${data.nation}`
    );
  };
  const onPasswordSubmit = (data: {
    exPassword: string;
    newPassword: string;
  }) => {
    console.log(
      `old password : ${data.exPassword}, new password: ${data.newPassword}`
    );
  };
  return (
    <Wrapper
      style={{
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <Flex flexDirection="column" width={['', '372px']}>
        <form onSubmit={handleSubmit(onProfileSubmit)}>
          <Flex flexDirection="column" alignItems="center">
            <Profile />
            <Text fontSize="17px" fontWeight="bold" mt="24px" mb="10px">
              {UserData[0].id}
            </Text>
            <BlueUnderLine>프로필 사진 바꾸기</BlueUnderLine>
          </Flex>
          <Spacer size={48} />
          <Stack gap={20}>
            <Stack>
              <Flex sx={{ py: '8px' }}>
                <Label>이메일</Label>
                <Text style={{ flex: 1, marginLeft: '34px' }}>
                  {UserData[0].email}
                </Text>
              </Flex>
            </Stack>
            <Stack>
              <Flex alignItems="center">
                <Label>닉네임</Label>
                <Input
                  style={{ flex: 1, marginLeft: '34px' }}
                  {...register('id')}
                />
              </Flex>
            </Stack>
            <Stack>
              <Flex alignItems="center">
                <Label>언어</Label>
                <Select
                  style={{ flex: 1, marginLeft: '46px' }}
                  {...register('language')}
                >
                  <option>한글</option>
                  <option>English</option>
                  <option>中國語</option>
                </Select>
              </Flex>
            </Stack>
            <Stack>
              <Flex alignItems="center">
                <Label>국가</Label>
                <Select
                  style={{ flex: 1, marginLeft: '46px' }}
                  {...register('nation')}
                >
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
                padding: '12px 18px',
              }}
            >
              저장
            </Button>
          </Stack>
        </form>

        <Flex
          flexDirection="column"
          py="40px"
          sx={{
            borderTop: '1px solid #EBEBEB',
            borderBottom: '1px solid #EBEBEB',
          }}
        >
          <Text color="#343434" fontSize="18px" fontWeight="bold" mb="12px">
            Wallet
          </Text>
          <Flex>
            <Label style={{ marginRight: '48px', whiteSpace: 'nowrap' }}>
              내 지갑 주소
            </Label>
            <Text
              style={{ wordBreak: 'break-all', textDecoration: 'underline' }}
            >
              {UserData[0].klaytnAddress}
            </Text>
          </Flex>
        </Flex>
        <form onSubmit={handleSubmit(onPasswordSubmit)}>
          <Flex
            flexDirection="column"
            py="40px"
            sx={{
              borderBottom: '1px solid #EBEBEB',
            }}
          >
            <Text color="#343434" fontSize="18px" fontWeight="bold">
              비밀번호 변경
            </Text>
            <Spacer size={16} />
            <Stack gap={20}>
              <Stack>
                <Flex alignItems="center">
                  <Label>기존 비밀번호</Label>
                  <Input
                    type="password"
                    style={{ flex: 1, marginLeft: '39px' }}
                    {...register('exPassword')}
                  />
                </Flex>
              </Stack>
              <Stack>
                <Flex alignItems="center">
                  <Label>새 비밀번호</Label>
                  <Input
                    type="password"
                    style={{ flex: 1, marginLeft: '52px' }}
                    {...register('newPassword')}
                  />
                </Flex>
              </Stack>
              <Stack>
                <Flex alignItems="center">
                  <Label>비밀번호 재입력</Label>
                  <Input
                    type="password"
                    style={{ flex: 1, marginLeft: '27px' }}
                  />
                </Flex>
              </Stack>
            </Stack>
            <Spacer size={40} />
            <Flex justifyContent="flex-end">
              <Button type="submit" style={{ padding: '12px 18px' }}>
                비밀번호 변경
              </Button>
            </Flex>
          </Flex>
        </form>
        <Flex justifyContent="center" mt="32px">
          <BlueUnderLine>로그아웃</BlueUnderLine>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default My;
