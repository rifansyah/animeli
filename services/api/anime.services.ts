import api from ".";
import {
    AnimeByIDResponse,
    AnimeListApiResponse,
    GenreListApiResponse,
} from "./anime.type";

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

export const getAnimeByID = (id: number) => {
  return api.get<AnimeByIDResponse>(`/anime/${id}`);
};

export const getGenreList = () => {
  return api.get<GenreListApiResponse>("/genres/anime");
};
