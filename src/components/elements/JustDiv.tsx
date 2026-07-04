import { useRender } from "@base-ui/react/use-render";

const JustDiv = ({
  render,
  ...props
}: useRender.ComponentProps<"div">) => {
  return useRender({
    defaultTagName: "div",
    render,
    props,
  });
};

export default JustDiv;
