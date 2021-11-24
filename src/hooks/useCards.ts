import Card from '@/entities/Card';
import PaginatedResponse from '@/entities/PaginatedResponse';

import useAPI from '@/hooks/useAPI';

function useCards(): Card[] {
  const { data, isLoading } = useAPI<PaginatedResponse<Card>>('/cards');
  const isPrePared = data && !isLoading;

  return isPrePared ? data.content : [];
}

export default useCards;
