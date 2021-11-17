import { useForm } from 'react-hook-form';
import { Flex, Text } from 'rebass';

import useMedia from '@/hooks/useMedia';

import Input from '@/components/Input';
import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

interface PasswordData {
  password: string;
  newPassword: string;
}

const onPasswordSubmit = (data: { password: string; newPassword: string }) => {
  console.log(
    `old password : ${data.password}, new password: ${data.newPassword}`
  );
};

const PasswordForm = () => {
  const isDesktop = useMedia('desktop');
  const { register: registerPw, handleSubmit: handleSubmitPw } =
    useForm<PasswordData>();
  return (
    <form onSubmit={handleSubmitPw(onPasswordSubmit)}>
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
            <Flex
              alignItems={['flex-start', 'center']}
              flexDirection={['column', 'row']}
            >
              <Label>기존 비밀번호</Label>
              <Input
                type="password"
                style={{
                  flex: 1,
                  width: isDesktop ? '' : '100%',
                  marginLeft: isDesktop ? '39px' : '0',
                  marginTop: isDesktop ? '0' : '12px',
                }}
                {...registerPw('password')}
              />
            </Flex>
          </Stack>
          <Stack>
            <Flex
              alignItems={['flex-start', 'center']}
              flexDirection={['column', 'row']}
            >
              <Label>새 비밀번호</Label>
              <Input
                type="password"
                style={{
                  flex: 1,
                  width: isDesktop ? '' : '100%',
                  marginLeft: isDesktop ? '52px' : '0',
                  marginTop: isDesktop ? '0' : '12px',
                }}
                {...registerPw('newPassword')}
              />
            </Flex>
          </Stack>
          <Stack>
            <Flex
              alignItems={['flex-start', 'center']}
              flexDirection={['column', 'row']}
            >
              <Label>비밀번호 재입력</Label>
              <Input
                type="password"
                style={{
                  flex: 1,
                  width: isDesktop ? '' : '100%',
                  marginLeft: isDesktop ? '27px' : '0',
                  marginTop: isDesktop ? '0' : '12px',
                }}
              />
            </Flex>
          </Stack>
        </Stack>
        <Spacer size={40} />
        <Flex justifyContent="flex-end">
          <Button
            type="submit"
            style={{ padding: '12px 18px', flex: isDesktop ? '' : 1 }}
          >
            비밀번호 변경
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default PasswordForm;
