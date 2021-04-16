import { Box, Flex, Text, Image } from '@chakra-ui/react';
import tracks from '../../utils/tracks';

import GithubIcon from '../GithubIcon';

interface Props {
  ticket: {
    background: JSX.Element;
    backgroundWithUser: JSX.Element;
    number: string;
  };
  tech: {
    track: string;
    image: JSX.Element;
  };
  account?: IAccount;
}

export default function Ticket({ ticket, tech, account }: Props): JSX.Element {
  const {
    background: Background,
    backgroundWithUser: BackgroundWithUser,
    number,
  } = ticket;
  const { track, image: TechImage } = tech;

  return (
    <Box position="relative">
      {account ? BackgroundWithUser : Background}
      <Flex>
        <Flex
          position="absolute"
          top={8}
          left={8}
          w="94%"
          alignItems="center"
          justifyContent="space-between"
          color="white.100"
        >
          <Flex flexDir="column">
            <Flex alignItems="center">
              {account ? (
                <Image src={account.avatarURL} w="92px" borderRadius="50%" />
              ) : (
                <Image src="/assets/icons/avatar-icon.svg" w="92px" />
              )}
              <Flex flexDir="column" ml="1.25rem">
                <Text color="white.100" fontSize="1.76rem" fontWeight="bold">
                  {account ? account.name : 'Seu nome'}
                </Text>
                <Flex alignItems="center">
                  <GithubIcon size={24} color="#A8A8B3" />
                  <Text color="grey.100" ml="0.75rem">
                    {account ? account.username : 'Username'}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Image w="190px" mt="2.75rem" src="/assets/images/nlw-logo.svg" />
            <Flex
              justifyContent="space-between"
              alignItems="center"
              fontSize="0.8rem"
              color="white.100"
              fontWeight="bold"
              marginTop="1.2rem"
              minW="470px"
              w="100%"
            >
              <Flex alignItems="center">
                <Image src="/assets/icons/data-icon.svg" width="50px" />
                <Text marginLeft="1rem">
                  <span style={{ color: '#04D361' }}>19 a 25</span> <br /> de
                  Abril
                </Text>
              </Flex>
              <Flex alignItems="center">
                <Image
                  src="/assets/icons/free-and-online-icon.svg"
                  width="50px"
                />
                <Text marginLeft="1rem">
                  <span style={{ color: '#04D361' }}>100%</span> online <br /> e
                  gratuito
                </Text>
              </Flex>
              <Flex alignItems="center">
                <Image src="/assets/icons/edition-icon.svg" width="50px" />
                <Text marginLeft="1rem">
                  Quinta edição <br /> conteúdo{' '}
                  <span style={{ color: '#04D361' }}>inédito</span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            flexDir="column"
            right={8}
            top={0}
            alignItems="center"
            justifyContent="space-between"
            w="15%"
          >
            {TechImage}
            <Text
              display="block"
              fontWeight="bold"
              fontSize="1.25rem"
              textAlign="center"
              mt="1.25rem"
              textTransform="capitalize"
            >
              {tracks[track]}
            </Text>
            <Text
              fontSize="1.28rem"
              fontWeight="bold"
              position="absolute"
              top={235}
              bottom={0}
            >
              {number}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
