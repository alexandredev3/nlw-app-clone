import {
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  VStack,
  Checkbox,
  StackDivider,
  Center,
  Heading,
  FormControl,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Field, Form, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Input from '../components/Input';
import { useSubscribe } from '../hooks/SubscribeContext';

const SubscribeSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Campo nome deve ter pelo menos 3 caracteres')
    .max(40, 'Campo nome precisa ter menos de 40 caracteres')
    .required('Campo nome é obrigatório'),
  email: Yup.string()
    .email('Digite um E-mail valido')
    .required('Campo E-mail é obrigatório'),
  acceptTerms: Yup.boolean().isTrue(
    'Você precisa concordar para concluir sua inscrição'
  ),
});

interface ISubscribeData {
  name: string;
  email: string;
  acceptTerms: boolean;
}

export default function Subscribe(): JSX.Element {
  const { subscribe } = useSubscribe();

  async function handleSubmit(
    data: ISubscribeData,
    actions: FormikHelpers<any>
  ): Promise<void> {
    const { name, email } = data;
    try {
      await subscribe(name, email);
      actions.setSubmitting(false);
    } catch (error) {
      actions.setSubmitting(false);
    }
  }

  return (
    <Flex layerStyle="base" flexDirection="row" justifyContent="space-evenly">
      <Center>
        <Flex
          flexDirection="column"
          maxW="754px"
          w="100%"
          marginRight="4.74rem"
        >
          <Image
            src="/assets/images/nlw-logo.svg"
            width="320px"
            alt="Nlw Logo"
            mb="3rem"
          />
          <Text
            as="h1"
            fontWeight="bold"
            color="grey.50"
            fontSize="6rem"
            marginTop="1.72rem"
            lineHeight="5.75rem"
          >
            Avance para <br /> o próximo nível
            <span style={{ color: '#04e168' }}>.</span>
          </Text>
          <Text color="grey.50" fontSize="2rem" mt="1.75rem">
            Um evento para dar o próximo passo na sua evolução como programadora
            ou programador.
          </Text>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="xl"
            color="white.100"
            fontWeight="bold"
            marginTop="5rem"
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
        <Formik
          onSubmit={async (values: ISubscribeData, actions) =>
            handleSubmit(values, actions)
          }
          initialValues={{ name: '', email: '', acceptTerms: false }}
          validationSchema={SubscribeSchema}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <Flex
                flexDirection="column"
                maxW="600px"
                width="100%"
                height="100%"
                padding="2.75rem 2.75rem"
                bg="black.100"
                borderRadius="md"
              >
                <Heading
                  textAlign="center"
                  color="grey.50"
                  fontWeight="bold"
                  fontSize="2.25rem"
                  marginBottom={8}
                >
                  Inscrição gratuita
                </Heading>

                <Box>
                  <Field name="name" validate={SubscribeSchema}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name}>
                        <Input
                          name={field.name}
                          type="text"
                          id="name"
                          placeholder="Digite seu nome"
                          height="80px"
                          _placeholder={{
                            fontSize: '1.52rem',
                          }}
                          value={field.value}
                          onChange={field.onChange}
                        />
                        <FormErrorMessage fontSize="1.25rem">
                          {form.errors.name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mt="1rem">
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email}>
                        <Input
                          name={field.name}
                          type="text"
                          placeholder="E-mail"
                          height="80px"
                          _placeholder={{
                            fontSize: '1.52rem',
                          }}
                          value={field.value}
                          onChange={field.onChange}
                        />
                        <FormErrorMessage fontSize="1.25rem">
                          {form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
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
                      as="button"
                      type="submit"
                      bg="purple.300"
                      isLoading={props.isSubmitting}
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
                      _loading={{
                        opacity: 1,
                        fontSize: '1.25rem',
                      }}
                      _hover={null}
                      _active={{
                        top: '8px',
                        _before: {
                          top: '0px',
                        },
                      }}
                      _focus={null}
                    >
                      <Text fontSize="1.24rem">QUERO ME INSCREVER</Text>
                    </Button>
                  </ButtonGroup>

                  <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Field name="acceptTerms">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.acceptTerms}>
                          <Checkbox
                            name={field.name}
                            color="grey.100"
                            spacing={3}
                            size="lg"
                            borderColor="grey.300"
                            colorScheme="green"
                            value={field.value}
                            onChange={field.onChange}
                          >
                            <Text fontSize="1.25rem">
                              Concordo em receber comunicações
                            </Text>
                          </Checkbox>
                          <FormErrorMessage fontSize="1.25rem">
                            {form.errors.acceptTerms}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Center>
                    <StackDivider
                      minW="600px"
                      w="100%"
                      borderBottomWidth="2px"
                      borderBottomColor="grey.300"
                    />
                  </Center>
                </VStack>
                <Flex
                  margin="0 2.25rem"
                  marginTop="2rem"
                  justifyContent="space-between"
                  alignItems="center"
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
            </Form>
          )}
        </Formik>
      </Center>
    </Flex>
  );
}
