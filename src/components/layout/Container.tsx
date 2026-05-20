import { type ComponentProps, type ReactNode } from "react";
import { cn } from "../../utils/cn";

type ContainerProps = ComponentProps<"div"> & {
  className?: string,
  children: ReactNode,
};

const Container = ({
  className,
  children,
}: ContainerProps) => (
  <div className={cn("container mx-auto px-3", className)}>
    {children}
  </div>
);

export default Container;
