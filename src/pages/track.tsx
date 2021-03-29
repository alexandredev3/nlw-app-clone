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
            techName="ReactJS"
            techIcon="/assets/icons/icon-node.png"
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
            techName="ReactJS"
            techIcon="/assets/icons/icon-elixir.png"
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
            techName="ReactJS"
            techIcon="/assets/icons/icon-flutter.png"
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
      </Grid>
    </Flex>
  );
}
