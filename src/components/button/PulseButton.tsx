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
  disabled,
  onClick,
  children,
  ...otherProps
}: PulseButtonProps) => {
  const { pending } = useFormStatus();
  const [triggerRippleEffect, ripples] = useRipples();
  const submitting = type === "submit" && pending;

  const handleClick = (e: BaseUIEvent<React.MouseEvent<HTMLButtonElement>>) => {
    onClick?.(e);
    if (!e.defaultPrevented) {
      triggerRippleEffect(e);
    }
  };

  return (
    <Button
      {...otherProps}
      type={type}
      disabled={submitting || disabled}
      onClick={handleClick}
      data-submitting={submitting ? "" : undefined}
    >
      {ripples}
      {children}
    </Button>
  );
};

export default PulseButton;
