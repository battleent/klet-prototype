import Link from 'next/link';

const DefaultHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
        height: '60px',
      }}
    >
      <Link href="/">LCK Do Dive Header</Link>
      <Link href="/login">로그인</Link>
    </div>
  );
};

export default DefaultHeader;
