import { Stack } from 'expo-router/stack';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Preloader } from '../components/Preloader';

export default function Layout() {
   return (
      <SafeAreaProvider>
         <Stack
            screenOptions={{
               contentStyle: {
                  backgroundColor: 'rgb(254 242 242)',
               },
               headerStyle: {
                  backgroundColor: 'rgb(249 115 22)',
               },
               headerTintColor: 'white',
            }}>
            <Stack.Screen
               name='(tabs)'
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name='replication'
               options={{
                  title: 'Replicação do DNA',
               }}
            />
            <Stack.Screen
               name='transcription'
               options={{
                  title: 'Transcrição do DNA',
               }}
            />
            <Stack.Screen
               name='translation'
               options={{
                  title: 'Tradução do RNA',
               }}
            />
         </Stack>
         <Preloader />
      </SafeAreaProvider>
   );
}
