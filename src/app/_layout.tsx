import { Stack } from 'expo-router/stack';
import { NativeBaseProvider, theme } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
   return (
      <SafeAreaProvider>
         <Stack>
            <Stack.Screen
               name='(tabs)'
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name='dna-replication'
               options={{ title: 'Replicação do DNA' }}
            />
         </Stack>
      </SafeAreaProvider>
   );
}
