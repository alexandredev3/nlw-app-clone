import { Button, ButtonGroup } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isSubmitting?: boolean;
}

export default function FormButton({
  children,
  isSubmitting,
}: Props): JSX.Element {
  return (
    <ButtonGroup
      zIndex={1}
      minW="600px"
      width="100%"
      padding="1.75rem 2.25rem"
      transition="filter 200ms"
      _hover={{
        filter: 'brightness(1.1)',
      }}
      marginTop="0.2rem"
    >
      <Button
        as="button"
        type="submit"
        bg="purple.300"
        variant="solid"
        color="white.50"
        height="76px"
        width="100%"
        isLoading={isSubmitting}
        _before={{
          content: "''",
          width: '100%',
          height: '76px',
          bg: 'purple.400',
          position: 'absolute',
          top: '8px',
          borderRadius: 'md',
          zIndex: -1,
        }}
        _loading={{
          opacity: 1,
          fontSize: '1.25rem',
        }}
        _hover={null}
        _active={null}
        _focus={null}
      >
        {children}
      </Button>
    </ButtonGroup>
  );
}
