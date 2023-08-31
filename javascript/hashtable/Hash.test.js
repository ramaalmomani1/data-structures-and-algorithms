const Hashmap = require('./Hash');

describe('Hashmap Tests', () => {
  let HashTable;

  beforeEach(() => {
    HashTable = new Hashmap(19);
  });

  test('1. Setting a key/value to the hashtable', () => {
    HashTable.set('Ahmed', 'Student');
    expect(HashTable.get('Ahmed')).toBe('Student');
  });

  test('2. Retrieving value based on a key', () => {
    HashTable.set('Ali', 'Instructor');
    expect(HashTable.get('Ali')).toBe('Instructor');
  });

  test('3. Returning null for a key that does not exist', () => {
    expect(HashTable.get('NonExistent')).toBeNull();
  });

  test('4. Returning a list of all unique keys', () => {
    HashTable.set('Basha', 'Student');
    HashTable.set('Saleh', 'Student');
    HashTable.set('Anas', 'Student');
    const keys = HashTable.keys();
    expect(keys).toEqual(expect.arrayContaining(['Basha', 'Saleh', 'Anas']));
  });

  test('5. Handling collision within the hashtable', () => {
    HashTable.set('Ali', 'Instructor');
    HashTable.set('Amir', 'Instructor');
    expect(HashTable.get('Ali')).toBe('Instructor');
    expect(HashTable.get('Amir')).toBe('Instructor');
  });

  test('6. Retrieving value from a bucket with collision', () => {
    HashTable.set('Rami', 'Student');
    HashTable.set('Amir', 'Instructor');
    expect(HashTable.get('Rami')).toBe('Student');
    expect(HashTable.get('Amir')).toBe('Instructor');
  });

  test('7. Hashing key to an in-range value', () => {
    const hashedIndex = HashTable.hash('Rama');
    expect(hashedIndex).toBeGreaterThanOrEqual(0);
    expect(hashedIndex).toBeLessThan(HashTable.size);
  });
});
