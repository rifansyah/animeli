import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import useButtonAnimation from "./hooks/useButtonAnimation";
import styles from "./styles";

interface Props {
  isFavorite?: boolean;
  onPress?: () => void;
}
const FavoriteButton = ({ isFavorite, onPress }: Props) => {
  const { buttonStyle } = useButtonAnimation(isFavorite!);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animated.View style={[styles.button, buttonStyle]}>
        <AntDesign
          name={isFavorite ? "check" : "plus"}
          size={16}
          color={isFavorite ? Colors.primary : Colors.white}
        />
        <Text
          style={[
            styles.textButton,
            { color: isFavorite ? Colors.primary : Colors.white },
          ]}
          numberOfLines={1}
        >
          {isFavorite ? "Favorite" : "Add to Favorite"}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default memo(FavoriteButton);
