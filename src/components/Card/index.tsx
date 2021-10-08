import styled from 'styled-components';

interface CardProps {
  tagName: string;
  name: string;
  serviceName: string;
  number: number;
  issuedNumber: number;
}

const CardBox = styled.div`
  width: 100%;
  display: inline-block;
  height: 350px;
  background-color: #ffffff;
`;

const PhotoBox = styled.div`
  position: relative;
  height: 244px;
  background-color: #c4c4c4;
  border-radius: 14px;
`;

const ContentBox = styled.div`
  margin-top: 20px;
`;

const TagBlock = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 12px 4px;
  border-radius: 28px;
  background-color: #ffffff;
  color: #999999;
  font-size: 12px;
  font-family: 'SBAggro';
`;

const NameBlock = styled.div`
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: bold;
`;

const ServiceNameBlock = styled.div`
  margin-bottom: 16px;
  color: #999999;
`;

const NumberBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Number = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const IssuedNumber = styled.div`
  color: #999999;
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
