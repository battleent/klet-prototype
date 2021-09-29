import DefaultSidebar from '@/components/Sidebar/DefaultSidebar';
import DefaultFooter from '@/components/Header/DefaultFooter';

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <DefaultSidebar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ flex: '1' }}>{children}</div>
        <DefaultFooter />
      </div>
    </div>
  );
};

export default SidebarLayout;
