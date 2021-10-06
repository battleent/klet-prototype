import { useRouter } from 'next/router';

import MainLayout from '@/layouts/MainLayout';
import CompactLayout from '@/layouts/CompactLayout';

const DefaultLayout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.asPath === '/login' ? (
        <CompactLayout>{children}</CompactLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default DefaultLayout;
