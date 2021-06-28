

export default class HashTable<T> {
  public dataMap: [string, T][][];

  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key: string, value: T) {
    const index = this.hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key: string): T | null {
    const index = this.hash(key);
    if (this.dataMap[index]) {
      const result = this.dataMap[index].find(([_key]) => key === _key);
      if (result) {
        return result[1];
      }
    }
    return null;
  }

  keys(): string[] {
    const allKeys = [] as string[];
    this.dataMap.forEach((map) => {
      if (map) {
        map.forEach(([key]) => allKeys.push(key));
      }
    });
    return allKeys;
  }
}