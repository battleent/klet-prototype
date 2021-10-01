import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Flex, { Column } from '@/components/Flex';
import Grid from '@/components/Grid';
import Card from '@/components/Card';

import useMedia from '@/hooks/useMedia';

const TabFlex = styled(Flex)`
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Tab = styled(Flex)`
  justify-content: space-around;
`;

const DropDown = styled(Column)<{ right?: string }>`
  position: absolute;
  right: ${(props) => (props.right ? props.right : 0)};
  top: 25px;
`;

const sortOption = [
  { id: 1, text: '최신순' },
  { id: 2, text: '오래된 순' },
  { id: 3, text: '제목 오름차순' },
  { id: 4, text: '제목 내림차순' },
];

const cardData = [
  {
    id: 1,
    tagName: '1',
    name: 'Faker',
    serviceName: '1',
    number: 1,
    issuedNumber: 1,
  },
  {
    id: 2,
    tagName: '2',
    name: 'Clid',
    serviceName: '2',
    number: 2,
    issuedNumber: 2,
  },
  {
    id: 3,
    tagName: '3',
    name: 'Keria',
    serviceName: '3',
    number: 3,
    issuedNumber: 3,
  },
  {
    id: 4,
    tagName: '4',
    name: 'ShowMaker',
    serviceName: '4',
    number: 4,
    issuedNumber: 4,
  },
  {
    id: 5,
    tagName: '5',
    name: 'Ruler',
    serviceName: '5',
    number: 5,
    issuedNumber: 5,
  },
  {
    id: 6,
    tagName: '6',
    name: 'Khan',
    serviceName: '6',
    number: 6,
    issuedNumber: 6,
  },
  {
    id: 7,
    tagName: '7',
    name: 'Chovy',
    serviceName: '7',
    number: 7,
    issuedNumber: 7,
  },
];

const Nft: React.FC = () => {
  const isDesktop = useMedia('desktop');
  const [menu, setMenu] = useState({ level: false, recent: false });
  const ntfLevel = cardData.filter(
    (item, index) => cardData.indexOf(item) === index
  );

  return (
    <Column>
      {!isDesktop && (
        <>
          <Tab>
            <div>전체</div>
            <div>서비스명 #1</div>
            <div>서비스명 #2</div>
          </Tab>
          <input placeholder="검색" />
        </>
      )}

      <div>{cardData.length}개 카드</div>
      <TabFlex>
        {isDesktop && <input placeholder="검색" />}
        <Flex>
          <span
            style={{ marginRight: '10px' }}
            onClick={() =>
              setMenu((defaultMenu) => ({
                ...defaultMenu,
                level: !defaultMenu.level,
              }))
            }
          >
            NFT 등급
          </span>
          <span
            onClick={() =>
              setMenu((defaultMenu) => ({
                ...defaultMenu,
                recent: !defaultMenu.recent,
              }))
            }
          >
            최신순부터
          </span>
        </Flex>
        {menu.level && (
          <DropDown right="100px">
            {ntfLevel.map((card) => (
              <div>{card.tagName}</div>
            ))}
          </DropDown>
        )}
        {menu.recent && (
          <DropDown>
            {sortOption.map((option) => (
              <div>{option.text}</div>
            ))}
          </DropDown>
        )}
      </TabFlex>
      <Grid>
        {cardData.map((card) => (
          <Card
            key={card.id}
            tagName={card.tagName}
            name={card.name}
            serviceName={card.serviceName}
            number={card.number}
            issuedNumber={card.issuedNumber}
          />
        ))}
      </Grid>
    </Column>
  );
};

export default Nft;
