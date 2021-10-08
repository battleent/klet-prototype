import { Flex } from 'rebass';
import DefaultHeader from '@/components/Header/DefaultHeader';

const CompactLayout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100%">
      <DefaultHeader />
      <Flex
        as="main"
        flexDirection="column"
        flex={1}
        alignItems="center"
        py={['0', '64px']}
        bg={['white', '#e5e5e5']}
      >
        <Flex
          flexDirection="column"
          p={['56px 24px', '40px']}
          backgroundColor="white"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompactLayout;
