import Button from "@/components/atoms/Button";
import { Colors } from "@/constants/Colors";
import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo } from "react";
import { Share, Text } from "react-native";
import Animated, {
    SharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import styles from "./styles";

interface Props {
  anime?: Anime;
  translateY: SharedValue<number>;
}
const BottomBar = ({ anime, translateY }: Props) => {
  const isFavorite = useFavoriteStore(
    (state) => !!state.favorites[anime?.mal_id ?? -1]
  );

  const barStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const onPressShare = async () => {
    if (!anime?.mal_id) return;

    const deeplinkUri = `animeli://anime-details/${anime?.mal_id}`;

    try {
      await Share.share({
        message: deeplinkUri,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const onPressFavorite = () => {
    if (!anime) return;

    if (isFavorite) {
      useFavoriteStore.getState().removeFavorite(anime.mal_id);
    } else {
      useFavoriteStore.getState().addFavorite(anime);
    }
  };

  return (
    <Animated.View style={[styles.container, barStyle]}>
      <Button style={styles.buttonShare} onPress={onPressShare}>
        <AntDesign name="sharealt" color={Colors.background} size={24} />
      </Button>
      <Button
        style={[
          styles.buttonFavorite,
          { backgroundColor: isFavorite ? Colors.primary : Colors.white },
        ]}
        onPress={onPressFavorite}
      >
        <AntDesign
          name="plus"
          color={isFavorite ? Colors.white : Colors.background}
          size={24}
        />
        <Text
          style={isFavorite ? styles.textIsFavorite : styles.textAddFavorite}
        >
          {isFavorite ? "Favorite" : "Add to Favorite"}
        </Text>
      </Button>
    </Animated.View>
  );
};

export default memo(BottomBar);
