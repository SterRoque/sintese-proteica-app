import { Text, View } from 'react-native';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';

type TModalInvalidTranslation = {
   isOpen?: boolean;
   onClose: () => void;
   textInput?: string;
   translationCorrect: string;
};

export function ModalInvalidTranslation({
   isOpen = false,
   onClose,
   textInput,
   translationCorrect,
}: TModalInvalidTranslation) {
   return (
      <Modal.Root
         onClose={onClose}
         isOpen={isOpen}>
         <Modal.Head title='Tradução Incorreta' />
         <Modal.Content>
            <View className='pt-5 mx-6'>
               <Text className='text-center text-red-600 font-bold text-[16px]'>
                  {'Você errou :('}
               </Text>
               <Text className='mt-3 mb-3 text-[15px] text-center'>
                  Aminoácidos que você digitou: {'\n'}
                  <Text className='text-[16px] font-bold text-red-600'>
                     {textInput}
                  </Text>
               </Text>
               <Text className='text-[15px] text-center'>
                  Aminoácidos corretos:{'\n'}
                  <Text className='text-[16px] font-bold text-blue-600'>
                     {translationCorrect}
                  </Text>
               </Text>

               <Text className='text-[16px] mt-3'>
                  Faça a tradução novamente
               </Text>
            </View>
         </Modal.Content>
         <Modal.Footer
            onClose={onClose}
            title='Ok'
         />
      </Modal.Root>
   );
}
