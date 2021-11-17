import { ApolloProvider } from '@apollo/client';

import Client from '@/modules/apolloClient';
import type { AppPropsWithLayout } from '@/layouts/types';
import DefaultLayout from '@/layouts/DefaultLayout';

import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ApolloProvider client={Client}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default App;
