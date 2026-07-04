import { useRender } from "@base-ui/react/use-render";

const JustAnchor = ({
  render,
  ...props
}: useRender.ComponentProps<"a">) => {
  return useRender({
    defaultTagName: "a",
    render,
    props,
  });
};

export default JustAnchor;
