import { Flex } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TickectUrl';

import { useAuth } from '../../hooks/AuthContext';

function NodeTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#8CC84B" track="NodeJS" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          techLogo="icon-node"
          numberTicket="000000"
          techName="NodeJS"
          ticket="node"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(NodeTrack);
