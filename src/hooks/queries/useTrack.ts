import { useQuery } from 'react-query';
import { useFetch, UseFetchOptions } from '../useFetch';

type UseQueryOptions = UseFetchOptions;

const useTrack = ({ url, data, config }: UseQueryOptions) => {
  const { refetch: submit, ...rest } = useQuery(
    'track',
    () => useFetch({ url, data, config }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  return {
    submit,
    ...rest,
  };
};

export default useTrack;
