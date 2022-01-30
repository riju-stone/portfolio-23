import React, { useState, useEffect } from "react";

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
export const useIsTablet = () =>
  useMediaQuery("(min-width: 481px) and (max-width: 768px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 769px)");
