import { ReactNode } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

type TModalRoot = {
   children: ReactNode;
   isOpen?: boolean;
   onClose: () => void;
};

export function ModalRoot({ children, isOpen = false, onClose }: TModalRoot) {
   return (
      <Modal
         animationType='fade'
         visible={isOpen}
         transparent>
         <TouchableOpacity
            activeOpacity={0.5}
            className='bg-black w-full h-screen absolute flex-1 opacity-50'
            onPress={onClose}
         />
         <View className='w-full h-full justify-center'>
            <View className='justify-center items-center w-fit h-fit bg-red-50 mx-6 rounded-md'>
               {children}
            </View>
         </View>
      </Modal>
   );
}
