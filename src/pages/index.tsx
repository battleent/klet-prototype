import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nft');
  }, [router]);

  return null;
};

export default Home;
