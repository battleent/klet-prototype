import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Callback: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    fetch(
      `https://api-platform.klet.ninja/oauth2/callback?code=${code}&redirectUri=http://localhost:3000/oauth2/callback`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Error');
      })
      .then((response) => {
        localStorage.setItem('access_token', response?.access_token);
        router.replace('/');
      });
  }, [code, router]);

  return null;
};

export default Callback;
