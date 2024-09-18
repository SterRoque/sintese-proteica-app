import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Config() {
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

   useEffect(() => {
      getDNA();
      console.log(dnaArray);
   }, []);

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
