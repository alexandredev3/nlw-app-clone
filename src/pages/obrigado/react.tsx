import { Flex, Image } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TicketUrl';
import { useAuth } from '../../hooks/AuthContext';

function ReactTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#2AC7E3" track="ReactJS" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          ticket={{
            background: (
              <Image maxW="700px" src="/assets/images/react-ticket.svg" />
            ),
            backgroundWithUser: (
              <Image
                maxW="700px"
                src="/assets/images/react-ticket-filled.svg"
              />
            ),
            number: '0000000',
          }}
          tech={{
            track: 'react',
            image: <Image src="/assets/icons/icon-react.png" />,
          }}
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(ReactTrack);
