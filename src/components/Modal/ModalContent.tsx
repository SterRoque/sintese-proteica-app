import { Text, View } from 'react-native';

type TModalContent = {
   children: string | JSX.Element;
};

export function ModalContent({ children }: TModalContent) {
   return (
      <View className='self-center items-center w-full h-fit rounded-xl justify-between'>
         <View>{children}</View>
      </View>
   );
}
