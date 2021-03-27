import { Flex, Text } from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <Flex as="main" height="100vh" backgroundColor="black.700">
      <Text fontSize="6xl" color="purple.400">
        Hello World
      </Text>
    </Flex>
  );
}
