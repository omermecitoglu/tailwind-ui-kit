import { useRender } from "@base-ui/react/use-render";

const JustDiv = ({
  render,
  ...otherProps
}: useRender.ComponentProps<"div">) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: otherProps,
  });
};

export default JustDiv;
