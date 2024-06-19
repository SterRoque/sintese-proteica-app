import { Image, TextInput, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Tabs, useRouter } from 'expo-router';
import logo from '@/src/assets/images/logo.png';
import { useState } from 'react';
import { dnaGenerator } from '../utils/dna-generator';
import { PathEnum } from '../constants/path-enum';

export default function Sintese() {
   const router = useRouter();

   const [inputText, setInputText] = useState<string>('');

   function handleGenerateDNA() {
      const dna = dnaGenerator();
      setInputText(dna);
   }

   return (
      <View className='flex w-full h-full items-center'>
         <Image
            source={logo}
            className='w-32 h-32 mt-12'
         />

         <View className='w-[90%] mt-12 mb-20'>
            <TextInput
               placeholder='Digite a fita de DNA'
               value={inputText}
               onChangeText={(text) => setInputText(text)}
               className='mb-3'
            />
            <View className='flex justify-between flex-row'>
               <Text
                  className='font-bold text-blue-600'
                  onPress={handleGenerateDNA}>
                  Gerar fita
               </Text>
               <Text
                  className='font-bold text-red-600'
                  onPress={() => setInputText('')}>
                  Limpar
               </Text>
            </View>
         </View>

         <View className='flex w-full gap-3 items-center'>
            <Button
               title='Duplicação'
               onPress={() => router.push(PathEnum.REPLICATION)}
            />
            <Button title='Transcrição' />
            <Button title='Tradução' />
         </View>

         <Tabs />
      </View>
   );
}
