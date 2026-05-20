import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import PulseButton from "./PulseButton";
import type { Button } from "@base-ui/react/button";

type BaseButtonProps = ComponentProps<typeof Button> & {
  size?: "lg" | "md" | "sm" | "xs",
  pending?: boolean,
  children: ReactNode,
};

const BaseButton = ({
  size = "md",
  pending = false,
  disabled,
  focusableWhenDisabled,
  className,
  children,
  ...otherProps
}: BaseButtonProps) => (
  <PulseButton
    className={state => cn({
      // Size
      "h-12 px-5 text-base leading-7 gap-3": size === "lg",
      "h-10 px-4 text-sm leading-6 gap-3": size === "md",
      "h-9 px-3 text-sm leading-5 gap-2": size === "sm",
      "h-8 px-2.5 text-xs leading-4 gap-2": size === "xs",
    }, [
      // Base
      "relative",
      "flex items-center justify-center",
      "rounded-md",
      "font-medium",
      "select-none",
      "outline-0",
      "transition-colors",

      // Focus
      "focus-visible:outline-2",
      "focus-visible:outline-offset-2",

      // Cursor
      "cursor-pointer",
      "data-disabled:cursor-default",
    ], typeof className === "function" ? className(state) : className)}
    disabled={disabled}
    focusableWhenDisabled={pending || focusableWhenDisabled}
    {...otherProps}
  >
    {pending && (
      <FontAwesomeIcon icon={faSpinner} size="lg" className="fa-spin-pulse" />
    )}
    {children}
  </PulseButton>
);

export default BaseButton;
