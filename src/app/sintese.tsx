import { Image, Text, View, ToastAndroid } from 'react-native';
import { Button } from '../components/Button';
import { Tabs, useRouter } from 'expo-router';
import logo from '@/src/assets/images/logo.png';
import { dnaGenerator } from '../utils/dna-generator';
import { PathEnum } from '../constants/path-enum';
import { Input } from '../components/Input';
import { useDnaStore } from '../store/useDnaStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from '../components/Modal';
import { useEffect, useState } from 'react';
import { dnaValidationSTOP, dnaValidationTAC } from '../utils/dna-validation';
import { ModalDnaValidate } from '../components/ModalDnaValidate';
import { usePreloader } from '../hooks/usePreloader';

export default function Sintese() {
   const router = useRouter();

   const { dna, dnaUpdate } = useDnaStore();
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const { openPreloader, closePreloader } = usePreloader();

   function handleGenerateDNA() {
      const newDNA = dnaGenerator();

      dnaUpdate(newDNA);
      handleSaveDNA(newDNA);
   }

   async function handleValidateDNA(path: string) {
      if (!dna) {
         ToastAndroid.show(
            'Digite ou gere uma fita de DNA',
            ToastAndroid.SHORT,
         );
         return;
      }

      openPreloader();

      if (dnaValidate()) {
         await handleSaveDNA(dna);
         router.push(path);
      }
      closePreloader();
   }

   async function handleSaveDNA(dna: string) {
      try {
         const dnaListStorage = await AsyncStorage.getItem('dnaListKey');

         if (dnaListStorage) {
            const dnaList = [...JSON.parse(dnaListStorage), dna];

            await AsyncStorage.setItem('dnaListKey', JSON.stringify(dnaList));

            return;
         }

         await AsyncStorage.setItem('dnaListKey', JSON.stringify([dna]));
      } catch (e) {
         console.log(e);
      }
   }

   function dnaValidate() {
      const fitaInvalidaTAC =
         dnaValidationTAC(dna).message === 'TAC não encontrado';
      const fitaInvalidaSTOP =
         dnaValidationSTOP(dna).message === 'condição não encontrada';
      const fitaValidaTAC = dnaValidationTAC(dna).message === 'TAC encontrado';
      const fitaValidaSTOP =
         dnaValidationSTOP(dna).message === 'condição encontrada';

      const fitaInvalida =
         (fitaInvalidaTAC && fitaInvalidaSTOP) ||
         (fitaValidaTAC && fitaInvalidaSTOP) ||
         (fitaInvalidaTAC && fitaValidaSTOP);

      if (fitaInvalida) {
         setIsOpenModal(true);
         return false;
      }

      return true;
   }

   function handleCloseModal() {
      setIsOpenModal(false);
   }

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
               onChangeText={(text) => dnaUpdate(text.toUpperCase())}
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
               onPress={() => handleValidateDNA(PathEnum.REPLICATION)}
            />
            <Button
               title='Transcrição'
               onPress={() => handleValidateDNA(PathEnum.TRANSCRIPTION)}
            />
            <Button title='Tradução' />
         </View>

         <ModalDnaValidate
            isOpen={isOpenModal}
            onClose={handleCloseModal}
         />
         <Tabs />
      </View>
   );
}
