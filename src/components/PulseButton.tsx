"use client";
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode, useState } from "react";
import styles from "../styles/ripple.module.css";
import { cn } from "../utils/cn";

type PulseButtonProps<As extends ElementType> = {
  as?: As,
  onClick?: (e: React.MouseEvent<Element>) => void,
  children: ReactNode,
} & Omit<ComponentPropsWithoutRef<As>, "as" | "onClick" | "children">;

const PulseButton = <As extends ElementType = "button">({
  as,
  onClick,
  children,
  className,
  ...otherProps
}: PulseButtonProps<As>) => {
  const Component = as ?? "button";

  const [ripples, setRipples] = useState<{ x: number, y: number, size: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<Element>) => {
    onClick?.(e);

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

  return (
    <Component
      onClick={handleClick}
      className={cn("relative overflow-hidden", className)}
      {...(otherProps as unknown as object)}
    >
      {children}
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
    </Component>
  );
};

export default PulseButton;
