import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useClipboard,
} from '@chakra-ui/react';

import CopyIcon from '../CopyIcon';
import baseURL from '../../utils/baseURL';

interface Props {
  username: string | string[];
}

export default function TicketUrl({ username }: Props): JSX.Element {
  const URL = `${baseURL}/convite/${username}`;

  const { onCopy } = useClipboard(URL);

  return (
    <Flex color="grey.200" alignItems="center" mt="6rem" mr="4rem">
      <Text mr="1rem" fontSize="1.2rem">
        Convide seus amigos com a URL do seu Ticket
      </Text>
      <InputGroup>
        <Input
          minW="420px"
          w="100%"
          h="64px"
          pl="2rem"
          fontSize="1.2rem"
          color="grey.50"
          border={0}
          bg="black.100"
          value={URL}
          variant="solid"
          isReadOnly
          display="block"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        />
        <InputRightElement
          onClick={onCopy}
          children={<CopyIcon />}
          h="72px"
          mr="1.4rem"
          cursor="pointer"
        />
      </InputGroup>
    </Flex>
  );
}
