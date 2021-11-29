import type { NextPageWithLayout } from '@/layouts/types';
import Link from 'next/link';

import { Text } from 'rebass';
import CompactLayout from '@/layouts/CompactLayout';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Text color="#343434" fontSize="32px" fontWeight="bold">
        로그인
      </Text>
      <Spacer size={48} />
      <Stack gap={24}>
        <Button
          as="a"
          href="https://auth.klet.ninja/oauth/authorize?client_id=klet-client&redirect_uri=https://platform.klet.ninja/oauth2/callback&response_type=code"
        >
          로그인
        </Button>
        <Link href="/signup" passHref>
          <a
            style={{
              color: '#007AFF',
              textDecoration: 'underline',
              textAlign: 'center',
            }}
          >
            회원가입(미구현)
          </a>
        </Link>
      </Stack>
    </>
  );
};

Login.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

export default Login;
