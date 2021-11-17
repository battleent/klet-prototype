import { Flex } from 'rebass';

import useMedia from '@/hooks/useMedia';
import useUserData from '@/hooks/useUserData';

import Wrapper from '@/components/Wrapper';
import Spacer from '@/components/Spacer';
import UserProfile from '@/components/UserProfile';
import UserForm from '@/components/UserForm';
import WalletAddress from '@/components/WalletAddress';
import PasswordForm from '@/components/PasswordForm';
import Logout from '@/components/Logout';

const My: React.VFC = () => {
  const isDesktop = useMedia('desktop');
  const userData = useUserData();

  return (
    <Wrapper
      style={{
        justifyContent: 'center',
        paddingTop: isDesktop ? '80px' : '32px',
        paddingBottom: '120px',
      }}
    >
      <Flex flexDirection="column" width={['', '372px']}>
        <Spacer size={48} />
        <UserProfile userData={userData} />
        <UserForm userData={userData} />
        <WalletAddress userData={userData} />
        <PasswordForm />
        <Logout />
      </Flex>
    </Wrapper>
  );
};

export default My;
