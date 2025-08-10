import Loading from "@/components/atoms/Loading";
import { Colors } from "@/constants/Colors";
import { Anime } from "@/services/api/anime.type";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback, useMemo } from "react";
import { RefreshControl, Text, View } from "react-native";
import AnimeListCard from "../AnimeListCard";
import styles from "./styles";

interface Props {
  data?: Anime[];
  loadMore?: () => void;
  isLoadingMore?: boolean;
  isLoading?: boolean;
  onRefresh?: () => void;
}
const AnimeList = ({
  data,
  loadMore,
  isLoading,
  isLoadingMore,
  onRefresh,
}: Props) => {
  const renderItem = useCallback(({ item }: { item: Anime }) => {
    return <AnimeListCard key={item.mal_id} data={item} />;
  }, []);

  const keyExtractor = useCallback((item: Anime) => item.mal_id.toString(), []);

  const renderSeparator = useCallback(
    () => <View style={{ height: 16 }} />,
    []
  );

  const renderFooter = useCallback(
    () =>
      isLoadingMore ? (
        <Loading style={styles.loadingFooter} size="large" />
      ) : (
        <View style={styles.footer} />
      ),
    [isLoadingMore]
  );

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={isLoading!}
        onRefresh={onRefresh}
        colors={[Colors.primary]}
      />
    ),
    [isLoading, onRefresh]
  );

  if (!isLoading && !data?.length) {
    return (
      <View style={styles.containerNotFound}>
        <Text style={styles.textNotFound}>{`Couldn't give you the anime you wanted 😭`}</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      refreshControl={refreshControl}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.contentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      estimatedItemSize={150}
      keyExtractor={keyExtractor}
      extraData={data?.length}
      ListFooterComponent={renderFooter}
    />
  );
};

export default memo(AnimeList);
