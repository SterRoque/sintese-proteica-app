import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
   Alert,
   Clipboard,
   FlatList,
   Text,
   ToastAndroid,
   TouchableOpacity,
   View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button } from '@/src/components/Button';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDnaStore } from '@/src/store/useDnaStore';
import { PathEnum } from '@/src/constants/path-enum';

export default function History() {
   const [dnaArray, setDnaArray] = useState([]);

   const { dnaUpdate } = useDnaStore();

   async function getDNA() {
      try {
         const data = await AsyncStorage.getItem('dnaListKey');

         if (data) {
            setDnaArray(JSON.parse(data));
         }

         console.log(data);
      } catch (err) {
         console.log(err);
      }
   }
   function confirmRemoveDNA(index: number) {
      Alert.alert(
         'Confirmar Exclusão',
         'Você tem certeza que deseja excluir este item?',
         [
            {
               text: 'Cancelar',
               style: 'cancel',
            },
            {
               text: 'Excluir',
               onPress: () => removeOneDNA(index),
               style: 'destructive',
            },
         ],
         { cancelable: true },
      );
   }
   async function removeOneDNA(indexDNA: number) {
      try {
         const newDnaArray = dnaArray.filter((_, index) => index !== indexDNA);
         setDnaArray(newDnaArray);

         await AsyncStorage.setItem('dnaListKey', JSON.stringify(newDnaArray));
      } catch (e) {
         console.log(e);
      }
   }
   async function cleanHistory() {
      try {
         await AsyncStorage.removeItem('dnaListKey');
         setDnaArray([]);
      } catch (e) {
         console.log(e);
      }
   }

   function copyText(text: string) {
      Clipboard.setString(text);
      ToastAndroid.show('Texto copiado', ToastAndroid.SHORT);
   }

   function redirectToHomeWithDNA(dna: string) {
      dnaUpdate(dna);

      router.push(PathEnum.SINTESE);
   }

   useFocusEffect(
      useCallback(() => {
         getDNA();
      }, []),
   );

   return (
      <View className='bg-red-50 flex-1'>
         <Text className='text-xl font-bold text-red-800 mt-5 px-4'>
            Historico de Fitas DNA
         </Text>

         <FlatList
            data={dnaArray}
            className='mt-4'
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
               <View className='flex-row justify-between items-center h-12  border-b border-red-200 px-4'>
                  <TouchableOpacity
                     className='h-12 justify-center'
                     onPress={() => redirectToHomeWithDNA(item)}>
                     <Text>{item}</Text>
                  </TouchableOpacity>

                  <View className='flex-row gap-2'>
                     <TouchableOpacity
                        className='h-12 items-center justify-center'
                        onPress={() => copyText(item)}>
                        <MaterialIcons
                           name='content-copy'
                           size={24}
                           color='#f87171'
                        />
                     </TouchableOpacity>
                     <TouchableOpacity
                        className='h-12 items-center justify-center'
                        onPress={() => confirmRemoveDNA(index)}>
                        <FontAwesome
                           name='trash-o'
                           size={24}
                           color='#f87171'
                        />
                     </TouchableOpacity>
                  </View>
               </View>
            )}
         />
         <Button
            title='Excluir tudo'
            onPress={cleanHistory}
            className='max-w-[100px] self-end mr-4'
         />
      </View>
   );
}
