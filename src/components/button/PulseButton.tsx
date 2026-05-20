"use client";
import { Button } from "@base-ui/react/button";
import { type ComponentProps, type ReactNode } from "react";
import { useRipples } from "../../hooks/useRipples";
import type { BaseUIEvent } from "@base-ui/react";

type PulseButtonProps = ComponentProps<typeof Button> & {
  children: ReactNode,
};

const PulseButton = ({
  children,
  onClick,
  ...otherProps
}: PulseButtonProps) => {
  const [triggerRippleEffect, ripples] = useRipples();

  const handleClick = (e: BaseUIEvent<React.MouseEvent<HTMLButtonElement>>) => {
    triggerRippleEffect(e);
    onClick?.(e);
  };
  return (
    <Button {...otherProps} onClick={handleClick}>
      {ripples}
      {children}
    </Button>
  );
};

export default PulseButton;
