const Hashmap = require("./Hash");

describe("Hashmap Tests", () => {
  let HashTable;

  beforeEach(() => {
    HashTable = new Hashmap(19);
  });

  test("1. Setting a key/value to the hashtable", () => {
    HashTable.set("Ahmed", "Student");
    expect(HashTable.get("Ahmed")).toBe("Student");
  });

  test("2. Retrieving value based on a key", () => {
    HashTable.set("Ali", "Instructor");
    expect(HashTable.get("Ali")).toBe("Instructor");
  });

  test("3. Returning null for a key that does not exist", () => {
    expect(HashTable.get("NonExistent")).toBeNull();
  });

  test("4. Returning a list of all unique keys", () => {
    HashTable.set("Basha", "Student");
    HashTable.set("Saleh", "Student");
    HashTable.set("Anas", "Student");
    const keys = HashTable.keys();
    expect(keys).toEqual(expect.arrayContaining(["Basha", "Saleh", "Anas"]));
  });

  test("5. Handling collision within the hashtable", () => {
    HashTable.set("Ali", "Instructor");
    HashTable.set("Amir", "Instructor");
    expect(HashTable.get("Ali")).toBe("Instructor");
    expect(HashTable.get("Amir")).toBe("Instructor");
  });

  test("6. Retrieving value from a bucket with collision", () => {
    HashTable.set("Rami", "Student");
    HashTable.set("Amir", "Instructor");
    expect(HashTable.get("Rami")).toBe("Student");
    expect(HashTable.get("Amir")).toBe("Instructor");
  });

  test("7. Hashing key to an in-range value", () => {
    const hashedIndex = HashTable.hash("Rama");
    expect(hashedIndex).toBeGreaterThanOrEqual(0);
    expect(hashedIndex).toBeLessThan(HashTable.size);
  });
});

describe("Hashmap repeatedWord method", () => {
  test("Finds the first repeated word in a sentence", () => {
    const sentence = "Once upon a time, there was a brave princess who...";
    let HashTable = new Hashmap(19);
    const result = HashTable.repeatedWord(sentence);
    expect(result).toBe("a");
  });

  test("Finds the first repeated word in a long text", () => {
    const text =
      "It was the best of times, it was the worst of times, it was...";
    let HashTable = new Hashmap(19);
    const result = HashTable.repeatedWord(text);
    expect(result).toBe("it");
  });

  test("Finds the first repeated word in a different sentence", () => {
    const sentence =
      "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs...";
    let HashTable = new Hashmap(19);
    const result = HashTable.repeatedWord(sentence);
    expect(result).toBe("summer");
  });
});
