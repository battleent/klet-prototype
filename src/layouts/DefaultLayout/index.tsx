import DefaultHeader from '@/components/Header/DefaultHeader';
import { Flex } from 'rebass';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100%">
      <DefaultHeader />
      <Flex as="main" flex={1}>
        {children}
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
