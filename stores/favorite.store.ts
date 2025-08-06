import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import storageMiddleware from "./storage-middleware";

interface FavoriteState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create(
  persist<FavoriteState>(
    (set) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({ favorites: [...state.favorites, id] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favorite) => favorite !== id),
        })),
    }),
    {
      name: "favorite-store",
      storage: createJSONStorage(() => storageMiddleware),
      partialize: (state) => ({ favorites: state.favorites } as FavoriteState),
    }
  )
);
