import { TextInput, TextInputProps, View, Text } from 'react-native';

export function Input({ onChangeText, ...rest }: TextInputProps) {
   return (
      <View className='max-h-[75px]'>
         <TextInput
            className='border-blue-400 border-[1px] rounded-md max-h-11 h-full px-3 relative mb-3 w-full'
            onChangeText={onChangeText}
            multiline={true}
            {...rest}
         />
         <Text
            className='font-bold text-red-600 text-right bottom-0 '
            onPress={() => onChangeText!('')}
            numberOfLines={5}
            ellipsizeMode='tail'>
            Limpar
         </Text>
      </View>
   );
}
