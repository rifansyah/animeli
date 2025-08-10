import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import { Colors } from "@/constants/Colors";
import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Image } from "expo-image";
import React, { memo, useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FavoriteButton from "./components/FavoriteButton";
import styles from "./styles";

interface Props {
  data: Anime;
}
const AnimeListCard = ({ data }: Props) => {
  const isFavorite = useFavoriteStore(
    (state) => !!state.favorites[data.mal_id]
  );

  const genres = useMemo(() => {
    return data.genres.map((genre) => genre.name).join(", ");
  }, [data]);

  const isGoodScore = data.score! > 8;

  const onPressFavorite = useCallback(() => {
    if (isFavorite) {
      useFavoriteStore.getState().removeFavorite(data.mal_id);
    } else {
      useFavoriteStore.getState().addFavorite(data);
    }
  }, [isFavorite, data]);

  return (
    <TouchableOpacity>
      <Row>
        <View>
          <Image
            source={{ uri: data.images.webp.image_url }}
            style={styles.image}
          />
          <Row style={styles.containerRank}>
            <Text style={styles.textRank}>{data.score}</Text>
            {isGoodScore && (
              <Fontisto
                style={{ marginLeft: 4 }}
                name="fire"
                size={12}
                color={Colors.white}
              />
            )}
          </Row>
        </View>
        <Col style={styles.containerContent}>
          <Text style={styles.textTitle} numberOfLines={2} ellipsizeMode="tail">
            {data.title}
          </Text>
          <Text
            style={styles.textContent}
          >{`${data.episodes} episodes | ${data.popularity} in Rank`}</Text>
          <Text
            style={styles.textContent}
            numberOfLines={2}
          >{`Genre: ${genres}`}</Text>
          <FavoriteButton isFavorite={isFavorite} onPress={onPressFavorite} />
        </Col>
      </Row>
    </TouchableOpacity>
  );
};

export default memo(AnimeListCard, (a, b) => a.data.mal_id === b.data.mal_id);
