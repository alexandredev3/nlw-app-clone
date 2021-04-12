import { Flex } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TickectUrl';

import { useAuth } from '../../hooks/AuthContext';

function ElixirTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#A32DDF" track="Elixir" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          techLogo="icon-elixir"
          numberTicket="000000"
          techName="Elixir"
          ticket="elixir"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(ElixirTrack);
