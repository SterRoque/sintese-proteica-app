import { Image, TextInput, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Tabs, useRouter } from 'expo-router';
import logo from '@/src/assets/images/logo.png';
import { useState } from 'react';
import { dnaGenerator } from '../utils/dna-generator';
import { PathEnum } from '../constants/path-enum';
import { Input } from '../components/Input';
import { useDnaStore } from '../store/useDnaStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Sintese() {
   const router = useRouter();

   const { dna, dnaUpdate } = useDnaStore();

   function handleGenerateDNA() {
      dnaUpdate(dnaGenerator());
      // handleSaveDNA(dna);
   }

   // async function handleSaveDNA(dna: any) {
   //    try {
   //       const dnaListStorage = await AsyncStorage.getItem('dnaListKey');

   //       if (dnaListStorage) {
   //          const dnaList = [...JSON.parse(dnaListStorage), dna];

   //          await AsyncStorage.setItem('dnaListKey', JSON.stringify(dnaList));

   //          return;
   //       }

   //       await AsyncStorage.setItem('dnaListKey', JSON.stringify([dna]));
   //    } catch (e) {
   //       console.log(e);
   //    }
   // }

   return (
      <View className='flex w-full h-full items-center'>
         <Image
            source={logo}
            className='w-32 h-32 mt-12'
         />

         <View className='w-[90%] mt-12 mb-20'>
            <Input
               placeholder='Digite a fita de DNA'
               value={dna}
               onChangeText={(text) => dnaUpdate(text)}
            />

            <Text
               className='font-bold text-blue-600 absolute bottom-0'
               onPress={handleGenerateDNA}>
               Gerar fita
            </Text>
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
