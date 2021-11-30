import { useQuery } from '@apollo/client';
import getUser from '@/graphql/getUser';

const UserMe: React.FC = () => {
  const { loading, error, data } = useQuery(getUser);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>No results found</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>id : {data.me.id}</div>
      <div>name : {data.me.username}</div>
      <div>uid : {data.me.userUid}</div>
    </div>
  );
};

export default UserMe;
