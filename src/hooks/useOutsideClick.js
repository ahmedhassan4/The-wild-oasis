import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      const handleClickEvent = (e) => {
        if (ref.current && !ref.current.contains(e.target)) handler();
      };
      document.addEventListener("click", handleClickEvent, listenCapturing);

      return () =>
        document.removeEventListener(
          "click",
          handleClickEvent,
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );

  return ref;
}
