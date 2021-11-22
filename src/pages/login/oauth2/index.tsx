import Link from 'next/link';

const Ouath2Login: React.VFC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>로그인이 필요한 페이지입니다. 로그인을 위해 이동해주세요</div>
      <div style={{ fontSize: '30px' }}>
        <Link href="https://auth.klet.ninja/oauth/authorize?client_id=klet-client&redirect_uri=http://localhost:3000/oauth2/callback&response_type=code">
          로그인하러 가기
        </Link>
      </div>
    </div>
  );
};

export default Ouath2Login;
