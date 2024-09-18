import { Text, View } from 'react-native';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';

type TModalValidDuplication = {
   isOpen?: boolean;
   onClose: () => void;
   textInput?: string;
};

export function ModalValidDuplication({
   isOpen = false,
   onClose,
   textInput,
}: TModalValidDuplication) {
   return (
      <Modal.Root
         onClose={onClose}
         isOpen={isOpen}>
         <Modal.Head title='Duplicação Correta' />
         <Modal.Content>
            <View className='pt-8  mx-5'>
               <Text className='text-[16px] text-center mb-4'>
                  Duplicação digitada: {'\n'}
                  <Text className='text-blue-600 font-bold'>{textInput}</Text>
               </Text>
               <Text className='text-[16px] font-bold text-center'>
                  Parabens! Você fez a duplicação corretamente
               </Text>
            </View>
         </Modal.Content>
         <Modal.Footer
            onClose={onClose}
            title='Fechar'
         />
      </Modal.Root>
   );
}
