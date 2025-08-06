import { storage } from "@/services/storage";
import { StateStorage } from "zustand/middleware";

const storageMiddleware: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

export default storageMiddleware;
