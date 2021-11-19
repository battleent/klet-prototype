import Link from 'next/link';

import Wrapper from '@/components/Wrapper';

const DefaultHeader: React.FC = () => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
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
          {accessToken ? (
            <Link href="/my">내 정보</Link>
          ) : (
            <Link href="https://auth.klet.ninja/oauth/authorize?client_id=klet-client&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code">
              로그인
            </Link>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default DefaultHeader;
