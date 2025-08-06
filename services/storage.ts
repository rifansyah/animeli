import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const getStorage = () => storage;

export const set = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const get = <T = string>(key: string): T | undefined => {
  const value = storage.getString(key);
  return value ? (JSON.parse(value) as T) : undefined;
};

export const remove = (key: string) => {
  storage.delete(key);
};
