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
          <Link href="/nft">NFT Platform</Link>
          <Link href="/login">로그인</Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default DefaultHeader;
