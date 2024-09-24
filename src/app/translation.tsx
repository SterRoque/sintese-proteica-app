import { Image, ScrollView, Text, ToastAndroid, View } from 'react-native';
import { Button } from '../components/Button';
import { useDnaStore } from '../store/useDnaStore';
import { useState } from 'react';
import { Input } from '../components/Input';
import { Keyboard } from '../components/Keyboard';
import { dnaTranscription } from '../utils/dna-transcription';
import { rnaTranslation } from '../utils/rna-translation';
import { ModalValidTranslation } from '../components/ModalValidTranslation';
import { splitIntoGroupsOfThree } from '../utils/split-in-to-group-of-three';
import { ModalInvalidTranslation } from '../components/ModalInvalidTranslation';
import codonTable from '../assets/images/tabela-codon.png';

export default function Translation() {
   const { dna } = useDnaStore();
   const dnaToRna = dnaTranscription(dna);

   const mRNA = rnaTranslation(dnaToRna);

   const [textInput, setTextInput] = useState('');
   const [isAutoTranslation, setIsAutoTranslation] = useState(true);
   const [isOpenModalValidTranslation, setIsOpenModalValidTranslation] =
      useState(false);
   const [isOpenModalInvalidTranslation, setIsOpenModalInvalidTranslation] =
      useState(false);

   function handleRnaTranslation() {
      if (!textInput) {
         ToastAndroid.show('Faça a tradução', ToastAndroid.SHORT);
      }
      validTranslation();
   }

   console.log(mRNA?.aminoAcidSequence);

   function validTranslation() {
      if (textInput) {
         if (
            textInput.trim() ===
               splitIntoGroupsOfThree(mRNA!.aminoAcidSequence, ' - ') ||
            textInput.trim() ===
               splitIntoGroupsOfThree(mRNA!.aminoAcidSequence, ' ')
         ) {
            setIsOpenModalValidTranslation(true);
         } else {
            setIsOpenModalInvalidTranslation(true);
         }
      }
   }

   function handleCloseModalValidTranslation() {
      setIsOpenModalValidTranslation(false);
   }
   function handleCloseModalInvalidTranslation() {
      setIsOpenModalInvalidTranslation(false);
   }

   return (
      <View className='w-full items-center px-[5%] pt-8'>
         <View className='flex flex-row w-full items-center justify-around'>
            <Button
               title='Auto Tradução'
               className='w-[45%]'
               onPress={() => setIsAutoTranslation(true)}
            />
            <Button
               title='Faça Tradução'
               className='w-[45%]'
               onPress={() => setIsAutoTranslation(false)}
            />
         </View>

         {isAutoTranslation ? (
            <>
               <Text
                  className='text-blue-500 text-lg font-bold text-center mt-12 w-full'
                  numberOfLines={2}>
                  Sequência do RNA mensageiro: {'\n'}
                  <Text className=' text-gray-500 text-lg font-bold'>
                     {mRNA?.startRNA}
                  </Text>
                  <Text className=' text-orange-500 text-lg font-bold'>
                     {mRNA?.middleRNA}
                  </Text>
                  <Text className=' text-gray-500 text-lg font-bold'>
                     {mRNA?.endRNA}
                  </Text>
               </Text>

               <Text className='text-blue-500 text-lg font-bold mt-4 text-center'>
                  Aminoácidos: {'\n'}
                  <Text className='text-xl text-orange-500'>
                     {splitIntoGroupsOfThree(mRNA!.aminoAcidSequence, ' - ')}
                  </Text>
               </Text>
            </>
         ) : (
            <ScrollView className='w-screen px-[5%]'>
               <View className='w-full h-full mb-20'>
                  <Image
                     source={codonTable}
                     className='max-w-[350px] w-full'
                     resizeMode='contain'
                  />

                  <Text
                     className='w-full flex-row mx-[11px] mb-[15px]'
                     numberOfLines={1}>
                     <Text className=' text-gray-500 text-lg font-bold'>
                        {mRNA?.startRNA}
                     </Text>
                     <Text className=' text-blue-500 text-lg font-bold'>
                        {mRNA?.middleRNA}
                     </Text>
                     <Text className=' text-gray-500 text-lg font-bold'>
                        {mRNA?.endRNA}
                     </Text>
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
                        valueArray={[
                           'Ala',
                           'Arg',
                           'Ans',
                           'Asp',
                           'Glu',
                           'Cis',
                           'Fen',
                           'Gli',
                           'Gln',
                           'His',
                           'Ile',
                           'Leu',
                           'Lis',
                           'Met',
                           'Pro',
                           'Ser',
                           'Tir',
                           'Tre',
                           'Trp',
                           'Val',
                        ]}
                        onKeyPress={(text) =>
                           setTextInput((prev) => prev + text)
                        }
                        onRemove={() =>
                           setTextInput((prev) =>
                              prev.slice(0, prev.length - 3),
                           )
                        }
                        hasAditionalKey
                     />
                  </View>

                  <Button
                     title='Traduzir'
                     className='self-center max-w-[120px] mt-5'
                     onPress={handleRnaTranslation}
                  />
                  <ModalValidTranslation
                     isOpen={isOpenModalValidTranslation}
                     onClose={handleCloseModalValidTranslation}
                     textInput={textInput}
                  />
                  <ModalInvalidTranslation
                     isOpen={isOpenModalInvalidTranslation}
                     onClose={handleCloseModalInvalidTranslation}
                     textInput={textInput}
                     translationCorrect={splitIntoGroupsOfThree(
                        mRNA!.aminoAcidSequence,
                        ' ',
                     )}
                  />
                  {/* <Modal /> */}
               </View>
            </ScrollView>
         )}
      </View>
   );
}
