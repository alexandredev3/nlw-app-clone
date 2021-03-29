import { Box, Button, Flex, Image, Text, Container } from '@chakra-ui/react';

interface Props {
  techName: string;
  techColor: string;
  techIcon: string;
  techType: 'Front-end' | 'Back-end' | 'Mobile';
  description: string;
}

export default function Technology({
  techName,
  techColor,
  techIcon,
  techType,
  description,
}: Props): JSX.Element {
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
          src={techIcon}
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
          bg={techColor}
          variant="solid"
          fontSize="1.1rem"
          _hover={{
            filter: 'brightness(1.1)',
          }}
          width="100%"
          height="72px"
          mt="3.24rem"
        >
          <Text>CONFIRMAR TRILHA</Text>
        </Button>
      </Flex>
    </Container>
  );
}
