import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

import CopyIcon from '../CopyIcon';

interface Props {
  username: string;
}

export default function TicketUrl({ username }: Props): JSX.Element {
  const url = `http://localhost:3000/convite/${username}`;

  function CopyUrlOnClipboard() {
    navigator.clipboard.writeText(url);
  }

  return (
    <Flex color="grey.200" alignItems="center" mt="6rem" mr="4rem">
      <Text mr="1rem" fontSize="1.2rem">
        Convide seus amigos com a URL do seu Ticket
      </Text>
      <InputGroup>
        <Input
          minW="370px"
          w="100%"
          h="64px"
          pl="2rem"
          fontSize="1.2rem"
          color="grey.50"
          border={0}
          bg="black.100"
          value={url}
          variant="solid"
          isReadOnly
        />
        <InputRightElement
          onClick={CopyUrlOnClipboard}
          children={<CopyIcon />}
          h="72px"
          mr="1.4rem"
          cursor="pointer"
        />
      </InputGroup>
    </Flex>
  );
}
