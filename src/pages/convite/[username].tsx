import {
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  VStack,
  Checkbox,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import Input from '../../components/Input';
import Ticket from '../../components/Ticket';

import getAccount, { IAccount } from '../api/_lib/getAccount';

interface IProps {
  account: IAccount;
  track: string;
}

export default function TicketAccept({ account, track }: IProps): JSX.Element {
  console.log(account);

  return (
    <Flex
      layerStyle="base"
      flexDirection="row"
      justifyContent="space-evenly"
      mb="4rem"
    >
      <Flex
        as="form"
        flexDirection="column"
        alignItems="center"
        maxW="600px"
        w="100%"
        height="586px"
        padding="1.75rem 2.25rem"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          mb="1rem"
          maxW="600px"
          w="100%"
        >
          <Text
            as="h1"
            textAlign="center"
            fontWeight="bold"
            fontSize="3rem"
            width="80%"
          >
            Junte-se a Alexandre Costa Dos Santos
          </Text>
          <Text
            as="h1"
            color="grey.100"
            textAlign="center"
            fontSize="1.25rem"
            mt="0.75rem"
          >
            E milhares de devs no NLW: Um evento 100% gratuito e online para
            avançar para o próximo nível em programação
          </Text>
        </Flex>

        <Input
          name="name"
          type="text"
          placeholder="Digite seu nome"
          bg="black.100"
          height="80px"
        />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          bg="black.100"
          height="80px"
        />
        <VStack spacing={2}>
          <ButtonGroup
            zIndex={1}
            minW="600px"
            width="100%"
            padding="1.75rem 2.25rem"
            transition="filter 200ms"
            _hover={{
              filter: 'brightness(1.1)',
            }}
            marginTop="0.2rem"
          >
            <Button
              as="button"
              type="submit"
              bg="purple.300"
              variant="solid"
              color="white.50"
              height="76px"
              width="100%"
              _before={{
                content: "''",
                width: '100%',
                height: '76px',
                bg: 'purple.400',
                position: 'absolute',
                top: '8px',
                borderRadius: 'md',
                zIndex: -1,
              }}
              _hover={null}
              _active={null}
              _focus={null}
            >
              <Text fontSize="1.24rem">QUERO ME INSCREVER</Text>
            </Button>
          </ButtonGroup>

          <Checkbox
            color="grey.100"
            spacing={3}
            size="lg"
            borderColor="grey.300"
            colorScheme="green"
          >
            <Text fontSize="1.25rem">Concordo em receber comunicações</Text>
          </Checkbox>
        </VStack>
        <Flex
          margin="0 2.25rem"
          marginTop="4.75rem"
          justifyContent="space-between"
          alignItems="center"
          flex={1}
          width="80%"
          fontSize="1.25rem"
        >
          <Flex>
            <Image src="/assets/icons/secure-icon.svg" />
            <Text marginLeft="1.25rem" color="grey.100">
              Suas informações <br /> estão seguras
            </Text>
          </Flex>
          <Flex>
            <Image src="/assets/icons/block-icon.svg" />
            <Text marginLeft="1.25rem" color="grey.100">
              Somos <br /> contra spam
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Ticket
          ticketBg={
            <Image maxW="700px" src={`/assets/images/${track}-ticket.svg`} />
          }
          ticketBgWithUser={
            <Image
              maxW="700px"
              src={`/assets/images/${track}-ticket-filled.svg`}
            />
          }
          techImage={<Image src={`/assets/icons/icon-${track}.png`} />}
          techName={track}
          ticketNumber="00000"
          user={account}
        />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
): Promise<any> => {
  const { username } = context.query;

  const account = await getAccount(username);

  if (!account) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...account,
    },
  };
};
