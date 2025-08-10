import Button from "@/components/atoms/Button";
import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import { Colors } from "@/constants/Colors";
import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Image } from "expo-image";
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

  const isGoodScore = data.score! > 8;

  const onPressRemove = () => {
    removeFavorite(data.mal_id);
  };

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
          <Text style={styles.textContent}>
            {`${data.episodes} episodes | ${data.popularity} in Rank`}
          </Text>
          <Text style={styles.textContent} numberOfLines={2}>
            {`Genre: ${genres}`}
          </Text>
          <Button
            style={styles.containerRemove}
            onPress={onPressRemove}
            color={Colors.red}
            type="secondary"
          >
            <AntDesign name="back" color={Colors.red} size={16} />
            <Text style={styles.textRemove}>Remove</Text>
          </Button>
        </Col>
      </Row>
    </TouchableOpacity>
  );
};

export default memo(
  FavoriteListCard,
  (a, b) => a.data.mal_id === b.data.mal_id
);
