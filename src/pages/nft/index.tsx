import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';

import Wrapper from '@/components/Wrapper';
import Spacer from '@/components/Spacer';
import Grid from '@/components/Grid';
import Card from '@/components/Card';
import Sort from '@/components/Sort';

import useNFTList, { NFTCard } from '@/hooks/useNFTList';
import useSearch from '@/hooks/useSearch';

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

const Input = styled.input`
  padding: 14px 24px;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 50px;
  font-size: 16px;
`;

const sortOption = [
  { text: '최신순', value: 'recent' },
  { text: '오래된 순', value: 'old' },
  { text: '제목 오름차순', value: 'asc' },
  { text: '제목 내림차순', value: 'des' },
];

const Nft: React.FC = () => {
  const cardData = useNFTList();

  const { searchItem, handleSearch } = useSearch<NFTCard>();

  const searchedData = searchItem(cardData);
  const [sort, setSort] = useState(sortOption[0]);

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
            <div style={{ display: 'none' }}>
              <Sort
                options={sortOption}
                defaultValue={sort}
                onChange={setSort}
              />
            </div>
          </Flex>

          <Spacer size={40} />
          <Grid>
            {searchedData.map((card) => (
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
