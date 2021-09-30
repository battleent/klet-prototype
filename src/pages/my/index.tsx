import styled from 'styled-components';

import Flex, { Column } from '@/components/Flex';
import Grid from '@/components/Grid';

import useMedia from '@/hooks/useMedia';

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const TabFlex = styled(Flex)`
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Tab = styled(Flex)`
  justify-content: space-around;
`;

const cardData = [
  { id: 1, text: '페이커' },
  { id: 2, text: '쇼메이커' },
  { id: 3, text: '클리드' },
  { id: 4, text: '칸나' },
  { id: 5, text: '구마유시' },
  { id: 6, text: '케리아' },
  { id: 7, text: '쵸비' },
  { id: 8, text: '기인' },
  { id: 9, text: '룰러' },
];

const My: React.FC = () => {
  const isDesktop = useMedia('desktop');
  return (
    <Column>
      <Tab>
        <div>전체</div>
        <div>서비스명 #1</div>
        <div>서비스명 #2</div>
      </Tab>
      {!isDesktop && <input placeholder="검색" />}

      <div>183개 카드</div>
      <TabFlex>
        {isDesktop && <input placeholder="검색" />}
        <Flex>
          <span style={{ marginRight: '10px' }}>NFT 등급</span>
          <span>최신순부터</span>
        </Flex>
      </TabFlex>
      <Grid>
        {cardData.map((card) => (
          <Item key={card.id}>{card.text}</Item>
        ))}
      </Grid>
    </Column>
  );
};

export default My;
