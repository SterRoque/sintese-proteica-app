import { Text, View } from 'react-native';
import { useDnaStore } from '../store/useDnaStore';
import { dnaReplication } from '../utils/dna-replication';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Input } from '../components/Input';
import { Keyboard } from '../components/Keyboard';
import { ModalValidDuplication } from '../components/ModalValidDuplication';
import { ModalInvalidDuplication } from '../components/ModalInvalidDuplication';

export default function Replication() {
   const { dna } = useDnaStore();
   const [isAutoDuplicate, setIsAutoDuplicate] = useState(true);
   const [textInput, setTextInput] = useState('');
   const [isOpenModalHelp, setIsOpenModalHelp] = useState(false);
   const [isOpenModalValidDuplication, setIsOpenModalValidDuplication] =
      useState(false);
   const [isOpenModalInvalidDuplication, setIsOpenModalInvalidDuplication] =
      useState(false);

   const dnaReplic = dnaReplication(dna);

   function handleDnaDuplicate() {
      validDuplication();
   }

   function validDuplication() {
      if (textInput === dnaReplic) {
         setIsOpenModalValidDuplication(true);
      } else {
         setIsOpenModalInvalidDuplication(true);
      }
   }
   function handleCloseModalValidDuplication() {
      setIsOpenModalValidDuplication(false);
   }
   function handleCloseModalInvalidDuplication() {
      setIsOpenModalInvalidDuplication(false);
   }

   return (
      <View className='w-full items-center px-[5%] pt-8'>
         <View className='flex flex-row w-full items-center justify-around'>
            <Button
               title='Auto Duplicação'
               className='w-[45%]'
               onPress={() => setIsAutoDuplicate(true)}
            />
            <Button
               title='Faça Duplicação'
               className='w-[45%]'
               onPress={() => setIsAutoDuplicate(false)}
            />
         </View>

         {isAutoDuplicate ? (
            <>
               <Text className='text-blue-500 text-lg font-bold text-center mt-12'>
                  Fita de DNA: {'\n'}
                  <Text className='text-xl'>{dna.toUpperCase()}</Text>
               </Text>
               <Text className='text-blue-500 text-lg font-bold mt-4 text-center'>
                  Fita de DNA Replicada: {'\n'}
                  <Text className='text-xl'>{dnaReplic}</Text>
               </Text>
            </>
         ) : (
            <View className='w-full mt-12 mb-20 h-full'>
               <Text className='text-blue-500 text-lg font-bold mx-[11px]'>
                  {dna}
               </Text>
               <Input
                  placeholder='Faça a replicação do DNA'
                  value={textInput}
                  editable={false}
                  onChangeText={(text) => setTextInput(text)}
                  className='font-bold text-lg max-h-16 text-red-600'
               />
               <View className='mt-11'>
                  <Keyboard
                     valueArray={['A', 'T', 'C', 'G']}
                     onKeyPress={(text) => setTextInput((prev) => prev + text)}
                     onRemove={() =>
                        setTextInput((prev) => prev.slice(0, prev.length - 1))
                     }
                  />
               </View>

               <Button
                  title='Duplicar'
                  className='self-center max-w-[120px] mt-5'
                  onPress={handleDnaDuplicate}
               />
               <ModalValidDuplication
                  isOpen={isOpenModalValidDuplication}
                  onClose={handleCloseModalValidDuplication}
                  textInput={textInput}
               />
               <ModalInvalidDuplication
                  isOpen={isOpenModalInvalidDuplication}
                  onClose={handleCloseModalInvalidDuplication}
                  textInput={textInput}
                  duplicationCorrect={dnaReplic}
               />
               {/* <Modal /> */}
            </View>
         )}
      </View>
   );
}
