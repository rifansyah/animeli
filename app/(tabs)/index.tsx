import Loading from "@/components/atoms/Loading";
import AnimeList from "@/modules/anime-list/components/AnimeList";
import Header from "@/modules/anime-list/components/Header";
import useAnimeListData from "@/modules/anime-list/hooks/useAnimeListData";
import React, { Suspense, useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FilterBottomSheet = React.lazy(
  () => import("@/modules/anime-list/modals/FilterBottomSheet")
);

export default function TabTwoScreen() {
  const [isOpenFilterBottomSheet, setIsOpenFilterBottomSheet] = useState(false);

  const {
    animeList,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    filter,
    setFilter,
  } = useAnimeListData();

  const openFilterBottomSheet = useCallback(() => {
    setIsOpenFilterBottomSheet(true);
  }, []);

  const closeFilterBottomSheet = useCallback(() => {
    setIsOpenFilterBottomSheet(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        onPressFilter={openFilterBottomSheet}
        filterCount={filter?.genre_ids?.length}
      />

      {isLoading ? (
        <Loading style={{ flex: 1, height: "100%" }} size="large" />
      ) : (
        <AnimeList
          data={animeList}
          loadMore={fetchNextPage}
          isLoadingMore={isFetchingNextPage}
          isLoading={isRefetching}
          onRefresh={refetch}
        />
      )}

      {isOpenFilterBottomSheet && (
        <Suspense>
          <FilterBottomSheet
            isOpen={isOpenFilterBottomSheet}
            onClose={closeFilterBottomSheet}
            onFilterChange={setFilter}
            filter={filter}
          />
        </Suspense>
      )}
    </SafeAreaView>
  );
}
