import { Genre } from "@/services/api/anime.type";
import useAnimeGenreList from "@/services/api/queries/useAnimeGenreList";
import { useMemo } from "react";

const useGenresData = (selectedGenreIDs: number[]) => {
  const { data: genreResponse } = useAnimeGenreList();
  const genreList = genreResponse?.data.data;

  const genreMap = useMemo(() => {
    return (
      genreList?.reduce((acc, genre) => {
        acc[genre.mal_id] = genre;
        return acc;
      }, {} as Record<number, Genre>) ?? {}
    );
  }, [genreList]);

  const availableGenres = useMemo(() => {
    return genreList?.filter(
      (genre) => !selectedGenreIDs.includes(genre.mal_id)
    );
  }, [selectedGenreIDs, genreList]);

  return {
    availableGenres,
    genreList,
    genreMap,
  };
};

export default useGenresData;
