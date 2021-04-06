import { useEffect, useState } from 'react';
import {
  InputGroup,
  Input as ChakraInput,
  InputProps,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';

import NameIcon from '../NameIcon';
import EmailIcon from '../EmailIcon';

export default function Input({ ...rest }: InputProps): JSX.Element {
  const [isFocus, setIsFocus] = useState(false);

  const icons = {
    name: <NameIcon color={isFocus ? '#8c64e7' : '#41414D'} />,
    email: <EmailIcon color={isFocus ? '#8c64e7' : '#41414D'} />,
  };

  function handleInputFocus() {
    setIsFocus(true);
  }

  function handleInputBlur() {
    setIsFocus(false);
  }

  return (
    <InputGroup
      _notFirst={{
        marginTop: '1rem',
      }}
    >
      <InputLeftElement
        height={rest.height}
        marginLeft={5}
        textAlign="center"
        children={icons[rest.name]}
      />
      <ChakraInput
        bg="black.50"
        size="lg"
        paddingLeft="4.5rem"
        focusBorderColor="purple.50"
        variant="filled"
        backgroundColor="black.800"
        color="white.50"
        fontSize="1.52rem"
        _placeholder={{
          fontSize: '1.52rem',
        }}
        _hover={null}
        _focus={{
          bgColor: 'none',
          borderWidth: '2px',
          borderColor: 'purple.50',
        }}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
    </InputGroup>
  );
}
