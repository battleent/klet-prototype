import { useRouter } from 'next/router';
interface UseSearch<Item> {
  searchItem: (array: Item[]) => Item[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function useSearch<Item extends { name: string }>(): UseSearch<Item> {
  const router = useRouter();
  const { search } = router.query;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.trim();

    router.push(`/nft?search=${encodeURIComponent(searchQuery)}`);
  };

  const searchItem = (array: Item[]) =>
    array.filter((item) => item.name.includes(search as string));

  return { searchItem, handleSearch };
}

export default useSearch;
