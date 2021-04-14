import { Flex, Image } from '@chakra-ui/react';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import { useAuth } from '../../hooks/AuthContext';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TicketUrl';

function ReactNativeTrack(): JSX.Element {
  const { userData } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#2AC7E3" track="React Native" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          ticket={{
            background: (
              <Image maxW="700px" src="/assets/images/reactnative-ticket.svg" />
            ),
            backgroundWithUser: (
              <Image
                maxW="700px"
                src="/assets/images/reactnative-ticket-filled.svg"
              />
            ),
            number: '0000000',
          }}
          tech={{
            track: 'reactnative',
            image: <Image src="/assets/icons/icon-reactnative.png" />,
          }}
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(ReactNativeTrack);
