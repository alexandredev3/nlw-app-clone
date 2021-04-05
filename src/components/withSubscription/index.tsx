import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/router';

const withSubscription = (WrapperComponent: ComponentType) => (
  wrapperComponentProps: unknown
): JSX.Element => {
  const { replace } = useRouter();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('session-token');

    if (!sessionToken) {
      replace('/');
    }
  }, []);

  return <WrapperComponent {...wrapperComponentProps} />;
};

export default withSubscription;
