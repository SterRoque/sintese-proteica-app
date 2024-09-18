import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function History() {
   const [dnaArray, setDnaArray] = useState([]);

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
   async function cleanHistory() {
      try {
         await AsyncStorage.removeItem('dnaListKey');
         setDnaArray([]);
      } catch (e) {
         console.log(e);
      }
   }

   useFocusEffect(
      useCallback(() => {
         getDNA();
      }, []),
   );

   return (
      <View>
         <Text>oiii</Text>
         <Button
            title='limpar historico'
            onPress={cleanHistory}
         />
         <Text>DNAs Salvas</Text>
         {dnaArray.map((dna, index) => {
            return <Text key={index}>{dna}</Text>;
         })}
      </View>
   );
}
