import { Button } from '../../components/Button';
import logoHome from '../../assets/images/logo-home.png';
import { Animated, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { Link, useRouter } from 'expo-router';
import { PathEnum } from '@/src/constants/path-enum';
import { useDnaStore } from '@/src/store/useDnaStore';

export default function Home() {
   const router = useRouter();
   const scaleAnimation = useRef(new Animated.Value(1)).current;

   const { dna, dnaUpdate } = useDnaStore();

   function handleNavigateToSinteseDNA() {
      if (dna) {
         dnaUpdate('');
      }
      router.push(PathEnum.SINTESE);
   }

   useEffect(() => {
      Animated.loop(
         Animated.sequence([
            Animated.timing(scaleAnimation, {
               toValue: 1.2, // Zoom in
               duration: 2000,
               useNativeDriver: true,
            }),
            Animated.timing(scaleAnimation, {
               toValue: 1, // Zoom out
               duration: 2000,
               useNativeDriver: true,
            }),
         ]),
      ).start();
   }, [scaleAnimation]);

   const animatedStyle = {
      transform: [
         {
            scale: scaleAnimation,
         },
      ],
   };
   return (
      <View className='bg-red-50 w-full h-full items-center'>
         <Animated.Image
            style={[
               {
                  width: 120,
                  height: 120,
                  marginTop: '10%',
                  marginBottom: '40%',
               },
               animatedStyle,
            ]}
            source={logoHome}
         />

         <Button
            title='Conteúdo'
            className='mb-4'
         />

         <Button
            title='Sintese Proteica'
            onPress={handleNavigateToSinteseDNA}
         />
      </View>
   );
}
