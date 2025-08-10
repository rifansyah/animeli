import api from ".";
import { AnimeListApiResponse, GenreListApiResponse } from "./anime.type";

export interface AnimeListParams {
  page?: number;
  genres?: number[];
}
export const getAnimeList = ({ page, genres }: AnimeListParams) => {
  const params = {
    page,
    ...(genres?.length && { genres: genres.join(",") }),
  };

  return api.get<AnimeListApiResponse>("/anime", { params });
};

export const getGenreList = () => {
  return api.get<GenreListApiResponse>("/genres/anime");
};
