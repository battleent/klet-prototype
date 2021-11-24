import styled from 'styled-components';
import { Flex, Text } from 'rebass';

import Wrapper from '@/components/Wrapper';
import Spacer from '@/components/Spacer';
import Grid from '@/components/Grid';

import useCards from '@/hooks/useCards';

const Sidebar = styled(Flex)`
  flex-flow: column;
  width: 244px;
  padding: 80px 0;
  border-right: 1px solid #ebebeb;
  @media screen and (max-width: 500px) {
    padding: 12px 0;
    border-right: 0 none;
  }
`;

const Nft: React.FC = () => {
  const cards = useCards() || [];

  return (
    <Wrapper>
      <Flex flexDirection={['column', 'row']} flex="1">
        <Sidebar>
          <Text fontFamily="SBAggro" fontWeight="bold" fontSize="24px">
            전체
          </Text>
        </Sidebar>
        <Flex
          flexDirection={['column']}
          py={['0', '64px']}
          pl={['0', '56px']}
          flex="1"
        >
          <Spacer size={40} />
          <Grid>
            {cards.map((card) => (
              <div key={card.tokenId}>{card.tokenURI}</div>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Nft;
