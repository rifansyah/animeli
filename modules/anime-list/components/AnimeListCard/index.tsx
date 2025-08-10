import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import Score from "@/components/atoms/Score";
import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import { Link } from "expo-router";
import React, { memo, useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
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

  const onPressFavorite = useCallback(() => {
    if (isFavorite) {
      useFavoriteStore.getState().removeFavorite(data.mal_id);
    } else {
      useFavoriteStore.getState().addFavorite(data);
    }
  }, [isFavorite, data]);

  return (
    <Link href={`/anime-details/${data.mal_id}`} asChild>
      <TouchableOpacity>
        <Row>
          <View>
            <Animated.Image
              sharedTransitionTag={`anime-details-${data.mal_id}`}
              source={{ uri: data.images.webp.image_url }}
              style={styles.image}
            />
            {data.score && (
              <Score style={styles.containerRank} score={data.score} />
            )}
          </View>
          <Col style={styles.containerContent}>
            <Text
              style={styles.textTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {data.title}
            </Text>
            <Text style={styles.textContent}>
              {`${data.episodes} episodes | ${data.popularity} in Rank`}
            </Text>
            <Text style={styles.textContent} numberOfLines={2}>
              {`Genre: ${genres}`}
            </Text>
            <FavoriteButton isFavorite={isFavorite} onPress={onPressFavorite} />
          </Col>
        </Row>
      </TouchableOpacity>
    </Link>
  );
};

export default memo(AnimeListCard, (a, b) => a.data.mal_id === b.data.mal_id);
