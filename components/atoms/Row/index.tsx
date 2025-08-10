import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface RowProps extends ViewProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Row: React.FC<RowProps> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </View>
  );
};

export default Row;
