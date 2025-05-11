import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useSetParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getSearchParamsAsObject = () => {
    const params: { [key: string]: string | string[] } = {};
    searchParams.forEach((value, key) => {
      // Check if the value contains commas (comma-separated list)
      if (value.includes(",")) {
        params[key] = value.split(",").filter((v) => v.trim() !== "");
      } else {
        // Handle single value or add to existing array
        if (params[key]) {
          if (Array.isArray(params[key])) {
            (params[key] as string[]).push(value);
          } else {
            params[key] = [params[key] as string, value];
          }
        } else {
          params[key] = value;
        }
      }
    });
    return params;
  };

  const searchParamsObject = useMemo(
    () => getSearchParamsAsObject(),
    /* eslint-disable react-hooks/exhaustive-deps */
    [searchParams],
  );

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, `${value}`);
    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  const removeQueryParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);

    const newPathname = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    history.replaceState(null, "", newPathname);
  };

  const setMultipleParam = (paramsToUpdate: { [key: string]: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.keys(paramsToUpdate).forEach((key) => {
      params.set(key, paramsToUpdate[key].toString());
    });

    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  const clearAllSearchParams = () => {
    history.replaceState(null, "", pathname);
  };

  const toggleArrayParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValue = params.get(key) || "";
    const values = currentValue.split(",").filter((v) => v);

    if (values.includes(value)) {
      const newValues = values.filter((v) => v !== value).join(",");
      if (newValues) {
        params.set(key, newValues);
      } else {
        params.delete(key);
      }
    } else {
      values.push(value);
      params.set(key, values.join(","));
    }

    history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  return {
    setParam,
    toggleArrayParam,
    searchParamsObject,
    clearAllSearchParams,
    removeQueryParam,
    setMultipleParam,
  };
};
