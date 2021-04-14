import { Flex, Image } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TicketUrl';

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
          ticket={{
            background: (
              <Image maxW="700px" src="/assets/images/node-ticket.svg" />
            ),
            backgroundWithUser: (
              <Image maxW="700px" src="/assets/images/node-ticket-filled.svg" />
            ),
            number: '0000000',
          }}
          tech={{
            track: 'node',
            image: <Image src="/assets/icons/icon-node.png" />,
          }}
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(NodeTrack);
