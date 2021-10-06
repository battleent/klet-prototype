import Link from 'next/link';

const DefaultHeader: React.FC = () => {
  return (
    <div
      style={{
        borderBottom: '1px solid #E8E8E8',
        height: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1180px',
          margin: '0 auto',
          height: '100%',
        }}
      >
        <Link href="/">NFT Platform</Link>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default DefaultHeader;
