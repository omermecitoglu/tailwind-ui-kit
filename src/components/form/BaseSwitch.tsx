import { Switch } from "@base-ui/react/switch";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "../../utils/cn";

type BaseSwitchProps = ComponentProps<typeof Switch.Root> & {
  label: ReactNode,
  renderThumb?: ComponentProps<typeof Switch.Thumb>["render"],
};

const BaseSwitch = ({
  label,
  renderThumb,
  value = "true",
  uncheckedValue = "false",
  className,
  ...otherProps
}: BaseSwitchProps) => (
  <label className="flex items-center gap-2 text-sm font-normal">
    <Switch.Root
      {...otherProps}
      value={value}
      uncheckedValue={uncheckedValue}
      className={cn(
        "flex",
        "h-5",
        "w-9",
        "shrink-0",
        "p-0.5",
        "transition-colors",
        "duration-150",
        "ease-[ease]",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        className,
      )}
    >
      <Switch.Thumb
        className={cn(
          "size-3.5",
          "transition-[translate,background-color]",
          "duration-150",
          "ease-[ease]",
          "data-checked:translate-x-4",
        )}
        render={renderThumb}
      />
    </Switch.Root>
    {label}
  </label>
);

export default BaseSwitch;
