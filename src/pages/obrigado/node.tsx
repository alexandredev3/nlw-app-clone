import { Flex, Image } from '@chakra-ui/react';

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
          ticketBg={<Image maxW="700px" src="/assets/images/node-ticket.svg" />}
          ticketBgWithUser={
            <Image maxW="700px" src="/assets/images/node-ticket-filled.svg" />
          }
          techImage={<Image src="/assets/icons/icon-node.png" />}
          techName="node"
          ticketNumber="00000"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(NodeTrack);
