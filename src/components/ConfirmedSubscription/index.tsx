import {
  Flex,
  Text,
  Image,
  ButtonGroup,
  Button,
  Heading,
  Stack,
  IconButton,
  Box,
  Input,
  InputGroup,
} from '@chakra-ui/react';

import GithubIcon from '../GithubIcon';
import CheckIcon from '../CheckIcon';

import { useAuth } from '../../hooks/AuthContext';

interface Props {
  track: string;
  color: string;
}

export default function ConfirmedSubscription({
  track,
  color,
}: Props): JSX.Element {
  const { handleAuth, isSubmitting, userData } = useAuth();

  return (
    <Flex flexDirection="column">
      <Stack spacing="3.75rem">
        <Flex color="grey.50" alignItems="center">
          <Image src="/assets/icons/success-icon.svg" width="35px" />
          <Text fontSize="1.65rem" ml="1rem">
            Inscrição <strong style={{ color: '#04e168' }}>confirmada!</strong>
          </Text>
        </Flex>
        <Heading maxW="474px" w="100%" fontSize="4rem">
          Bem-vindo(a) à <span style={{ color }}>Trilha {track}</span>
        </Heading>
        {!userData && (
          <Text maxW="400px" w="100%" color="grey.100" fontSize="1.75rem">
            Gere seu ticket único com o perfil do GitHub.
          </Text>
        )}
      </Stack>
      {userData ? (
        <>
          <ButtonGroup zIndex={1} transition="filter 200ms" marginTop="3.25rem">
            <IconButton
              bg="rgba(4,211,97,.1)"
              variant="solid"
              color="white.50"
              width="78px"
              height="76px"
              borderRadius="8px 0px 0px 8px"
              mr="-8px"
              _hover={null}
              _active={null}
              _focus={null}
              aria-label="button"
              icon={<GithubIcon size={28} />}
            />
            <Button
              aria-label="button"
              type="submit"
              maxW="267px"
              w="100%"
              bg="green.800"
              variant="solid"
              color="white.50"
              height="76px"
              borderRadius="0px 8px 8px 0px"
              _hover={null}
              _active={null}
              _focus={null}
            >
              <Text fontSize="1.24rem" fontWeight="normal">
                {userData.username}
              </Text>
              <IconButton
                bg="transparent"
                ml="2rem"
                _hover={null}
                _active={null}
                _focus={null}
                aria-label="button"
                icon={<CheckIcon size={24} />}
              />
            </Button>
          </ButtonGroup>
          <Text
            maxW="400px"
            w="100%"
            color="green.500"
            fontSize="1.75rem"
            lineHeight="36px"
            mt="2.4rem"
          >
            Ticket gerado com sucesso. Aproveite o evento
          </Text>
        </>
      ) : (
        <ButtonGroup
          zIndex={1}
          transition="filter 200ms"
          _hover={{
            filter: 'brightness(1.1)',
          }}
          marginTop="3.25rem"
        >
          <IconButton
            bg="purple.400"
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
            icon={<GithubIcon size={28} />}
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
            onClick={handleAuth}
            isLoading={isSubmitting}
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
            _loading={{
              opacity: 1,
              fontSize: '1.25rem',
            }}
            _hover={null}
            _active={null}
            _focus={null}
          >
            <Text fontSize="1.24rem">GERAR COM GITHUB</Text>
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
}
