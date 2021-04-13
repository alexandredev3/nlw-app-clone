import { Flex, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

import Technology from '../components/Technology';
import withSubscription from '../components/withSubscription';

const tracks = [
  {
    techName: 'react',
    techColor: '#2AC7E3',
    techRole: 'Front-end',
    techDescription:
      'Se o seu objetivo está alinhado, com o front-end, e você deseja construir interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável, essa trilha é para você.',
    techIcon: (
      <Image
        w="92px"
        src="/assets/icons/icon-react.png"
        position="absolute"
        transform="translateY(-50%)"
        top={0}
        bottom={0}
      />
    ),
  },
  {
    techName: 'node',
    techColor: '#8CC84B',
    techRole: 'Back-end',
    techDescription:
      'Se o seu objetivo está alinhado com o back-end, e você deseja construir arquiteturas escaláveis e simples para a web utilizando uma linguagem flexível e popular, essa trilha é para você.',
    techIcon: (
      <Image
        w="92px"
        src="/assets/icons/icon-node.png"
        position="absolute"
        transform="translateY(-50%)"
        top={0}
        bottom={0}
      />
    ),
  },
  {
    techName: 'elixir',
    techColor: '#A32DDF',
    techRole: 'Back-end',
    techDescription:
      'Se o seu objetivo está alinhado com o back-end, e você deseja construir aplicações distribuídas, escaláveis e tolerantes a falhas utilizando programação funcional, essa trilha é para você.',
    techIcon: (
      <Image
        w="92px"
        src="/assets/icons/icon-elixir.png"
        position="absolute"
        transform="translateY(-50%)"
        top={0}
        bottom={0}
      />
    ),
  },
  {
    techName: 'reactnative',
    techColor: '#2AC7E3',
    techRole: 'Mobile',
    techDescription:
      'Se o seu objetivo está alinhado com desenvolvimento mobile, e você deseja construir aplicações modernas tanto para iOS quanto para Android de forma nativa, essa trilha é para você.',
    techIcon: (
      <Image
        w="92px"
        src="/assets/icons/icon-react.png"
        position="absolute"
        transform="translateY(-50%)"
        top={0}
        bottom={0}
      />
    ),
  },
  {
    techName: 'flutter',
    techColor: '#2F80ED',
    techRole: 'Mobile',
    techDescription:
      'Se o seu objetivo está alinhado com desenvolvimento mobile e se você deseja construir aplicações compiladas de forma nativa para celular, web e desktop a partir de um único código-base, essa é a trilha para você.',
    techIcon: (
      <Image
        w="92px"
        src="/assets/icons/icon-flutter.png"
        position="absolute"
        transform="translateY(-50%)"
        top={0}
        bottom={0}
      />
    ),
  },
];

function Track(): JSX.Element {
  return (
    <Flex
      as="header"
      flexDirection="column"
      maxW="1280px"
      w="100%"
      margin="0 auto"
    >
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
      <Grid as="section" templateColumns="repeat(3, 1fr)">
        {tracks.map(track => (
          <GridItem key={track.techName}>
            <Technology {...track} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default withSubscription(Track);
