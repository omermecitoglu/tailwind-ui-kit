"use client";
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { useRipples } from "../../hooks/useRipples";
import { cn } from "../../utils/cn";

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
  const [triggerRippleEffect, ripples] = useRipples();

  const handleClick = (e: React.MouseEvent<Element>) => {
    triggerRippleEffect(e);
    onClick?.(e);
  };

  return (
    <Component
      onClick={handleClick}
      className={cn("relative overflow-hidden", className)}
      {...(otherProps as unknown as object)}
    >
      {children}
      {ripples}
    </Component>
  );
};

export default PulseButton;
