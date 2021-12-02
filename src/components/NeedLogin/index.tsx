import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useSession from '@/hooks/useSession';

interface NeedLoginProps {
  checkLoginPath?: string;
}

const NeedLogin: React.FC<NeedLoginProps> = ({
  checkLoginPath = '/login',
  children,
}) => {
  const router = useRouter();
  const { isLoaded, loggedOut } = useSession();

  useEffect(() => {
    if (loggedOut && !isLoaded && router.pathname !== checkLoginPath) {
      router.push('/login');
    }
  }, [loggedOut, router]);

  return <>{children}</>;
};
export default NeedLogin;
