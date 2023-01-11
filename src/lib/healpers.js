export function isMobileSafari() {
  if (!isBrowser) return;

  return navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/)
    ? true
    : false;
}

export const isBrowser = typeof window !== "undefined";

export function useWindowSize() {
  function getSize() {
    return {
      width: isBrowser ? window.innerWidth : 0,
      height: isBrowser ? window.innerHeight : 0,
    };
  }
}
