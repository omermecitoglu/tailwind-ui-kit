import { useRender } from "@base-ui/react/use-render";

const JustButton = ({
  render,
  ...props
}: useRender.ComponentProps<"button">) => {
  return useRender({
    defaultTagName: "button",
    render,
    props,
  });
};

export default JustButton;
