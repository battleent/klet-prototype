import { ApolloProvider } from '@apollo/client';

import Client from '@/modules/apolloClient';
import type { AppPropsWithLayout } from '@/layouts/types';
import DefaultLayout from '@/layouts/DefaultLayout';
import NeedLogin from '@/components/NeedLogin';

import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ApolloProvider client={Client}>
      <GlobalStyle />
      <NeedLogin>{getLayout(<Component {...pageProps} />)}</NeedLogin>
    </ApolloProvider>
  );
};

export default App;
