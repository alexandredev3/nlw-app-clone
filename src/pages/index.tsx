import {
  Flex,
  Text,
  Image,
  Box,
  Button,
  ButtonGroup,
  VStack,
  Checkbox,
  StackDivider,
  Center,
  Heading,
  Wrap,
} from '@chakra-ui/react';

import Input from '../components/Input';

export default function Subscribe(): JSX.Element {
  return (
    <Flex layerStyle="base" flexDirection="row" justifyContent="space-evenly">
      <Center>
        <Flex
          flexDirection="column"
          maxW="754px"
          w="100%"
          marginRight="4.74rem"
        >
          <Box mb="2rem">
            <Image
              src="/assets/images/nlw-logo.svg"
              height={20}
              alt="Nlw Logo"
            />
          </Box>
          <Text
            textStyle="h1"
            color="white.100"
            marginTop="1.72rem"
            lineHeight="5.75rem"
          >
            Avance para <br /> o próximo nível
            <span style={{ color: '#04e168' }}>.</span>
          </Text>
          <Text textStyle="h3" color="white.100" mt="1.25rem">
            Um evento para dar o próximo passo na sua evolução como programadora
            ou programador.
          </Text>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="xl"
            color="white.100"
            fontWeight="bold"
            marginTop="6.25rem"
          >
            <Flex alignItems="center">
              <Image src="/assets/icons/data-icon.svg" />
              <Text marginLeft="1rem">
                <span style={{ color: '#04D361' }}>19 a 25</span> <br /> de
                Abril
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image src="/assets/icons/free-and-online-icon.svg" />
              <Text marginLeft="1rem">
                <span style={{ color: '#04D361' }}>100%</span> online <br /> e
                gratuito
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image src="/assets/icons/edition-icon.svg" />
              <Text marginLeft="1rem">
                Quinta edição <br /> conteúdo{' '}
                <span style={{ color: '#04D361' }}>inédito</span>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          as="form"
          flexDirection="column"
          maxW="568px"
          width="100%"
          height="586px"
          padding="1.75rem 2.25rem"
          bg="black.100"
          borderRadius="md"
        >
          <Heading
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="3xl"
            marginBottom={8}
          >
            Inscrição gratuita
          </Heading>

          <Input name="name" type="text" placeholder="Digite seu nome" />
          <Input name="email" type="text" placeholder="E-mail" />
          <VStack spacing={10}>
            <ButtonGroup
              zIndex={1}
              width="100%"
              transition="filter 200ms"
              _hover={{
                filter: 'brightness(1.1)',
              }}
              marginTop={7}
            >
              <Button
                type="submit"
                bg="purple.300"
                variant="solid"
                color="white.50"
                width="100%"
                height="76px"
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
              <Text fontSize="1rem">Concordo em receber comunicações</Text>
            </Checkbox>
            <Center>
              <StackDivider
                minW="568px"
                w="100%"
                borderBottomWidth="2px"
                borderBottomColor="grey.300"
              />
            </Center>
          </VStack>
          <Flex
            margin="0 2.25rem"
            marginTop={6}
            justifyContent="space-between"
            alignItems="center"
            lineHeight="18px"
            flex={1}
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
      </Center>
    </Flex>
  );
}
