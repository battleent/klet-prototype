import React from 'react';
import styled from 'styled-components';

// type Data = {
//   name: string;
//   serviceName: string;
//   number: number;
//   issuedNumber: number;
// };

const Card = () => {
  return (
    <CardBox>
      <PhotoBox>
        <TagBlock>COMMON</TagBlock>
      </PhotoBox>
      <ContentBox>
        <NameBlock>The Next Level</NameBlock>
        <ServiceNameBlock>서비스명</ServiceNameBlock>
        <NumberBlock>
          <Number>#4240 </Number>
          <IssuedNumber>100,241개 발행</IssuedNumber>
        </NumberBlock>
      </ContentBox>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  display: inline-block;
  width: 197px;
  height: 350px;
  margin-right: 28px;
  background-color: #ffffff;
`;

const PhotoBox = styled.div`
  width: 197px;
  height: 244px;
  background-color: #c4c4c4;
  border-radius: 14px;
`;

const ContentBox = styled.div`
  width: 197px;
  height: 86px;
  background-color: #c4c4c4;
  margin-top: 20px;
`;

const TagBlock = styled.div`
  background-color: #ffffff;
  width: 70px;
  height: 20px;
  border-radius: 24px;
  position: absolute;
  padding: 8px 12px 4px;
`;

const NameBlock = styled.div`
  line-height: 2.6rem;
  width: 197px;
  height: 26px;
`;

const ServiceNameBlock = styled.div`
  line-height: 1.7rem;
  width: 197px;
  height: 17px;
`;

const NumberBlock = styled.div`
  line-height: 1.7rem;
  width: 197px;
  height: 21px;
  display: flex;
  flex-direction: row;
`;

const Number = styled.div`
  width: 51px;
  height: 21px;
`;

const IssuedNumber = styled.div`
  width: 100px;
  height: 20px;
  font-size: 13px;
`;
