import type { NextPageWithLayout } from '@/layouts/types';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Text } from 'rebass';
import CompactLayout from '@/layouts/CompactLayout';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

const Login: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: { id: string; password: string }) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text color="#343434" fontSize="32px" fontWeight="bold">
        로그인
      </Text>
      <Spacer size={24} />
      <Stack gap={32}>
        <Stack gap={8}>
          <Label>아이디</Label>
          <Input placeholder="아이디" {...register('id')} />
        </Stack>
        <Stack gap={8}>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
          />
        </Stack>
      </Stack>
      <Spacer size={48} />
      <Stack gap={24}>
        <Button type="submit">로그인</Button>
        <Link href="/signup" passHref>
          <a
            style={{
              color: '#007AFF',
              textDecoration: 'underline',
              textAlign: 'center',
            }}
          >
            회원가입
          </a>
        </Link>
      </Stack>
    </form>
  );
};

Login.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

export default Login;
