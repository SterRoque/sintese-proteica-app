import { Text, View } from 'react-native';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';

type TModalInvalidTranscription = {
   isOpen?: boolean;
   onClose: () => void;
   textInput?: string;
   rnaCorrect: string;
};

export function ModalInvalidTranscription({
   isOpen = false,
   onClose,
   textInput,
   rnaCorrect,
}: TModalInvalidTranscription) {
   return (
      <Modal.Root
         onClose={onClose}
         isOpen={isOpen}>
         <Modal.Head title='Duplicação Incorreta' />
         <Modal.Content>
            <View className='pt-5 mx-6'>
               <Text className='text-center text-red-600 font-bold text-[16px]'>
                  {'Você errou :('}
               </Text>
               <Text className='mt-3 mb-3 text-[15px]'>
                  Transcrição que você fez: {'\n'}
                  <Text className='text-[16px] font-bold text-red-600'>
                     {textInput}
                  </Text>
               </Text>
               <Text className='text-[15px]'>
                  Transcrição correta:{'\n'}
                  <Text className='text-[16px] font-bold text-blue-600'>
                     {rnaCorrect}
                  </Text>
               </Text>

               <Text className='mt-3 text-[15px]'>
                  Na transcrição do DNA o emparelhamento das bases ocorre da
                  seguinte maneira:
               </Text>
               <Text className='text-[16px] font-bold'>
                  A - U{'\n'}T - A{'\n'}C - G{'\n'}G - C
               </Text>
               <Text className='text-[16px] mt-3'>
                  Faça a transcrição novamente
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
