import Card from '@/entities/Card';
import PaginatedResponse from '@/entities/PaginatedResponse';

import useAPI from '@/hooks/useAPI';

function useCards(): Card[] {
  const data = useAPI<PaginatedResponse<Card>>('/cards');
  console.log(data);

  return data ? data.content : [];
}

export default useCards;
