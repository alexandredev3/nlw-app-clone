import { Flex, Image } from '@chakra-ui/react';

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
          ticketBg={
            <Image maxW="700px" src="/assets/images/flutter-ticket.svg" />
          }
          ticketBgWithUser={
            <Image
              maxW="700px"
              src="/assets/images/flutter-ticket-filled.svg"
            />
          }
          techImage={<Image src="/assets/icons/icon-flutter.png" />}
          techName="flutter"
          ticketNumber="00000"
          user={userData}
        />
        {userData && <TicketUrl username={userData.username} />}
      </Flex>
    </Flex>
  );
}

export default withSubscription(FlutterTrack);
