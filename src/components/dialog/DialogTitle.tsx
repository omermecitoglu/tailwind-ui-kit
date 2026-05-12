import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../../utils/cn";

const DialogTitle = ({ render, ...otherProps }: useRender.ComponentProps<"h2">) => useRender({
  defaultTagName: "h2",
  render,
  props: mergeProps<"h2">({
    className: cn(
      "-mt-1.5",
      "mb-1",
      "text-xl",
      "font-semibold",
    ),
  }, otherProps),
});

export default DialogTitle;
