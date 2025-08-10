import { Colors } from "@/constants/Colors";
import React, { memo } from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  text?: string;
  type?: "primary" | "secondary";
}

const Button = ({
  children,
  onPress,
  color,
  style,
  text,
  type = "primary",
}: ButtonProps) => {
  const containerStyle = {
    ...styles[type],
    ...(type === "primary" && color && { backgroundColor: color }),
    ...(type === "secondary" && color && { borderColor: color }),
  };

  const textStyle = {
    ...styles.text,
    ...{ color: type === "primary" ? Colors.white : Colors.primary },
    ...(type === "secondary" && color && { color: color }),
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle, style]}
    >
      {children ?? <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default memo(Button);
