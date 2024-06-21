import { Text, View } from 'react-native';
import { useDnaStore } from '../store/useDnaStore';
import { dnaReplication } from '../utils/dna-replication';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Input } from '../components/Input';
import { Keyboard } from '../components/Keyboard';

export default function DnaReplication() {
   const { dna } = useDnaStore();
   const [isAutoDuplicate, setIsAutoDuplicate] = useState(true);
   const [textInput, setTextInput] = useState('');

   const baseDnaReplication = ['A', 'T', 'C', 'G'];

   const dnaReplic = dnaReplication(dna);

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
                  <Text>{dna}</Text>
               </Text>
               <Text className='text-blue-500 text-lg font-bold mt-4 text-center'>
                  Fita de DNA Replicada: {'\n'}
                  <Text>{dnaReplic}</Text>
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
                  onChangeText={(text) => setTextInput(text)}
                  className='font-bold text-lg max-h-16'
               />
               <View className='mt-11'>
                  <Keyboard
                     valueArray={baseDnaReplication}
                     onKeyPress={(text) => setTextInput((prev) => prev + text)}
                     onRemove={() =>
                        setTextInput((prev) => prev.slice(0, prev.length - 1))
                     }
                  />
               </View>
            </View>
         )}
      </View>
   );
}
