import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../utils/cn";
import PulseButton from "./PulseButton";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ComponentProps } from "react";

type ButtonProps = Omit<ComponentProps<"button">, "children" | "onClick"> & {
  color?: "primary" | "secondary" | "success" | "warning" | "danger",
  stretched?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
} & ({
  icon: IconProp,
  text?: string,
} | {
  icon?: IconProp,
  text: string,
});

const Button = ({
  color = "primary",
  icon,
  text,
  stretched = false,
  onClick,
  className,
  ...otherProps
}: ButtonProps) => (
  <PulseButton
    className={cn("relative overflow-hidden inline-flex justify-center items-center transition rounded-lg min-h-9 px-3 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer", {
      "bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-500": color === "primary",
      "text-slate-900 bg-slate-400 hover:bg-slate-500 focus-visible:outline-slate-400": color === "secondary",
      "bg-green-600 hover:bg-green-700 focus-visible:outline-green-600": color === "success",
      "text-slate-900 bg-yellow-500 hover:bg-yellow-600 focus-visible:outline-yellow-500": color === "warning",
      "bg-red-600 hover:bg-red-700 focus-visible:outline-red-600": color === "danger",
      "gap-2": !stretched,
      "gap-3": stretched,
    }, className)}
    onClick={onClick as () => void}
    {...otherProps}
  >
    {icon && (
      <FontAwesomeIcon icon={icon} size="lg" />
    )}
    {(!icon && !text) ? (
      <>&nbsp;</>
    ) : (
      <>{text}</>
    )}
    {stretched && icon && (
      <div className="w-(--fa-width,1.25em)" />
    )}
  </PulseButton>
);

export default Button;
