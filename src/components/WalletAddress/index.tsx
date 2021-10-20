import { Flex, Text } from 'rebass';

import Label from '@/components/Label';

import useUserData from '@/hooks/useUserData';

const WalletAddress = () => {
  const userData = useUserData();
  return (
    <Flex
      flexDirection="column"
      py="40px"
      sx={{
        borderTop: '1px solid #EBEBEB',
        borderBottom: '1px solid #EBEBEB',
      }}
    >
      <Text color="#343434" fontSize="18px" fontWeight="bold" mb="12px">
        Wallet
      </Text>
      <Flex flexDirection={['column', 'row']}>
        <Label style={{ marginRight: '48px', whiteSpace: 'nowrap' }}>
          내 지갑 주소
        </Label>
        <Text
          style={{ wordBreak: 'break-all', textDecoration: 'underline' }}
          mt={['5px', '0']}
        >
          {userData[0].klaytnAddress}
        </Text>
      </Flex>
    </Flex>
  );
};

export default WalletAddress;
