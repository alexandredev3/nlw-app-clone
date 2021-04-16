import {
  Flex,
  Text,
  Image,
  VStack,
  Checkbox,
  Box,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FormikHelpers,
  FieldProps,
} from 'formik';

import Input from '../../components/Input';
import Ticket from '../../components/Ticket';
import FormButton from '../../components/FormButton';

import { useSubscribe } from '../../hooks/SubscribeContext';
import getUserTicket from '../api/user/ticket';
import subscribeValidationSchema from '../../lib/validationSchemas/subscribe';

interface IProps {
  account: IAccount;
  track: string;
  ticketURL: string;
}

interface ISubscribeData {
  name: string;
  email: string;
  acceptTerms: boolean;
}

export default function TicketAccept({
  account,
  track,
  ticketURL,
}: IProps): JSX.Element {
  const { subscribe } = useSubscribe();

  async function handleSubmit(
    data: ISubscribeData,
    actions: FormikHelpers<ISubscribeData>
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
    <>
      <Head>
        <title>{account.name} - Convite NLW#5</title>
        <meta
          name="description"
          content={`Junte-se a ${account.name} no NLW#5, um evento para dar o próximo passo na sua evolução como programadora ou programador.`}
        />
        <meta property="og:image:alt" content="Boost yourself" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content={`Junte-se a ${account.name} no NLW#5, um evento para dar o próximo passo na sua evolução como programadora ou programador.`}
        />
        <meta
          name="twitter:title"
          content={`${account.name} - Convite NLW#5`}
        />
        <meta property="og:image" content={ticketURL} />
        <meta property="og:image:secure_url" content={ticketURL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ticketURL} />
        <meta name="twitter:image:src" content={ticketURL} />
        <meta name="twitter:image:alt" content="Boost yourself" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="630" />
        <meta
          property="twitter:description"
          content={`Junte-se a ${account.name} no NLW#5, um evento para dar o próximo passo na sua evolução como programadora ou programador.`}
        />
        <meta property="twitter:image" content={ticketURL} />
      </Head>
      <Flex
        layerStyle="base"
        flexDirection="row"
        justifyContent="space-evenly"
        mb="4rem"
      >
        <Formik
          onSubmit={(values, actions) => handleSubmit(values, actions)}
          initialValues={{ name: '', email: '', acceptTerms: false }}
          validationSchema={subscribeValidationSchema}
        >
          {(props: FormikProps<ISubscribeData>) => (
            <Form>
              <Flex
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
                    E milhares de devs no NLW: Um evento 100% gratuito e online
                    para avançar para o próximo nível em programação
                  </Text>
                </Flex>

                <Flex w="100%" flexDir="column">
                  <Box>
                    <Field name="name">
                      {({ field, form }: FieldProps<any>) => (
                        <FormControl isInvalid={!!form.errors.name}>
                          <Input
                            name={field.name}
                            type="text"
                            placeholder="Digite seu nome"
                            bg="black.100"
                            height="80px"
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
                      {({ field, form }: FieldProps<any>) => (
                        <FormControl isInvalid={!!form.errors.email}>
                          <Input
                            name={field.name}
                            type="text"
                            placeholder="E-mail"
                            bg="black.100"
                            height="80px"
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
                </Flex>
                <VStack spacing={2}>
                  <FormButton isSubmitting={props.isSubmitting}>
                    <Text fontSize="1.24rem">QUERO ME INSCREVER</Text>
                  </FormButton>

                  <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Field name="acceptTerms">
                      {({ field, form }: FieldProps<any>) => (
                        <FormControl isInvalid={!!form.errors.acceptTerms}>
                          <Flex flexDir="column" alignItems="center">
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
                          </Flex>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
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
            </Form>
          )}
        </Formik>

        <Flex alignItems="center">
          <Ticket
            ticket={{
              background: (
                <Image
                  maxW="700px"
                  src={`/assets/images/${track}-ticket.svg`}
                />
              ),
              backgroundWithUser: (
                <Image
                  maxW="700px"
                  src={`/assets/images/${track}-ticket-filled.svg`}
                />
              ),
              number: '0000000',
            }}
            tech={{
              track,
              image: <Image src={`/assets/icons/icon-${track}.png`} />,
            }}
            account={account}
          />
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
): Promise<any> => {
  const { username } = context.query;

  const ticket = await getUserTicket(username);

  if (!ticket) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: ticket,
  };
};
