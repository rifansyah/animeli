import React from "react";
import { View, ViewProps } from "react-native";

interface ColProps extends ViewProps {
  children?: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export default Col;
