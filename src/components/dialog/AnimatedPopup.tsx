import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../../utils/cn";

const AnimatedPopup = ({ render, className, ...otherProps }: useRender.ComponentProps<"div">) => useRender({
  defaultTagName: "div",
  render,
  props: mergeProps<"div">({
    className: cn(
      "fixed",
      "top-[calc(50%+1.25rem*var(--nested-dialogs))]",
      "left-1/2",
      "-mt-8",
      "w-96",
      "max-w-[calc(100vw-3rem)]",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "scale-[calc(1-0.1*var(--nested-dialogs))]",
      "transition-all",
      "duration-150",
      "data-[ending-style]:scale-90",
      "data-[ending-style]:opacity-0",
      "data-[nested-dialog-open]:after:absolute",
      "data-[nested-dialog-open]:after:inset-0",
      "data-[nested-dialog-open]:after:rounded-[inherit]",
      "data-[nested-dialog-open]:after:bg-black/5",
      "data-[starting-style]:scale-90",
      "data-[starting-style]:opacity-0",
      className,
    ),
  }, otherProps),
});

export default AnimatedPopup;
