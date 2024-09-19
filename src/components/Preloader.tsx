import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Image, Easing } from 'react-native';
import logo from '../assets/images/logo.png';
import { usePreloader } from '../hooks/usePreloader';

export const Preloader = () => {
   const { isOpenPreloader } = usePreloader();
   const rotation = useRef(new Animated.Value(0)).current;

   const startRotation = () => {
      Animated.loop(
         Animated.timing(rotation, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
         }),
      ).start();
   };
   const stopRotation = () => {
      Animated.loop(
         Animated.timing(rotation, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
         }),
      ).reset();
   };

   useEffect(() => {
      if (isOpenPreloader) {
         startRotation();
      } else {
         stopRotation();
      }
   }, [isOpenPreloader]);

   const rotateData = rotation.interpolate({
      inputRange: [0, 1],

      outputRange: ['0deg', '360deg'],
   });

   if (!isOpenPreloader) return <></>;
   return (
      <View className='flex-1 justify-center items-center absolute z-50 h-screen w-screen bg-[#00000060]'>
         <Animated.Image
            source={logo}
            className='w-[100px] h-[100px]'
            style={{ transform: [{ rotateY: rotateData }] }}
         />
      </View>
   );
};
