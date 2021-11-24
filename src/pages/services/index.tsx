import { useQuery } from '@apollo/client';
import getService from '@/graphql/getService';

const ServiceList: React.FC = () => {
  const { loading, error, data } = useQuery(getService);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>No results found</div>;
  console.log(data.services);
  return <div>하이</div>;
};

export default ServiceList;
