const CacheManager = (() => {
  const memory = new Map();

  const get = (key) => {
    if (memory.has(key)) return memory.get(key);
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  };

  const set = (key, value) => {
    memory.set(key, value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { get, set };
})();
