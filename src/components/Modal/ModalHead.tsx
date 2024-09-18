import Entypo from '@expo/vector-icons/Entypo';
import { Text, View } from 'react-native';

type TModalHead = {
   icon?: JSX.Element;
   title: string;
};

export function ModalHead({ icon, title }: TModalHead) {
   return (
      <View className='flex-row bg-red-100 w-full items-center h-10 justify-center rounded-t-md relative'>
         <View className='absolute left-6'>{icon}</View>
         <Text className='text-lg text-red-700 font-bold '>{title}</Text>
      </View>
   );
}
