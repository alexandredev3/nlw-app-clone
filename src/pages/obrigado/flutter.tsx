import { Flex } from '@chakra-ui/react';

import { useAuth } from '../../hooks/AuthContext';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TickectUrl';

function FlutterTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#2F80ED" track="Flutter" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          techLogo="icon-flutter"
          numberTicket="000000"
          techName="Flutter"
          ticket="flutter"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(FlutterTrack);
