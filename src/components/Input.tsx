import { TextInput, TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
   return (
      <TextInput
         className='border-blue-400 border-[1px] rounded-md h-11 px-3'
         {...rest}
      />
   );
}
