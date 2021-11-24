const STAGE_API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const fetcher = async (url: RequestInfo, init?: RequestInit) => {
  try {
    const response = await fetch(`${STAGE_API_HOST}${url}`, init);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function useAPI<T>(url: RequestInfo): Promise<T | undefined> {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  const response = fetcher(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  return response;
}

export default useAPI;
