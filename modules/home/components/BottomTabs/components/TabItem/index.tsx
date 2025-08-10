import { Colors } from "@/constants/Colors";
import { IconProps } from "@/modules/home/components/BottomTabs";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import styles from "./styles";

interface Props {
  label: string;
  isFocused: boolean;
  onPress: () => void;
  renderIcon: (p: IconProps) => React.JSX.Element | null;
}

const TabItem = ({ label, isFocused, onPress, renderIcon }: Props) => {
  const color = isFocused ? Colors.primary : Colors.grey;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [isFocused, scale]);

  const iconContainerStyle = useAnimatedStyle(() => {
    const scaleVal = interpolate(scale.value, [0, 1], [1, 1.5]);
    const top = interpolate(scale.value, [0, 1], [1, 7]);

    return {
      transform: [{ scale: scaleVal }],
      top,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scale.value, [0, 1], [1, 0]),
    };
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <Animated.View style={iconContainerStyle}>
        {renderIcon ? renderIcon({ color }) : null}
      </Animated.View>
      <Animated.Text style={[styles.menuText, { color }, textStyle]}>
        {label}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TabItem;
