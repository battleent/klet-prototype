import type { AppPropsWithLayout } from '@/layouts/types';

import GlobalStyle from '@/styles/GlobalStyle';
import DefaultLayout from '@/layouts/DefaultLayout';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
