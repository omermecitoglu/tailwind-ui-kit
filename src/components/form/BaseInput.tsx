import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";
import JustInput from "../elements/JustInput";

type BaseInputProps = Omit<ComponentProps<typeof JustInput>, "size"> & {
  size?: "lg" | "md" | "sm" | "xs",
};

const BaseInput = ({
  size = "md",
  className,
  ...otherProps
}: BaseInputProps) => (
  <JustInput
    {...otherProps}
    className={cn({
      // Size
      "h-12 px-5 text-base": size === "lg",
      "h-9 px-3 text-sm": size === "md",
      "h-8 px-2.5 text-sm": size === "sm",
      "h-7 px-2 text-xs": size === "xs",
    }, [
      // Base
      "rounded-md",
      "outline-2",
      "outline-offset-2",
      "outline-transparent",
      "transition-colors",
    ], className)}
  />
);

export default BaseInput;
