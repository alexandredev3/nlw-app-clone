import {
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  VStack,
  Checkbox,
  Box,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FormikHelpers,
  FieldProps,
} from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Ticket from '../../components/Ticket';

import getAccount, { IAccount } from '../api/_lib/getAccount';
import { useSubscribe } from '../../hooks/SubscribeContext';

interface IProps {
  account: IAccount;
  track: string;
}

interface ISubscribeData {
  name: string;
  email: string;
  acceptTerms: boolean;
}

const SubscribeSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Campo nome deve ter pelo menos 3 caracteres')
    .max(40, 'Campo nome a atingiu o limite de 40 caracteres')
    .required('Campo nome é obrigatório'),
  email: Yup.string()
    .email('Digite um E-mail valido')
    .required('Campo E-mail é obrigatório'),
  acceptTerms: Yup.boolean().isTrue(
    'Você precisa concordar para concluir sua inscrição'
  ),
});

export default function TicketAccept({ account, track }: IProps): JSX.Element {
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
    <Flex
      layerStyle="base"
      flexDirection="row"
      justifyContent="space-evenly"
      mb="4rem"
    >
      <Formik
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        initialValues={{ name: '', email: '', acceptTerms: false }}
        validationSchema={SubscribeSchema}
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
                    isLoading={props.isSubmitting}
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
                    _active={null}
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
