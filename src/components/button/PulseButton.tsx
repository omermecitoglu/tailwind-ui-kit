"use client";
import { Button } from "@base-ui/react/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { useRipples } from "../../hooks/useRipples";
import type { BaseUIEvent } from "@base-ui/react";

type PulseButtonProps = ComponentProps<typeof Button> & {
};

const PulseButton = ({
  type,
  onClick,
  children,
  ...otherProps
}: PulseButtonProps) => {
  const { pending } = useFormStatus();
  const [triggerRippleEffect, ripples] = useRipples();
  const submitting = type === "submit" && pending;

  const handleClick = (e: BaseUIEvent<React.MouseEvent<HTMLButtonElement>>) => {
    triggerRippleEffect(e);
    onClick?.(e);
  };

  return (
    <Button
      {...otherProps}
      type={type}
      onClick={handleClick}
      data-submitting={submitting ? "" : undefined}
    >
      {ripples}
      {children}
    </Button>
  );
};

export default PulseButton;
