import { useRender } from "@base-ui/react/use-render";

const JustInput = ({
  render,
  ...props
}: useRender.ComponentProps<"input">) => {
  return useRender({
    defaultTagName: "input",
    render,
    props,
  });
};

export default JustInput;
