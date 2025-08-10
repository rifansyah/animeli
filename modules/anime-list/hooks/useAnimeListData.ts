import useAnimeList from "@/services/api/queries/useAnimeList";
import { useMemo, useState } from "react";
import { Filter } from "../types";

const useAnimeListData = () => {
  const [filter, setFilter] = useState<Filter>();

  const { data, ...rest } = useAnimeList(
    { enabled: true },
    { genres: filter?.genre_ids }
  );

  const animeList = useMemo(
    () => data?.pages.flatMap((page) => page.data.data),
    [data]
  );

  return {
    animeList,
    filter,
    setFilter,
    ...rest,
  };
};

export default useAnimeListData;
