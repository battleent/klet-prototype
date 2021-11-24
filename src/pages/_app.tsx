import { useLayoutEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';

import Client from '@/modules/apolloClient';
import type { AppPropsWithLayout } from '@/layouts/types';
import DefaultLayout from '@/layouts/DefaultLayout';

import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const router = useRouter();
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  useLayoutEffect(() => {
    const accessToken =
      typeof window !== 'undefined'
        ? localStorage.getItem('access_token')
        : null;

    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);

  return (
    <ApolloProvider client={Client}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default App;
