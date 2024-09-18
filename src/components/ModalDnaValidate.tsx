import { Text, TouchableOpacity, View, Modal as ModalUI } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Modal } from './Modal';

type TModalDnaValidate = {
   isOpen?: boolean;
   onClose: () => void;
};

export function ModalDnaValidate({
   isOpen = false,
   onClose,
}: TModalDnaValidate) {
   return (
      <Modal.Root
         isOpen={isOpen}
         onClose={onClose}>
         <Modal.Head
            title='Fita Invalida'
            icon={
               <Entypo
                  name='warning'
                  size={20}
                  color={'#b91c1c'}
               />
            }
         />
         <Modal.Content>
            <Text className='text-base mt-8 mx-8'>
               Para uma fita de DNA ser válida, ela precisa ter uma
               inicialização (TAC) e uma terminação (ATT, ACT, ATC)
            </Text>
         </Modal.Content>
         <Modal.Footer
            onClose={onClose}
            title='Entendi'
         />
      </Modal.Root>
   );
}
