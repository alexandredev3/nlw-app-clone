import { Flex, Image } from '@chakra-ui/react';

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
          ticketBg={
            <Image maxW="700px" src="/assets/images/elixir-ticket.svg" />
          }
          ticketBgWithUser={
            <Image maxW="700px" src="/assets/images/elixir-ticket-filled.svg" />
          }
          techImage={<Image src="/assets/icons/icon-elixir.png" />}
          techName="elixir"
          ticketNumber="00000"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(ElixirTrack);
