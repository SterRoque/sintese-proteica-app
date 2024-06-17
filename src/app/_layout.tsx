import { Stack } from "expo-router/stack";
import { NativeBaseProvider, theme } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Layout() {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </NativeBaseProvider>
  );
}
