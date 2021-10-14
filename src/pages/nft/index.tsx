import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';

import Wrapper from '@/components/Wrapper';
import Spacer from '@/components/Spacer';
import Grid from '@/components/Grid';
import Card from '@/components/Card';

import useNFT from '@/hooks/useNFT';

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

const DropDown = styled(Flex)<{ right?: string }>`
  position: absolute;
  flex-flow: column;
  right: ${(props) => (props.right ? props.right : 0)};
  top: 25px;
`;

const Input = styled.input`
  padding: 14px 24px;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 50px;
  font-size: 16px;
`;

const sortOption = [
  { id: 1, text: '최신순' },
  { id: 2, text: '오래된 순' },
  { id: 3, text: '제목 오름차순' },
  { id: 4, text: '제목 내림차순' },
];

const Nft: React.FC = () => {
  const router = useRouter();
  const cardData = useNFT();

  const [menu, setMenu] = useState({ level: false, recent: false });
  const [showCard, setShowCard] = useState(cardData);
  const [sortLevel, setSortLevel] = useState<string>();

  const { search } = router.query;
  const ntfLevel = cardData.filter(
    (item, index) => cardData.indexOf(item) === index
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.trim();

    router.push(`/nft?search=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    if (search && sortLevel) {
      return setShowCard(
        cardData.filter(
          (card) => card.name === search && card.tagName === sortLevel
        )
      );
    }
    if (search) {
      return setShowCard(
        cardData.filter((card) => card.name.includes(search as string))
      );
    }
    if (sortLevel) {
      return setShowCard(cardData.filter((card) => card.tagName === sortLevel));
    }
    return setShowCard(cardData);
  }, [search, sortLevel]);

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
          <Flex>
            <Input placeholder="검색" onChange={handleSearch} />
            <div style={{ display: 'none ' }}>
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
              {menu.level && (
                <DropDown right="100px">
                  {ntfLevel.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => setSortLevel(card.tagName)}
                    >
                      {card.tagName}
                    </div>
                  ))}
                </DropDown>
              )}
              {menu.recent && (
                <DropDown>
                  {sortOption.map((option) => (
                    <div key={option.id}>{option.text}</div>
                  ))}
                </DropDown>
              )}
            </div>
          </Flex>

          <Spacer size={40} />
          <Grid>
            {showCard.map((card) => (
              <Link key={card.id} href={`/nft/${card.id}`}>
                <a>
                  <Card
                    key={card.id}
                    tagName={card.tagName}
                    name={card.name}
                    serviceName={card.serviceName}
                    number={card.number}
                    issuedNumber={card.issuedNumber}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Nft;
