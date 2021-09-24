import type { AppProps } from 'next/app';
import DefaultLayout from '@/templates/DefaultLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const ComponentWithLayout = (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
  return (
    <div>
      {ComponentWithLayout}
    </div>
  )
}
export default App;
