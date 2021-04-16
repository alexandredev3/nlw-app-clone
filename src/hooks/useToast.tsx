import { useToast as useToastChakra } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

interface IToastData {
  id: string;
  status: 'success' | 'error';
  description: string;
}

export default function useToast() {
  const toast = useToastChakra();

  function addToast({ description, status }: Omit<IToastData, 'id'>) {
    const id = uuidv4();

    toast({
      id,
      isClosable: true,
      position: 'top-right',
      status,
      render: ({ onClose }) => (
        <ToastContainer
          description={description}
          status={status}
          onClose={onClose}
        />
      ),
    });
  }

  return { addToast };
}
