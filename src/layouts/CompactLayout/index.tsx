import DefaultHeader from '@/components/Header/DefaultHeader';

const CompactLayout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DefaultHeader />
      <div style={{ display: 'flex', flex: 1 }}>{children}</div>
    </div>
  );
};

export default CompactLayout;
