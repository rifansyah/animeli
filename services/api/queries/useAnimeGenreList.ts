import { useQuery } from "@tanstack/react-query";
import { getGenreList } from "../anime.services";

interface Options {
  enabled?: boolean;
}
const useAnimeGenreList = (options?: Options) => {
  return useQuery({
    queryKey: ["animeGenreList"],
    queryFn: getGenreList,
    ...options,
  });
};

export default useAnimeGenreList;
