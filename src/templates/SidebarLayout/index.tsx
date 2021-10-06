import DefaultHeader from '@/components/Header/DefaultHeader';
import DefaultSidebar from '@/components/Sidebar/DefaultSidebar';

import useMedia from '@/hooks/useMedia';

const SidebarLayout: React.FC = ({ children }) => {
  const isDesktop = useMedia('desktop');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DefaultHeader />
      <div style={{ display: 'flex', flex: 1 }}>
        {isDesktop && <DefaultSidebar />}
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
