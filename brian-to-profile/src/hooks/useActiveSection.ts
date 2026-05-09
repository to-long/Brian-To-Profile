"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], offset = 96) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (ids.length === 0) return;

    let frame = 0;

    const compute = () => {
      frame = 0;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const atBottom = window.scrollY + winHeight >= docHeight - 4;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const scrollY = window.scrollY + offset + 1;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids, offset]);

  return active;
}
