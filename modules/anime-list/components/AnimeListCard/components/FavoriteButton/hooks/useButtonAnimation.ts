import { Colors } from "@/constants/Colors";
import { useEffect } from "react";
import {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const useButtonAnimation = (isFavorite: boolean) => {
  const favoriteTrack = useSharedValue(0);

  useEffect(() => {
    favoriteTrack.value = withTiming(isFavorite ? 1 : 0, { duration: 300 });
  }, [favoriteTrack, isFavorite]);

  const buttonStyle = useAnimatedStyle(() => {
    const width = interpolate(favoriteTrack.value, [0, 1], [140, 100]);

    const bgColor = interpolateColor(
      favoriteTrack.value,
      [0, 1],
      [Colors.primary, Colors.transparent]
    );

    const borderColor = interpolateColor(
      favoriteTrack.value,
      [0, 1],
      [Colors.transparent, Colors.primary]
    );

    const borderWidth = interpolate(favoriteTrack.value, [0, 1], [0, 2]);

    return {
      width: width,
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
    };
  });

  return {
    buttonStyle,
  };
};

export default useButtonAnimation;
