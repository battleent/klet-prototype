import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/GlobalStyle';
import DefaultLayout from '@/templates/DefaultLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const ComponentWithLayout = (
    <DefaultLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </DefaultLayout>
  );
  return <>{ComponentWithLayout}</>;
};
export default App;
