import { Box, Button, Flex, Image, Text, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import useTrack from '../../hooks/queries/useTrack';

interface Props {
  techName: string;
  techColor: string;
  techIcon: string;
  techType: 'Front-end' | 'Back-end' | 'Mobile' | string;
  description: string;
  selectedTechPathToRedirect: string;
}

export default function Technology({
  techName,
  techColor,
  techIcon,
  techType,
  description,
  selectedTechPathToRedirect,
}: Props): JSX.Element {
  const { push } = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submit } = useTrack(selectedTechPathToRedirect);

  async function handleSelectedTech(): Promise<void> {
    try {
      setIsSubmitting(true);
      await submit({ throwOnError: true });
      push(`/obrigado/${selectedTechPathToRedirect}`);
    } catch (error) {
      setIsSubmitting(false);
      alert(error);
    }
  }

  return (
    <Container mb="8rem">
      <Flex
        flexDirection="column"
        bgColor="black.100"
        minW="405px"
        w="100%"
        p="2rem"
        borderRadius="md"
        position="relative"
        transition="border 240ms"
        border="1px solid transparent"
        _hover={{
          border: `1px solid ${techColor}`,
        }}
      >
        <Image
          w="92px"
          src={`/assets/icons/${techIcon}.png`}
          position="absolute"
          transform="translateY(-50%)"
          top={0}
          bottom={0}
        />
        <Box color="grey.100" m="3.42rem 0 1.6rem 0">
          <Text fontSize="2rem">
            Trilha <strong style={{ color: techColor }}>{techName}</strong>
          </Text>
          <Text fontSize="1.45rem" fontWeight="bold" color={techColor}>
            {techType}
          </Text>
        </Box>
        <Box color="white.100" fontSize="1.25rem" height="198px">
          <Text>{description}</Text>
        </Box>
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg={techColor}
          variant="solid"
          fontSize="1.1rem"
          _loading={{
            opacity: 1,
            fontSize: '1.25rem',
          }}
          _hover={{
            filter: 'brightness(1.1)',
          }}
          width="100%"
          height="72px"
          mt="3.24rem"
          onClick={handleSelectedTech}
        >
          <Text>CONFIRMAR TRILHA</Text>
        </Button>
      </Flex>
    </Container>
  );
}
