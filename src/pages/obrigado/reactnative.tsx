import { Flex } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import { useAuth } from '../../hooks/AuthContext';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TickectUrl';

function ReactNativeTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#2AC7E3" track="React Native" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          techLogo="icon-react"
          numberTicket="000000"
          techName="React Native"
          ticket="reactnative"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(ReactNativeTrack);
