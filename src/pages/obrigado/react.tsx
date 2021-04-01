import {
  Flex,
  Text,
  Image,
  ButtonGroup,
  Button,
  Heading,
  Stack,
  IconButton,
} from '@chakra-ui/react';

import GithubIcon from '../../components/GithubIcon';
import Ticket from '../../components/Ticket';

export default function ReactTrack(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" padding="100px">
      <Flex flexDirection="column">
        <Stack spacing="3.75rem">
          <Flex color="grey.50" alignItems="center">
            <Image src="/assets/icons/success-icon.svg" width="35px" />
            <Text fontSize="1.65rem" ml="1rem">
              Inscrição{' '}
              <strong style={{ color: '#04e168' }}>confirmada!</strong>
            </Text>
          </Flex>
          <Heading maxW="474px" w="100%" fontSize="4rem">
            Bem-vindo(a) à{' '}
            <span style={{ color: '#2AC7E3' }}>Trilha ReactJS</span>
          </Heading>
          <Text maxW="400px" w="100%" color="grey.100" fontSize="1.75rem">
            Gere seu ticket único com o perfil do GitHub.
          </Text>
        </Stack>
        <ButtonGroup
          zIndex={1}
          transition="filter 200ms"
          _hover={{
            filter: 'brightness(1.1)',
          }}
          marginTop="3.25rem"
        >
          <IconButton
            bg="purple.300"
            variant="solid"
            color="white.50"
            width="78px"
            height="76px"
            borderRadius="8px 0px 0px 8px"
            mr="-8px"
            _before={{
              content: "''",
              width: '100%',
              height: '76px',
              bg: 'purple.400',
              position: 'absolute',
              top: '8px',
              borderRadius: '8px 0px 0px 8px',
              zIndex: -1,
            }}
            _hover={null}
            _active={null}
            _focus={null}
            aria-label="button"
            icon={<GithubIcon />}
          />
          <Button
            aria-label="button"
            type="submit"
            maxW="267px"
            w="100%"
            bg="purple.50"
            variant="solid"
            color="white.50"
            height="76px"
            borderRadius="0px 8px 8px 0px"
            _before={{
              content: "''",
              width: '100%',
              height: '76px',
              bg: 'purple.400',
              position: 'absolute',
              top: '8px',
              borderRadius: '0px 8px 8px 0px',
              zIndex: -1,
            }}
            _hover={null}
            _active={null}
            _focus={null}
          >
            <Text fontSize="1.24rem">GERAR COM GITHUB</Text>
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex ml="8rem" align="center">
        <Ticket
          techLogo="icon-elixir"
          numberTicket="000000"
          techName="Elixir"
          ticket="elixir-ticket"
          user={{
            name: 'Alexandre Costa',
            username: 'alexandredev3',
            avatarURL: 'https://github.com/alexandredev3.png',
          }}
        />
      </Flex>
    </Flex>
  );
}
