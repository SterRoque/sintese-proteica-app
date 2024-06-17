import React from "react";
import { Button as ButtonUI, Text, IButtonProps } from "native-base";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonUI
      rounded="16px"
      w="full"
      h="45px"
      maxW="250px"
      bg="warning.400"
      _pressed={{
        bg: "warning.500",
        opacity: 0.7,
      }}
      {...rest}
    >
      <Text color="white" fontWeight={600} fontSize="15px">
        {title}
      </Text>
    </ButtonUI>
  );
}
