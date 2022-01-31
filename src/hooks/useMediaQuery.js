import { useState, useEffect } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    if (mediaQueryList.matches !== matches) {
      setMatches(mediaQueryList.matches);
    }

    const listener = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("chamge", listener);
  }, [matches, query]);

  return matches;
}

export const useIsMobile = () => useMediaQuery("(max-width: 480px)");
export const useIsSmallTablet = () =>
  useMediaQuery("(min-width: 481px) and (max-width: 767px)");
export const useIsLargeTablet = () => useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
export const useIsLaptop = () => useMediaQuery("(min-width: 1025px) and (max-width: 1280px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1281px)");
export const useIsLargeDesktop = () => useMediaQuery("(min-width: 1281px) and (max-width: 1920px)");
export const useIsHugeDesktop = () => useMediaQuery("(min-width: 1921px)");
