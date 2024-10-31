import Cookies from "js-cookie";

const cookies = {
  get: (key: string): string | undefined => {
    return Cookies.get(key);
  },
  set: (
    key: string,
    value: string,
    options?: Cookies.CookieAttributes
  ): void => {
    Cookies.set(key, value, options);
  },
  remove: (key: string, options?: Cookies.CookieAttributes): void => {
    Cookies.remove(key, options);
  },
};
export default cookies;
