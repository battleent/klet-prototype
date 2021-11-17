import { useQuery, useMutation } from '@apollo/client';
import { Flex } from 'rebass';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Spacer from '@/components/Spacer';

import getUser from '@/graphql/getUser';
import inserUser from '@/graphql/insertUser';

const Search: React.FC = () => {
  const router = useRouter();
  const searchWord = router.query.search as string;
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.trim();

    router.push(`/user?search=${encodeURIComponent(searchQuery)}`);
  };
  const { loading, data } = useQuery(getUser, {
    variables: {
      where: {
        name: {
          _eq: `${searchWord}`,
        },
      },
    },
  });

  return (
    <Flex flexDirection="column">
      {loading && <div>Loading...</div>}
      <Flex>
        <div>검색할 사용자 이름 : </div>
        <input onChange={handleSearch} />
      </Flex>

      {data &&
        data.users.map((item: { id: string; name: string }) => (
          <Flex key={item.id} flexDirection="column">
            <div>{item.id}</div>
            <div>{item.name}</div>
          </Flex>
        ))}
    </Flex>
  );
};

const Insert: React.FC = () => {
  const { reset, register, handleSubmit } = useForm();
  const [addUser, { loading }] = useMutation(inserUser);
  const handleOnSubmit = (data: { insertName: string }) => {
    addUser({
      variables: {
        objects: [
          {
            name: `${data?.insertName}`,
          },
        ],
      },
    });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      {loading && <div>Submitting...</div>}
      <div>추가할 사용자 이름</div>
      <input {...register('insertName')} />
    </form>
  );
};

const User: React.VFC = () => {
  return (
    <Flex flexDirection="column">
      <Search />
      <Spacer size={48} />
      <Insert />
    </Flex>
  );
};

export default User;
