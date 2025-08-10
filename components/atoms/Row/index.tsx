import React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

interface RowProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </View>
  );
};

export default Row;
