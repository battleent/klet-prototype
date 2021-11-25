import { useQuery } from '@apollo/client';
import getUser from '@/graphql/getUser';

const UserMe: React.FC = () => {
  const { loading, error, data } = useQuery(getUser);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>No results found</div>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>id : {data.user.id}</div>
      <div>name : {data.user.username}</div>
      <div>uid : {data.user.userUid}</div>
    </div>
  );
};

export default UserMe;
