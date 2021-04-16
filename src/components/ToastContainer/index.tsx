import { Box, Button, Image, Text } from '@chakra-ui/react';

interface Props {
  description: string;
  status: 'success' | 'error';
  onClose: () => void;
}

const colors = {
  error: 'red.400',
  success: 'purple.300',
};

export default function ToastContainer({
  status,
  description,
  onClose,
}: Props): JSX.Element {
  const color = colors[status];

  return (
    <Box
      width="400px"
      height="80px"
      bg={color}
      color="white.50"
      p="5px"
      position="relative"
    >
      <Text
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="18px"
        maxW="300px"
        w="100%"
        fontSize="1.2rem"
        lineHeight="20px"
      >
        {description}
      </Text>
      <Button
        variant="unstyled"
        position="absolute"
        top="5px"
        right="5px"
        onClick={onClose}
      >
        <Image src="/assets/icons/close-icon.svg" width="38px" />
      </Button>
    </Box>
  );
}
