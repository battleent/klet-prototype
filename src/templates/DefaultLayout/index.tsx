import { useRouter } from 'next/router';

import MainLayout from '@/templates/MainLayout';
import SidebarLayout from '@/templates/SidebarLayout';

const DefaultLayout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.asPath === '/login' ? (
        <SidebarLayout>{children}</SidebarLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default DefaultLayout;
