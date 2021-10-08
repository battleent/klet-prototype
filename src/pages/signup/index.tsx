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

const Signup: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: { id: string; password: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text color="#343434" fontSize="32px" fontWeight="bold">
        회원가입
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
        <Stack gap={8}>
          <Label>이메일</Label>
          <Input type="email" {...register('email')} />
        </Stack>
      </Stack>
      <Spacer size={48} />
      <Stack gap={24}>
        <label>
          <input type="checkbox" />
          약관에 동의합니다.
        </label>
        <Button type="submit">회원가입</Button>
        <Link href="/login" passHref>
          <a
            style={{
              color: '#007AFF',
              textDecoration: 'underline',
              textAlign: 'center',
            }}
          >
            로그인
          </a>
        </Link>
      </Stack>
    </form>
  );
};

Signup.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

export default Signup;
