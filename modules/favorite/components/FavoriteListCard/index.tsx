import Button from "@/components/atoms/Button";
import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import Score from "@/components/atoms/Score";
import { Colors } from "@/constants/Colors";
import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { memo, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  data: Anime;
}
const FavoriteListCard = ({ data }: Props) => {
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const genres = useMemo(() => {
    return data.genres.map((genre) => genre.name).join(", ");
  }, [data]);

  const onPressRemove = () => {
    removeFavorite(data.mal_id);
  };

  return (
    <Link href={`/anime-details/${data.mal_id}`} asChild>
      <TouchableOpacity>
        <Row>
          <View>
            <Image
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
            <Button
              style={styles.containerRemove}
              onPress={onPressRemove}
              color={Colors.danger}
              type="secondary"
            >
              <AntDesign name="back" color={Colors.danger} size={16} />
              <Text style={styles.textRemove}>Remove</Text>
            </Button>
          </Col>
        </Row>
      </TouchableOpacity>
    </Link>
  );
};

export default memo(
  FavoriteListCard,
  (a, b) => a.data.mal_id === b.data.mal_id
);
