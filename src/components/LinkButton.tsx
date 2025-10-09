import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "../utils/cn";
import PulseButton from "./PulseButton";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps<LinkProps> = Omit<ComponentProps<"a">, "children" | "href" | "onClick"> & {
  color?: "primary" | "secondary" | "success" | "warning" | "danger",
  icon?: IconProp,
  text?: string,
  stretched?: boolean,
  as: (props: LinkProps) => ReactNode,
  href: string,
};

const Button = <LinkProps extends ComponentProps<"a">>({
  color,
  icon,
  text,
  stretched = false,
  as: Link,
  href,
  className,
  ...otherProps
}: ButtonProps<LinkProps>) => ( // @ts-expect-error: shut up typescript!
  <PulseButton
    as={Link}
    href={href}
    className={cn("relative overflow-hidden inline-flex justify-center items-center transition rounded-lg px-3 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer", {
      "bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-500": color === "primary",
      "bg-slate-400 hover:bg-slate-500 focus-visible:outline-slate-400": color === "secondary",
      "bg-green-600 hover:bg-green-700 focus-visible:outline-green-600": color === "success",
      "bg-yellow-500 hover:bg-yellow-600 focus-visible:outline-yellow-500": color === "warning",
      "bg-red-500 hover:bg-red-600 focus-visible:outline-red-500": color === "danger",
      "gap-2": !stretched,
      "gap-3": stretched,
    }, className)}
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
      <div className="w-[var(--fa-width,1.25em)]" />
    )}
  </PulseButton>
);

export default Button;
