import { Stack } from 'expo-router/stack';
import { NativeBaseProvider, theme } from 'native-base';

export default function Layout() {
   return (
      <NativeBaseProvider theme={theme}>
         <Stack>
            <Stack.Screen
               name='(tabs)'
               options={{ headerShown: false }}
            />
         </Stack>
      </NativeBaseProvider>
   );
}
