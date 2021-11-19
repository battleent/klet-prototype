import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage<{ accessToken: string | null }> = ({ accessToken }) => {
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      router.replace('/nft');
    } else {
      router.push('/login/oauth2');
    }
  }, [accessToken, router]);

  return null;
};

Home.getInitialProps = async () => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  return {
    accessToken: accessToken,
  };
};

export default Home;
