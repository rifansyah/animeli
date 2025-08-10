import { Anime } from "@/services/api/anime.type";
import { useFavoriteStore } from "@/stores/favorite.store";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { useShallow } from "zustand/shallow";
import FavoriteListCard from "../FavoriteListCard";
import styles from "./styles";

const FavoriteList = () => {
  const favoritesMap = useFavoriteStore(useShallow((state) => state.favorites));
  const favoriteList = useMemo(
    () => Object.values(favoritesMap),
    [favoritesMap]
  );

  const renderItem = useCallback(({ item }: { item: Anime }) => {
    return <FavoriteListCard key={item.mal_id} data={item} />;
  }, []);

  const keyExtractor = useCallback((item: Anime) => item.mal_id.toString(), []);

  const renderSeparator = useCallback(
    () => <View style={{ height: 16 }} />,
    []
  );

  if (!favoriteList?.length) {
    return (
      <View style={styles.containerNoFavorite}>
        <Text style={styles.textNoFavorite}>No Favorite so far 😱</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={favoriteList}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.contentContainer}
      estimatedItemSize={150}
      keyExtractor={keyExtractor}
      extraData={favoriteList?.length}
    />
  );
};

export default memo(FavoriteList);
