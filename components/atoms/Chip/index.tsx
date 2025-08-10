import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface ChipProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
}

const Chip: React.FC<ChipProps> = ({
  children,
  text,
  onPress,
  style,
  textStyle,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: color ?? Colors.primary,
        },
        style,
      ]}
    >
      {children ?? <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Chip;
