import { Flex } from 'rebass';

import useMedia from '@/hooks/useMedia';

import Wrapper from '@/components/Wrapper';
import Spacer from '@/components/Spacer';
import UserProfile from '@/components/UserProfile';
import UserForm from '@/components/UserForm';
import WalletAddress from '@/components/WalletAddress';
import PasswordForm from '@/components/PasswordForm';
import Logout from '@/components/Logout';

/**
    <Wrapper>
      <UserProfile />
      <UserForm email={user.email} onSubmit={onUserFormSubmit}/>
      <WalletAddress />
      <PasswordForm />
    </Wrapper>
 */

const My: React.VFC = () => {
  const isDesktop = useMedia('desktop');

  return (
    <Wrapper
      style={{
        justifyContent: 'center',
        paddingTop: isDesktop ? '80px' : '32px',
        paddingBottom: '120px',
      }}
    >
      <Flex flexDirection="column" width={['', '372px']}>
        <UserProfile />
        <Spacer size={48} />
        <UserForm />
        <WalletAddress />
        <PasswordForm />
        <Logout />
      </Flex>
    </Wrapper>
  );
};

export default My;
