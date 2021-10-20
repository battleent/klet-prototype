import { useForm } from 'react-hook-form';
import { Flex, Text } from 'rebass';

import useMedia from '@/hooks/useMedia';

import Input from '@/components/Input';
import Select from '@/components/Select';
import Label from '@/components/Label';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

interface ProfileData {
  email: string;
  nickName: string;
  language: string;
  nation: string;
  klaytnAddress: string;
}

const UserData = [
  {
    email: 'lck@battleent.com',
    nickName: 'LCK',
    language: '한글',
    nation: '한국',
    klaytnAddress: '0xe3d92072d8b9a59a0427485a1b5f459271df',
  },
];

const onProfileSubmit = (data: {
  nickName: string;
  language: string;
  nation: string;
}) => {
  console.log(
    `id: ${data.nickName}, lang: ${data.language}, nation: ${data.nation}`
  );
};

const UserForm = () => {
  const isDesktop = useMedia('desktop');
  const defaultValues = UserData[0];
  const { register, handleSubmit } = useForm<ProfileData>({ defaultValues });
  return (
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
            {...register('nickName')}
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

      <Flex justifyContent="flex-end" mt={['48px', '40px']} mb="40px">
        <Button
          type="submit"
          style={{ padding: '12px 18px', flex: isDesktop ? '' : 1 }}
        >
          저장
        </Button>
      </Flex>
    </Stack>
  );
};

export default UserForm;
