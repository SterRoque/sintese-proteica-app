import { Text, View } from 'react-native';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';

type TModalValidTranscription = {
   isOpen?: boolean;
   onClose: () => void;
   textInput?: string;
};

export function ModalValidTranscription({
   isOpen = false,
   onClose,
   textInput,
}: TModalValidTranscription) {
   return (
      <Modal.Root
         onClose={onClose}
         isOpen={isOpen}>
         <Modal.Head title='Transcrição Correta' />
         <Modal.Content>
            <View className='pt-8  mx-5'>
               <Text className='text-[16px] text-center mb-4'>
                  RNA mensageiro digitado: {'\n'}
                  <Text className='text-blue-600 font-bold'>{textInput}</Text>
               </Text>
               <Text className='text-[16px] font-bold text-center'>
                  Parabens! Você fez a transcrição corretamente
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
