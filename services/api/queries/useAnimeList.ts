import { useInfiniteQuery } from "@tanstack/react-query";
import { AnimeListParams, getAnimeList } from "../anime.services";

interface Options {
  enabled?: boolean;
}
const useAnimeList = (options?: Options, params?: AnimeListParams) => {
  return useInfiniteQuery({
    queryKey: ["animeList", params],
    queryFn: ({ pageParam }) => getAnimeList({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.pagination?.has_next_page) {
        return lastPage.data.pagination?.current_page + 1;
      }

      return undefined;
    },
    ...options,
  });
};

export default useAnimeList;
