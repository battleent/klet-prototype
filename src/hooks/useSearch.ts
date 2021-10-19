import { Card } from '@/hooks/useNFTList';

function useSearch(cardData: Card[], search: string | undefined): Card[] {
  if (search) {
    return cardData.filter((card) => card.name.includes(search as string));
  }
  return cardData;
}

export default useSearch;
