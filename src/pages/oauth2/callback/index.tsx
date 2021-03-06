import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Callback: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  useEffect(() => {
    fetch(
      `https://api-platform.klet.ninja/oauth2/callback?code=${code}&redirectUri=${origin}/oauth2/callback`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return console.log('error');
      })
      .then((response) => {
        localStorage.setItem('access_token', response?.access_token);
        router.replace('/nft');
      });
  }, [code, router]);

  return null;
};

export default Callback;
