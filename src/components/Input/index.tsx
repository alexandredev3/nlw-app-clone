import {
  InputGroup,
  Input as ChakraInput,
  InputProps,
  InputGroupProps,
  InputLeftElement,
} from '@chakra-ui/react';

import { useState } from 'react';
import NameIcon from '../NameIcon';
import EmailIcon from '../EmailIcon';

interface Props extends InputProps {
  inputGroup?: InputGroupProps;
}

export default function Input({ inputGroup, ...rest }: Props): JSX.Element {
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
    <InputGroup {...inputGroup}>
      <InputLeftElement
        border={0}
        height="68px"
        marginLeft={3}
        children={icons[rest.name]}
      />
      <ChakraInput
        layerStyle="input"
        bgColor="black.50"
        size="lg"
        paddingLeft={16}
        focusBorderColor="purple.50"
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
    </InputGroup>
  );
}
