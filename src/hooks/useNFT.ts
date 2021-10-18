export interface Card {
  id: number;
  tagName: string;
  name: string;
  serviceName: string;
  number: number;
  issuedNumber: number;
}

function useNFT(): Card[] {
  const nftCard = [
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
  return nftCard;
}

export default useNFT;
