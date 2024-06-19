import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
   title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
   return (
      <TouchableOpacity
         className='rounded-2xl w-full h-11 max-w-[250px] bg-orange-500 justify-center'
         {...rest}>
         <Text className='text-white font-semibold text-sm text-center'>
            {title}
         </Text>
      </TouchableOpacity>
   );
}
