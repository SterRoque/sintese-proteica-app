import { Slot } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
