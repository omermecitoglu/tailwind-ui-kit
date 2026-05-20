import { useState } from "react";
import styles from "../styles/ripple.module.css";
import { cn } from "../utils/cn";

export function useRipples() {
  const [ripples, setRipples] = useState<{ x: number, y: number, size: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<Element>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - (size / 2);
    const y = e.clientY - rect.top - (size / 2);

    const newRipple = { x, y, size, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const ripplesNode = (
    <>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className={cn(styles.animation, "absolute rounded-full bg-white opacity-40")}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </>
  );

  return [handleClick, ripplesNode] as const;
}
