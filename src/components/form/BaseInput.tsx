import { Input } from "@base-ui/react/input";
import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type BaseInputProps = Omit<ComponentProps<typeof Input>, "size"> & {
  size?: "lg" | "md" | "sm" | "xs",
};

const BaseInput = ({
  size = "md",
  className,
  ...otherProps
}: BaseInputProps) => (
  <Input
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
    {...otherProps}
  />
);

export default BaseInput;
