import styled from 'styled-components';
import { useRouter } from 'next/router';
import Flex, { Column } from '@/components/Flex';

const TagBlock = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid gray;
  padding: 4px 12px;
  color: #999999;
  margin-right: auto;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 14px;
`;

const Button = styled.button<{ background?: string; color?: string }>`
  padding: 15px 24px;
  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  color: ${(props) => (props.color ? props.color : 'black')};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 32px;
`;

const cardData = [
  {
    id: 1,
    tagName: 'Common',
    name: 'T1 Faker',
    serviceName: '1',
    number: 1,
    issuedNumber: 13,
  },
  {
    id: 2,
    tagName: 'Rare',
    name: 'GenG Clid',
    serviceName: '2',
    number: 2,
    issuedNumber: 22,
  },
  {
    id: 3,
    tagName: 'Common',
    name: 'T1 Keria',
    serviceName: '3',
    number: 3,
    issuedNumber: 66,
  },
  {
    id: 4,
    tagName: 'Common',
    name: 'DWG ShowMaker',
    serviceName: '4',
    number: 4,
    issuedNumber: 15,
  },
  {
    id: 5,
    tagName: 'Rare',
    name: 'GenG Ruler',
    serviceName: '5',
    number: 5,
    issuedNumber: 92,
  },
  {
    id: 6,
    tagName: 'Common',
    name: 'DWG Khan',
    serviceName: '6',
    number: 6,
    issuedNumber: 101,
  },
  {
    id: 7,
    tagName: 'Rare',
    name: 'HLE Chovy',
    serviceName: '7',
    number: 7,
    issuedNumber: 100,
  },
];

const NftItems: React.VFC = () => {
  const router = useRouter();
  const { nftId } = router.query;
  const nftCard = cardData.find((item) => item.id === Number(nftId));
  console.log(nftCard);
  return (
    <div style={{ width: '972px', margin: 'auto' }}>
      <Flex style={{ marginTop: '72px' }}>
        <div
          style={{
            width: '272px',
            height: '272px',
            backgroundColor: 'gray',
            borderRadius: '18px',
          }}
        />
        <Column
          style={{
            marginLeft: '48px',
            justifyContent: 'space-between',
            flex: '1',
          }}
        >
          <TagBlock>{nftCard?.tagName}</TagBlock>
          <Title>{nftCard?.name}</Title>
          <div style={{ color: 'gray' }}>{nftCard?.serviceName}</div>
          <Flex style={{ alignItems: 'center', marginTop: '40px' }}>
            <Column>
              <div style={{ fontSize: '24px' }}>#{nftCard?.number}</div>
              <div>{nftCard?.issuedNumber}개 발행</div>
            </Column>
            <Flex style={{ marginLeft: 'auto', alignItems: 'center' }}>
              <div>카드 상세보기</div>
              <Button>선물하기</Button>
              <Button color="white" background="black">
                판매하기
              </Button>
            </Flex>
          </Flex>
        </Column>
      </Flex>
      <div style={{ marginTop: '64px', marginBottom: '24px' }}>속성정보</div>
      <Grid>
        <Column>
          <div>League</div>
          <div>LCK</div>
        </Column>
        <Column>
          <div>Player</div>
          <div>FAKER</div>
        </Column>
        <Column>
          <div>Sets</div>
          <div>2022 LCK SPRING PLAYOFFS</div>
        </Column>
        <Column>
          <div>Series</div>
          <div>2022</div>
        </Column>
        <Column>
          <div>Champion</div>
          <div>Irelia</div>
        </Column>
        <Column>
          <div>Play</div>
          <div>Triple Kill</div>
        </Column>
        <Column>
          <div>Gamedate</div>
          <div>20220315</div>
        </Column>
        <Column>
          <div>Matchcount</div>
          <div>15</div>
        </Column>
        <Column>
          <div>Setcount</div>
          <div>1</div>
        </Column>
      </Grid>
    </div>
  );
};

export default NftItems;
