import { useRender } from "@base-ui/react/use-render";

const JustInput = ({
  render,
  ...otherProps
}: useRender.ComponentProps<"input">) => {
  return useRender({
    defaultTagName: "input",
    render,
    props: otherProps,
  });
};

export default JustInput;
