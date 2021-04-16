import { Flex, Image } from '@chakra-ui/react';

import { useAuth } from '../../hooks/AuthContext';

import Ticket from '../../components/Ticket';
import withSubscription from '../../components/withSubscription';
import ConfirmedSubscription from '../../components/ConfirmedSubscription';
import TicketUrl from '../../components/TicketUrl';

function FlutterTrack(): JSX.Element {
  const { account } = useAuth();

  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex>
        <ConfirmedSubscription color="#2F80ED" track="Flutter" />
      </Flex>
      <Flex ml="8rem" align="center" flexDir="column">
        <Ticket
          ticket={{
            background: (
              <Image maxW="700px" src="/assets/images/flutter-ticket.svg" />
            ),
            backgroundWithUser: (
              <Image
                maxW="700px"
                src="/assets/images/flutter-ticket-filled.svg"
              />
            ),
            number: '0000000',
          }}
          tech={{
            track: 'flutter',
            image: <Image src="/assets/icons/icon-flutter.png" />,
          }}
          account={account}
        />
        {account && <TicketUrl username={account.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(FlutterTrack);
