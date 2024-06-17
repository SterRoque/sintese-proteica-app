import {
   Box,
   Center,
   HStack,
   Image,
   Input,
   Link,
   Stack,
   Text,
   VStack,
} from 'native-base';
import { Button } from '../components/Button';
import { Tabs } from 'expo-router';
import logo from '@/src/assets/images/logo.png';
import { useState } from 'react';

export default function Sintese() {
   const [inputText, setInputText] = useState<string>();

   return (
      <VStack
         w='100%'
         h='full'
         alignItems='center'>
         <Image
            source={logo}
            alt='logo principal'
            w={120}
            h={120}
            mt='50px'
         />

         <Box
            w='90%'
            mt='50px'
            mb='80px'>
            <Input
               placeholder='Digite a fita de DNA'
               value={inputText}
               onChangeText={(text) => setInputText(text)}
               mb='10px'
            />
            <HStack justifyContent='space-between'>
               <Text
                  fontWeight={700}
                  color='blue.500'>
                  Gerar fita
               </Text>
               <Text
                  fontWeight={700}
                  color='error.500'
                  onPress={() => setInputText('')}>
                  Limpar
               </Text>
            </HStack>
         </Box>

         <Box
            w='100%'
            alignItems='center'
            gap='10px'>
            <Button title='Duplicação' />
            <Button title='Transcrição' />
            <Button title='Tradução' />
         </Box>

         <Tabs />
      </VStack>
   );
}
