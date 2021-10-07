import styled from 'styled-components';

interface CardProps {
  tagName: string;
  name: string;
  serviceName: string;
  number: number;
  issuedNumber: number;
}

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

const Card: React.VFC<CardProps> = ({
  tagName,
  name,
  serviceName,
  number,
  issuedNumber,
}) => {
  return (
    <CardBox>
      <PhotoBox>
        <TagBlock>{tagName}</TagBlock>
      </PhotoBox>
      <ContentBox>
        <NameBlock>{name}</NameBlock>
        <ServiceNameBlock>{serviceName}</ServiceNameBlock>
        <NumberBlock>
          <Number>#{number} </Number>
          <IssuedNumber>{issuedNumber}개 발행</IssuedNumber>
        </NumberBlock>
      </ContentBox>
    </CardBox>
  );
};

Card.defaultProps = {
  // tagName: 'COMMON',
  // name: 'The next level',
  serviceName: '서비스명',
  // number: 4240,
  issuedNumber: 100241,
};

export default Card;
