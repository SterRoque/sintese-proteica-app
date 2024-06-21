import {
   Text,
   TouchableOpacity,
   TouchableOpacityProps,
   View,
   ViewProps,
} from 'react-native';

interface IKeyboardProps extends TouchableOpacityProps {
   hasAditionalKey?: boolean;
   valueArray: string[];
   onKeyPress: (value: string) => void;
   onRemove: () => void;
}
interface IKeyProps extends TouchableOpacityProps {
   word: string;
}

export function Keyboard({
   hasAditionalKey,
   valueArray,
   onKeyPress,
   onRemove,
}: IKeyboardProps) {
   return (
      <View className='w-full  bg-orange-600 rounded-md p-1'>
         <View className='flex-row flex-wrap'>
            {valueArray.map((word) => (
               <Key
                  word={word}
                  key={word}
                  onPress={() => onKeyPress(word)}
               />
            ))}
            <View className='w-full flex-row'>
               {hasAditionalKey && (
                  <Key
                     word='-'
                     className='w-[33.33%]'
                  />
               )}
               <Key
                  word='Remover'
                  onPress={() => onRemove()}
                  className={hasAditionalKey ? 'w-[33.33%]' : 'w-full'}
               />
               {hasAditionalKey && (
                  <Key
                     word='FIM'
                     className='w-[33.33%]'
                  />
               )}
            </View>
         </View>
      </View>
   );
}
export function Key({ word, ...rest }: IKeyProps) {
   return (
      <TouchableOpacity
         className='w-[25%] h-8 bg-orange-400 border-yellow-400 border-[1px] rounded-md items-center justify-center'
         {...rest}>
         <Text className='text-center text-white font-bold'>{word}</Text>
      </TouchableOpacity>
   );
}
