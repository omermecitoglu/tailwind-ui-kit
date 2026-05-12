import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../../utils/cn";

const DialogBackdrop = ({ render, ...otherProps }: useRender.ComponentProps<"div">) => useRender({
  defaultTagName: "div",
  render,
  props: mergeProps<"div">({
    className: cn(
      "fixed",
      "inset-0",
      "min-h-dvh",
      "bg-black",
      "opacity-20",
      "transition-all",
      "duration-150",
      "data-[ending-style]:opacity-0",
      "data-[starting-style]:opacity-0",
      "dark:opacity-70",
      "supports-[-webkit-touch-callout:none]:absolute",
    ),
  }, otherProps),
});

export default DialogBackdrop;
