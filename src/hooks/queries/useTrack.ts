import { useQuery } from 'react-query';
import { useFetch, UseFetchOptions } from '../useFetch';

type UseQueryOptions = UseFetchOptions;

const useTrack = (track: string) => {
  const { refetch: submit, ...rest } = useQuery(
    'track',
    () =>
      useFetch({
        url: '/track',
        data: {
          tech: track,
        },
      }),
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
