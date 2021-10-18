import useNFT from '@/hooks/useNFT';
import { Card } from '@/hooks/useNFT';

function useSearch(search: string | undefined): Card[] {
  const cardData = useNFT();
  if (search) {
    return cardData.filter((card) => card.name.includes(search as string));
  }
  return cardData;
}

export default useSearch;
