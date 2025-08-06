import { getStorage } from "@/services/storage";
import { StateStorage } from "zustand/middleware";

const storageMiddleware: StateStorage = {
  setItem: (name, value) => {
    return getStorage().set(name, value);
  },
  getItem: (name) => {
    const value = getStorage().getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return getStorage().delete(name);
  },
};

export default storageMiddleware;
