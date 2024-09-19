import { Text, ToastAndroid, View } from 'react-native';
import { Button } from '../components/Button';
import { useDnaStore } from '../store/useDnaStore';
import { useState } from 'react';
import { Input } from '../components/Input';
import { Keyboard } from '../components/Keyboard';
import { dnaTranscription } from '../utils/dna-transcription';
import { ModalValidTranscription } from '../components/ModalValidTranscription';
import { ModalInvalidTranscription } from '../components/ModalInvalidTranscription';

export default function Transcription() {
   const { dna } = useDnaStore();
   const mRNA = dnaTranscription(dna);
   const [isAutoTranscription, setIsAutoTranscription] = useState(true);
   const [isOpenModalValidTranscription, setIsOpenModalValidTranscription] =
      useState(false);
   const [isOpenModalInvalidTranscription, setIsOpenModalInvalidTranscription] =
      useState(false);

   function handleDnaTranscription() {
      if (!textInput) {
         ToastAndroid.show('Faça a transcrição', ToastAndroid.SHORT);
      }
      validTranscription();
   }

   function validTranscription() {
      console.log(textInput === mRNA);

      if (textInput) {
         if (textInput === mRNA) {
            setIsOpenModalValidTranscription(true);
         } else {
            setIsOpenModalInvalidTranscription(true);
         }
      }
   }

   function handleCloseModalValidTranscription() {
      setIsOpenModalValidTranscription(false);
   }
   function handleCloseModalInvalidTranscription() {
      setIsOpenModalInvalidTranscription(false);
   }

   const [textInput, setTextInput] = useState('');
   return (
      <View className='w-full items-center px-[5%] pt-8'>
         <View className='flex flex-row w-full items-center justify-around'>
            <Button
               title='Auto Transcrição'
               className='w-[45%]'
               onPress={() => setIsAutoTranscription(true)}
            />
            <Button
               title='Faça Transcrição'
               className='w-[45%]'
               onPress={() => setIsAutoTranscription(false)}
            />
         </View>

         {isAutoTranscription ? (
            <>
               <Text className='text-blue-500 text-lg font-bold text-center mt-12'>
                  Sequência de DNA: {'\n'}
                  <Text className='text-xl'>{dna.toUpperCase()}</Text>
               </Text>
               <Text className='text-blue-500 text-lg font-bold mt-4 text-center'>
                  RNA mensageiro: {'\n'}
                  <Text className='text-xl'>{mRNA}</Text>
               </Text>
            </>
         ) : (
            <View className='w-full mt-12 mb-20 h-full'>
               <Text className='text-blue-500 text-lg font-bold mx-[11px]'>
                  {dna}
               </Text>
               <Input
                  placeholder='Faça a transcrição do DNA'
                  value={textInput}
                  editable={false}
                  onChangeText={(text) => setTextInput(text)}
                  className='font-bold text-lg max-h-16 text-red-600'
               />
               <View className='mt-11'>
                  <Keyboard
                     valueArray={['U', 'A', 'C', 'G']}
                     onKeyPress={(text) => setTextInput((prev) => prev + text)}
                     onRemove={() =>
                        setTextInput((prev) => prev.slice(0, prev.length - 1))
                     }
                  />
               </View>

               <Button
                  title='Transcrever'
                  className='self-center max-w-[120px] mt-5'
                  onPress={handleDnaTranscription}
               />
               <ModalValidTranscription
                  isOpen={isOpenModalValidTranscription}
                  onClose={handleCloseModalValidTranscription}
                  textInput={textInput}
               />
               <ModalInvalidTranscription
                  isOpen={isOpenModalInvalidTranscription}
                  onClose={handleCloseModalInvalidTranscription}
                  textInput={textInput}
                  rnaCorrect={mRNA}
               />
               {/* <Modal /> */}
            </View>
         )}
      </View>
   );
}
