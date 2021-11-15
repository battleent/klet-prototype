import { useQuery } from '@apollo/client';
import getCountry, { CountryData, CountryVar } from '@/graphql/getCountry';

const Country: React.VFC = () => {
  const { loading, data } = useQuery<CountryData, CountryVar>(getCountry, {
    variables: { code: 'KR' },
  });
  console.log(data);
  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <>
          <div>{data.country.native}</div>
          <div>{data.country.name}</div>
          <div>{data.country.emoji}</div>
        </>
      )}
    </>
  );
};

export default Country;
