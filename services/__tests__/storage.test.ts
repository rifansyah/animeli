import { get, remove, set } from "../storage";

describe("storage", () => {
  const testKey = "testKey";
  const testValue = { data: "testValue" };

  beforeEach(() => {
    set(testKey, testValue);
  });

  afterEach(() => {
    remove(testKey);
  });

  it("should set and get the value correctly", () => {
    const result = get<typeof testValue>(testKey);
    expect(result).toEqual(testValue);
  });

  it("should return undefined for a non-existing key", () => {
    const result = get("nonExistingKey");
    expect(result).toBeUndefined();
  });

  it("should remove the key-value pair correctly", () => {
    remove(testKey);
    const result = get(testKey);
    expect(result).toBeUndefined();
  });
});
