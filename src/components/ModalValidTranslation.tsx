import { Text, View } from 'react-native';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';

type TModalValidTranslation = {
   isOpen?: boolean;
   onClose: () => void;
   textInput?: string;
};

export function ModalValidTranslation({
   isOpen = false,
   onClose,
   textInput,
}: TModalValidTranslation) {
   return (
      <Modal.Root
         onClose={onClose}
         isOpen={isOpen}>
         <Modal.Head title='Tradução correta' />
         <Modal.Content>
            <View className='pt-8  mx-5'>
               <Text className='text-[16px] text-center mb-4'>
                  Aminoácidos digitado: {'\n'}
                  <Text className='text-blue-600 font-bold'>{textInput}</Text>
               </Text>
               <Text className='text-[16px] font-bold text-center'>
                  Parabens! Você fez a tradução corretamente
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
