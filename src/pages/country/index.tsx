import { useQuery } from '@apollo/client';
import useCountry, { CountryData, CountryVar } from '@/graphql/useCountry';

const Country: React.VFC = () => {
  const { loading, data } = useQuery<CountryData, CountryVar>(useCountry, {
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
