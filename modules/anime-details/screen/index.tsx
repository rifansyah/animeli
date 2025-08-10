import Button from "@/components/atoms/Button";
import Col from "@/components/atoms/Col";
import Loading from "@/components/atoms/Loading";
import Score from "@/components/atoms/Score";
import { Colors } from "@/constants/Colors";
import BottomBar from "@/modules/anime-details/components/BottomBar";
import Details from "@/modules/anime-details/components/Details";
import Synopsis from "@/modules/anime-details/components/Synopsis";
import useAnimeByID from "@/services/api/queries/useAnimeByID";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { memo, useMemo } from "react";
import { Text, View } from "react-native";
import Animated, {
  clamp,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "./styles";

const BOTTOM_BAR_HEIGHT = 72;

const AnimeDetailsScreen = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isFetching } = useAnimeByID(JSON.parse(id));
  const animeData = data?.data.data;

  const genres = useMemo(() => {
    return animeData?.genres.map((genre) => genre.name).join(", ");
  }, [animeData]);

  const insets = useSafeAreaInsets();
  const barHeight = BOTTOM_BAR_HEIGHT + insets.bottom;

  const offsetY = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
      const dy = y - offsetY.value;

      translateY.value = clamp(translateY.value + dy, 0, barHeight);
      offsetY.value = y;
    },
  });

  const onPressBack = () => {
    router.back();
  };

  if (isFetching) {
    return (
      <View style={styles.containerLoading}>
        <Loading size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.buttonBack} onPress={onPressBack}>
        <AntDesign name="arrowleft" size={24} color={Colors.primary} />
      </Button>
      <Animated.ScrollView onScroll={onScroll}>
        <Image
          source={{ uri: animeData?.images.webp.large_image_url }}
          style={styles.imageBanner}
        />
        <Col style={styles.containerBody}>
          <Text style={styles.textTitle}>{animeData?.title}</Text>
          {animeData?.score && <Score score={animeData.score} />}
          <Text style={styles.textContent}>{genres}</Text>
          <Text style={styles.textContent}>
            {`${animeData?.rank} in Rank | ${animeData?.episodes} episodes`}
          </Text>
          <Synopsis synopsis={animeData?.synopsis} />
          <Details anime={animeData} />
        </Col>
      </Animated.ScrollView>
      <BottomBar anime={animeData} translateY={translateY} />
    </SafeAreaView>
  );
};

export default memo(AnimeDetailsScreen);
