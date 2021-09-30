import Link from 'next/link';

const DefaultSidebar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRight: '1px solid #EBEBEB',
        width: '244px',
      }}
    >
      <Link href="/">LCK Do Dive Sidebar</Link>
      <Link href="/login">로그인</Link>
    </div>
  );
};

export default DefaultSidebar;
