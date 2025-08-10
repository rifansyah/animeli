import { Colors } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native";
import styles from "./styles";

interface LoadingProps {
  style?: StyleProp<ViewStyle>;
  size?: "small" | "large";
}

const Loading = ({ style, size = "small" }: LoadingProps) => {
  return (
    <View testID="loading" style={[styles.container, style]}>
      <ActivityIndicator size={size} color={Colors.primary} />
    </View>
  );
};

export default Loading;
