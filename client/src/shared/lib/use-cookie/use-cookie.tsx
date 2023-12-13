import { useState } from "react";

type TOptions<T extends string | Date = string> = {
  path: string;
  expires: T extends Date ? Date : string;
  "max-age": number;
  domain: string;
  secure: boolean;
  sameSite: "none" | "strict" | "lax";
  httpOnly: boolean;
};

export const useCookie = <T extends string>(
  key: T
): [T, (value: T, options?: Partial<TOptions>) => void] => {
  const [cookie, setStoredCookie] = useState<T>(() => {
    try {
      const cookies = document.cookie.split(";");
      return cookies.reduce(
        (cookie, current) =>
          current.trim().startsWith(`${key}=`) ? current.split("=")[1] : cookie,
        ""
      ) as T;
    } catch (error) {
      console.log(error);
    }
    return "" as T;
  });

  const setCookie = (value: T, options?: Partial<TOptions>) => {
    const stringOptions = options
      ? Object.keys(options)
          .map((key: keyof TOptions) => `${key}=${options[key]}`)
          .join("; ")
      : "";
    const newCookie = `${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}; ${stringOptions}`;

    console.log(newCookie);

    try {
      document.cookie = newCookie;
      setStoredCookie(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [cookie, setCookie];
};
