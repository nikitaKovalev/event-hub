import type { SetURLSearchParams } from "react-router";

export function searchQueryChage<T>(
  key: string, 
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams,
  callback?: (params: URLSearchParams) => void,
) {
  return (value: T) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }

    if (callback) {
      callback(newParams);
    }

    setSearchParams(newParams);
  }
}