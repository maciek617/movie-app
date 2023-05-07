import { MutableRefObject, useMemo, useEffect, useState } from 'react';

export const useIsInViewport = (
  element: MutableRefObject<HTMLDivElement | null>,
  threshold: number
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        {
          threshold: threshold,
        }
      ),
    [threshold]
  );

  useEffect(() => {
    if (!element) observer.disconnect();
    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer, element]);
  return isIntersecting;
};
