import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '@/templates/DefaultLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const ComponentWithLayout = (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
  return <>{ComponentWithLayout}</>;
};
export default App;
