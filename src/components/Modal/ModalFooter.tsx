import { Text, TouchableOpacity } from 'react-native';

type TModalFooter = {
   onClose: () => void;
   title?: string;
};

export function ModalFooter({ title, onClose }: TModalFooter) {
   return (
      <TouchableOpacity
         className={` ${title ? 'p-4 self-end mr-4 mb-3' : 'hidden'}`}
         onPress={onClose}>
         <Text className='text-red-700 font-bold text-base'>{title}</Text>
      </TouchableOpacity>
   );
}
