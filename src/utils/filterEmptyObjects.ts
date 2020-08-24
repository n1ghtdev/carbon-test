export function filterEmptyObjects<T>(array: T[]) {
  return Array.isArray(array)
    ? array.filter((entry: T) => {
        return Object.keys(entry).length !== 0;
      })
    : [];
}
