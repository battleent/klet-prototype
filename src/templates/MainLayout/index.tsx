import DefaultHeader from '@/components/Header/DefaultHeader';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DefaultHeader />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
