import { type } from "os";
import { useCallback, useEffect, useState } from "react";

type widthType = 640 | 768 | 1024 | 1280 | 1536;

export const useMinMediaQuery = (width: widthType) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return { matches: targetReached };
};
