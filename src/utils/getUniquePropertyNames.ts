export function getUniquePropertyNames<T>(arr: T[]) {
  return arr.reduce((acc: string[], cur: T) => {
    const currentKeys = Object.keys(cur);
    const newKeys = currentKeys.filter((key: string) => !acc.includes(key));

    return [...acc, ...newKeys];
  }, []);
}
