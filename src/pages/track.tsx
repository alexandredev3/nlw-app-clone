import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';

import Technology from '../components/Technology';

export default function Track(): JSX.Element {
  return (
    <Flex flexDirection="column" maxW="1280px" w="100%" margin="0 auto">
      <Flex alignItems="center" mt="4.75rem" mb="8rem">
        <Heading fontSize="2.74rem" mr="3.75rem">
          Trilhas <br /> disponíveis
        </Heading>
        <Text fontSize="1.2rem" color="grey.100" w="700px">
          <span style={{ color: '#04e168', fontWeight: 'bold' }}>
            Tenha foco:
          </span>{' '}
          escolha apenas uma trilha porque vai ter muito conteúdo e você precisa
          absorver tudo a fundo. Falta de foco e conhecimento superficial é o
          que vai te impedir de alcançar seus objetivos.
        </Text>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem>
          <Technology
            techName="ReactJS"
            techIcon="/assets/icons/icon-react.png"
            techColor="#2AC7E3"
            techType="Front-end"
            description="Se o seu objetivo está alinhado
            com o front-end, e você deseja
            construir interfaces modernas e
            reativas na web utilizando uma
            biblioteca modular e escalável,
            essa trilha é para você."
          />
        </GridItem>
        <GridItem>
          <Technology
            techName="NodeJS"
            techIcon="/assets/icons/icon-node.png"
            techColor="#8CC84B"
            techType="Back-end"
            description="Se o seu objetivo está alinhado com o back-end, e você deseja construir arquiteturas escaláveis e simples para a web utilizando uma linguagem flexível e popular, essa trilha é para você."
          />
        </GridItem>
        <GridItem>
          <Technology
            techName="Elixir"
            techIcon="/assets/icons/icon-elixir.png"
            techColor="#A32DDF"
            techType="Back-end"
            description="Se o seu objetivo está alinhado com o back-end, e você deseja construir aplicações distribuídas, escaláveis e tolerantes a falhas utilizando programação funcional, essa trilha é para você."
          />
        </GridItem>
        <GridItem>
          <Technology
            techName="React Native"
            techIcon="/assets/icons/icon-react.png"
            techColor="#2AC7E3"
            techType="Mobile"
            description="Se o seu objetivo está alinhado com desenvolvimento mobile, e você deseja construir aplicações modernas tanto para iOS quanto para Android de forma nativa, essa trilha é para você."
          />
        </GridItem>
        <GridItem>
          <Technology
            techName="Flutter"
            techIcon="/assets/icons/icon-flutter.png"
            techColor="#2F80ED"
            techType="Mobile"
            description="Se o seu objetivo está alinhado com desenvolvimento mobile e se você deseja construir aplicações compiladas de forma nativa para celular, web e desktop a partir de um único código-base, essa é a trilha para você."
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
