import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useSession from '@/hooks/useSession';

interface NeedLoginProps {
  loginPath?: string;
}

const NeedLogin: React.FC<NeedLoginProps> = ({
  loginPath = '/login',
  children,
}) => {
  const router = useRouter();
  const { isLoaded, loggedOut } = useSession();

  useEffect(() => {
    if (loggedOut && !isLoaded && router.pathname !== loginPath) {
      router.push(loginPath);
    }
  }, [isLoaded, loggedOut, loginPath, router]);

  return <>{children}</>;
};
export default NeedLogin;
