import { useQuery } from 'react-query';
import useFetch from '../useFetch';

const useTrack = (track: string) => {
  const { refetch: submit, ...rest } = useQuery(
    'track',
    () =>
      useFetch({
        url: '/user/track',
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
