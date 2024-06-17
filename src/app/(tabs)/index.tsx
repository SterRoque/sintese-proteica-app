import { Box, Center, Image, Text } from "native-base";
import { Button } from "../../components/Button";
import logoHome from "../../assets/images/logo-home.png";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Link, useRouter } from "expo-router";
import { PathEnum } from "@/src/constants/path-enum";

export default function Home() {
  const router = useRouter();
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnimation, {
          toValue: 1.2, // Zoom in
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnimation, {
          toValue: 1, // Zoom out
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnimation]);

  const animatedStyle = {
    transform: [
      {
        scale: scaleAnimation,
      },
    ],
  };
  return (
    <Box bg="error.50" w="full" h="full" alignItems="center">
      <Animated.Image
        style={[
          { width: 120, height: 120, marginTop: "10%", marginBottom: "40%" },
          animatedStyle,
        ]}
        source={logoHome}
      />

      <Button title="Conteúdo" mb="15px" />

      <Button
        title="Sintese Proteica"
        onPress={() => router.push(PathEnum.SINTESE)}
      />
    </Box>
  );
}
