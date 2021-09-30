import styled from 'styled-components';
import Flex, { Column } from '@/components/Flex';
import Grid from '@/components/Grid';

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
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

const User: React.FC = () => {
  return (
    <Column>
      <div>183개 카드</div>
      <Flex>
        <input placeholder="검색" />
        <Flex>
          <span>NFT 등급</span>
          <span>최신순부터</span>
        </Flex>
      </Flex>
      <Grid>
        {cardData.map((card) => (
          <Item>{card.text}</Item>
        ))}
      </Grid>
    </Column>
  );
};

export default User;
