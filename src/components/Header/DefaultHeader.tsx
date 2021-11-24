import Link from 'next/link';

import Wrapper from '@/components/Wrapper';

const DefaultHeader: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottom: '1px solid #E8E8E8',
        height: '80px',
      }}
    >
      <Wrapper>
        <div
          style={{
            display: 'flex',
            flex: '1',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/">NFT Platform</Link>
          <Link href="/my">내 정보</Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default DefaultHeader;
