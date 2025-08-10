import { Anime } from "@/services/api/anime.type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import storageMiddleware from "./storage-middleware";

interface FavoriteState {
  favorites: Record<number, Anime>;
  addFavorite: (anime: Anime) => void;
  removeFavorite: (id: number) => void;
}

export const useFavoriteStore = create(
  persist<FavoriteState>(
    (set) => ({
      favorites: {},
      addFavorite: (anime) =>
        set((state) => ({
          favorites: { ...state.favorites, [anime.mal_id]: anime },
        })),
      removeFavorite: (id) =>
        set((state) => {
          const { [id]: _, ...rest } = state.favorites;
          return { favorites: rest };
        }),
    }),
    {
      name: "favorite-store",
      storage: createJSONStorage(() => storageMiddleware),
      partialize: (state) => ({ favorites: state.favorites } as FavoriteState),
    }
  )
);
