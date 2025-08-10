import { useQuery } from "@tanstack/react-query";
import { getAnimeByID } from "../anime.services";

interface Options {
  enabled?: boolean;
}
const useAnimeByID = (id: number, options?: Options) => {
  return useQuery({
    queryKey: ["animeByID", id],
    queryFn: () => getAnimeByID(id),
    ...options,
  });
};

export default useAnimeByID;
